import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='space-x-8'>
      <Link href="/dashboard/about">About</Link>
      <Link href="/dashboard/settings">Settings</Link>
    </div>
  )
}
