'use client'
import React, { useState } from 'react'
import "../components/fullcss.css"
import Hero from '@/components/hero'
import Why from '@/components/why'
import Courses from '@/components/courses'
import Partership from '@/components/partership'
import Consultation from '@/components/consultation'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Nav from '@/components/nav'
import Gallery from '@/components/gallery'
import Maps from '@/components/maps'

export default function GermanhausLandingPage() {
 

  return (
    <div className="min-h-screen bg-white text-black">
      <Nav/>
      {/* Header Section */}

    <Hero/>

      {/* Section 1: Pourquoi Germanhaus ? */}
   <Why/>
 {/* Section 3: Partenariats et Opportunités */}
      <Partership/>
      {/* Section 2: Nos Formations */}
    
<Courses/>
     
      {/* Section 4: Consultation Gratuite */}
   <Consultation/>
   <Gallery/>
   <Maps/>
      {/* Section 5: Contactez-nous */}
     <Contact/>

      {/* Footer */}
    <Footer/>
    </div>
  )
}