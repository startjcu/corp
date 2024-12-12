"use client"
import React from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Header() {
  const path = usePathname()
  const linkData = [
    {
      name: "About",
      link: "/about"
    },
    {
      name: "Contact",
      link: "/contact"
    },
    {
      name: "Blog",
      link: "/blog"
    }
  ]
  return (
    <div className="absolute w-full z-10">
      <div className="flex justify-between container mx-auto items-center text-orange-300 p-8">
        <Link className="text-3xl font-bold" href="/">Home</Link>
        <div className="text-xl space-x-4">
          {
            linkData.map((item, index) => {
              return <Link key={index} className={path === item.link ? "text-purple-500" : ""} href={item.link}>{item.name}</Link>
            })
          }
        </div>
      </div>
    </div>
  )
}
