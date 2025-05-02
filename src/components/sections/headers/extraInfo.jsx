import SocalIcons from '@/components/ui/socalIcons';
import React from 'react'
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";

const ExtraInfo = () => {
    return (
        <div className="mt-5">
            <div>
                <h4 className="text-xl font-bold text-[#385469]">Contact Info</h4>
                <ul className="mt-5 flex flex-col gap-[15px]">
                    <li className='flex items-center gap-2'>
                        <FaPhone className="text-primary-foreground" /> <a href="" className="ml-2.5">(+234) 813-210-3045</a>
                    </li>
                    <li className='flex items-center gap-2'>
                        <FaEnvelope className="text-primary-foreground" /> <a href="" className="ml-2.5">info@royalbreedschools.com</a>
                    </li>
                    <li className='flex items-center gap-2'>
                        <FaLocationDot className="text-primary-foreground" /> <span className="ml-2.5">Plot 6, Ogombo Road, Off Abraham</span>
                    </li>
                </ul>
            </div>
            <div className="mt-5 mb-6">
                <a href="" className="bg-primary text-cream-foreground rounded-md sm:flex hidden items-center gap-2.5  btn after:bg-green"> Student Portal <span><i className="fa-solid fa-arrow-right"></i></span> </a>
            </div>
            <SocalIcons className={"w-11 h-11 bg-white text-muted-foreground"} />
        </div>
    )
}

export default ExtraInfo