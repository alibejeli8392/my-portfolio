import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTopButton from './components/ScrollToTopButton.jsx'
import HeroSection from './sections/HeroSection.jsx'

const AboutSection = lazy(() => import('./sections/AboutSection.jsx'))
const SkillsSection = lazy(() => import('./sections/SkillsSection.jsx'))
const TechStackSection = lazy(() => import('./sections/TechStackSection.jsx'))
const PortfolioSection = lazy(() => import('./sections/PortfolioSection.jsx'))
const ContactSection = lazy(() => import('./sections/ContactSection.jsx'))

const SectionFallback = () => (
  <section
    aria-hidden="true"
    className="border-t border-slate-200/80 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
  >
    <div className="mx-auto h-8 max-w-6xl animate-pulse rounded-md bg-slate-200/80" />
  </section>
)

const App = () => (
  <div className="flex min-h-dvh flex-col bg-page">
    <Navbar />
    <main className="flex flex-1 flex-col">
      <HeroSection />
      <Suspense fallback={<SectionFallback />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <SkillsSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <TechStackSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <PortfolioSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ContactSection />
      </Suspense>
    </main>
    <Footer />
    <ScrollToTopButton />
  </div>
)

export default App
