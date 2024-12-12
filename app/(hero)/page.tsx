import React from 'react'
import Hero from '@/components/Hero'
import homeSrc from '@/public/fjh.jpg'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home'
}

export default function page() {
  return (
    <Hero imgUrl={homeSrc} altText='home pic' content='Hello World' />
  )
}
