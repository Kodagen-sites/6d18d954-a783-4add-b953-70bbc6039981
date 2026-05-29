/**
 * Generation manifest (Phase Gate verifies completeness):
 *   archetype: G                       g_render_mode: scrub-cinematic
 *   style: S11-arch-warm-light         color_variant: graphite-rose (LOCKED)
 *   voice_family: V6 Systems           card_variant: CV7 bento
 *   cta_variant: CTA1 magnetic         header_variant: pill-floating
 *   footer_variant: FT3 compact
 *   hero_overlay: HO2 left-split       hero_text: H3 gradient
 *   hero_entrance: E2 word-split rise  loading_variant: L1
 *   scene_variant: V1 custom-graphite-facility
 *   motion_variant: G.M2 gentle-push (paired with scrub-cinematic)
 *   hero_treatment: scrubbed-frames    glass_material: frosted-hairline
 *   motion_vocabulary: ease-cinematic
 *   background_treatment: layered-photography-parallax
 *   card_material_variant: image-reveal-mask
 *   motion_bg_pattern: gradient-mesh-flow   motion_bg_density: subtle
 *   narrative_shape: object-reveal     camera_vocabulary: forward-dolly
 *   composition_pattern: right-third   subject_position: mid
 *   lighting_temperature: studio-controlled (warm afternoon)
 *   industry_video_tone: tech-deliberate-warm
 *   industry: tech-saas (enterprise robotics AI)
 *   auth_strategy: none                customer_management_enabled: false
 *   bookingVariant: n/a                cartVariant: n/a
 *   buildMode: landing                 assetMode: live-generate
 *
 * Pre-locked by operator (override pickers):
 *   archetype = G, gRenderMode = scrub-cinematic
 *   colorPalette = graphite-rose [#FAF4F2,#F2D0CC,#857173,#322425]
 *   typographyPair = outfit-figtree [title: Outfit, body: Figtree]
 */
import manifest from "./asset-manifest.json";
import framesManifest from "./frames-manifest.json";

const images: Record<string, string> = (manifest as any)?.images ?? {};
const videos: Record<string, string> = (manifest as any)?.videos ?? {};

