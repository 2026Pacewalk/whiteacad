import CourseDetail from '../components/CourseDetail.jsx'
import { courses, seo, answers, faqs } from '../data/site.js'

export default function Medical() {
  return (
    <CourseDetail
      course={courses.medical}
      meta={seo.medical}
      answer={answers.medical}
      faqItems={faqs.medical}
    />
  )
}
