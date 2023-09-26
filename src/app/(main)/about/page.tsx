import Nav from '@modules/layout/templates/nav'
import React from 'react'
import Header from './header'
import AboutUs from './about'
import Hero from '@modules/home/components/hero'
import AboutHero from './hero'
import News from '@modules/home/components/news'
import Faq from '@modules/home/components/faq'
import Contact from '@modules/home/components/contact'

function About() {
  return (
    <>
    <AboutHero/>
    <AboutUs/>
    <News/>
    <Faq/>
    <Contact/>
    </>
  )
}

export default About