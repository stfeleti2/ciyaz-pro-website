# Ciyaz Pro — Brand & Events

Two static pages with editable HTML/CSS/JS:

- `/`: full-screen editorial slideshow based on **Codrops Double Slideshow — Demo 2**.
- `/events/`: Wet & Wild event experience, with interactive ticket, online sold-out messaging, limited gate availability, event info, and November teaser.

## Local preview

Run a local static server from the project root:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000` then `http://localhost:8000/events/`.

No framework or build step is needed. Works on GitHub Pages with appropriate path configuration, Netlify or Cloudflare Pages.

## Source attribution

- The slideshow HTML/CSS/JS is **adapted directly** from [Codrops Double Slideshow Demo 2](https://github.com/codrops/DoubleSlideshow) (MIT). Original implementation is in `css/codrops-base.css` and `js/codrops-double-slideshow.js`; licence in `licenses/CODROPS-DoubleSlideshow-MIT.txt`.
- GSAP, Observer, Splitting and imagesLoaded are loaded via their distribution CDNs and retain their own licences.
- Demo photography from Unsplash is **temporary** and must be replaced with approved Ciyaz Pro food, venue and event imagery. Do not ship demo imagery without confirming usage rights.
- The event ticket is **an original first-pass implementation**. It is not yet a direct import of the Uiverse snippet.
- Codrops Liquid Distortion (PixiJS) and the Uiverse ticket source are **planned integration steps**, not represented as already integrated. We will preserve their original licence notices when imported.
- November currently uses a minimal IntersectionObserver reveal; the planned Codrops typography integration is not yet incorporated.

## Before launch (must verify)

- Confirm the final event date/time, based on the latest approved announcement; current content follows the supplied poster (10 October 2026, 00:00–02:00).
- Confirm gate ticket prices **at the entrance** before a guest pays. Current published status: *online sold out, limited tickets at gate*.
- Confirm current menu and prices — the website explicitly labels the menu as draft.
- Replace demo stock backgrounds with owned/licensed poster, venue and kitchen photography.
- Verify all visible event claims, mobile performance, keyboard interaction and accessibility.
- Review hosting and custom domain: the project brief specifies `ciyapro.online`.

## File map

```
index.html
events/index.html
css/codrops-base.css
css/site.css
css/events.css
js/codrops-double-slideshow.js
js/home-brand.js
js/events.js
licenses/CODROPS-DoubleSlideshow-MIT.txt
```
