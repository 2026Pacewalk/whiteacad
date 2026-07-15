// ============================================================================
// Whitehawk Academy — central content + SEO data
// One source of truth for every page, so content and on-page SEO stay in sync.
// ============================================================================

export const site = {
  name: 'Whitehawk Academy',
  legalName: 'J.P. Brar Whitehawk Academy',
  tagline: 'Talent is Nurtured and Values are Built',
  url: 'https://whitehawkacademy.com',
  logo: '/images/logo.png',
  ogDefault: '/images/slider-1.jpg',
  phoneDisplay: '+91 84279-76607',
  phone: '+918427976607',
  email: 'info@whitehawkacademy.com',
  enquiryEmail: 'hello@whitehawkacademy.com',
  address: 'Model Town Phase-3, Opp. Dadi Poti Park, Bathinda, Punjab, India',
  addressShort: 'Model Town Phase-3, Bathinda',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13791.311044429776!2d74.961238!3d30.213463!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x909d6ccf47840608!2sWhite%20Hawk%20Academy!5e0!3m2!1sen!2sin!4v1608872126276!5m2!1sen!2sin',
  studentLogin: 'https://whitehawkacademy.speedlabs.in/LoginWHAB.aspx',
  // Official Android app (publisher: Education Carroll Media).
  // NOTE: the Play Store listing description currently describes GATE/CAT/CLAT
  // courses, which does not match this academy's actual programmes — worth
  // correcting in the Play Console.
  app: {
    name: 'WhiteHawk Academy',
    android: 'https://play.google.com/store/apps/details?id=co.carroll.qtiar',
    packageId: 'co.carroll.qtiar',
    os: 'Android',
  },
  developer: { name: 'PACEWALK', url: 'https://pacewalk.com' },
  social: {
    facebook: 'https://www.facebook.com/WHITEHAWKACADEMY/',
    instagram: 'https://www.instagram.com/whitehawk_academy/',
    whatsapp: 'https://api.whatsapp.com/send/?phone=+918427976607',
  },
}

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------
export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  {
    label: 'Courses',
    to: '/courses',
    children: [
      { label: 'Engineering (Non Medical)', to: '/engineering' },
      { label: 'Medical', to: '/medical' },
      { label: 'Foundation Courses', to: '/foundation-courses' },
      { label: 'Distance Education Program', to: '/distance-education-program' },
    ],
  },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Results', to: '/results' },
  { label: 'Contact', to: '/contact' },
]

// ---------------------------------------------------------------------------
// Homepage building blocks
// ---------------------------------------------------------------------------
export const slides = [
  {
    image: '/images/slider-1.jpg',
    alt: 'Whitehawk Academy students in a bright, modern classroom in Bathinda',
    kicker: 'Whitehawk Academy',
    title: 'Beautiful Minds Inspire Others',
    text: 'Helping every student reach his or her full potential. — J.P. Brar',
  },
  {
    image: '/images/slider-2.jpg',
    alt: 'Focused student preparing for competitive exams at Whitehawk Academy',
    kicker: 'IIT · NEET · NTSE · KVPY',
    title: 'Your Bridge to a Dream College',
    text: 'Expert coaching for India’s toughest competitive examinations, right here in Bathinda.',
  },
]

export const features = [
  { icon: 'BookOpen', title: 'Library Facility', text: 'A well-stocked library and reference material for every subject.' },
  { icon: 'GraduationCap', title: 'Best Learning Material', text: 'Comprehensive, exam-focused study material and test series.' },
  { icon: 'Presentation', title: 'Smart Classes', text: 'Technology-enabled classrooms that make concepts click.' },
  { icon: 'PhoneCall', title: 'Personal Guidance', text: 'Career counselling and one-to-one mentoring for each student.' },
]

export const stats = [
  { value: 500, suffix: '+', label: 'Happy Students' },
  { value: 150, suffix: '+', label: 'Successful Results' },
  { value: 25, suffix: '+', label: 'Awards Won' },
  { value: 10, suffix: '+', label: 'Courses Offered' },
]

