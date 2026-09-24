# BIFF x NESPRESSO Hospitality — Guest Web Guide

A static, index-based hospitality guide for BIFF x NESPRESSO guests, covering
four sections reachable from the homepage:

- **Meal** (`meal.html`) — Paradise Hotel dining, optional local restaurants,
  B2B dining (3 categories, 13 items)
- **Experiences** (`experiences.html`) — Busan landmarks & activities, plus
  the exclusive concierge map (2 categories, 9 items + 2 map pages)
- **Transportation** (`transportation.html`) — step-by-step guide to setting
  up and using Uber for Business in Korea (3 sections, 8 steps)
- **Map** (`map.html`) — every Meal and Experience location on one interactive
  map; tap a pin or a listing to open it directly in Google Maps (22 locations)

No build step, no subfolders — every file (HTML, CSS, JS, images, fonts)
sits in one single folder, so it uploads cleanly even file-by-file through
GitHub's web "Upload files" button.

## Structure (all files in one folder — no subfolders)

```
index.html                 landing page — guide index (Meal / Experiences / Transportation / Map)
meal.html                  Meal section
experiences.html           Experiences section (Busan attractions + concierge map)
transportation.html        Transportation section (Uber for Business guide)
map.html                   All-locations interactive map
places-data.js             lat/lng + Google place_id for all 22 locations
map.js                     renders the Leaflet map + location lists from places-data.js
leaflet.js / leaflet.css    self-hosted Leaflet map library (no external CDN)
leaflet-*.png               Leaflet's own UI icons (zoom control, etc.)
style.css                  shared design system + @font-face declarations
main.js                    scroll-spy for the on-page index
*.jpg / *.png               logos + photos + concierge map pages + Uber screenshots
ICONESSODisplay-*.woff2     brand display typeface (headlines)
ICONESSOText-*.woff2        brand text typeface (body, labels, nav)
```

Typography uses the brand's own ICONESSO font files, and the map uses a
self-hosted copy of Leaflet — both loaded locally via relative paths, no
external CDN, so the whole site works even if a viewer's network blocks
third-party script hosts. The map's tile imagery itself (the background map
graphics) still loads from OpenStreetMap's servers at view time, same as any
embedded map.

Every page's `<head>` also carries Open Graph / Twitter Card meta tags
(`og:title`, `og:image`, etc.) for link previews in KakaoTalk, Slack, iMessage,
and similar apps. These are hardcoded to:

```
https://gdmc-global.github.io/BIFFxNespresso_Hospitality/
```

**If the repository name or owner ever changes, update the `og:url` and
`og:image` values at the top of each HTML file to match** — otherwise link
previews will fail to load the image even though the site itself works fine.

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

- Each item lives in its own `<article class="card">` (Meal / Experiences) or
  `<article class="step-card">` (Transportation) block — copy an existing one
  to add a new item.
- Photos are referenced by filename only (e.g. `src="opt1-geumsu-bokguk.jpg"`).
  Add a new photo to this same folder and point a card's `src` at it.
- **To add or edit a map location**: open `places-data.js` and add/edit a line
  in the `PLACES` array — `name`, `sub` (optional subtitle), `address`, `lat`,
  `lng`, and `placeId` (the Google Place ID). The map and both location lists
  on `map.html` render automatically from this one file.
- Colors, type, and spacing are all defined once as CSS variables at the top
  of `style.css` (`:root { ... }`).
- To force KakaoTalk/Slack to refresh a stale link preview after editing,
  use the [Kakao sharing debugger](https://developers.kakao.com/tool/debugger/sharing).
