import React from 'react'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import PageTitle from '@/components/sections/pageTitle'
import ServiceArtical from '@/components/sections/services/serviceArtical'

export const metadata = {
    title: "RoyalBreed International School",
    description: "RoyalBreed International School",
};

const ServiceDetails = () => {
    return (
        <main>
            <PageTitle pageName={"Service Details"} breadcrumbCurrent={"Service Details"} />
            <ServiceArtical />
            <NewsletterTwo />
        </main>
    )
}

export default ServiceDetails