# Arslan Ahmed — Portfolio (Pure HTML/CSS/JS)

A static portfolio site — no build step, no framework, no backend.

## Sections

Home → Features → Portfolio → Resume → Pricing → Contact (nav links jump to
each with `#id` anchors).

## Before you deploy — checklist

1. **Profile photo** — in `index.html`, find `id="heroPhotoFrame"` and
   replace its content with `<img src="assets/profile.jpg" alt="Arslan Ahmed" />`
   once you've added a real photo to `assets/`. Until then it shows your
   initials in a circle — nothing breaks.

2. **Project screenshots** — add real screenshots to `assets/projects/`
   (e.g. `nexbuy.png`, `zaptro.png`...) matching the `image` path in each
   project object inside `script.js`. Missing images fall back to a
   colored placeholder automatically.

3. **Project GitHub links** — in `script.js`, update each project's `github`
   field to point at that project's real repository (currently all point
   at your main GitHub profile as a placeholder).

4. **Resume** — put your actual resume PDF in the project root as
   `resume.pdf` (same name the site links to). If you skip this, the
   Download/preview buttons will 404.

5. **Skill percentages** — in `script.js`, the `SKILLS` array drives the
   resume skill bars. Edit the `level` numbers to taste.

6. **Pricing** — edit the three `.pricing-card` blocks in `index.html`
   directly (prices, features) or remove the whole `<section class="pricing">`
   if you'd rather not list freelance rates.

7. **Contact form** — currently opens the visitor's email client with a
   pre-filled message (no backend, no data storage). To actually collect
   submissions, sign up at a form service like Formspree, point the form's
   `action` at your endpoint, and remove the JS handler in `setupContactForm()`.

## Run locally

Just open `index.html` in a browser — no server needed. Or, for live-reload
while editing, use the VS Code "Live Server" extension.

## Deploy to Netlify

**Option A — drag and drop (fastest):**
1. Go to https://app.netlify.com/drop
2. Drag the whole `portfolio-html` folder onto the page
3. Netlify gives you a live URL immediately (e.g. `random-name.netlify.app`)
4. You can rename the site (Site settings → Change site name) for a nicer URL

**Option B — connect to GitHub (auto-redeploys on every push):**
1. Push this folder to a GitHub repository
2. Go to https://app.netlify.com → "Add new site" → "Import an existing project"
3. Pick your repo, leave build command empty, set publish directory to `/`
4. Deploy — Netlify rebuilds automatically every time you push

## Editing projects

All project data lives in one place — the `PROJECTS` array at the top of
`script.js`. Add, remove, or edit objects there; the grid re-renders
automatically, no HTML editing needed.
