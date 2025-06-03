import React from 'react'
import MainCarousel from '../Components/Carousel/MainCarousel'
import HomeSectionCarosel from '../Components/HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from '../../Data/mens_kurta'
import Footer from '../Components/Footer/Footer'
function Homepage() {
  return (
    <div>
      <MainCarousel/>
     <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
       <HomeSectionCarosel data={mens_kurta} sectionName={"Means kurta"}/>
       <HomeSectionCarosel data={mens_kurta} sectionName={"Girls kurta"}/>
       <HomeSectionCarosel data={mens_kurta} sectionName={"Girls Sari "}/>
       <HomeSectionCarosel data={mens_kurta} sectionName={"Girls New Style"}/>
     </div>

      {/* <Footer/> */}
      <Footer/>
    </div>
  )
}

export default Homepage
