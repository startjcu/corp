import Hero from '@/components/Hero'
import React from 'react'
import aboutSrc from '@/public/ddm.jpg'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About'
}

export default function About() {
  return (
    <Hero imgUrl={aboutSrc} altText='about pic' content='About Content' />
  )
}