// ---------------------------------------------------------------------------
// Google reviews — REAL, read from the academy's Google Business Profile
// (CID 10420604750319060488 / feature id 0x391732aeefab33f1:0x909d6ccf47840608).
//
// ⚠️ Displayed as text with attribution + a link to verify on Google. These are
// intentionally NOT marked up as Review/AggregateRating schema: Google treats a
// review about entity A hosted on entity A's own site as "self-serving", which
// is ineligible for star rich results and risks a manual action.
// See: developers.google.com/search/docs/appearance/structured-data/review-snippet
//
// Per-review star counts are not asserted because they weren't verifiable from
// the listing — only the overall 4.8 aggregate is, and that is linked to source.
// ---------------------------------------------------------------------------
export const googleReviews = {
  rating: 4.8,
  count: 46,
  profileUrl: 'https://maps.google.com/?cid=10420604750319060488',
  reviewUrl:
    'https://www.google.com/maps/place//data=!4m3!3m2!1s0x391732aeefab33f1:0x909d6ccf47840608!12e1',
  items: [
    { name: 'Chirag Goyal', meta: '2 reviews', quote: 'A good place to learn more from the best teacher' },
    { name: 'Shin Chan', meta: 'Local Guide · 17 reviews', quote: 'Really nice teachers and a very cozy environment to study.' },
    { name: 'Kartik Garg', meta: 'Local Guide · 23 reviews', quote: 'Very good institute for learning in Bathinda. Toppest' },
    { name: 'Ishanvi', meta: '4 reviews', quote: 'Amazing very good teaching + good material. Superb ✌' },
    { name: 'Rajveer', meta: 'Local Guide · 10 reviews', quote: 'You can’t find better teacher anywhere else 😄' },
    { name: 'ARIK VERMA', meta: 'Local Guide · 14 reviews', quote: 'A good place to learn more' },
  ],
}

// ---------------------------------------------------------------------------
// Courses (shared by cards + detail pages)
// ---------------------------------------------------------------------------
const seniorTable = {
  head: ['Class', 'Course Name', 'Duration', 'Details'],
  rows: [
    ['For Standard 11th', '11th (Basic)', '12 Months', 'An 8-month course covering complete theory in detail + 4 months of revision and test series.'],
    ['For Standard 11th', '11th (Basic + MCQ)', '12 Months', 'A 12-month course covering complete theory and +1 MCQs in detail with revision & test series.'],
    ['For Standard 12th', '12th (Basic)', '12 Months', 'An 8-month course covering complete theory in detail + 4 months of revision and test series.'],
    ['For Standard 12th', '12th (Basic + MCQ)', '12 Months', 'A 12-month course covering complete theory and +2 MCQs in detail with revision & test series.'],
    ['For Standard 12th (MCQ)', 'MCQs 11th & 12th', '08 Months', 'An 8-month course covering complete 11th & 12th MCQs in detail with regular tests.'],
    ['Crash Course', 'Crash Course', '1 Month approx.', 'A quick, result-oriented revision of all concepts followed by test series and a mock test, up to the entrance exams.'],
  ],
}

