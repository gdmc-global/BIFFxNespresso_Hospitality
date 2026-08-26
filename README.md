[README.md](https://github.com/user-attachments/files/31444411/README.md)
# BIFF x NESPRESSO Hospitality — Guest Web Guide

A static, index-based hospitality guide for BIFF x NESPRESSO guests, split into two
programs guests select from the homepage:

- **Meal** (`meal.html`) — hosted meals, optional local restaurants, B2B dining
- **Optional Program** (`optional-program.html`) — BIFF experiences, coordinated
  festival programs, Busan tours, and the concierge service

No build step — plain HTML/CSS/JS, so it works directly on GitHub Pages.

## Structure

```
index.html                 landing page — program selector
meal.html                  Meal section (3 categories, 13 items)
optional-program.html      Optional Program section (4 categories, 16 items)
assets/css/style.css       shared design system
assets/js/main.js          scroll-spy for the on-page index
assets/img/                logos + photos (optimized, ~4 MB total)
```

## Publish to GitHub Pages

1. Create a new repository and push this folder's contents to the `main` branch
   (this folder itself should be the repo root, so `index.html` sits at the top level).

   ```bash
   git init
   git add .
   git commit -m "BIFF x Nespresso hospitality site"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. On GitHub: **Settings → Pages → Source → Deploy from a branch**, choose
   `main` and `/ (root)`, then Save.

3. Your site will be live at `https://<username>.github.io/<repo-name>/`
   within a minute or two.

## Editing content later

- Each item lives in its own `<article class="card">` block in `meal.html` /
  `optional-program.html` — copy an existing card to add a new item.
- Photos are referenced from `assets/img/meal/` and `assets/img/optional/`;
  drop a new image in and update the `src` path.
- Colors, type, and spacing are all defined once as CSS variables at the top
  of `assets/css/style.css` (`:root { ... }`).
