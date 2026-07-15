// Post-build: bake per-route SEO (title, description, canonical, Open Graph,
// Twitter, JSON-LD @graph) into static HTML so crawlers and social scrapers
// that do NOT run JavaScript still get correct tags, rich results and
// link previews.
//
// Emits "<slug>.html" so Cloudflare Pages serves /about with a 200 and no
// trailing-slash redirect, matching our canonical URLs.

import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { seo, site, courseList, faqs } from '../src/data/site.js'
import { buildGraph } from '../src/data/schema.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dist = join(__dirname, '..', 'dist')
const template = readFileSync(join(dist, 'index.html'), 'utf8')

const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

// JSON-LD must not let "</script>" terminate the block early.
const jsonLdSafe = (o) => JSON.stringify(o).replace(/</g, '\\u003c')

const courseByPath = new Map(courseList.map((c) => [c.path, c]))

function headFor(key, meta) {
  const url = site.url + (meta.path === '/' ? '' : meta.path)
  const image = site.url + (meta.image || site.ogDefault)
  const graph = buildGraph({
    meta,
    faqItems: faqs[key],
    course: courseByPath.get(meta.path),
  })

  return [
    `<meta name="description" content="${esc(meta.description)}">`,
    `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">`,
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
    `<meta name="geo.region" content="IN-PB">`,
    `<meta name="geo.placename" content="Bathinda">`,
    // data-seo-jsonld lets the runtime <Seo> component UPDATE this node on
    // client-side navigation instead of appending a duplicate graph.
    `<script type="application/ld+json" data-seo-jsonld>${jsonLdSafe(graph)}</script>`,
  ].join('\n    ')
}

function pageHtml(key, meta) {
  return template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(meta.title)}</title>`)
    .replace('</head>', `    ${headFor(key, meta)}\n  </head>`)
}

let count = 0
let faqPages = 0
for (const [key, meta] of Object.entries(seo)) {
  const name = meta.path === '/' ? 'index.html' : `${meta.path.replace(/^\//, '')}.html`
  writeFileSync(join(dist, name), pageHtml(key, meta))
  if (faqs[key]?.length) faqPages++
  count++
}

console.log(`✓ Prerendered SEO into ${count} static HTML pages (${faqPages} with FAQPage schema).`)
