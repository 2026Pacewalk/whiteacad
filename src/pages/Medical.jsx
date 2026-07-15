import CourseDetail from '../components/CourseDetail.jsx'
import { courses, seo } from '../data/site.js'

export default function Medical() {
  return <CourseDetail course={courses.medical} meta={seo.medical} />
}
