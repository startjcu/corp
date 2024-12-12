import React from 'react'
import Hero from '@/components/Hero'
import blogSrc from '@/public/lyy.jpg'

export default function Blog() {
  return (
    <Hero imgUrl={blogSrc} altText='blog pic' content='Blog World' />
  )
}
