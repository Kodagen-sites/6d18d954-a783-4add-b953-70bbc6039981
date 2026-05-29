"use client";

/**
 * CV7 — Bento card (graphite-rose, landing-mode)
 *
 * Adapts to a `size` prop. Renders as a div (no /services/[slug] route
 * exists in landing mode). Image backgrounds use Unsplash CDN URLs from
 * the asset manifest. Hover reveals the image; resting state is a warm
 * graphite gradient over rose tint.
 */

import { motion } from "framer-motion";

type Service = {
  slug: string;
  name: string;
  description: string;
  bullets?: readonly string[];
};

export type BentoSize = "feature" | "wide" | "tall" | "small";

type Props = {
  service: Service;
  index?: number;
  size?: BentoSize;
  imageSrc?: string;
  number?: string;
};

const SIZE_CLASSES: Record<BentoSize, string> = {
  feature: "md:col-span-2 md:row-span-2",
  wide: "md:col-span-2 md:row-span-1",
  tall: "md:col-span-1 md:row-span-2",
  small: "md:col-span-1 md:row-span-1",
};

export default function ServiceCard({
  service,
  size = "small",
  imageSrc,
  number,
  index = 0,
}: Props) {
  const isFeature = size === "feature";
  const isLarge = isFeature || size === "wide" || size === "tall";

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden rounded-2xl border border-graphite/12 bg-white/55 backdrop-blur-sm hover:border-graphite/24 transition-all min-h-[260px] flex flex-col ${SIZE_CLASSES[size]}`}
    >
      {imageSrc && (
        <div className="absolute inset-0 -z-0">
          <img
            src={imageSrc}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-70 transition-opacity duration-700"
            loading="lazy"
          />
          {/* Soft rose wash on rest state */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-rose/40 via-bg/60 to-bg group-hover:opacity-60 transition-opacity duration-700"
          />
        </div>
      )}

      {/* Bottom legibility scrim */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-bg via-bg/85 to-transparent pointer-events-none" />

      <div className={`relative z-10 h-full flex flex-col justify-between ${isFeature ? "p-7 md:p-9" : "p-6"}`}>
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] tracking-[0.32em] text-accent uppercase">
            {number ?? "Module"}
          </span>
          <span className="font-mono text-[10px] tracking-[0.24em] text-graphite/45 uppercase">
            {service.slug}
          </span>
        </div>

        <div>
          <h3
            className={`font-display text-graphite font-light leading-[1.05] tracking-tight ${
              isFeature ? "text-3xl md:text-4xl mb-3" : "text-xl md:text-2xl mb-2"
            }`}
          >
            {service.name}
          </h3>
          <p className={`text-graphite/68 leading-relaxed ${isFeature ? "text-base mb-4 max-w-md" : "text-sm mb-3"}`}>
            {service.description}
          </p>

          {isLarge && service.bullets && (
            <ul className="space-y-1.5 text-[12.5px] text-graphite/65">
              {service.bullets.slice(0, isFeature ? 3 : 2).map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span aria-hidden className="mt-[7px] h-1 w-1 rounded-full bg-accent flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export const BENTO_LAYOUT: BentoSize[] = ["feature", "wide", "tall", "small", "small", "wide"];
