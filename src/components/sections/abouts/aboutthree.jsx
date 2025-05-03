import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Title from '@/components/ui/title'
import { Button } from '@/components/ui/button'
import SectionName from '@/components/ui/sectionName'
import SlideUp from '@/lib/animations/slideUp'
import SectionDescription from '@/components/ui/sectionDescription'
import { cn } from '@/lib/utils'

const AboutThree = ({ gridClass, isAboutpage }) => {
    // 'gridClass' and 'isAboutpage' props come frome about-us and home-1 page
    return (
        <section className="lg:pt-15 pt-10 lg:pb-15 pb-10">
            <div className="container">
                <div className={cn("grid lg:grid-cols-[60%_40%] grid-cols-1 items-center", gridClass)}>
                    <div className="relative">
                        <div className="flex sm:flex-row flex-col sm:items-end gap-6">
                            <SlideUp>
                                <div className="relative">
                                    <div>
                                        <Image src={'/images/about/shap-1.png'} width={61} height={47} alt="shap" />
                                    </div>
                                    <div className="ml-9">
                                        <Image src={'/images/about/about-1.png'} width={320} height={417} alt="about-bg" className="w-full" />
                                    </div>
                                    <div className="absolute -bottom-12.5 left-0 bg-primary rounded-[10px] py-4 px-[22px] flex items-center gap-3">
                                        <div className="bg-background w-11 h-11 rounded-full flex justify-center items-center">
                                            <Image src={'/images/about/customer.png'} width={37} height={24} alt="customer" />
                                        </div>
                                        <div>
                                            <h6 className="text-cream-foreground font-bold text-2xl">5,000+</h6>
                                            <p className="text-cream-foreground">Satisfied Clients</p>
                                        </div>
                                    </div>
                                </div>
                            </SlideUp>
                            <div className="flex sm:flex-col gap-8">
                                <div className="bg-warm max-w-[212px] rounded-[11px] px-5 pt-[22px] pb-6 flex flex-col items-center justify-center text-center">
                                    <Image src={'/images/about/icreement.png'} width={46} height={46} alt="icreement" />
                                    <h6 className="text-xl font-bold">Academy</h6>
                                    <p>Learning Ladder School</p>
                                </div>
                                <div className="bg-background max-w-[212px] rounded-[11px] px-5 pt-[22px] pb-6 flex flex-col justify-center drop-shadow-[0px_4.8px_24.4px_rgba(19,16,34,0.10)]">
                                    <h6 className="text-[32px] font-bold text-[#5a1413]">10+</h6>
                                    <p>Learning Ladder School</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- right side start --> */}
                    <div className={`${isAboutpage ? "" : "lg:max-w-[439px]"} pt-7.5`}>
                        <SectionName className='text-red-950'>About Us</SectionName>
                        <Title size={"3.5xl"} className={"pb-5"}>Royal Breed
                            International School</Title>
                        <SectionDescription>RBIS is an innovative, diverse and forward thinking learning community comprising of a Creche,
                            Toddlers Community, Preschool and Junior School. The School was established to enhance the qualitative education
                            and all round development of children as well as to maximize their learning experiences – from early childhood through
                            the elementary years to adolescence. we take the time to understand each learner’s strengths, interests, and needs.
                            Through personalized attention, caring guidance, and a nurturing environment,
                            we help every pupil discover their potential and grow with confidence</SectionDescription>
                        <div className='lg:mt-10 mt-7'>
                            <Button asChild variant="outline" className='border-[#5a1413]'>
                                <Link href="/about-us">Get a quote</Link>
                            </Button>
                        </div>

                    </div>
                    {/* <!-- right side end --> */}
                </div>
            {/* <p>We adopt a broad and balanced curriculum that promotes the spiritual, moral, social, 
                cognitive and physical development of children. The Toddlers community and Preschool use a unique blend of the Montessori 
                and Early Years Foundation Stage curricular while the Junior school runs with a rich blend of the British and Nigerian curricular. 
                Our curriculum embeds the effective use of technology enabling the acquisition of skills in computer coding, robotics, movie making, 
                animation and digital citizenship – 
                indispensable skills for success and leadership in a globalized, connected and emerging world of the future.</p> */}
            </div>
        </section>
    )
}

export default AboutThree