import { useCallback, useEffect, useState } from 'react'

const navItems = [
  { sectionId: 'home', label: 'Home' },
  { sectionId: 'about', label: 'About' },
  { sectionId: 'experience', label: 'Experience' },
  { sectionId: 'projects', label: 'Projects' },
  { sectionId: 'contact', label: 'Contact' },
]

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home')

  const handleScrollTo = useCallback((event, sectionId) => {
    event.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSection(sectionId)
    }
  }, [])

  useEffect(() => {
    let cleanupObserver = () => {}

    const setup = () => {
      const sections = navItems
        .map(({ sectionId }) => document.getElementById(sectionId))
        .filter(Boolean)

      if (!sections.length) return

      const getSectionFromScroll = () => {
        const offset = 120
        const current = sections.find((section) => {
          const rect = section.getBoundingClientRect()
          return rect.top <= offset && rect.bottom > offset
        })
        return current?.id
      }

      const getValidHashSection = () => {
        const sectionId = window.location.hash.replace('#', '')
        return navItems.some((item) => item.sectionId === sectionId) ? sectionId : ''
      }

      const syncInitialActiveSection = () => {
        const hashSection = getValidHashSection()
        if (hashSection) {
          setActiveSection(hashSection)
          return
        }

        if (window.scrollY <= 8) {
          setActiveSection('home')
          return
        }

        const sectionFromScroll = getSectionFromScroll()
        if (sectionFromScroll) {
          setActiveSection(sectionFromScroll)
        }
      }

      const observer = new IntersectionObserver(
        (entries) => {
          if (window.scrollY <= 8) {
            setActiveSection('home')
            return
          }

          const visibleEntries = entries
            .filter((entry) => entry.isIntersecting)
            .sort(
              (a, b) =>
                Math.abs(a.boundingClientRect.top) -
                Math.abs(b.boundingClientRect.top)
            )

          if (visibleEntries.length > 0) {
            setActiveSection(visibleEntries[0].target.id)
            return
          }

          const sectionFromScroll = getSectionFromScroll()
          if (sectionFromScroll) {
            setActiveSection(sectionFromScroll)
          }
        },
        {
          root: null,
          rootMargin: '-20% 0px -65% 0px',
          threshold: [0.1, 0.2, 0.4, 0.6],
        }
      )

      sections.forEach((section) => observer.observe(section))

      const syncFromHash = () => {
        const sectionId = getValidHashSection()
        if (sectionId) {
          setActiveSection(sectionId)
          return
        }

        if (window.scrollY <= 8) {
          setActiveSection('home')
          return
        }

        const sectionFromScroll = getSectionFromScroll()
        if (sectionFromScroll) setActiveSection(sectionFromScroll)
      }

      syncInitialActiveSection()
      window.addEventListener('hashchange', syncFromHash)

      cleanupObserver = () => {
        observer.disconnect()
        window.removeEventListener('hashchange', syncFromHash)
      }
    }

    // Yield this work so first paint and user input are prioritized.
    const deferredSetup = window.setTimeout(setup, 0)

    return () => {
      window.clearTimeout(deferredSetup)
      cleanupObserver()
    }
  }, [])

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <nav
        className="mx-auto flex w-full max-w-6xl justify-center px-4 py-3 sm:px-6 md:px-8 md:py-4"
        aria-label="Primary"
      >
        <ul className="flex w-full items-center justify-start gap-1 overflow-x-auto [scrollbar-width:none] sm:justify-center sm:gap-2 [&::-webkit-scrollbar]:hidden">
          {navItems.map(({ sectionId, label }) => (
            <li key={sectionId}>
              <a
                href={`#${sectionId}`}
                onClick={(event) => handleScrollTo(event, sectionId)}
                aria-current={activeSection === sectionId ? 'page' : undefined}
                className={`inline-flex min-w-max items-center rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5E3BEE] sm:text-base ${
                  activeSection === sectionId
                    ? 'text-[#5E3BEE] underline decoration-2 underline-offset-8'
                    : 'text-[#1C1E53] hover:text-[#5E3BEE]'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
