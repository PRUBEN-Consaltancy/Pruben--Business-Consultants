import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Building2,
  Check,
  Clock,
  FileCheck2,
  Landmark,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import {
  advisoryServices,
  benefits,
  complianceServices,
  contact,
  coreServices,
  images,
  stats,
  steps,
  whatsappLink,
} from "@/data/site";
import { QuoteForm } from "./QuoteForm";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
      <Sparkles className="size-3" aria-hidden="true" />
      {children}
    </p>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-navy text-primary-foreground">
      <div className="absolute inset-0 opacity-25 [background:radial-gradient(60%_50%_at_80%_10%,white,transparent)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em]">
            <ShieldCheck className="size-3.5" aria-hidden="true" />
            Registrar General · MBRS · MRA compliant
          </p>
          <h1 className="mt-5 font-display text-4xl leading-[1.05] font-extrabold sm:text-5xl lg:text-6xl">
            Register your business in Malawi — in 7 working days.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            PRUBEN Business Consultants turn your idea into a legally registered business, and then keep you
            compliant, fundable and tender-ready — company registration, TPIN, TCC, PPDA, proposals and
            professional writing under one roof.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={whatsappLink("Hello PRUBEN, I want to register my business. Please assist.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-foreground shadow-elevated transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Register via WhatsApp
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Explore our services
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl font-extrabold text-accent">{s.value}</dt>
                <dd className="mt-0.5 text-[11px] uppercase tracking-wider text-primary-foreground/70">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <img
            src={images.registrationServices}
            alt="PRUBEN Business Consultants business registration services in Blantyre, Malawi"
            className="w-full rounded-2xl border border-primary-foreground/15 shadow-elevated"
            loading="eager"
          />
          <div className="absolute -bottom-5 left-4 right-4 rounded-xl bg-card/95 p-4 shadow-elevated backdrop-blur sm:left-6 sm:right-auto sm:w-64">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
              <Clock className="size-4 text-accent" aria-hidden="true" />
              Maximum 7 working days
            </p>
            <p className="mt-1.5 text-xs text-muted-foreground">
              Name search, documents, submission and certificate collection handled for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustStrip() {
  const items = [
    { icon: FileCheck2, label: "Company & NGO registration" },
    { icon: Landmark, label: "TPIN · TCC · PPDA" },
    { icon: Banknote, label: "Funding & grant proposals" },
    { icon: Users, label: "Corporate training" },
  ];
  return (
    <section className="border-b border-border bg-secondary/60">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, label }) => (
          <p key={label} className="flex items-center gap-2.5 text-sm font-semibold text-secondary-foreground">
            <Icon className="size-4 text-primary" aria-hidden="true" />
            {label}
          </p>
        ))}
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-20">
      <div className="max-w-2xl">
        <Eyebrow>Core services</Eyebrow>
        <h2 className="mt-4 font-display text-3xl font-extrabold text-primary sm:text-4xl">
          Registration for every business structure
        </h2>
        <p className="mt-3 text-muted-foreground">
          From sole traders to public companies — we advise the right structure, prepare every document and
          submit on your behalf.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {coreServices.map((s) => (
          <article
            key={s.title}
            className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-transform hover:-translate-y-1"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={s.image}
                alt={s.alt}
                loading="lazy"
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded-md bg-primary-deep/85 px-2 py-1 text-[11px] font-bold text-primary-foreground">
                {s.n}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-display text-lg font-bold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          </article>
        ))}

        <article className="flex flex-col justify-between rounded-2xl bg-gradient-navy p-6 text-primary-foreground shadow-elevated">
          <div>
            <Building2 className="size-6 text-accent" aria-hidden="true" />
            <h3 className="mt-4 font-display text-lg font-bold">Not sure which structure fits?</h3>
            <p className="mt-2 text-sm text-primary-foreground/80">
              Tell us what your business does and we will recommend the structure that protects you and opens
              the most doors.
            </p>
          </div>
          <a
            href={whatsappLink("Hello PRUBEN, please advise which registration structure suits my business.")}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground"
          >
            Get free advice
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </article>
      </div>

      <div className="mt-14 grid gap-8 rounded-3xl border border-border bg-card p-6 shadow-card lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
        <img
          src={images.tpin}
          alt="TPIN registration with Malawi Revenue Authority"
          loading="lazy"
          className="h-full w-full rounded-2xl object-cover"
        />
        <div>
          <Eyebrow>Tax & compliance</Eyebrow>
          <h3 className="mt-4 font-display text-2xl font-extrabold text-primary">
            Everything you need after the certificate
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            A certificate alone will not win you a tender or a bank account. We complete the compliance chain.
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {complianceServices.map((c) => (
              <li key={c.title} className="rounded-xl bg-secondary/60 p-4">
                <p className="flex items-center gap-2 font-semibold text-secondary-foreground">
                  <BadgeCheck className="size-4 text-primary" aria-hidden="true" />
                  {c.title}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{c.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Advisory() {
  return (
    <section id="advisory" className="bg-secondary/50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <Eyebrow>Beyond registration</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-primary sm:text-4xl">
            Consultancy that helps you win the next project
          </h2>
          <p className="mt-3 text-muted-foreground">
            Proposals, funding documents, research support, professional CVs and corporate training — delivered
            by consultants who work with Malawian businesses and NGOs every week.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {advisoryServices.map((s, i) => (
            <article
              key={s.title}
              className={`overflow-hidden rounded-2xl border border-border bg-card shadow-card ${
                i === 0 ? "md:col-span-2 md:grid md:grid-cols-2" : ""
              }`}
            >
              <img
                src={s.image}
                alt={s.alt}
                loading="lazy"
                className={i === 0 ? "h-full w-full object-cover" : "aspect-[16/10] w-full object-cover"}
              />
              <div className="flex flex-col justify-center p-6">
                <h3 className="font-display text-lg font-bold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <ul className="mt-4 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="size-4 text-accent" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div>
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-primary sm:text-4xl">
            Five steps from idea to certificate
          </h2>
          <ol className="mt-8 space-y-4">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-4 rounded-xl border border-border bg-card p-4 shadow-card">
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-gradient-navy text-xs font-bold text-primary-foreground">
                  {s.n}
                </span>
                <span>
                  <span className="block font-semibold text-foreground">{s.title}</span>
                  <span className="mt-0.5 block text-sm text-muted-foreground">{s.body}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
        <figure className="overflow-hidden rounded-2xl border border-border shadow-elevated">
          <img
            src={images.afterYouSubmit}
            alt="After you submit: name reserved, documents processed, certificate issued"
            loading="lazy"
            className="w-full object-cover"
          />
        </figure>
      </div>
    </section>
  );
}

export function WhyRegister() {
  return (
    <section id="why" className="bg-gradient-navy py-20 text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full bg-primary-foreground/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em]">
              The benefits
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
              Your business name isn’t protected until it’s registered
            </h2>
            <p className="mt-3 max-w-xl text-primary-foreground/80">
              Operating informally caps your growth — and anyone can legally take the name you built. Registration
              unlocks banking, funding, tenders and credibility.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {benefits.map((b) => (
                <li key={b.title} className="rounded-xl bg-primary-foreground/10 p-4">
                  <p className="flex items-center gap-2 font-semibold">
                    <Check className="size-4 text-accent" aria-hidden="true" />
                    {b.title}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-primary-foreground/75">{b.body}</p>
                </li>
              ))}
            </ul>
          </div>
          <figure className="overflow-hidden rounded-2xl border border-primary-foreground/15 shadow-elevated">
            <img
              src={images.structureMatters}
              alt="Not all business registrations are the same — structure matters"
              loading="lazy"
              className="w-full object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid gap-10 rounded-3xl border border-border bg-card p-6 shadow-card lg:grid-cols-[0.55fr_1fr] lg:p-10">
        <img
          src={images.portrait}
          alt="PRUBEN Business Consultants senior consultant"
          loading="lazy"
          className="aspect-square w-full rounded-2xl object-cover"
        />
        <div>
          <Eyebrow>About PRUBEN</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-primary">
            Blantyre-based consultants for Malawian entrepreneurs
          </h2>
          <p className="mt-4 text-muted-foreground">
            From our office at Galaxy House in Blantyre CBD, we have helped hundreds of traders, companies and
            NGOs formalise their operations, meet MRA requirements and put together the documents that unlock
            funding and contracts. You speak to a consultant directly — no queues, no guesswork.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "Fully compliant", body: "Registrar General, MBRS and MRA processes." },
              { icon: Clock, title: "Fast turnaround", body: "Maximum 7 working days for registration." },
              { icon: Users, title: "Hands-on support", body: "One consultant follows your file end to end." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-xl bg-secondary/60 p-4">
                <Icon className="size-5 text-primary" aria-hidden="true" />
                <p className="mt-2 font-semibold text-secondary-foreground">{title}</p>
                <p className="mt-1 text-xs text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const details = [
    { icon: MessageCircle, label: "WhatsApp (fastest)", value: contact.whatsappDisplay, href: whatsappLink("Hello PRUBEN, I would like to enquire about your services.") },
    { icon: Phone, label: "Call us", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
    { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: MapPin, label: "Office", value: contact.office },
  ];

  return (
    <section id="contact" className="bg-secondary/50 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Eyebrow>Get started</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-primary sm:text-4xl">
            Talk to a consultant today
          </h2>
          <p className="mt-3 text-muted-foreground">
            Limited slots each week — we can secure your business name the same day you contact us.
          </p>
          <ul className="mt-8 space-y-3">
            {details.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="rounded-xl border border-border bg-card p-4 shadow-card">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <Icon className="size-4 text-primary" aria-hidden="true" />
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="mt-1 block font-semibold text-primary hover:underline"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="mt-1 font-semibold text-foreground">{value}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
        <QuoteForm />
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary-deep py-12 text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-3">
        <div>
          <p className="font-display text-base font-extrabold tracking-[0.18em]">PRUBEN</p>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary-foreground/60">
            Business Consultants
          </p>
          <p className="mt-4 max-w-xs text-sm text-primary-foreground/75">
            Fast, reliable and professional business registration and consultancy services in Malawi.
          </p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-primary-foreground/60">Services</p>
          <ul className="mt-3 space-y-1.5 text-sm text-primary-foreground/80">
            {["Sole proprietorship", "Partnership", "NGO registration", "Private Ltd / PLC", "TPIN · TCC · PPDA", "Proposals & funding"].map(
              (s) => (
                <li key={s}>{s}</li>
              ),
            )}
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-primary-foreground/60">Contact</p>
          <ul className="mt-3 space-y-1.5 text-sm text-primary-foreground/80">
            <li>{contact.whatsappDisplay}</li>
            <li>{contact.phone}</li>
            <li>{contact.email}</li>
            <li>{contact.office}</li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-4 text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} PRUBEN Business Consultants · Blantyre, Malawi
      </p>
    </footer>
  );
}

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink("Hello PRUBEN, I would like to register my business.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-accent-foreground shadow-elevated transition-transform hover:-translate-y-0.5"
    >
      <MessageCircle className="size-4" aria-hidden="true" />
      WhatsApp
    </a>
  );
}
