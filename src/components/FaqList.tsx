import { useState } from "react";

type Item = { q: string; a: string };

export default function FaqList({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-navy/10 border-y border-navy/10">
      {items.map((item, index) => {
        const expanded = open === index;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-start justify-between gap-4 py-4 text-left"
              aria-expanded={expanded}
              onClick={() => setOpen(expanded ? null : index)}
            >
              <span className="font-display text-xl">{item.q}</span>
              <span className="text-gold">{expanded ? "–" : "+"}</span>
            </button>
            {expanded ? <p className="pb-5 text-muted">{item.a}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
