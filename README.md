# CIYAZ PRO · WET & WILD

A static, source-editable art-directed website. No framework, account or checkout.

## Pages

- `/` — Ciyaz Pro editorial showcase (adapted **Codrops Double Slideshow Demo 2**), four chapters, one link to `/events/`.
- `/events/` — liquid-inspired Wet & Wild landing, flipping holographic ticket, honest online sold-out / limited gate ticket message, date/venue, food menu, and November Part II reveal.

## Run it locally

```bash
python3 -m http.server 8000
```

Open http://localhost:8000 and http://localhost:8000/events/.

## Hosting

A GitHub Pages workflow runs automatically after merges to `main`. If Pages is not enabled:

1. Repository **Settings → Pages**.
2. Under **Build and deployment**, select **GitHub Actions**.
3. Rerun the Pages workflow from the Actions tab if needed.

The first staging URL will normally be `https://stfeleti2.github.io/ciyaz-pro-website/`. This is only a prediction; use the Actions deployment URL once the workflow succeeds. Connecting the production domain `ciyapro.online` requires a separate DNS / Pages custom-domain configuration in the domain and repository settings.


## Original Ciyaz Pro artwork and fonts

This revision replaces unrelated Unsplash images in the slideshow and event gallery
with the user's original Wet & Wild poster and actual photos of the Leondale venue.

The original raster art is delivered separately in `ciyaz-original-photos.zip`
and MUST be uploaded to the **root of the repository** on `main`.
The Pages deployment automatically extracts:

- `assets/poster.avif` — exact uploaded original event poster, compressed for web
- `assets/wet-wild-title.avif` — actual cyan/magenta poster lettering crop
- `assets/pool.avif` — actual Leondale swimming pool
- `assets/gathering.avif` — real outdoor event scene
- `assets/patio.avif` — actual poolside seating/courtyard

Until that zip has been uploaded, the existing vector fallback remains visible.
This limitation is intentional, to avoid broken images in the deployed website.
Fonts use Fugaz One and Archivo Black with Barlow Condensed and Inter;
the exact event title lettering is shown as an image crop, not approximated by a font.

The liquid background now uses the three **original Codrops Demo 1 photographs**
from `codrops/LiquidDistortion/img/1.jpg`, `2.jpg`, and `3.jpg`,
along with the original water displacement texture and physics.
Mobile gets a lightweight CSS effect instead of a WebGL canvas.

## Original source and credits

- [Codrops Double Slideshow](https://github.com/codrops/DoubleSlideshow): original Demo 2 JS/CSS ported into `js/codrops-double-slideshow.js` and `css/codrops-base.css`. MIT attribution: `licenses/CODROPS-DoubleSlideshow-MIT.txt`.
- [Codrops Liquid Distortion](https://github.com/codrops/LiquidDistortion), by Yannis Yannakopoulos: original `main.js` adapted only to mount inside the event hero; vendored PixiJS and TweenMax. Source/terms: `licenses/CODROPS-LiquidDistortion.txt`. WebGL loads only on capable desktops. Touch/mobile uses a lighter CSS fallback.
- [Simeydotme holographic ticket CodePen](https://codepen.io/simeydotme/pen/QWJqRvB): animated highlight/foil variables and timelines adapted into `js/events.js` and `css/events.css`. Attribution: `licenses/CODEPEN-Hologram.txt`.
- [Marcelo Dolza Uiverse Ticket](https://uiverse.io/marcelodolza/fluffy-panda-74) guided the aesthetic, but the exact HTML/CSS was not retrievable in this environment. The ticket markup is therefore original, not falsely presented as a direct copy.
- Original Ciyaz Pro vector artwork: `assets/wet-wild-art.svg`. It is a recreation of the neon poster styling, not an exact bitmap of the approved poster.

## Public messaging

Online tickets are sold out. Some tickets may be available at the entrance, subject to gate capacity. The public page does not show internal allocation thresholds or an unverified admission price. Visitors can use the WhatsApp enquiry link to ask the current gate price before travelling.

## Final content verification

- The displayed event date/time is based on the supplied poster: **Saturday 10 October 2026, 00:00–02:00**, 31 Antelope Avenue, Leondale.
- The food list is adapted from earlier Ciyaz Pro menu plans; the page says prices may need confirmation at the venue.
- User-provided original poster and venue photos are included in the separately delivered zip archive; upload that archive once to display them in Pages.
- Upload the approved original poster bitmap if pixel-perfect representation is required; a brand-inspired editable SVG is provided meanwhile.
- Performance: WebGL is desktop-only; JS fallback preserves the event content; reduced motion and keyboard interaction are supported.

## Key files

```
index.html
events/index.html
assets/wet-wild-art.svg
css/codrops-base.css
css/site.css
css/events.css
js/codrops-double-slideshow.js
js/home-brand.js
js/events.js
js/liquid-init.js
vendor/codrops-liquid.js
vendor/pixi.min.js
vendor/TweenMax.min.js
licenses/
.github/workflows/pages.yml
```
