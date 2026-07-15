# Whitehawk Academy — React

A modern React rebuild of the Whitehawk Academy website (Bathinda) — same brand
(logo, navy `#1f386b` + red `#e41937`), all content and pages, with a refreshed UI,
complete on-page SEO and a beautiful animated header/footer + mobile menu.

## Stack
- **Vite + React 18**
- **React Router 6** (client-side routing)
- **react-helmet-async** (per-page SEO: title, meta description, Open Graph, Twitter, JSON-LD)
- **lucide-react** (crisp SVG icons — no emoji)

## Run locally
```bash
npm install
npm run dev      # http://localhost:5175
```

## Build
```bash
npm run build    # outputs to /dist
npm run preview  # preview the production build
```

## Structure
```
public/            logo, images, favicon, sitemap.xml, robots.txt
src/
  data/site.js     ← single source of truth for content + per-page SEO
  components/       Header, Footer, Seo, EnquiryForm, CourseDetail, …
  pages/            Home, About, Engineering, Medical, Foundation,
                    Distance, Gallery, Results, Contact, SitemapPage, 404
  index.css         design system (brand tokens, components, responsive, a11y)
```

## Notes
- The enquiry/registration form has no server; a valid submission opens a
  pre-filled **WhatsApp** chat to the academy and shows an inline success message.
  Swap `EnquiryForm.jsx` for an API/email endpoint when a backend is available.
- SEO canonical/OG URLs use `https://whitehawkacademy.com`. Update `site.url`
  in `src/data/site.js` if the domain changes.
- Deployed on a static host: an SPA fallback is included (`public/_redirects`
  for Netlify). For Apache, add a rewrite of all routes to `/index.html`.

Developed by [PACEWALK](https://pacewalk.com).
