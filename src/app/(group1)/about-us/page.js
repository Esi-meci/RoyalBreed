import React from 'react'
import AboutOne from '@/components/sections/abouts/aboutOne'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import PageTitle from '@/components/sections/pageTitle'
import Pricing from '@/components/sections/pricing'
import Testimonial from '@/components/sections/testimonial'

export const metadata = {
    title: "RoyalBreed International School",
    description: "RoyalBreed International School",
};

const AboutUs = () => {
    return (
        <main>
            <PageTitle pageName={"About Us"} breadcrumbCurrent={"About Us"} />
            <AboutOne gridClass={"lg:grid-cols-2"} isAboutpage={true} />
            <Pricing />
            <Testimonial />
            <NewsletterTwo />
        </main>
    )
}

export default AboutUs