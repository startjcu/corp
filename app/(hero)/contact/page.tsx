import React from 'react'
import Hero from '@/components/Hero'
import contactSrc from '@/public/bear.jpg'

export default function Contact() {
  return (
    <Hero imgUrl={contactSrc} altText='contact pic' content='Contact Content' />
  )
}
