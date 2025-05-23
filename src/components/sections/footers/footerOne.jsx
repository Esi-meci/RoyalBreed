import React from 'react'
import { FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6'
import Link from 'next/link'
import Logo from '@/components/ui/logo'
import SocalIcons from '@/components/ui/socalIcons'
import CopyRight from './copyRight'
import ScrollUp from './scrollUp'
import SlideUp from '@/lib/animations/slideUp'

const FooterOne = () => {
    return (
        <footer className="pt-[70px] relative">
            <div className="container">
                <div className="grid lg:grid-cols-[370px_auto_auto] sm:grid-cols-2 grid-cols-1 justify-between gap-7.5">
                    <SlideUp delay={2}>
                        <Logo />
                        <p className="pt-4">At Royal Breed International School, we pride ourselves on delivering exceptional education tailored to unlock the unique potential in every child.</p>
                        <SocalIcons prentClass={"gap-5 pt-7.5"} className={"w-9 h-9 bg-warm text-muted-foreground hover:text-cream-foreground hover:bg-green"} />
                    </SlideUp>

                    <SlideUp delay={3}>
                        <h3 className="text-2xl font-semibold">Pages</h3>
                        <ul className="flex flex-col gap-[15px] pt-5 min-w-[215px]">
                            <li><Link href="/about-us" className="text-[#686868] transition-all duration-500 hover:ml-1 hover:text-primary">About Us</Link></li>
                            <li><Link href="/services" className="text-[#686868] transition-all duration-500 hover:ml-1 hover:text-primary">Latest Service</Link></li>
                            <li><Link href="/blog" className="text-[#686868] transition-all duration-500 hover:ml-1 hover:text-primary">Latest Blog And News</Link></li>
                            <li><Link href="/faq" className="text-[#686868] transition-all duration-500 hover:ml-1 hover:text-primary">FAQ</Link></li>
                            {/* <li><Link href="#" className="text-[#686868] transition-all duration-500 hover:ml-1 hover:text-primary">Our Creative Team Member</Link></li> */}
                        </ul>
                    </SlideUp>

                    <SlideUp delay={4}>
                        <h3 className="text-2xl font-semibold">Contact</h3>
                        <ul className="flex flex-col gap-[15px] pt-5">
                            <li>
                                <p className="text-[#686868] flex items-center gap-4">
                                    <span className="w-11 h-11 rounded-full border border-gray-200 flex justify-center items-center text-green-foreground"><FaLocationDot /></span> <span className="max-w-[168px]">Plot 6, Ogombo Road, Off Abraham Adesanya Roundabout, Ajah, Lagos</span>
                                </p>
                            </li>
                            <li>
                                <p className="text-[#686868] flex items-center gap-4">
                                    <span className="w-11 h-11 rounded-full border border-gray-200 flex justify-center items-center text-green-foreground"><FaEnvelope /></span> <Link href='mailto:info@royalbreedschools.com'>info@royalbreedschools.com</Link>
                                </p>
                            </li>
                            <li>
                                <p className="text-[#686868] flex items-center gap-4">
                                    <span className="w-11 h-11 rounded-full border border-gray-200 flex justify-center items-center text-green-foreground"><FaPhone /></span> <Link href="tel:+2348132103045">+234(0)8132103045</Link>
                                </p>
                            </li>
                        </ul>
                    </SlideUp>
                </div>
                <CopyRight />
            </div>
            <ScrollUp />
        </footer>
    )
}

export default FooterOne