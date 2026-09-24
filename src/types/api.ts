/**
 * Draft API contract for the read-mostly endpoints vesper-desk-web needs.
 * As of 2026-09-24 neither project has a backend at all — these types are a
 * starting point to build the real API against, not a description of
 * something that exists yet. Version the real endpoints under /v1/ per the
 * coordination plan once they're implemented.
 */

export interface ReleaseAsset {
  platform: "windows";
  kind: "installer" | "portable";
  url: string;
  sizeBytes: number;
}

export interface LatestRelease {
  version: string;
  publishedAt: string;
  notesUrl: string;
  assets: ReleaseAsset[];
}

export interface ChangelogEntry {
  version: string;
  publishedAt: string;
  summary: string;
  bodyMarkdown: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  priceUsdCents: number;
  interval: "month" | "year" | "one-time";
  features: string[];
}
