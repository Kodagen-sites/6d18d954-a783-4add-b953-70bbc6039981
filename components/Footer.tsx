import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { SocialLinks } from "@/components/social-icons";

// FT3 — Compact strip footer. Single horizontal band, brand left,
// legal middle, socials right. Warm-light palette.
export default function Footer() {
  return (
    <footer className="relative border-t border-graphite/10 bg-bg">
      <div className="container-wide py-10 md:py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1">
            <Link
              href="/"
              className="font-display font-bold tracking-[0.14em] uppercase text-sm text-graphite"
            >
              {siteConfig.company.name}
            </Link>
            <p className="text-[12px] text-graphite/55 max-w-md">
              {siteConfig.company.tagline}
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {siteConfig.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-mono text-[11px] uppercase tracking-[0.22em] text-graphite/60 hover:text-graphite transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`mailto:${siteConfig.company.email}`}
              className="font-mono text-[11px] uppercase tracking-[0.22em] text-graphite/60 hover:text-graphite transition-colors"
            >
              Contact
            </a>
          </nav>

          <SocialLinks socials={siteConfig.socials} className="text-graphite/60" />
        </div>

        <div className="mt-8 pt-6 border-t border-graphite/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-graphite/50">
            © {new Date().getFullYear()} {siteConfig.company.legalName}. All rights reserved.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-graphite/50">
            {siteConfig.company.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
