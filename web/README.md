# DiscoverySide — Developer Handoff Notes

## Stack

| Layer | Tech | Version |
|---|---|---|
| Framework | React + Vite | React 19, Vite 7 |
| Language | TypeScript | 5.9 (strict) |
| Styling | Tailwind CSS v4 | via `@tailwindcss/vite` plugin |
| Auth | Supabase | `@supabase/supabase-js` |
| Build output | Single HTML | `vite-plugin-singlefile` |
| Hosting | Cloudflare Pages | Git-connected, auto-deploys on push |
| Repo | GitHub | https://github.com/monharvest/discoveryside |

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Create .env.local with real Supabase keys (see below)
# 3. Start dev server
npm run dev
# → http://localhost:5173
```

### `.env.local` (never commit this file — it's gitignored)

```
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

Get these from: **Supabase dashboard → Project Settings → API**

---

## Project Structure

```
src/
  components/
    Navbar.tsx        ← scroll-triggered search bar + auth state (sign in / register / avatar dropdown)
    Hero.tsx
    Destinations.tsx
    Experiences.tsx
    Stories.tsx
    Community.tsx
    Footer.tsx
    AuthModal.tsx     ← Sign In / Register modal (tabs, error display, success message)
  context/
    AuthContext.tsx   ← Global auth state: user, session, signIn, signUp, signOut
  lib/
    supabase.ts       ← Supabase client singleton
  utils/
    cn.ts             ← clsx + tailwind-merge helper
  vite-env.d.ts       ← Tells TypeScript about VITE_* env vars (do not delete)
  index.css           ← Tailwind import + smooth scroll + fadeSlideIn keyframe
  App.tsx
  main.tsx            ← Wrapped with <AuthProvider>
```

---

## Deployment (Cloudflare Pages)

### First-time setup
1. CF Pages → Create project → Connect to Git → select `monharvest/discoveryside`
2. Build settings:
   - **Framework preset**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: *(leave blank)*
3. Environment variables (add for both Production and Preview):
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Save and Deploy

### ⚠️ Watch out: blank page on CF Pages
**Cause**: Missing env vars → build crashes → empty deployment.  
**Fix**: Settings → Environment variables → add both `VITE_*` keys → retry deployment.

### Ongoing deploys
Push to `main` → CF Pages auto-builds and deploys. No manual steps needed.

---

## Tailwind CSS v4 — Important Differences

- Import is `@import "tailwindcss"` in `index.css` — **not** `@tailwind base/components/utilities`
- Config is handled by the `@tailwindcss/vite` plugin — **no** `tailwind.config.js` needed
- Custom CSS goes directly in `index.css` after the import

---

## Auth Flow

- **Sign Up**: email + password → Supabase sends confirmation email → user must confirm before signing in
- **Sign In**: email + password via `supabase.auth.signInWithPassword`
- **Auth state**: managed globally in `AuthContext.tsx`, consumed via `useAuth()` hook
- **Navbar**: shows avatar (first letter of email) + dropdown when logged in; Sign In / Register buttons when guest

---

## What's Hardcoded (future work)

Content in these components uses static arrays — no database yet:
- `Destinations.tsx` — destination cards with Unsplash image URLs
- `Experiences.tsx` — experience cards with Unsplash image URLs
- `Stories.tsx` — blog-style cards with Unsplash image URLs

**To replace images**: swap Unsplash URLs with Cloudflare R2 URLs (`https://pub-xxxx.r2.dev/image.jpg`)  
**To make content dynamic**: create a Supabase table or CF Worker API and fetch instead of using the static arrays

---

## Common Gotchas

| Issue | Cause | Fix |
|---|---|---|
| Blank page on CF Pages | Missing `VITE_*` env vars | Add keys in CF Pages → Settings → Env vars → redeploy |
| `Property 'env' does not exist on ImportMeta` | Missing type declaration | `src/vite-env.d.ts` must exist — do not delete |
| Auth not working locally | `.env.local` has placeholder keys | Replace with real keys from Supabase dashboard |
| Tailwind classes not applying | Wrong import syntax | Use `@import "tailwindcss"` not `@tailwind` directives |
| Navbar search not appearing | Scroll < 400px | It only shows after scrolling 400px down the page |
