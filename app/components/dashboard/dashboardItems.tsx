'use client'
import React from 'react'
import Link from 'next/link'
import { navLinks } from '@/app/(protected)/layout'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const DashboardItems = () => {
    const pathname = usePathname()
  return (
    <div className='flex flex-col gap-2'>
        {
            navLinks.map((link) => (
                <Link href={link.href} key={link.name} className={cn(
                    pathname === link.href? 'bg-primary/10 text-primary': 'text-muted-foreground',
                    'flex items-center gap-2 px-2 font-medium lg:px-4 py-2 rounded-md transition-all hover:bg-primary/10 text-sm lg:text-base'
                )}>
                    <link.icon className="w-4 h-4" />
                    {link.name}
                </Link>
            ))
        }
    </div>
  )
}

export default DashboardItems