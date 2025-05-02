import React from 'react'
import PageTitle from '@/components/sections/pageTitle'
import NewsletterOne from '@/components/sections/newsletters/newsletterOne'
import Gallery from '@/components/sections/gallery/gallery'

export const metadata = {
    title: "RoyalBreed International School",
    description: "RoyalBreed International School",
};

const Portfolio = () => {
    return (
        <main>
            <PageTitle pageName={"Portfolio"} breadcrumbCurrent={"Portfolio"} />
            <Gallery />
            <div className='lg:pb-15 pt-10'></div>
            <NewsletterOne />
        </main>
    )
}

export default Portfolio