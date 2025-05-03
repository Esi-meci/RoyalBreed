import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'


const CopyRight = ({ color }) => {
    const date = new Date
    const year = date.getFullYear()
    return (
        <div className="pt-[75px] overflow-x-hidden">
            <div className="flex lg:flex-row flex-col justify-between lg:items-center pt-7.5 pb-8 border-t border-t-white border-opacity-20">
                <p className={cn('wow fadeInLeft ' , color)} data-wow-delay=".3s"><span className='text-[#5a1413]'>©</span> <Link href="https://royalbreed.netlify.app/">RoyalBreed</Link> {year} <span className='text-[#5a1413]'>|</span> All Rights Reserved</p>
                <ul className="flex items-center gap-7.5 wow fadeInRight" data-wow-delay=".3s">
                    <li><Link href="https://phsps.com/royalbreed/" className={cn(``, color)}>Student Portal</Link></li>
                    <li><Link href="https://phsps.com/royalbreed/login_page" className={cn(``, color)}>Staff Portal</Link></li>
                    {/* <li><Link href="#" className={cn(``, color)}>Contact Us</Link></li> */}
                </ul>
            </div>
        </div>
    )
}

export default CopyRight