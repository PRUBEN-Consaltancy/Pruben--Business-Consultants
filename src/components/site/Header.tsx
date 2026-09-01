import { useState } from "react";
import { MessageCircle, Menu, X, MapPin } from "lucide-react";
import { contact, whatsappLink } from "@/data/site";
import { cn } from "@/lib/utils";

const nav = [
  { href: "#services", label: "Registration" },
  { href: "#advisory", label: "Advisory" },
  { href: "#process", label: "Process" },
  { href: "#why", label: "Why register" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-primary-deep text-primary-foreground">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-1.5 text-[11px] tracking-wide">
          <p className="flex items-center gap-1.5 opacity-80">
            <MapPin className="size-3" aria-hidden="true" />
            {contact.office}
          </p>
          <p className="hidden opacity-80 sm:block">{contact.whatsappDisplay}</p>
        </div>
      </div>

      <div className="border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-lg bg-gradient-navy text-sm font-bold text-primary-foreground">
              PR
            </span>
            <span className="leading-tight">
              <span className="block font-display text-base font-extrabold tracking-[0.18em] text-primary">
                PRUBEN
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Business Consultants
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={whatsappLink("Hello PRUBEN, I would like to register my business.")}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-bold text-accent-foreground shadow-card transition-transform hover:-translate-y-0.5 sm:inline-flex"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              WhatsApp us
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="grid size-10 place-items-center rounded-lg border border-border text-primary lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        <div className={cn("overflow-hidden border-t border-border lg:hidden", open ? "block" : "hidden")}>
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm font-medium text-foreground last:border-0"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
