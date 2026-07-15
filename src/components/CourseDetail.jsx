import Seo from './Seo.jsx'
import PageHero from './PageHero.jsx'
import Sidebar from './Sidebar.jsx'
import Reveal from './Reveal.jsx'
import { Target, Check } from 'lucide-react'

// Shared layout for the four course detail pages.
export default function CourseDetail({ course, meta }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.name,
    description: meta.description,
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Whitehawk Academy',
      sameAs: 'https://whitehawkacademy.com',
    },
  }

  return (
    <>
      <Seo meta={meta} jsonLd={jsonLd} />
      <PageHero title={course.name} crumbs={[{ label: 'Courses' }, { label: course.short }]} />

      <section className="section">
        <div className="container content-grid">
          <Reveal className="prose">
            <img src={course.image} alt={course.alt} width="760" height="480" />
            <span className="eyebrow">Course</span>
            <h3>{course.name} Programme</h3>

            <div className="chips">
              <span className="chip"><Target aria-hidden="true" /> Exams: {course.exams}</span>
            </div>

            <p>{course.intro}</p>

            <ul className="feature-list">
              {course.highlights.map((h) => (
                <li key={h}>
                  <span className="ic"><Check aria-hidden="true" /></span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <h3 style={{ marginTop: 28 }}>Course Details</h3>
            <div className="table-card">
              <div className="table-scroll">
                <table className="course-table">
                  <thead>
                    <tr>{course.table.head.map((h) => <th key={h}>{h}</th>)}</tr>
                  </thead>
                  <tbody>
                    {course.table.rows.map((row, i) => (
                      <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          <Sidebar />
        </div>
      </section>
    </>
  )
}
