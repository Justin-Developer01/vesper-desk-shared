/**
 * Design tokens, mirrored from app/globals.css in vesper-desk-web (the only
 * side with a defined, live palette as of 2026-09-24).
 *
 * KNOWN GAP: the Electron app's current CSS custom properties (src/index.css
 * in vesper-desk, branch claude/vesper-desk-parity-repair-95cgju) use a
 * different, unreconciled palette — --accent: #7ec8d8, --surface: #141018,
 * --text: #f4ece2, --muted: #b5a89a, --page-bg: #0c0a10 — plus dim/light
 * theme variants. This file does NOT merge the two; reconciling "Vesper Desk"
 * brand colors across both products is an open design decision, not
 * something resolved here. Until that happens, treat `webTokens` below as
 * the marketing site's palette only, not a shared brand definition.
 */
export const webTokens = {
  colorInk: "#07090d",
  colorInkRaised: "#10151c",
  colorPaper: "#eef3f8",
  colorMuted: "#b7c4d2",
  colorFaint: "#8ea0b3",
  colorGlow: "#8ecfff",
  colorLine: "rgba(186, 214, 238, 0.16)",
} as const;

export type WebTokens = typeof webTokens;
