'use client'
import React from 'react'
import { useState } from 'react';
import Image from 'next/image'
import { FaEnvelope, FaLocationDot, FaPaperPlane, FaPhone, FaPen } from 'react-icons/fa6'

import Input from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import SectionName from '@/components/ui/sectionName'
import Title from '@/components/ui/title'

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: 'james',
        email: 'mark@gmail.com',
        phone: '09090240674',
        address: 'farville',
        message: 'through',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting form...", formData);

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
        //     });
        //     console.log(res.json().message)


        //     const result = await res.json();
        //     alert(result.message);
        //   };
        if (res.ok) { // Check if the response status is successful (status code 200-299)
            const data = await res.json(); // Parse the JSON response
            console.log(data); // Do something with the parsed data
        } else {
            console.error('Error:', res.statusText); // Handle any error response
        }
    }

    return (
        <section className="lg:pt-15 lg;pb-15 pb-10 pt-10">
            <div className="container">
                <div className="max-w-[546px] mx-auto text-center">
                    <SectionName>Contact</SectionName>
                    <Title size={"3.5xl"}>Unlock thier potential with education</Title>
                </div>
                <div className="mt-15">
                    <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-7.5">
                        <div className="relative">
                            <div className="absolute top-1/2 -translate-y-1/2 h-full flex flex-col justify-between">
                                <div className="mt-[68px] sm:w-full w-40 animate-up-down">
                                    <Image src={'/images/contact/contact-2.png'} width={241} height={241} alt="two-girls-img" />
                                </div>
                                <div className="bg-primary px-5 py-[18px] rounded-[10px] flex items-center gap-5 mb-7.5 animate-left-right">
                                    <div>
                                        <Image src={'/images/contact/winner.svg'} width={65} height={65} alt="img" />
                                    </div>
                                    <div>
                                        <h4 className="text-[28px] font-bold text-cream-foreground leading-[148%] font-nunito">2k+</h4>
                                        <h6 className="text-xl font-bold text-cream-foreground mt-[5px] leading-[130%]">Project Completed</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="flex lg:justify-end justify-center">
                                <Image src={'/images/contact/contact-1.png'} width={539} height={464} alt="img" />
                            </div>
                        </div>
                        <div>
                            <div className="bg-background shadow-[0px_5px_60px_0px_rgba(0,0,0,0.05)] rounded-[10px] lg:p-10 p-5">
                                <h3 className="text-[28px] font-bold leading-[148%] font-nunito">Send a message</h3>
                                {/* <form action="" onSubmit={handleSubmit} className="mt-7"> */}
                                    <form action="https://formsubmit.co/1esimeci@gmail.com" method='POST' className="mt-7">
                                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5">
                                        <div className="relative">
                                            <Input type={"name"} onChange={handleChange} placeholder={"Your Name"} name="name" id="name" className={"text-[#686868] placeholder:[#686868] border-[#F2F2F2] lg:py-[15px] px-5"} required />
                                            <label htmlFor="name" className="absolute right-5 top-1/2 -translate-y-1/2"> <FaPen /></label>
                                        </div>
                                        <div className="relative">
                                            <Input type={"email"} onChange={handleChange} placeholder={"Your Email"} name='email' id="email" className={"text-[#686868] placeholder:[#686868] border-[#F2F2F2] lg:py-[15px] px-5"} />
                                            <label htmlFor="email" className="absolute right-5 top-1/2 -translate-y-1/2"> <FaEnvelope /></label>
                                        </div>
                                    </div>
                                    <div className="relative mt-5">
                                        <Input type={"tel"} onChange={handleChange} placeholder={"Your Phone Number"} name="phone" id="number" className={"text-[#686868] placeholder:[#686868] border-[#F2F2F2] lg:py-[15px] px-5"} />
                                        <label htmlFor="number" className="absolute right-5 top-1/2 -translate-y-1/2"> <FaPhone /></label>
                                    </div>
                                    <div className="relative mt-5">
                                        <Input type={"address"} name='address' onChange={handleChange} placeholder={"Your Address"} id="address" className={"text-[#686868] placeholder:[#686868] border-[#F2F2F2] lg:py-[15px] px-5"} />
                                        <label htmlFor="address" className="absolute right-5 top-1/2 -translate-y-1/2"> <FaLocationDot /></label>
                                    </div>

                                    <div className="relative mt-5">
                                        <textarea name="message" onChange={handleChange} id="message" placeholder="Write your Message here" className="w-full min-h-36 rounded-[10px] border-2 text-[#686868] placeholder:[#686868] border-[#F2F2F2] px-5 py-[15px] outline-none"></textarea>
                                        <label htmlFor="address" className="absolute right-5 top-[15px]"> </label>
                                    </div>
                                    <input type="hidden" name="_subject" value="New message from your site!" />
                                    <input type="hidden" name="_captcha" value="false" />
                                    <input type="hidden" name="_next" value="http://localhost:3000/contact-us" />
                                    <Button variant="pill" type='submit' className="w-full bg-primary border-primary hover:text-primary-foreground lg:mt-10 mt-5">Send Now<FaPaperPlane /></Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default ContactForm