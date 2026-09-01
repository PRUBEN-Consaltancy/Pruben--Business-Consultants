import { useState } from "react";
import { Send } from "lucide-react";
import { registrationTypes, whatsappLink } from "@/data/site";

export function QuoteForm() {
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    type: "",
    business: "",
    sector: "",
    details: "",
  });

  const update = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.type || !form.business) {
      setError("Please fill in your name, phone, service type and proposed business name.");
      return;
    }
    setError("");
    const message = [
      "*New request via pruben website*",
      `Name: ${form.name}`,
      `Phone/WhatsApp: ${form.phone}`,
      `Service: ${form.type}`,
      `Proposed business name: ${form.business}`,
      form.sector ? `Sector: ${form.sector}` : "",
      form.details ? `Details: ${form.details}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(message), "_blank", "noreferrer");
  };

  const field =
    "w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/25";
  const label = "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground";

  return (
    <form
      onSubmit={submit}
      className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-7"
      aria-label="Request a quote"
    >
      <h3 className="font-display text-xl font-extrabold text-primary">Request a quote</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Your details are pre-filled into a WhatsApp message — just tap send.
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">
            Full name *
          </label>
          <input id="name" className={field} value={form.name} onChange={update("name")} />
        </div>
        <div>
          <label className={label} htmlFor="phone">
            Phone / WhatsApp *
          </label>
          <input id="phone" className={field} value={form.phone} onChange={update("phone")} />
        </div>
        <div className="sm:col-span-2">
          <label className={label} htmlFor="type">
            Service needed *
          </label>
          <select id="type" className={field} value={form.type} onChange={update("type")}>
            <option value="">Select a service…</option>
            {registrationTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={label} htmlFor="business">
            Proposed business name *
          </label>
          <input id="business" className={field} value={form.business} onChange={update("business")} />
        </div>
        <div>
          <label className={label} htmlFor="sector">
            Business sector
          </label>
          <input id="sector" className={field} value={form.sector} onChange={update("sector")} />
        </div>
        <div className="sm:col-span-2">
          <label className={label} htmlFor="details">
            Additional details
          </label>
          <textarea id="details" rows={3} className={field} value={form.details} onChange={update("details")} />
        </div>
      </div>

      {error && (
        <p role="alert" className="mt-4 rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-foreground shadow-card transition-transform hover:-translate-y-0.5"
      >
        <Send className="size-4" aria-hidden="true" />
        Send request via WhatsApp
      </button>
    </form>
  );
}
