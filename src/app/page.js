import React from 'react'
import AboutOne from '@/components/sections/abouts/aboutOne'
import HeaderOne from '@/components/sections/headers/headerOne'
import HeroOne from '@/components/sections/heros/heroOne'
import ServicesOne from '@/components/sections/services/servicesOne'
import SuccessProjectOne from '@/components/sections/successProjects/successProjectOne'
import Gallery from '@/components/sections/gallery/gallery'
import AgeOne from '@/components/sections/studentsAge/ageOne'
import Teams from '@/components/sections/teams/teams'
import Programs from '@/components/sections/programs'
import FaqComp from '@/components/sections/faqComp'
import Testimonial from '@/components/sections/testimonial'
import BlogsOne from '@/components/sections/blogs/blogsOne'
import NewsletterOne from '@/components/sections/newsletters/newsletterOne'
import FooterOne from '@/components/sections/footers/footerOne'

export const metadata = {
  title: "RoyalBreed International School",
  description: "RoyalBreed International School",
};

const Home = () => {
  return (
    <>
    <HeaderOne/>
      <main>
        <HeroOne />
        <SuccessProjectOne/>
        <AboutOne isAboutpage={false}/>
        <Programs/>
        <Gallery/>
        <ServicesOne/>
        <FaqComp/>
        <Teams/>
        <AgeOne/>
        <Testimonial/>
        <BlogsOne/>
        <NewsletterOne/>
      </main>
      <FooterOne/>
    </>
  )
}

export default Home