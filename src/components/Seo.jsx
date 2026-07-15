import { useEffect } from 'react'
import { site } from '../data/site.js'

// Upsert a singleton <meta> so tags are never duplicated across route changes.
function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Per-page SEO. Imperatively manages the document head (title, description,
 * canonical, Open Graph, Twitter, JSON-LD). Reliable in both dev and the
 * production build. For crawlers/social scrapers that do not run JS, the same
 * tags are baked into static HTML at build time by scripts/prerender.mjs.
 */
export default function Seo({ meta, jsonLd, noindex = false }) {
  useEffect(() => {
    const url = site.url + (meta.path === '/' ? '' : meta.path)
    const image = site.url + (meta.image || site.ogDefault)

    document.title = meta.title
    upsertMeta('name', 'description', meta.description)
    upsertMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow')
    upsertLink('canonical', url)

    // Open Graph
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:site_name', site.name)
    upsertMeta('property', 'og:title', meta.title)
    upsertMeta('property', 'og:description', meta.description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', image)
    upsertMeta('property', 'og:image:alt', meta.title)
    upsertMeta('property', 'og:locale', 'en_IN')

    // Twitter
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', meta.title)
    upsertMeta('name', 'twitter:description', meta.description)
    upsertMeta('name', 'twitter:image', image)

    // JSON-LD structured data
    let ld = document.head.querySelector('script[data-seo-jsonld]')
    if (jsonLd) {
      if (!ld) {
        ld = document.createElement('script')
        ld.type = 'application/ld+json'
        ld.setAttribute('data-seo-jsonld', '')
        document.head.appendChild(ld)
      }
      ld.textContent = JSON.stringify(jsonLd)
    } else if (ld) {
      ld.remove()
    }
  }, [meta, jsonLd, noindex])

  return null
}
