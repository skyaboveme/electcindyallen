import { useMemo, useState } from "react";

const lookup = "https://www.bastropcounty.gov/page/co.maps";

export default function PrecinctFinder() {
  const [query, setQuery] = useState("");
  const hint = useMemo(() => {
    const zip = query.replace(/\D/g, "").slice(0, 5);
    if (zip === "78602") {
      return "ZIP 78602 covers much of the City of Bastrop. Precinct 1 includes central Bastrop County and parts of the city — confirm your exact address on the county map, because city limits and JP lines are not the same.";
    }
    if (zip.length === 5) {
      return "ZIP codes cross precinct lines in Bastrop County. Use the official GIS address lookup to see whether you are in Justice of the Peace Precinct 1.";
    }
    return "Enter a five-digit ZIP for a local hint, then confirm on the county precinct map.";
  }, [query]);

  return (
    <div className="rounded-sm border border-gold/40 bg-white p-5">
      <p className="font-mark text-[10px] text-red">Precinct 1 check</p>
      <h3 className="font-display mt-1 text-2xl">Are you in JP Precinct 1?</h3>
      <p className="mt-2 text-sm text-muted">
        Commissioner, constable, and justice of the peace precincts share the same four county maps. Your voting precinct number at the polls is a different number.
      </p>
      <label className="mt-4 block text-sm">
        ZIP code
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          inputMode="numeric"
          maxLength={5}
          placeholder="78602"
          className="mt-1 w-full rounded-sm border border-navy/20 px-3 py-2"
        />
      </label>
      <p className="mt-3 text-sm leading-relaxed">{hint}</p>
      <a
        href={lookup}
        className="mt-4 inline-block rounded-sm bg-navy px-4 py-2 text-sm font-semibold text-cream"
      >
        Open county precinct maps
      </a>
    </div>
  );
}
