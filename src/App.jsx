import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Engineering from './pages/Engineering.jsx'
import Medical from './pages/Medical.jsx'
import Foundation from './pages/Foundation.jsx'
import Distance from './pages/Distance.jsx'
import Gallery from './pages/Gallery.jsx'
import Results from './pages/Results.jsx'
import Contact from './pages/Contact.jsx'
import SitemapPage from './pages/SitemapPage.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <ScrollToTop />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/medical" element={<Medical />} />
          <Route path="/foundation-courses" element={<Foundation />} />
          <Route path="/distance-education-program" element={<Distance />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/results" element={<Results />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
