import { useState, type FormEvent } from "react";
import { volunteerRoles } from "../data/site";

type Props = {
  campaignEmail?: string;
};

const storageKey = "cindy-allen-volunteer";

export default function VolunteerForm({ campaignEmail }: Props) {
  const [status, setStatus] = useState<"idle" | "saving" | "done" | "error">("idle");
  const [roles, setRoles] = useState<string[]>([]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("saving");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const payload = { ...data, roles: roles.join(", ") };

    try {
      window.localStorage.setItem(storageKey, JSON.stringify({ ...payload, at: new Date().toISOString() }));

      if (campaignEmail) {
        const subject = encodeURIComponent("Volunteer for Cindy Allen");
        const body = encodeURIComponent(
          Object.entries(payload)
            .map(([key, value]) => `${key}: ${value}`)
            .join("\n"),
        );
        window.location.href = `mailto:${campaignEmail}?subject=${subject}&body=${body}`;
      }

      form.reset();
      setRoles([]);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  function toggleRole(id: string) {
    setRoles((current) =>
      current.includes(id) ? current.filter((role) => role !== id) : [...current, id],
    );
  }

  if (status === "done") {
    return (
      <div className="parchment rounded-sm border border-gold/40 p-6">
        <p className="font-mark text-[10px] text-red">Received</p>
        <h3 className="font-display mt-2 text-2xl">Thank you for standing with Judge Allen.</h3>
        <p className="mt-3 text-muted">
          Your volunteer card is saved in this browser
          {campaignEmail
            ? ` and opened an email to ${campaignEmail}.`
            : "."}
        </p>
        <button
          type="button"
          className="mt-5 rounded-sm bg-navy px-4 py-2 text-sm font-semibold text-cream"
          onClick={() => setStatus("idle")}
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-sm">
          Full name
          <input
            required
            name="name"
            className="mt-1 w-full rounded-sm border border-navy/20 bg-white px-3 py-2"
          />
        </label>
        <label className="block text-sm">
          Email
          <input
            required
            type="email"
            name="email"
            className="mt-1 w-full rounded-sm border border-navy/20 bg-white px-3 py-2"
          />
        </label>
        <label className="block text-sm">
          Phone
          <input name="phone" className="mt-1 w-full rounded-sm border border-navy/20 bg-white px-3 py-2" />
        </label>
        <label className="block text-sm">
          ZIP code
          <input
            required
            name="zip"
            inputMode="numeric"
            className="mt-1 w-full rounded-sm border border-navy/20 bg-white px-3 py-2"
          />
        </label>
      </div>

      <fieldset>
        <legend className="text-sm font-semibold">How can you help?</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {volunteerRoles.map((role) => (
            <label
              key={role.id}
              className={`flex cursor-pointer items-center gap-2 rounded-sm border px-3 py-2 text-sm ${
                roles.includes(role.id) ? "border-gold bg-gold/10" : "border-navy/15 bg-white"
              }`}
            >
              <input
                type="checkbox"
                checked={roles.includes(role.id)}
                onChange={() => toggleRole(role.id)}
              />
              {role.label}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="block text-sm">
        Notes for the campaign
        <textarea
          name="message"
          rows={4}
          className="mt-1 w-full rounded-sm border border-navy/20 bg-white px-3 py-2"
        />
      </label>

      {status === "error" ? (
        <p className="text-sm text-red">Something went wrong. Please try again or use the contact page.</p>
      ) : null}

      <button
        type="submit"
        disabled={status === "saving"}
        className="rounded-sm bg-red px-5 py-3 font-semibold text-cream hover:bg-red-deep disabled:opacity-70"
      >
        {status === "saving" ? "Sending…" : "Join the campaign"}
      </button>
    </form>
  );
}