export const courses = {
  engineering: {
    slug: 'engineering',
    path: '/engineering',
    name: 'Engineering (Non Medical)',
    short: 'Engineering',
    image: '/images/engineering.jpg',
    alt: 'Engineering (Non Medical) IIT-JEE coaching at Whitehawk Academy Bathinda',
    exams: 'JEE Main, JEE Advanced, Board Examination',
    intro:
      'Our Engineering programme prepares students for JEE Main, JEE Advanced and Board Examinations with the best and most comprehensive study material. After completing the syllabus, students get comprehensive revision classes and test series.',
    highlights: [
      'Targeted for JEE Main, JEE Advanced & Board Examination',
      'Best and comprehensive study material',
      'Revision classes & test series after syllabus completion',
      'Personal attention to every student',
    ],
    table: seniorTable,
  },
  medical: {
    slug: 'medical',
    path: '/medical',
    name: 'Medical',
    short: 'Medical',
    image: '/images/medical.jpg',
    alt: 'Medical NEET and AIIMS coaching at Whitehawk Academy Bathinda',
    exams: 'AIIMS, NEET, Board Examination',
    intro:
      'Our Medical programme prepares students for AIIMS, NEET and Board Examinations with the best and most comprehensive study material. After completing the syllabus, students get comprehensive revision classes and test series.',
    highlights: [
      'Targeted for AIIMS, NEET & Board Examination',
      'Best and comprehensive study material',
      'Revision classes & test series after syllabus completion',
      'Personal attention to every student',
    ],
    table: seniorTable,
  },
  foundation: {
    slug: 'foundation-courses',
    path: '/foundation-courses',
    name: 'Foundation Courses',
    short: 'Foundation',
    image: '/images/foundation-courses.jpg',
    alt: 'Foundation Courses for classes 7 to 10 and NTSE at Whitehawk Academy',
    exams: 'NTSE, KVPY, Olympiads',
    intro:
      'Our Foundation Courses build a strong conceptual base for students of classes 7th to 10th and prepare them for NTSE, KVPY and Olympiads alongside their school curriculum, with early habit-building, concept clarity and regular testing.',
    highlights: [
      'Strong conceptual base for classes 7th to 10th',
      'Targeted preparation for NTSE, KVPY & Olympiads',
      'Best and comprehensive study material',
      'Regular test series and doubt-clearing sessions',
    ],
    table: {
      head: ['Class', 'Course Name', 'Details'],
      rows: [
        ['7th', 'Foundation', 'Concept building + Study Material + Test Series'],
        ['8th', 'Foundation', 'Concept building + Study Material + Test Series'],
        ['9th', 'Foundation + NTSE', 'Study Material + Test Series'],
        ['10th', 'Foundation + NTSE', 'Study Material + Test Series'],
      ],
    },
  },
  distance: {
    slug: 'distance-education-program',
    path: '/distance-education-program',
    name: 'Distance Education Program',
    short: 'Distance Education',
    image: '/images/distance-education-program.jpg',
    alt: 'Distance Education Program with study material and test series — Whitehawk Academy',
    exams: 'IIT-JEE, NEET, NTSE',
    intro:
      'The Distance Education Program bridges the gap between the institute and students separated by time and distance. With a Study Material Package and Test Series, distance learners get strong support for their exam preparation.',
    highlights: [
      'Study Material Package delivered to your door',
      'Regular Test Series with performance analysis',
      'Covers Foundation, Non-Medical & Medical streams',
      'Ideal for students who cannot attend classes in person',
    ],
    table: {
      head: ['Class', 'Course Name', 'Details'],
      rows: [
        ['7th', 'Foundation', 'Study Material + Test Series'],
        ['8th', 'Foundation', 'Study Material + Test Series'],
        ['9th', 'Foundation + NTSE', 'Study Material + Test Series'],
        ['10th', 'Foundation + NTSE', 'Study Material + Test Series'],
        ['11th & 12th', 'Non-Medical', 'Study Material + Test Series'],
        ['11th & 12th', 'Medical', 'Study Material + Test Series'],
      ],
    },
  },
}

export const courseList = [courses.engineering, courses.medical, courses.foundation, courses.distance]

export const galleryImages = [
  { src: '/images/result-2.jpg', alt: 'Whitehawk Academy top-ranking students felicitation' },
  { src: '/images/result-3.jpg', alt: 'Whitehawk Academy students celebrating their competitive exam results' },
  { src: '/images/result.jpg', alt: 'Whitehawk Academy result highlights and achievers' },
  { src: '/images/engineering.jpg', alt: 'Engineering coaching class in progress at Whitehawk Academy' },
  { src: '/images/medical.jpg', alt: 'Medical / NEET coaching class at Whitehawk Academy' },
  { src: '/images/foundation-courses.jpg', alt: 'Foundation batch students at Whitehawk Academy' },
]

export const resultImages = [
  { src: '/images/result-2.jpg', alt: 'Whitehawk Academy successful results — merit list of achievers' },
  { src: '/images/result-3.jpg', alt: 'Whitehawk Academy successful results — toppers and rank holders' },
  { src: '/images/result.jpg', alt: 'Whitehawk Academy successful results — student achievements' },
]

// ---------------------------------------------------------------------------
// EEAT — founder / author identity.
//
// ⚠️ FILL THESE IN with J.P. Brar's REAL details. They are intentionally left
// empty rather than guessed: inventing qualifications for a real person is both
// dishonest and an EEAT liability if a reader or Google checks them.
// Any field left empty/null simply does not render and is omitted from schema.
// ---------------------------------------------------------------------------
export const founder = {
  name: 'J.P. Brar',
  role: 'Founder & Director',
  photo: null,                 // e.g. '/images/jp-brar.jpg'
  // Known from the academy's own website copy:
  quote: 'Helping a student reach his/her full potential.',
  bio: '',                     // e.g. 'J.P. Brar founded Whitehawk Academy in <year>...'
  credentials: [],             // e.g. ['M.Sc. Physics, Punjabi University', '15+ years teaching JEE/NEET Physics']
  yearsExperience: null,       // e.g. 15
  sameAs: [],                  // e.g. ['https://www.linkedin.com/in/...']
}

