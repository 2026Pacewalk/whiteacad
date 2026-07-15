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

export const testimonials = [
  { name: 'Arun Verma', role: 'Student', quote: 'I have learned so much and got so much out of the training at Whitehawk Academy.' },
  { name: 'Muskan', role: 'Student', quote: 'It was one of the best learning experiences I have ever had.' },
  { name: 'Lokesh', role: 'Student', quote: 'The faculty pay personal attention to every student. Truly the best academy near me.' },
]

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
// Per-page SEO metadata (title, description, OG image, path)
// ---------------------------------------------------------------------------
export const seo = {
  home: {
    path: '/',
    title: 'Whitehawk Academy | Best Coaching for IIT, NEET & NTSE in Bathinda',
    description:
      'Whitehawk Academy (J.P. Brar) is Bathinda’s leading academy for IIT-JEE, NEET, NTSE, KVPY & Olympiads. Expert faculty, smart classes, study material and proven results.',
    image: '/images/slider-1.jpg',
  },
  about: {
    path: '/about',
    title: 'About Us | Whitehawk Academy — Bathinda’s Trusted Coaching Academy',
    description:
      'Learn about Whitehawk Academy, Bathinda — our vision, mission and student-first approach to coaching for IIT, NEET, NTSE, KVPY and Olympiads.',
    image: '/images/about-2.jpg',
  },
  engineering: {
    path: '/engineering',
    title: 'Engineering (Non Medical) Coaching | IIT-JEE Main & Advanced — Whitehawk Academy',
    description:
      'Non-Medical / Engineering coaching for JEE Main & Advanced at Whitehawk Academy Bathinda — comprehensive study material, revision classes and test series.',
    image: '/images/engineering.jpg',
  },
  medical: {
    path: '/medical',
    title: 'Medical Coaching | NEET & AIIMS Preparation — Whitehawk Academy Bathinda',
    description:
      'Medical coaching for NEET & AIIMS at Whitehawk Academy Bathinda — expert faculty, comprehensive study material, revision classes and test series.',
    image: '/images/medical.jpg',
  },
  foundation: {
    path: '/foundation-courses',
    title: 'Foundation Courses (Class 7–10) & NTSE | Whitehawk Academy Bathinda',
    description:
      'Foundation Courses for classes 7th–10th plus NTSE, KVPY and Olympiad preparation at Whitehawk Academy Bathinda. Build a strong base early.',
    image: '/images/foundation-courses.jpg',
  },
  distance: {
    path: '/distance-education-program',
    title: 'Distance Education Program | Study Material & Test Series — Whitehawk Academy',
    description:
      'Whitehawk Academy Distance Education Program — study material packages and test series for Foundation, Non-Medical and Medical students who study remotely.',
    image: '/images/distance-education-program.jpg',
  },
  gallery: {
    path: '/gallery',
    title: 'Gallery | Whitehawk Academy Bathinda — Campus, Classes & Achievers',
    description:
      'Photo gallery of Whitehawk Academy Bathinda — classrooms, events, achievers and campus life.',
    image: '/images/result-2.jpg',
  },
  results: {
    path: '/results',
    title: 'Successful Results | Whitehawk Academy Bathinda — Toppers & Achievers',
    description:
      'See the successful results and achievers of Whitehawk Academy Bathinda across IIT-JEE, NEET, NTSE and more.',
    image: '/images/result-3.jpg',
  },
  contact: {
    path: '/contact',
    title: 'Contact Us | Whitehawk Academy Bathinda — Address, Phone & Enquiry',
    description:
      'Contact Whitehawk Academy, Model Town Phase-3, Bathinda. Call +91 84279-76607 or send an enquiry for admissions and course details.',
    image: '/images/slider-2.jpg',
  },
  sitemap: {
    path: '/sitemap',
    title: 'Sitemap | Whitehawk Academy Bathinda',
    description: 'Full list of pages on the Whitehawk Academy website — quick links to every section.',
    image: '/images/slider-1.jpg',
  },
}
