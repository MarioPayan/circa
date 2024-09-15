import React from 'react'
// Sections
import TopNavbar from 'components/TopNavbar'
import Header from 'sections/Header'
import Services from 'sections/Services'
import Contact from 'sections/Contact'
import Projects from 'sections/Projects'
import Footer from 'sections/Footer'

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
