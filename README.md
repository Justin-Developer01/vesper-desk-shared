# vesper-desk-shared

Shared design tokens, TypeScript types, and API contract stubs for
[`vesper-desk`](https://github.com/Justin-Developer01/vesper-desk) (the
Electron app) and
[`vesper-desk-web`](https://github.com/Justin-Developer01/vesper-desk-web)
(the marketing site), per the Vesper Desk & WebApp Coordination Plan
(2026-09-24).

## Why this exists

The two products are built in separate repos, sometimes by separate Claude
Code sessions with no way to message each other directly. Rather than
relaying decisions by hand, both sessions should read from this package as
the single source of truth for anything they need to agree on: API request
shapes, the user/session object, and (eventually) design tokens.

## What's actually here right now

**Types only — no live backend, no wired-up consumers yet.** As of this
writing:
- Neither `vesper-desk` nor `vesper-desk-web` has an API layer at all.
- `vesper-desk`'s only auth is Twitch OAuth; there's no first-party Vesper
  Desk account system.
- `src/tokens.ts` mirrors `vesper-desk-web`'s current palette only — the
  Electron app's palette is different and unreconciled today. See the
  comment in that file before treating these as *the* brand colors.

Treat everything in `src/types/` as a draft to build against, not a
description of something that exists.

## Using this from another repo

Until this is published, consume it as a git dependency:

```json
{
  "dependencies": {
    "@vesper-desk/shared": "github:Justin-Developer01/vesper-desk-shared"
  }
}
```

Then `import { webTokens, type User, type LatestRelease } from "@vesper-desk/shared"`.

## Open decisions (not resolved here)

- Auth provider (Clerk vs. Auth0 vs. Supabase vs. custom JWT).
- Whether/how to reconcile the marketing site's and the app's currently
  different color palettes.
- Real endpoint paths and hosting for the API this package's types describe.
