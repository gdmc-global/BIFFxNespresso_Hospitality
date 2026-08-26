# BIFF x NESPRESSO Hospitality — Guest Web Guide

A static, index-based hospitality guide for BIFF x NESPRESSO guests, split into two
programs guests select from the homepage:

- **Meal** (`meal.html`) — hosted meals, optional local restaurants, B2B dining
- **Optional Program** (`optional-program.html`) — BIFF experiences, coordinated
  festival programs, Busan tours, and the concierge service

No build step, no subfolders — every file (HTML, CSS, JS, images) sits in one
single folder, so it uploads cleanly even file-by-file through GitHub's web
"Upload files" button.

## Structure (all files in one folder — no subfolders)

```
index.html                 landing page — program selector
meal.html                  Meal section (3 categories, 13 items)
optional-program.html      Optional Program section (4 categories, 16 items)
style.css                  shared design system
main.js                    scroll-spy for the on-page index
*.jpg / *.png               logos + photos (optimized, ~4 MB total)
```

## Publish to GitHub Pages

**Option A — Upload files on github.com (simplest)**

1. Create a new repository (or open your existing one).
2. Click **Add file → Upload files**.
3. Select *all* the files in this folder at once (Ctrl/Cmd-click to multi-select,
   or drag the whole selection in) and drop them in — since there are no
   subfolders, every file lands in the right place no matter how you upload it.
4. Commit the files.
5. Go to **Settings → Pages → Source → Deploy from a branch**, choose `main`
   and `/ (root)`, then Save.
6. Your site is live at `https://<username>.github.io/<repo-name>/` within a
   minute or two.

**Option B — git command line**

```bash
cd this-folder
git init
git add .
git commit -m "BIFF x Nespresso hospitality site"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

## Editing content later

- Each item lives in its own `<article class="card">` block in `meal.html` /
  `optional-program.html` — copy an existing card to add a new item.
- Photos are referenced by filename only (e.g. `src="opt1-geumsu-bokguk.jpg"`).
  Add a new photo to this same folder and point a card's `src` at it.
- Colors, type, and spacing are all defined once as CSS variables at the top
  of `style.css` (`:root { ... }`).
