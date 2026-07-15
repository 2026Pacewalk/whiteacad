import CourseDetail from '../components/CourseDetail.jsx'
import { courses, seo } from '../data/site.js'

export default function Distance() {
  return <CourseDetail course={courses.distance} meta={seo.distance} />
}
