import CourseDetail from '../components/CourseDetail.jsx'
import { courses, seo } from '../data/site.js'

export default function Engineering() {
  return <CourseDetail course={courses.engineering} meta={seo.engineering} />
}
