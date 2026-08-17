import { useEffect, useState } from "react";

type Item = { href: string; label: string };

export default function MobileNav({
  pathname,
  items,
}: {
  pathname: string;
  items: Item[];
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="rounded-sm border border-gold/40 px-3 py-2 text-sm text-gold-soft"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>
      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-[4.6rem] z-50 border-b border-gold/25 bg-navy px-4 py-4 shadow-2xl"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {items.map((item) => {
              const hrefPath = item.href.replace(/\/$/, "") || "/";
              const active = pathname === hrefPath;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`rounded-sm px-3 py-3 ${
                    active ? "bg-gold/15 text-gold-soft" : "text-cream"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
          <a
            href="/get-involved"
            className="mt-3 block rounded-sm bg-red py-3 text-center font-semibold text-cream"
          >
            Volunteer
          </a>
        </div>
      ) : null}
    </div>
  );
}