// Content freshness signal (shown as "Last updated" + used in schema dateModified)
export const lastUpdated = '2026-07-15'

// ---------------------------------------------------------------------------
// Local SEO data (powers LocalBusiness / EducationalOrganization schema)
// Coordinates taken from the academy's Google Maps listing.
// ---------------------------------------------------------------------------
export const local = {
  streetAddress: 'Model Town Phase-3, Opp. Dadi Poti Park',
  locality: 'Bathinda',
  region: 'Punjab',
  postalCode: '151001',
  country: 'IN',
  lat: 30.213463,
  lng: 74.961238,
  priceRange: '₹₹',
  areaServed: ['Bathinda', 'Mansa', 'Muktsar', 'Faridkot', 'Barnala', 'Punjab'],
  openingHours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '08:00', closes: '20:00' },
  ],
}

// ---------------------------------------------------------------------------
// Per-page SEO metadata
// Gates: title <= 60 chars, description <= 155 chars with a CTA.
// `answer` = AEO direct-answer block (40-60 words) rendered at the top of the
// page and used verbatim by featured snippets / AI answer engines.
// ---------------------------------------------------------------------------
export const seo = {
  home: {
    path: '/',
    title: 'Best IIT & NEET Coaching in Bathinda | Whitehawk Academy',
    description:
      'Whitehawk Academy, Bathinda — expert coaching for IIT-JEE, NEET, NTSE & Olympiads. Smart classes, study material, proven results. Book free counselling.',
    image: '/images/slider-1.jpg',
    breadcrumb: [],
  },
  about: {
    path: '/about',
    title: 'About Whitehawk Academy | Coaching Institute Bathinda',
    description:
      'Learn about Whitehawk Academy Bathinda — our vision, mission and student-first coaching for IIT, NEET, NTSE, KVPY and Olympiads. Talk to a counsellor.',
    image: '/images/about-2.jpg',
    breadcrumb: [{ name: 'About Us', path: '/about' }],
  },
  engineering: {
    path: '/engineering',
    title: 'IIT-JEE Coaching in Bathinda | Whitehawk Academy',
    description:
      'JEE Main & Advanced coaching in Bathinda — complete theory, MCQ practice, revision classes and test series. Enquire about the next Engineering batch.',
    image: '/images/engineering.jpg',
    breadcrumb: [{ name: 'Courses', path: '/sitemap' }, { name: 'Engineering', path: '/engineering' }],
  },
  medical: {
    path: '/medical',
    title: 'NEET Coaching in Bathinda | Whitehawk Academy',
    description:
      'NEET & AIIMS coaching in Bathinda — expert faculty, comprehensive study material, revision classes and test series. Enquire about the next Medical batch.',
    image: '/images/medical.jpg',
    breadcrumb: [{ name: 'Courses', path: '/sitemap' }, { name: 'Medical', path: '/medical' }],
  },
  foundation: {
    path: '/foundation-courses',
    title: 'Foundation & NTSE Coaching Class 7-10 | Bathinda',
    description:
      'Foundation courses for classes 7th–10th in Bathinda with NTSE, KVPY & Olympiad prep. Build a strong base early. Book a free counselling session.',
    image: '/images/foundation-courses.jpg',
    breadcrumb: [{ name: 'Courses', path: '/sitemap' }, { name: 'Foundation Courses', path: '/foundation-courses' }],
  },
  distance: {
    path: '/distance-education-program',
    title: 'Distance Learning Program | Whitehawk Academy Bathinda',
    description:
      'Distance Education Program from Whitehawk Academy — study material packages and test series for Foundation, Non-Medical and Medical students. Enquire now.',
    image: '/images/distance-education-program.jpg',
    breadcrumb: [{ name: 'Courses', path: '/sitemap' }, { name: 'Distance Education', path: '/distance-education-program' }],
  },
  gallery: {
    path: '/gallery',
    title: 'Gallery | Whitehawk Academy Bathinda',
    description:
      'Photo gallery of Whitehawk Academy Bathinda — classrooms, smart classes, events and our achievers. See campus life and results.',
    image: '/images/result-2.jpg',
    breadcrumb: [{ name: 'Gallery', path: '/gallery' }],
  },
  results: {
    path: '/results',
    title: 'Results & Toppers | Whitehawk Academy Bathinda',
    description:
      'See the results and toppers of Whitehawk Academy Bathinda across IIT-JEE, NEET and NTSE. Join the next batch and build your own success story.',
    image: '/images/result-3.jpg',
    breadcrumb: [{ name: 'Results', path: '/results' }],
  },
  contact: {
    path: '/contact',
    title: 'Contact Whitehawk Academy | Bathinda Coaching',
    description:
      'Contact Whitehawk Academy, Model Town Phase-3, Bathinda. Call +91 84279-76607 or send an enquiry on WhatsApp for admissions and course details.',
    image: '/images/slider-2.jpg',
    breadcrumb: [{ name: 'Contact Us', path: '/contact' }],
  },
  sitemap: {
    path: '/sitemap',
    title: 'Sitemap | Whitehawk Academy Bathinda',
    description: 'Full list of pages on the Whitehawk Academy website — quick links to every section and course.',
    image: '/images/slider-1.jpg',
    breadcrumb: [{ name: 'Sitemap', path: '/sitemap' }],
  },
  privacy: {
    path: '/privacy-policy',
    title: 'Privacy Policy | Whitehawk Academy Bathinda',
    description:
      'How Whitehawk Academy, Bathinda collects, uses and protects the information you share through our enquiry and registration forms.',
    image: '/images/slider-1.jpg',
    breadcrumb: [{ name: 'Privacy Policy', path: '/privacy-policy' }],
  },
  terms: {
    path: '/terms',
    title: 'Terms of Use | Whitehawk Academy Bathinda',
    description:
      'The terms and conditions that apply when you use the Whitehawk Academy website, enquiry forms and course information.',
    image: '/images/slider-1.jpg',
    breadcrumb: [{ name: 'Terms of Use', path: '/terms' }],
  },
}

