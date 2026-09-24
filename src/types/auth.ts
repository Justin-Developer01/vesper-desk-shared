/**
 * Draft shapes for a future shared-account system. Nothing here is wired to
 * a live backend yet — as of 2026-09-24, vesper-desk's only auth is Twitch
 * OAuth (implicit grant, token in localStorage), and there is no first-party
 * Vesper Desk account system on either side. These types exist so both
 * projects can build against one definition once that work starts, per the
 * "Shared auth/accounts" section of the coordination plan.
 */

export type AuthProvider = "clerk" | "auth0" | "supabase" | "custom-jwt";

export interface User {
  id: string;
  email: string;
  displayName: string | null;
  createdAt: string;
}

export type LicenseTier = "free" | "pro";

export interface LicenseStatus {
  tier: LicenseTier;
  seatsUsed: number;
  seatsAllowed: number;
  renewsAt: string | null;
}

export interface AuthSession {
  user: User;
  accessToken: string;
  refreshToken: string;
  expiresAt: string;
}

/**
 * Handshake payload for "sign up on the site, land logged-in in the app" —
 * the custom protocol handler flow described in the coordination plan
 * (e.g. vesperdesk://auth?token=...). Shape TBD pending the auth provider
 * decision; placeholder so both sides can agree on a field name up front.
 */
export interface DesktopAuthHandoff {
  token: string;
  issuedAt: string;
}
