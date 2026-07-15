import CourseDetail from '../components/CourseDetail.jsx'
import { courses, seo, answers, faqs } from '../data/site.js'

export default function Foundation() {
  return (
    <CourseDetail
      course={courses.foundation}
      meta={seo.foundation}
      answer={answers.foundation}
      faqItems={faqs.foundation}
    />
  )
}
