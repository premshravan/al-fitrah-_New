import { Routes, Route } from 'react-router-dom'
import AnnouncementBar from './components/AnnouncementBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import StickyMobileCTA from './components/StickyMobileCTA'
import FloatingWhatsApp from './components/FloatingWhatsApp'

import Home from './pages/Home'
import About from './pages/About'
import OurApproach from './pages/OurApproach'
import Programs from './pages/Programs'
import Curriculum from './pages/Curriculum'
import QuranicEducation from './pages/QuranicEducation'
import NourAlBayan from './pages/NourAlBayan'
import CharacterValues from './pages/CharacterValues'
import Activities from './pages/Activities'
import Gallery from './pages/Gallery'
import Admissions from './pages/Admissions'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <AnnouncementBar />
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-approach" element={<OurApproach />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/quranic-education" element={<QuranicEducation />} />
          <Route path="/nour-al-bayan" element={<NourAlBayan />} />
          <Route path="/character-and-values" element={<CharacterValues />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <StickyMobileCTA />
    </>
  )
}
