// Post-build: bake per-route SEO (title, description, canonical, Open Graph,
// Twitter, JSON-LD) into static HTML so crawlers and social scrapers that do
// NOT run JavaScript still get correct tags and link previews.
//
// Produces dist/<route>/index.html for every route, reusing the built SPA
// bundle (the JS then hydrates the correct route from the URL).

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { seo, site, courseList } from '../src/data/site.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dist = join(__dirname, '..', 'dist')
const template = readFileSync(join(dist, 'index.html'), 'utf8')

const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const coursePaths = new Set(courseList.map((c) => c.path))

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: site.name,
  alternateName: site.legalName,
  url: site.url,
  logo: site.url + site.logo,
  telephone: site.phoneDisplay,
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Model Town Phase-3, Opp. Dadi Poti Park',
    addressLocality: 'Bathinda',
    addressRegion: 'Punjab',
    addressCountry: 'IN',
  },
  sameAs: [site.social.facebook, site.social.instagram],
}

function courseJsonLd(meta) {
  const c = courseList.find((x) => x.path === meta.path)
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: c.name,
    description: meta.description,
    provider: { '@type': 'EducationalOrganization', name: site.name, sameAs: site.url },
  }
}

function headFor(meta) {
  const url = site.url + (meta.path === '/' ? '' : meta.path)
  const image = site.url + (meta.image || site.ogDefault)
  const ld = coursePaths.has(meta.path) ? courseJsonLd(meta) : orgJsonLd
  return [
    `<meta name="description" content="${esc(meta.description)}">`,
    `<meta name="robots" content="index, follow">`,
    `<link rel="canonical" href="${url}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="${esc(site.name)}">`,
    `<meta property="og:title" content="${esc(meta.title)}">`,
    `<meta property="og:description" content="${esc(meta.description)}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:image" content="${image}">`,
    `<meta property="og:image:alt" content="${esc(meta.title)}">`,
    `<meta property="og:locale" content="en_IN">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${esc(meta.title)}">`,
    `<meta name="twitter:description" content="${esc(meta.description)}">`,
    `<meta name="twitter:image" content="${image}">`,
    `<script type="application/ld+json">${JSON.stringify(ld)}</script>`,
  ].join('\n    ')
}

function pageHtml(meta) {
  return template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(meta.title)}</title>`)
    .replace('</head>', `    ${headFor(meta)}\n  </head>`)
}

// Emit "<slug>.html" (not "<slug>/index.html") so Cloudflare Pages serves
// /about directly with a 200 — matching our canonical URLs, which have no
// trailing slash. Directory-style output would 308-redirect /about -> /about/.
let count = 0
for (const meta of Object.values(seo)) {
  const html = pageHtml(meta)
  const name = meta.path === '/' ? 'index.html' : `${meta.path.replace(/^\//, '')}.html`
  writeFileSync(join(dist, name), html)
  count++
}

console.log(`✓ Prerendered SEO into ${count} static HTML pages.`)