// ---------------------------------------------------------------------------
// AEO — direct answer blocks (40–60 words). Answer first, explain after: this
// is what featured snippets and AI answer engines lift verbatim.
// ---------------------------------------------------------------------------
export const answers = {
  home: 'Whitehawk Academy is a competitive-exam coaching institute in Model Town Phase-3, Bathinda, Punjab. Founded on the principle that talent is nurtured and values are built, it prepares students for IIT-JEE (Main & Advanced), NEET, AIIMS, NTSE, KVPY and Olympiads through smart classrooms, comprehensive study material, regular test series and one-to-one mentoring.',
  engineering: 'Whitehawk Academy’s Engineering (Non-Medical) programme prepares students in Bathinda for JEE Main, JEE Advanced and Board Examinations. Courses run for classes 11th and 12th over 8–12 months, covering complete theory plus MCQ practice, followed by revision classes and a full test series. A one-month crash course is available before the entrance exams.',
  medical: 'Whitehawk Academy’s Medical programme prepares students in Bathinda for NEET, AIIMS and Board Examinations. Courses run for classes 11th and 12th over 8–12 months, covering complete theory plus MCQ practice, followed by comprehensive revision classes and a full test series. A one-month crash course is available before the entrance exams.',
  foundation: 'Whitehawk Academy’s Foundation Courses build a strong conceptual base for students of classes 7th to 10th in Bathinda, alongside their school syllabus. The programme prepares students for NTSE, KVPY and Olympiads through concept-building classes, comprehensive study material, regular test series and doubt-clearing sessions.',
  distance: 'Whitehawk Academy’s Distance Education Program supports students who cannot attend classes in person. It delivers a complete Study Material Package and a regular Test Series with performance analysis, covering Foundation (classes 7–10), Non-Medical and Medical streams for IIT-JEE, NEET and NTSE preparation.',
}

