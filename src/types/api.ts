/**
 * API contract for vesper-desk-web's read-mostly endpoints.
 * `LatestRelease`/`ReleaseAsset` mirror vesper-desk-backend's live
 * `GET /v1/download/latest/info` response shape (see
 * vesper-desk-backend/src/routes/download.ts) — keep the two in sync.
 * `ChangelogEntry` and `PricingPlan` remain draft stubs for endpoints that
 * don't exist yet.
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
