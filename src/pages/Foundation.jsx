import CourseDetail from '../components/CourseDetail.jsx'
import { courses, seo } from '../data/site.js'

export default function Foundation() {
  return <CourseDetail course={courses.foundation} meta={seo.foundation} />
}
