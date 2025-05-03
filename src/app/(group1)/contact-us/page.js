// 'use client';
import React from 'react'
import PageTitle from '@/components/sections/pageTitle'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import ContactAddress from '@/components/sections/contact/contactAddress'
import GoogleMap from '@/components/sections/contact/googleMap'
import ContactForm from '@/components/sections/contact/contactForm'

export const metadata = {
    title: "RoyalBreed International School",
    description: "RoyalBreed International School",
};

const ContactUs = () => {
    // const mapRef = useRef(null);

    // const handleScrollToAbout = () => {
    //     mapRef.current?.scrollIntoView({  behavior: 'smooth' })
    // }
    return (
        <main>
            <PageTitle pageName={"Contact Us"} breadcrumbCurrent={"Contact Us"} />
            <ContactAddress/>
            <GoogleMap/>
            {/* <ContactAddress handle={handleScrollToAbout} />
            <GoogleMap ref={mapRef}/> */}
            <ContactForm />
            <NewsletterTwo />
        </main>
    )
}

export default ContactUs