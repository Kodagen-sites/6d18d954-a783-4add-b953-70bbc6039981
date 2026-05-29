// Landing-mode nav: anchor-scroll only — no separate routes for these
// sections. The home page renders #platform, #capabilities, #process,
// #contact in-page; the header links jump the viewport there.
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#platform", label: "Platform" },
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/#process", label: "Process" },
  { href: "/#contact", label: "Contact" },
] as const;
