import { useEffect, useMemo, useState } from "react";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Countdown({ isoDate }: { isoDate: string }) {
  const target = useMemo(() => new Date(isoDate).getTime(), [isoDate]);
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  if (now === null) {
    return (
      <div className="grid grid-cols-4 gap-2 text-center" aria-hidden="true">
        {["Days", "Hours", "Mins", "Secs"].map((label) => (
          <div key={label} className="rounded-sm border border-gold/30 bg-navy/40 px-2 py-3">
            <div className="font-display text-2xl text-gold-soft md:text-3xl">--</div>
            <div className="font-mark mt-1 text-[9px] text-cream/70">{label}</div>
          </div>
        ))}
      </div>
    );
  }

  const diff = target - now;

  if (diff <= 0) {
    const endOfDay = target + 12 * 60 * 60 * 1000;
    return (
      <p className="rounded-sm border border-gold/40 bg-navy/50 px-4 py-3 text-center font-display text-xl text-gold-soft">
        {now < endOfDay ? "Election Day is here. Polls close at 7 p.m." : "Thank you for voting."}
      </p>
    );
  }

  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const mins = Math.floor((diff % 3_600_000) / 60_000);
  const secs = Math.floor((diff % 60_000) / 1000);

  const units = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Mins", value: mins },
    { label: "Secs", value: secs },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 text-center" role="timer" aria-live="polite">
      {units.map((unit) => (
        <div key={unit.label} className="rounded-sm border border-gold/30 bg-navy/40 px-2 py-3">
          <div className="font-display text-2xl text-gold-soft md:text-3xl">
            {unit.label === "Days" ? unit.value : pad(unit.value)}
          </div>
          <div className="font-mark mt-1 text-[9px] text-cream/70">{unit.label}</div>
        </div>
      ))}
    </div>
  );
}
