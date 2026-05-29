"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/content/site-config";
import ScrollCanvas from "@/components/ScrollCanvas";
import ServiceCard, { BENTO_LAYOUT } from "@/components/ServiceCard";
import {
  FadeUp,
  StaggerChildren,
  TextReveal,
  MagneticButton,
  NumberCounter,
  Marquee,
  ImageRevealMask,
  StickyScrollSection,
  FilmGrain,
} from "@/components/motion";

const SERVICE_IMAGES: Record<string, string> = siteConfig.imageManifest.images as Record<string, string>;
const HERO_FALLBACK = SERVICE_IMAGES["section-about"] ?? "";
const OG_IMAGE = SERVICE_IMAGES["og-image"] ?? "";
const SECTION_CTA = SERVICE_IMAGES["section-cta"] ?? "";

export default function Home() {
  return (
    <div className="relative bg-bg text-graphite">
      <FilmGrain opacity={0.025} />

      <Hero />
      <TrustBar />
      <PlatformSection />
      <CapabilitiesSection />
      <ManifestoSection />
      <ProcessSection />
      <StatsSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// HERO — ScrollCanvas scrub (G mode 2) with HO2 left-split overlay
// ─────────────────────────────────────────────────────────────
function Hero() {
  const fc = siteConfig.scrollHero.frameCount ?? 0;
  const pattern = siteConfig.scrollHero.frameUrlTemplate ?? "/frames/frame-{NNNN}.jpg";

  if (fc > 0) {
    return (
      <ScrollCanvas
        frameCount={fc}
        pattern={pattern}
        scrollDistance={siteConfig.scrollHero.scrollDistance}
        loadingLabel="Calibrating"
        loadingVariant="L1"
      >
        <HeroOverlay />
      </ScrollCanvas>
    );
  }

  // Asset-pipeline fallback (Unsplash still) — used ONLY while Veo
  // frames are still being processed in the very first build.
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-bg">
      {HERO_FALLBACK && (
        <img
          src={HERO_FALLBACK}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-90"
          style={{ filter: "saturate(0.9)" }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-transparent" />
      <HeroOverlay />
    </section>
  );
}

function HeroOverlay() {
  return (
    <div className="relative h-full w-full">
      {/* HO2 — left split: text in left third, video subject in right two-thirds */}
      <div className="absolute inset-0 flex items-center">
        <div className="container-wide grid grid-cols-12 gap-6 items-center w-full">
          <div className="col-span-12 md:col-span-7 lg:col-span-6">
            <FadeUp>
              <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-accent mb-5">
                {siteConfig.hero.eyebrow}
              </p>
            </FadeUp>

            <TextReveal
              as="h1"
              className="font-display text-[44px] sm:text-[56px] md:text-[68px] lg:text-[84px] xl:text-[96px] font-light leading-[0.95] tracking-[-0.03em] text-graphite"
              stagger={0.05}
            >
              {`${siteConfig.hero.h1Left} ${siteConfig.hero.h1Right}`}
            </TextReveal>

            <FadeUp delay={0.45}>
              <p className="mt-6 max-w-md text-[15.5px] md:text-base text-graphite/72 leading-relaxed">
                {siteConfig.hero.body}
              </p>
            </FadeUp>

            <FadeUp delay={0.6}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <MagneticButton
                  as="a"
                  href={siteConfig.hero.primaryCta.href}
                  className="min-h-[48px] inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-graphite text-bg font-display text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  {siteConfig.hero.primaryCta.label}
                </MagneticButton>
                <Link
                  href={siteConfig.hero.secondaryCta.href}
                  className="min-h-[48px] inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-graphite/20 bg-bg/40 backdrop-blur-sm text-graphite font-display text-sm font-medium hover:bg-bg/60 transition-colors"
                >
                  {siteConfig.hero.secondaryCta.label}
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>

      {/* Soft left-edge scrim that anchors the H1 reading column over the video */}
      <div className="absolute inset-y-0 left-0 w-1/2 md:w-2/5 bg-gradient-to-r from-bg/95 via-bg/55 to-transparent pointer-events-none" />

      {/* Corner brand mark */}
      <div className="absolute top-24 right-6 md:right-10 hidden md:flex items-center gap-2 pointer-events-auto">
        <span className="font-mono text-[10px] uppercase tracking-[0.36em] text-graphite/55">
          San Francisco / 2024
        </span>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-auto">
        <span className="font-mono text-[10px] uppercase tracking-[0.36em] text-graphite/55">
          Scroll
        </span>
        <span className="h-7 w-px bg-graphite/30 animate-pulse" />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// TRUST BAR — Marquee of certifications
// ─────────────────────────────────────────────────────────────
function TrustBar() {
  return (
    <section className="relative border-y border-graphite/8 bg-rose/30">
      <div className="py-7">
        <Marquee speed={45} gap="gap-16">
          {[...siteConfig.trustBar, ...siteConfig.trustBar].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="font-mono text-[11px] uppercase tracking-[0.32em] text-graphite/70 whitespace-nowrap"
            >
              {item}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// PLATFORM — value prop with 3 pillars + product feature image
// ─────────────────────────────────────────────────────────────
function PlatformSection() {
  const platformImage = SERVICE_IMAGES["section-about"] ?? OG_IMAGE;
  const vp = siteConfig.valueProp;

  return (
    <section id="platform" className="section-pad relative">
      <div className="container-wide">
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left — copy + pillars */}
          <div className="col-span-12 md:col-span-7">
            <FadeUp>
              <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-accent mb-5">
                {vp.eyebrow}
              </p>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.02] tracking-tight">
                {vp.headline} <em className="font-serif italic text-accent not-italic">{vp.headlineAccent}</em>
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="mt-6 max-w-xl text-base md:text-[17px] text-graphite/72 leading-relaxed">
                {vp.body}
              </p>
            </FadeUp>

            <StaggerChildren staggerDelay={0.08} initialDelay={0.25} className="mt-10 grid md:grid-cols-1 lg:grid-cols-3 gap-6">
              {vp.pillars.map((p) => (
                <div key={p.eyebrow} className="border-t border-graphite/15 pt-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-accent">
                    {p.eyebrow}
                  </span>
                  <h3 className="font-display text-lg mt-2 text-graphite leading-snug">{p.title}</h3>
                  <p className="mt-2 text-[13px] text-graphite/65 leading-relaxed">{p.body}</p>
                </div>
              ))}
            </StaggerChildren>
          </div>

          {/* Right — feature image */}
          <div className="col-span-12 md:col-span-5">
            <ImageRevealMask
              src={platformImage}
              alt="The Zenith platform in operation."
              aspectClass="aspect-[4/5]"
              className="rounded-2xl border border-graphite/12"
            />
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.28em] text-graphite/45">
              fig. 01 · runtime composition
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// CAPABILITIES — bento services grid (CV7)
// ─────────────────────────────────────────────────────────────
function CapabilitiesSection() {
  return (
    <section id="capabilities" className="section-pad relative border-t border-graphite/10 bg-rose/15">
      <div className="container-wide">
        <div className="mb-12 md:mb-16 max-w-3xl">
          <FadeUp>
            <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-accent mb-5">
              {siteConfig.servicesEyebrow}
            </p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.04] tracking-tight">
              {siteConfig.servicesHeading}
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="mt-5 text-base md:text-[17px] text-graphite/68 leading-relaxed">
              {siteConfig.servicesIntro}
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-[280px_280px] gap-5 auto-rows-fr">
          {siteConfig.services.map((svc, i) => (
            <ServiceCard
              key={svc.slug}
              service={svc}
              index={i}
              size={BENTO_LAYOUT[i] ?? "small"}
              number={`0${i + 1}`}
              imageSrc={SERVICE_IMAGES[`service-${svc.slug}`]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// MANIFESTO — Oversized type (T7) with rose backdrop
// ─────────────────────────────────────────────────────────────
function ManifestoSection() {
  return (
    <section className="relative section-pad bg-graphite text-bg overflow-hidden">
      <div className="container-wide">
        <FadeUp>
          <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-rose mb-6">
            {siteConfig.manifestoEyebrow}
          </p>
        </FadeUp>
        <TextReveal
          as="h2"
          className="font-display text-[44px] sm:text-[68px] md:text-[100px] lg:text-[128px] font-light leading-[0.92] tracking-[-0.04em]"
          stagger={0.05}
        >
          {siteConfig.manifestoLine}
        </TextReveal>
        <FadeUp delay={0.35}>
          <p className="mt-10 max-w-xl text-base md:text-[17px] text-bg/70 leading-relaxed">
            {siteConfig.manifestoBody}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// PROCESS — Sticky-scroll 4-step deployment timeline
// ─────────────────────────────────────────────────────────────
function ProcessSection() {
  const proc = siteConfig.process;
  return (
    <section id="process" className="section-pad relative border-t border-graphite/10">
      <div className="container-wide">
        <StickyScrollSection
          sticky={
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-accent mb-5">
                {proc.eyebrow}
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-light leading-[1.04] tracking-tight max-w-md">
                {proc.headline}
              </h2>
              <p className="mt-5 max-w-md text-[15px] text-graphite/65 leading-relaxed">
                {proc.body}
              </p>
            </div>
          }
          scrolling={proc.steps.map((step, i) => (
            <FadeUp key={step.n} delay={i * 0.05}>
              <article className="border-t border-graphite/14 pt-7 pb-3">
                <div className="flex items-baseline gap-5">
                  <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-accent">
                    {step.n}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-graphite leading-tight">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-3 ml-[3.3rem] text-[15px] text-graphite/68 leading-relaxed max-w-prose">
                  {step.description}
                </p>
              </article>
            </FadeUp>
          ))}
        />
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// STATS — NumberCounter row
// ─────────────────────────────────────────────────────────────
function StatsSection() {
  return (
    <section className="relative section-pad border-t border-graphite/10 bg-rose/20">
      <div className="container-wide">
        <FadeUp>
          <h2 className="font-display text-3xl md:text-5xl font-light leading-[1.04] tracking-tight mb-12 max-w-2xl">
            {siteConfig.stats.heading}
          </h2>
        </FadeUp>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          {siteConfig.stats.items.map((s, i) => (
            <FadeUp key={s.label} delay={i * 0.08}>
              <div className="border-t border-graphite/20 pt-5">
                <div className="font-display text-5xl md:text-6xl font-light text-graphite tabular-nums leading-none">
                  <NumberCounter to={s.value} decimals={"decimals" in s ? (s as { decimals: number }).decimals : 0} suffix={s.suffix} />
                </div>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.26em] text-graphite/65">
                  {s.label}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// TESTIMONIALS — TS1 column quotes
// ─────────────────────────────────────────────────────────────
function TestimonialsSection() {
  return (
    <section className="relative section-pad border-t border-graphite/10">
      <div className="container-wide">
        <FadeUp>
          <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-accent mb-5">
            Field reports
          </p>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="font-display text-3xl md:text-5xl font-light leading-[1.04] tracking-tight max-w-3xl mb-14">
            {siteConfig.testimonials.heading}
          </h2>
        </FadeUp>
        <StaggerChildren staggerDelay={0.1} className="grid md:grid-cols-3 gap-6 md:gap-8">
          {siteConfig.testimonials.items.map((t, i) => (
            <article
              key={i}
              className="rounded-2xl border border-graphite/14 bg-white/45 backdrop-blur-sm p-7 flex flex-col"
            >
              <blockquote className="font-display text-lg md:text-xl font-light leading-snug text-graphite flex-1">
                “{t.quote}”
              </blockquote>
              <div className="mt-6 pt-5 border-t border-graphite/14">
                <p className="font-display text-sm text-graphite">{t.author}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-graphite/55 mt-1">
                  {t.role}
                </p>
              </div>
            </article>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// CONTACT — book a demo form (sales-qualified lead)
// ─────────────────────────────────────────────────────────────
function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "");
    const company = String(fd.get("company") ?? "");
    const email = String(fd.get("email") ?? "");
    const role = String(fd.get("role") ?? "");
    const fleet = String(fd.get("fleet") ?? "");
    const note = String(fd.get("note") ?? "");
    const subject = encodeURIComponent(`Demo request — ${company || name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company}\nRole: ${role}\nEmail: ${email}\n\nFleet today:\n${fleet}\n\nWhat's blocking your next deployment:\n${note}\n`
    );
    window.location.href = `mailto:${siteConfig.company.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="relative section-pad border-t border-graphite/10 overflow-hidden"
    >
      {SECTION_CTA && (
        <div className="absolute inset-0 -z-0 opacity-15">
          <img src={SECTION_CTA} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/60 to-bg" />
        </div>
      )}
      <div className="container-wide grid grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="col-span-12 lg:col-span-5">
          <FadeUp>
            <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-accent mb-5">
              {siteConfig.contact.eyebrow}
            </p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.02] tracking-tight">
              {siteConfig.contact.heading}
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="mt-6 text-base md:text-[17px] text-graphite/68 leading-relaxed max-w-md">
              {siteConfig.contact.body}
            </p>
          </FadeUp>

          <FadeUp delay={0.25}>
            <div className="mt-10 space-y-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-accent">
                {siteConfig.contact.sideTitle}
              </p>
              <ul className="space-y-3">
                {siteConfig.contact.sideItems.map((item) => (
                  <li key={item.label} className="flex items-baseline gap-5">
                    <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-graphite/50 w-28 flex-shrink-0">
                      {item.label}
                    </span>
                    <span className="font-display text-sm text-graphite">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>

        <div className="col-span-12 lg:col-span-7">
          <FadeUp delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-graphite/12 bg-white/55 backdrop-blur-sm p-7 md:p-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field label="Name" name="name" required />
                <Field label="Company" name="company" required />
                <Field label="Work email" name="email" type="email" required />
                <Field label="Role" name="role" placeholder="VP Operations / Robotics Lead" />
              </div>
              <Field
                label="Fleet today"
                name="fleet"
                as="textarea"
                rows={2}
                placeholder="e.g. 6 KUKA arms + 12 Fetch AMRs across two cells"
                wide
              />
              <Field
                label="What's blocking your next deployment?"
                name="note"
                as="textarea"
                rows={3}
                placeholder="Where things are getting stuck."
                wide
              />

              <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-graphite/55 max-w-xs">
                  A platform engineer replies within one business day.
                </p>
                <button
                  type="submit"
                  className="min-h-[48px] px-7 py-3.5 rounded-full bg-graphite text-bg font-display text-sm font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center"
                >
                  {submitted ? "Opening your mail client…" : siteConfig.contact.formCta}
                </button>
              </div>
            </form>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Field — animated input/textarea (custom for graphite-rose theme)
// ─────────────────────────────────────────────────────────────
function Field({
  label,
  name,
  type = "text",
  as = "input",
  rows = 2,
  placeholder,
  required,
  wide,
}: {
  label: string;
  name: string;
  type?: string;
  as?: "input" | "textarea";
  rows?: number;
  placeholder?: string;
  required?: boolean;
  wide?: boolean;
}) {
  const base =
    "block w-full bg-transparent border-b border-graphite/22 px-0 py-3 text-graphite font-display text-[15px] placeholder:text-graphite/35 focus:border-graphite focus:outline-none transition-colors";
  const id = `field-${name}`;
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={wide ? "md:col-span-2 mt-5" : ""}
    >
      <label
        htmlFor={id}
        className="block font-mono text-[10px] uppercase tracking-[0.3em] text-graphite/50 mb-1"
      >
        {label}
        {required ? <span className="text-accent ml-1">*</span> : null}
      </label>
      {as === "textarea" ? (
        <textarea
          id={id}
          name={name}
          rows={rows}
          required={required}
          placeholder={placeholder}
          className={`${base} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={base}
        />
      )}
    </motion.div>
  );
}
