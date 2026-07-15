import Seo from './Seo.jsx'
import PageHero from './PageHero.jsx'
import Sidebar from './Sidebar.jsx'
import Reveal from './Reveal.jsx'
import Faq from './Faq.jsx'
import AnswerBlock from './AnswerBlock.jsx'
import { Target, Check } from 'lucide-react'

// Shared layout for the four course detail pages.
export default function CourseDetail({ course, meta, answer, faqItems }) {
  return (
    <>
      <Seo meta={meta} course={course} faqItems={faqItems} />
      <PageHero title={course.name} crumbs={[{ label: 'Courses' }, { label: course.short }]} />

      <section className="section">
        <div className="container content-grid">
          <Reveal className="prose">
            {/* AEO: direct answer first, detail after */}
            {answer && <AnswerBlock>{answer}</AnswerBlock>}

            <img src={course.image} alt={course.alt} width="760" height="480" />
            <span className="eyebrow">Course</span>
            <h2 className="prose-h2">{course.name} Programme in Bathinda</h2>

            <div className="chips">
              <span className="chip"><Target aria-hidden="true" /> Exams: {course.exams}</span>
            </div>

            <p>{course.intro}</p>

            <h3>What you get</h3>
            <ul className="feature-list">
              {course.highlights.map((h) => (
                <li key={h}>
                  <span className="ic"><Check aria-hidden="true" /></span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <h3 style={{ marginTop: 28 }}>{course.name} course details, duration and fees structure</h3>
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

      <Faq items={faqItems} title={`${course.short} coaching — your questions answered`} />
    </>
  )
}