// ---------------------------------------------------------------------------
// FAQs — rendered visibly on-page AND emitted as FAQPage schema.
// Questions are phrased the way people actually search (PAA capture).
// ---------------------------------------------------------------------------
export const faqs = {
  home: [
    {
      q: 'Which is the best coaching academy for IIT and NEET in Bathinda?',
      a: 'Whitehawk Academy in Model Town Phase-3, Bathinda is a leading choice for IIT-JEE and NEET preparation, offering smart classrooms, comprehensive study material, regular test series and personal attention to every student. Call +91 84279-76607 to book a free counselling session.',
    },
    {
      q: 'What courses does Whitehawk Academy offer?',
      a: 'Whitehawk Academy offers four programmes: Engineering (Non-Medical) for JEE Main & Advanced, Medical for NEET & AIIMS, Foundation Courses for classes 7th–10th including NTSE and Olympiads, and a Distance Education Program with study material and test series.',
    },
    {
      q: 'Where is Whitehawk Academy located in Bathinda?',
      a: 'Whitehawk Academy is located at Model Town Phase-3, opposite Dadi Poti Park, Bathinda, Punjab. The academy is open Monday to Saturday, 8:00 AM to 8:00 PM. You can call +91 84279-76607 or message on WhatsApp for directions.',
    },
    {
      q: 'Does Whitehawk Academy offer coaching for students outside Bathinda?',
      a: 'Yes. The Distance Education Program is designed for students separated by time and distance. It includes a complete Study Material Package and a regular Test Series with performance analysis, covering Foundation, Non-Medical and Medical streams.',
    },
    {
      q: 'How do I enrol at Whitehawk Academy?',
      a: 'You can enrol by calling +91 84279-76607, messaging on WhatsApp, or submitting the free registration form on this website. The team will discuss your target exam, recommend a suitable batch and arrange a free counselling session.',
    },
  ],
  engineering: [
    {
      q: 'Which exams does the Engineering (Non-Medical) course prepare for?',
      a: 'The Engineering programme targets JEE Main, JEE Advanced and Board Examinations, with complete theory coverage plus multiple choice question (MCQ) practice for classes 11th and 12th.',
    },
    {
      q: 'How long is the IIT-JEE coaching course at Whitehawk Academy?',
      a: 'Regular courses for classes 11th and 12th run for 12 months — roughly 8 months to cover complete theory in detail, followed by 4 months of revision and test series. An MCQ-focused 8-month course and a 1-month crash course are also available.',
    },
    {
      q: 'Is there a crash course before JEE?',
      a: 'Yes. The crash course runs for approximately one month and revises all concepts using a result-oriented approach, followed by a test series and a mock test, continuing until the entrance exams are over.',
    },
  ],
  medical: [
    {
      q: 'Which exams does the Medical course prepare for?',
      a: 'The Medical programme targets NEET, AIIMS and Board Examinations, with complete theory coverage plus multiple choice question (MCQ) practice for classes 11th and 12th.',
    },
    {
      q: 'How long is the NEET coaching course at Whitehawk Academy?',
      a: 'Regular courses for classes 11th and 12th run for 12 months — roughly 8 months to cover complete theory in detail, followed by 4 months of revision and test series. An MCQ-focused 8-month course and a 1-month crash course are also available.',
    },
    {
      q: 'Do you provide study material for NEET preparation?',
      a: 'Yes. Every Medical student receives comprehensive, exam-focused study material. After the syllabus is completed, students get comprehensive revision classes and a full test series with performance tracking.',
    },
  ],
  foundation: [
    {
      q: 'Which classes can join the Foundation Course?',
      a: 'Foundation Courses are open to students of classes 7th, 8th, 9th and 10th. Classes 9th and 10th also include dedicated NTSE preparation alongside the foundation syllabus.',
    },
    {
      q: 'Why should a student start coaching in class 7 or 8?',
      a: 'Starting early builds concept clarity and study habits before the pressure of classes 11th and 12th. The Foundation programme strengthens the school syllabus while preparing students for NTSE, KVPY and Olympiads.',
    },
  ],
  distance: [
    {
      q: 'What is included in the Distance Education Program?',
      a: 'The Distance Education Program includes a complete Study Material Package and a regular Test Series with performance analysis. It covers Foundation (classes 7–10), Non-Medical and Medical streams.',
    },
    {
      q: 'Who should choose distance learning over classroom coaching?',
      a: 'Distance learning suits students who cannot attend classes in person because of time or distance constraints. It bridges the gap between the institute and the student while still providing structured material and regular testing.',
    },
  ],
}
