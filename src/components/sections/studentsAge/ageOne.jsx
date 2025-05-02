import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import SectionDescription from '@/components/ui/sectionDescription'
import { Button } from '@/components/ui/button'
import SectionName from '@/components/ui/sectionName'
import Title from '@/components/ui/title'
import { cn } from '@/lib/utils'

const AgeOne = () => {
    return (
        <section className="lg:pt-15 lg:pb-15 pb-10 pt-10">
            <div className="bg-warm lg:py-[120px] py-20 relative z-[1]">
                <div className="container">
                    <div className="grid lg:grid-cols-[37%_auto] grid-cols-1 items-center xl:gap-20 gap-10">

                        <div>
                            <div className="lg:max-w-[460px]">
                                <SectionName>Student knowledge</SectionName>
                                <Title size={"3.5xl"}>Smart Design for Every Learner – Excellence at Every Level</Title>
                            </div>
                            <SectionDescription className={'pt-5 pb-7.5'}>Empowering every student through smart design, tailored learning paths, and growth-focused support. </SectionDescription>
                            <Button asChild variant="pill">
                                <Link href={"/about-us"}>Learn More</Link>
                            </Button>
                        </div>


                        <div className="relative flex justify-center flex-wrap sm:flex-nowrap lg:justify-between md:gap-7.5 sm:gap-4 gap-3">
                            <div className="mt-[110px] flex flex-col items-end md:gap-7.5 sm:gap-4 gap-3">
                                <BigCard One={"1-2"} />
                                <SmallCard className={"bg-[#f7941e]"} age={"9-11"} />
                            </div>
                            <div className="flex flex-col md:gap-7.5 sm:gap-4 gap-3">
                                <SmallCard className={"bg-[#1cbbb4]"} age={"3-5"} />
                                <SmallCard className={"bg-destructive"} age={"6-8"} />
                                <SmallCard className={"bg-[#73be48]"} age={"16-18"} />
                            </div>
                            <div className="self-center ">
                                <SmallCard className={"bg-[#9fbb3d]"} age={"12-15"} />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="absolute 2xl:left-15 left-0 bottom-0 z-[-1] xl:block hidden">
                    <Image src={'/images/shapes/knowledge-lshpe.png'} width={109} height={581} alt="tree" />
                </div>
                <div className="absolute 2xl:top-[120px] lg:top-16 top-5 right-[67px] 2xl:w-auto lg:w-48 w-32 animate-left-right">
                    <Image src={'/images/shapes/knowledge-animal.png'} width={287} height={208} alt="animal" />
                </div>

            </div>
        </section>
    )
}

export default AgeOne

const SmallCard = ({ age, className }) => {
    return (
        <div className={cn('bg-secondary rounded-[10px] xl:py-[53px] lg:py-9 py-7 xl:px-10 lg:px-8 md:px-6 px-5 max-w-[190px] max-h-[190px]', className)}>
            <h5 className="font-nunito text-cream-foreground lg:text-[32px] md:text-2xl text-xl font-bold leading-[130%] text-center lg:max-w-[111px] md:max-w-25 max-w-20">
                <span>{age}</span> <span>Years</span>
            </h5>
        </div>
    )
}

const BigCard = ({ age, className }) => {
    return (
        <div className="bg-[#0A6375] rounded-[10px] xl:py-20 lg:py-10 py-7 xl:px-[85px] lg:px-10 md:px-6 px-5 lg:max-w-[300px] max-w-[190px] max-h-[300px] ">
            <h5 className="font-nunito text-cream-foreground lg:text-[32px] md:text-2xl text-xl font-bold leading-[140%] text-center lg:max-w-[111px] md:max-w-25 max-w-20">
                <span>{age}</span> <span>Years</span>
            </h5>
        </div>
    )
}