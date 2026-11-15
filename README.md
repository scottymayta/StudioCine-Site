# StudioCine website

Astro static site for studiocinecreative.com.

## Edit content
- **Contact info, packages, prices, clients:** `src/data/site.js`
- **Demo reel:** paste a YouTube/Vimeo embed URL into `reelEmbed` in `src/data/site.js`
- **Photos:** add files to `public/images/`, then set `src: '/images/your-file.jpg'` in the page (placeholders are labeled)
- **Projects:** `src/pages/work.astro`
- **Pages:** `src/pages/*.astro`

## Run locally (optional)
```
npm install
npm run dev
```
Then open http://localhost:4321

## Deploy on Cloudflare (from GitHub)
1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Pick this GitHub repo.
3. Framework preset: **Astro**. Build command: `npm run build`. Output directory: `dist`.
4. Save and deploy. Every push to `main` redeploys automatically.
5. **Custom domains** tab → add `studiocinecreative.com` and `www.studiocinecreative.com`.
