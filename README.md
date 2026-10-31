# Nikhil Patare — Build • Learn • Explore

Personal portfolio at **https://nikhilpatare.web.app**. Plain HTML, CSS and JavaScript (no build step), laid out like the Studio Z site.

## Folder structure

```
nikhilpatare-site/
├── firebase.json        Firebase Hosting config (serves ./public)
├── .firebaserc          Firebase project id: nikhilpatare
├── README.md
└── public/
    ├── index.html       Page: profile card, 6 section cards, welcome text
    ├── 404.html
    ├── css/style.css    Layout, card shapes, hover and entrance animations
    ├── js/data.js       ← EDIT THIS: content for each section panel
    ├── js/app.js        Panel open/close, #hash links, scroll reveal
    └── assets/          logo-full.svg, logo-compact.svg, favicon.svg, brand-logo.png (original)
```

## Preview locally in VS Code

1. Install the **Live Server** extension.
2. Right-click `public/index.html` → **Open with Live Server**.

(Or from a terminal: `npx serve public`.)

## Deploy to Firebase

```bash
npm install -g firebase-tools
firebase login
cd nikhilpatare-site
firebase deploy --only hosting
```

The project id in `.firebaserc` is `nikhilpatare`, which gives you `nikhilpatare.web.app`.
If the project doesn't exist yet, create it with that id in the Firebase console
(Build → Hosting → Get started), or run `firebase projects:create nikhilpatare`.
If that id is taken, pick another and update `.firebaserc` — the `.web.app` address follows the project id.

Preview before going live:

```bash
firebase hosting:channel:deploy preview
```

## Editing content

- **Section panels** (Projects, AI Lab, Learning, Reading, Design, Notes): edit `public/js/data.js`. Entries marked "Starter" are placeholders.
- **Cards on the home page**: edit the `<a class="card ...">` blocks in `public/index.html`.
- **Colors**: the `.card--blue/red/green/dark/amber/violet` rules in `public/css/style.css`.
- **Social links**: the footer in `public/index.html`.

## Notes

- Section links are shareable: `https://nikhilpatare.web.app/#projects`, `#ailab`, `#learning`, `#reading`, `#design`, `#notes`.
- Customer data: don't publish raw Detaillo screenshots, they show real customer names, phone numbers and vehicle numbers. Use blurred or dummy-data screenshots if you add images.
