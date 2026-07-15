// ============================================================================
// JSON-LD schema builders — shared by the runtime <Seo> component and the
// build-time prerenderer, so served HTML and hydrated DOM never disagree.
// Validate with: https://search.google.com/test/rich-results
// ============================================================================

import { site, local, courseList, founder, lastUpdated } from './site.js'

const ORG_ID = `${site.url}/#organization`
const SITE_ID = `${site.url}/#website`
const PERSON_ID = `${site.url}/#founder`

/** Person node for the founder (EEAT authorship).
 *  Only emits fields that are actually populated — never guessed. */
export function founderSchema() {
  const node = {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: founder.name,
    jobTitle: founder.role,
    worksFor: { '@id': ORG_ID },
  }
  if (founder.bio) node.description = founder.bio
  if (founder.photo) node.image = site.url + founder.photo
  if (founder.sameAs?.length) node.sameAs = founder.sameAs
  if (founder.credentials?.length) {
    node.hasCredential = founder.credentials.map((c) => ({
      '@type': 'EducationalOccupationalCredential',
      name: c,
    }))
  }
  return node
}

/** LocalBusiness + EducationalOrganization — powers the Google Local Pack
 *  and "coaching near me" / "in Bathinda" queries. */
export function organizationSchema() {
  return {
    '@type': ['EducationalOrganization', 'LocalBusiness'],
    '@id': ORG_ID,
    name: site.name,
    alternateName: site.legalName,
    url: site.url,
    logo: { '@type': 'ImageObject', url: site.url + site.logo },
    image: site.url + '/images/slider-1.jpg',
    description:
      'Competitive exam coaching institute in Bathinda, Punjab for IIT-JEE, NEET, NTSE, KVPY and Olympiads.',
    telephone: '+91-84279-76607',
    email: site.email,
    priceRange: local.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: local.streetAddress,
      addressLocality: local.locality,
      addressRegion: local.region,
      postalCode: local.postalCode,
      addressCountry: local.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: local.lat, longitude: local.lng },
    areaServed: local.areaServed.map((n) => ({ '@type': 'Place', name: n })),
    openingHoursSpecification: local.openingHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs: [site.social.facebook, site.social.instagram],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Courses',
      itemListElement: courseList.map((c) => ({
        '@type': 'Course',
        name: c.name,
        url: site.url + c.path,
        description: c.intro,
      })),
    },
  }
}

/** WebSite node — enables sitelinks search box eligibility. */
export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: site.url,
    name: site.name,
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-IN',
  }
}

/** BreadcrumbList — shows the page's place in the hierarchy in SERPs. */
export function breadcrumbSchema(meta) {
  const crumbs = [{ name: 'Home', path: '/' }, ...(meta.breadcrumb || [])]
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: site.url + (c.path === '/' ? '' : c.path),
    })),
  }
}

/** FAQPage — the single biggest AEO win: feeds People Also Ask,
 *  featured snippets, and gives AI engines quotable Q/A pairs. */
export function faqSchema(items) {
  if (!items || !items.length) return null
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

/** Course node for the four programme pages. */
export function courseSchema(course, meta) {
  return {
    '@type': 'Course',
    name: course.name,
    description: meta.description,
    url: site.url + course.path,
    provider: { '@id': ORG_ID },
    inLanguage: 'en-IN',
    educationalCredentialAwarded: 'Exam preparation',
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: course.slug === 'distance-education-program' ? 'online' : 'onsite',
      location: {
        '@type': 'Place',
        name: site.name,
        address: {
          '@type': 'PostalAddress',
          streetAddress: local.streetAddress,
          addressLocality: local.locality,
          addressRegion: local.region,
          addressCountry: local.country,
        },
      },
    },
  }
}

/**
 * Build one @graph for a page. A single connected graph (rather than several
 * loose blocks) lets crawlers resolve @id references between nodes.
 */
export function buildGraph({ meta, faqItems, course }) {
  const nodes = [
    organizationSchema(),
    websiteSchema(),
    founderSchema(),
    breadcrumbSchema(meta),
    {
      '@type': 'WebPage',
      '@id': site.url + (meta.path === '/' ? '/' : meta.path) + '#webpage',
      url: site.url + (meta.path === '/' ? '' : meta.path),
      name: meta.title,
      description: meta.description,
      isPartOf: { '@id': SITE_ID },
      about: { '@id': ORG_ID },
      dateModified: lastUpdated,
      inLanguage: 'en-IN',
    },
  ]
  const faq = faqSchema(faqItems)
  if (faq) nodes.push(faq)
  if (course) nodes.push(courseSchema(course, meta))
  return { '@context': 'https://schema.org', '@graph': nodes }
}
