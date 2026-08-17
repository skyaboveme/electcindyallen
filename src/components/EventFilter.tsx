import { useMemo, useState } from "react";

export type CampaignEvent = {
  id: string;
  title: string;
  date: string;
  endDate?: string;
  location: string;
  category: "election" | "campaign" | "deadline";
  body: string;
};

const filters = [
  { id: "all", label: "All" },
  { id: "election", label: "Election" },
  { id: "deadline", label: "Deadlines" },
  { id: "campaign", label: "Campaign" },
] as const;

function formatRange(date: string, endDate?: string) {
  const start = new Date(date);
  const formatter = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    timeZone: "America/Chicago",
  });
  if (!endDate) return formatter.format(start);
  return `${formatter.format(start)} – ${formatter.format(new Date(endDate))}`;
}

export default function EventFilter({ events }: { events: CampaignEvent[] }) {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");

  const visible = useMemo(
    () => events.filter((event) => filter === "all" || event.category === filter),
    [events, filter],
  );

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Filter events">
        {filters.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={filter === item.id}
            className={`rounded-sm border px-3 py-1.5 text-sm ${
              filter === item.id
                ? "border-gold bg-navy text-gold-soft"
                : "border-navy/15 bg-white text-ink hover:border-gold"
            }`}
            onClick={() => setFilter(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <ol className="space-y-4">
        {visible.length === 0 ? (
          <li className="rounded-sm border border-dashed border-navy/20 p-6 text-muted">
            No events in this category yet. Add Markdown files in src/content/events to publish campaign dates.
          </li>
        ) : (
          visible.map((event) => (
            <li
              key={event.id}
              className="parchment rounded-sm border border-gold/30 p-5"
            >
              <p className="font-mark text-[10px] text-red">{event.category}</p>
              <h3 className="font-display mt-1 text-2xl">{event.title}</h3>
              <p className="mt-1 text-sm text-muted">
                {formatRange(event.date, event.endDate)} · {event.location}
              </p>
              <p className="mt-3 text-[1.05rem] leading-relaxed">{event.body}</p>
            </li>
          ))
        )}
      </ol>
    </div>
  );
}
