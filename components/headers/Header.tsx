"use client";

// 3-line router for the ONE chosen header variant (pill-floating).
// Do NOT import the other 9 variants — keeps the bundle minimal.
import HeaderPillFloating from "./HeaderPillFloating";
export default function Header() {
  return <HeaderPillFloating />;
}
