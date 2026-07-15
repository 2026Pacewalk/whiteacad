import CourseDetail from '../components/CourseDetail.jsx'
import { courses, seo, answers, faqs } from '../data/site.js'

export default function Engineering() {
  return (
    <CourseDetail
      course={courses.engineering}
      meta={seo.engineering}
      answer={answers.engineering}
      faqItems={faqs.engineering}
    />
  )
}
