import React from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const Logo = ({ className }) => {
  return (
    <Link href="/" className="flex items-center gap-0 logo">
      <img src={'/images/logo.png'} className='lg:w-20 lg:h-20 w-14 h-14' alt="img" />
      <span className={cn("font-bold text-3xl -mx-3 pt-3 royal", className)}>Royal<span className='breed'>Breed</span></span>
    </Link>
  )
}

export default Logo