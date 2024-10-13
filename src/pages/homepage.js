
import React from 'react'
import SimpleSlider from '../components/carousel'
import Section2 from '../components/homepagesection2'
import Boxcard from '../components/cardsgrid'
import Welcomesection from '../components/welcomesection'
import InfoCards from '../components/infocards'
import ContentCards from '../components/cardandcontent'
import HighlightedSection from '../components/highlighted'
function Homepage() {
  return (
        <>
          <SimpleSlider />
          <Welcomesection />
          <InfoCards />
         
          <Section2 />
          <Boxcard />
          
          <ContentCards />
          <HighlightedSection />
        </>
  )
}

export default Homepage
