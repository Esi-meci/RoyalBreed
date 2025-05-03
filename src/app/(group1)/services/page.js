import React from 'react'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import PageTitle from '@/components/sections/pageTitle'
import ServicesTwo from '@/components/sections/services/servicesTwo'
// import page from 

export const metadata = {
    title: "RoyalBreed International School",
    description: "RoyalBreed International School",
};

const Services = () => {
    return (
        <main>
            <PageTitle pageName={"Services"} breadcrumbCurrent={"Services"} />
            <ServicesTwo />
            <NewsletterTwo />
        </main>
    )
}

export default Services