export const siteConfig = {
  templateId: "robotics-ai-v1",
  industry: "tech-saas",
  headerVariant: "pill-floating",
  voiceFamily: "V6",
  manifest: { archetype: "G", style: "S11-warm-light", colorVariant: "graphite-rose" },

  company: {
    name: "Zenith Robotics AI",
    legalName: "Zenith Robotics AI, Inc.",
    tagline: "The autonomy platform for industrial operations.",
    description:
      "Zenith is the unified runtime for enterprise robotics — orchestration, vision, and operational intelligence on one platform, deployed in weeks, not quarters.",
    email: "hello@zenithrobotics.ai",
    phone: "+1 (415) 555-0142",
    location: "1 Mission Street, San Francisco, CA 94105",
    locality: "San Francisco",
    region: "CA",
    postalCode: "94105",
    country: "US",
    foundedYear: 2024,
    timezone: "America/Los_Angeles",
  },

  hero: {
    eyebrow: "Enterprise Autonomy Platform",
    h1Left: "Production-grade",
    h1Right: "robotics, on day one.",
    body:
      "One control plane for fleet orchestration, vision intelligence, and operational telemetry. Deployed across plants, warehouses, and labs without rewriting your stack.",
    primaryCta: { label: "Book a demo", href: "#contact" },
    secondaryCta: { label: "See the platform", href: "#platform" },
  },

  cta: {
    primary: "Book a demo",
    primaryHref: "#contact",
    secondary: "See the platform",
    secondaryHref: "#platform",
  },

  valueProp: {
    eyebrow: "Why Zenith",
    headline: "One platform.",
    headlineAccent: "Every robot.",
    body:
      "Industrial autonomy used to mean siloed stacks, brittle integrations, and 18-month rollouts. Zenith collapses orchestration, perception, and ops intelligence into one runtime — so your robots ship value the week they arrive on the floor.",
    pillars: [
      {
        eyebrow: "01",
        title: "Heterogeneous by design",
        body:
          "Run mixed fleets from any OEM under one policy plane. ROS2, MQTT, and OPC-UA included.",
      },
      {
        eyebrow: "02",
        title: "Vision that operates",
        body:
          "Edge-tuned perception models that ship inference and ground-truth back to your data team in the same flow.",
      },
      {
        eyebrow: "03",
        title: "Telemetry, not theater",
        body:
          "Operational intelligence wired to throughput, MTBF, and unit economics — not vanity dashboards.",
      },
    ],
  },

  servicesHeading: "Capabilities",
  servicesEyebrow: "Platform",
  servicesIntro:
    "Four modules. One runtime. Built to be deployed independently and wired together when you're ready.",
  services: [
    {
      slug: "orchestration",
      name: "Fleet Orchestration",
      description:
        "Mission planning, task allocation, and live policy enforcement across heterogeneous robot fleets.",
      bullets: [
        "Heterogeneous fleet support — ROS2, MQTT, OPC-UA",
        "Mission queue with priority preemption",
        "Audit log for every policy decision",
      ],
    },
    {
      slug: "vision",
      name: "Vision Intelligence",
      description:
        "Edge-tuned perception models with closed-loop ground-truth pipelines back to your training infrastructure.",
      bullets: [
        "Onboard inference, sub-30ms latency",
        "Annotation review pipeline included",
        "Hot-swap models without redeploy",
      ],
    },
    {
      slug: "operations",
      name: "Operational Intelligence",
      description:
        "Real-time KPI telemetry — throughput, MTBF, OEE — wired to the same eventbus your control plane runs on.",
      bullets: [
        "Prometheus-compatible metrics export",
        "Anomaly detection with operator review",
        "Cost-per-unit tracking out of the box",
      ],
    },
    {
      slug: "deployment",
      name: "Enterprise Deployment",
      description:
        "Air-gap-ready installs, role-scoped access, and a 90-day SLA from contract to first production run.",
      bullets: [
        "On-prem, hybrid, or fully managed",
        "SOC2 Type II, ISO 27001 ready",
        "Dedicated deployment engineer",
      ],
    },
  ],

  features: [
    {
      title: "Run any robot. From any OEM.",
      description:
        "Zenith abstracts the hardware layer so your team writes one policy and runs it across every robot on your floor — no per-vendor integration tax.",
    },
    { title: "Air-gap ready", description: "On-prem or hybrid deploys, fully audited." },
    { title: "Open by contract", description: "Documented APIs and event schemas. No proprietary lock-in." },
    { title: "Ship in 90 days", description: "From contract to live production fleet. Or we work for free." },
  ],

  whyUs: {
    heading: "Why Zenith",
    items: [
      {
        title: "Heterogeneous from the start",
        description:
          "Built so your KUKA, Fanuc, ABB, and Boston Dynamics robots all live under one orchestration policy. No translator middleware to maintain.",
      },
      {
        title: "Vision and orchestration aren't separate vendors",
        description:
          "Most stacks bolt perception on top of orchestration. Zenith runs them in the same eventbus, which is why model rollouts are minutes, not weeks.",
      },
      {
        title: "Telemetry tied to the P&L",
        description:
          "Your CFO sees cost-per-unit. Your VP Ops sees throughput. Your fleet engineer sees MTBF. Same source of truth.",
      },
      {
        title: "Compliance-first",
        description:
          "SOC2 Type II, ISO 27001, on-prem and air-gap installs. Audit trails on every policy decision.",
      },
    ],
  },

  process: {
    eyebrow: "How deployments work",
    headline: "Forty-five days from contract to production.",
    body:
      "Most robotics rollouts die in integration. Zenith's deployment model is opinionated by design — short discovery, hardware-in-the-loop staging, then a phased production cutover.",
    steps: [
      {
        n: "01",
        title: "Discovery — week 1",
        description:
          "Workshop on your fleet, your control plane, and your data flows. We leave with a written integration plan.",
      },
      {
        n: "02",
        title: "Staging — weeks 2-4",
        description:
          "Hardware-in-the-loop dry run on Zenith-hosted twin infra. Your team can break things safely.",
      },
      {
        n: "03",
        title: "Cutover — weeks 5-6",
        description:
          "Phased production handover. A single robot first, then a cell, then the floor.",
      },
      {
        n: "04",
        title: "Operate — week 7+",
        description:
          "You own day-two operations. Your dedicated deployment engineer stays on for 90 days of overlap.",
      },
    ],
  },

  stats: {
    heading: "Built for production scale.",
    items: [
      { value: 99.97, suffix: "%", label: "Mission delivery rate", decimals: 2 },
      { value: 45, suffix: " days", label: "Median time-to-production" },
      { value: 12, suffix: "+", label: "Robot families supported" },
      { value: 22, suffix: " ms", label: "Median inference latency" },
    ],
  },

  testimonials: {
    heading: "What deployment leaders tell us.",
    items: [
      {
        quote:
          "We replaced four custom integrations with Zenith's orchestration layer and recovered eight engineering weeks in the first quarter.",
        author: "Director of Robotics",
        role: "Tier-1 Automotive OEM",
      },
      {
        quote:
          "The vision pipeline closed the loop between our edge inference and our annotation team. That alone justified the contract.",
        author: "VP Engineering",
        role: "Mid-market 3PL operator",
      },
      {
        quote:
          "Forty-three days from contract to first production run. We've never seen a robotics rollout move at that cadence.",
        author: "Head of Industrial Engineering",
        role: "Consumer goods manufacturer",
      },
    ],
  },

  contact: {
    heading: "Book a Zenith demo.",
    body:
      "Tell us what you're running today and what's blocking your next deployment. A platform engineer responds within one business day.",
    eyebrow: "Sales — qualified leads",
    formCta: "Book my demo",
    sideTitle: "Direct lines",
    sideItems: [
      { label: "Sales", value: "sales@zenithrobotics.ai" },
      { label: "Engineering", value: "engineering@zenithrobotics.ai" },
      { label: "San Francisco HQ", value: "1 Mission Street, SF 94105" },
      { label: "Hours", value: "Mon–Fri, 8am–6pm PT" },
    ],
  },

  trustBar: [
    "SOC 2 Type II",
    "ISO 27001",
    "GDPR aligned",
    "Air-gap ready",
    "ROS2 native",
  ],

  manifestoEyebrow: "Engineered restraint",
  manifestoLine: "Autonomy that earns its place on your floor.",
  manifestoBody:
    "Robotics doesn't fail because the hardware is wrong. It fails because the software around it is brittle, opaque, and impossible to operate. Zenith is the answer to that — built by engineers who've shipped fleets at scale.",

  scrollHero: {
    archetype: "G",
    styleId: "S11-warm-light",
    assetMode: "live-generate" as const,
    imageUrl: "",
    // Set after gen:upload-frames writes the frame count to frames-manifest.json
    frameCount: ((framesManifest as any)?.frameCount ?? 0) as number,
    scrollDistance: 6,
    frameUrlTemplate: ((framesManifest as any)?.frameUrlTemplate ?? "/frames/frame-{NNNN}.jpg") as string,
  },

  // Section background images (Unsplash CDN via gen:unsplash) populated at build time
  imageManifest: { images, videos },

  socials: {
    linkedin: "https://www.linkedin.com/company/zenith-robotics-ai",
    x: "https://x.com/zenithrobotics",
    youtube: "https://www.youtube.com/@zenithrobotics",
  },

  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],

  seo: {
    siteUrl: "https://zenithrobotics.ai",
    siteName: "Zenith Robotics AI",
    locale: "en_US",
    defaultTitle: "Zenith Robotics AI — Enterprise Autonomy Platform",
    defaultDescription:
      "The unified runtime for enterprise robotics. Orchestration, vision, and operational intelligence on one platform — deployed in weeks.",
    twitter: "@zenithrobotics",
    ogImage: images["og-image"] ?? "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
