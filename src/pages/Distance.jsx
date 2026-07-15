import CourseDetail from '../components/CourseDetail.jsx'
import { courses, seo, answers, faqs } from '../data/site.js'

export default function Distance() {
  return (
    <CourseDetail
      course={courses.distance}
      meta={seo.distance}
      answer={answers.distance}
      faqItems={faqs.distance}
    />
  )
}
