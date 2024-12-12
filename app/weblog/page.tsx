import React from 'react'
import BLogList from '@/components/BlogList'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog List'
}

export default function page() {
  return (
    <BLogList />
  )
}
