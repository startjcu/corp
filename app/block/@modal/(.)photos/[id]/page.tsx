'use client'
import React from 'react'
import Image from 'next/image'
import { imgs } from '@/data'
import { useRouter } from 'next/navigation'

export default function Page({ params }: { params: { id: string } }) {
  const idx = +params.id
  const item = imgs[idx]
  const router = useRouter()
  return (
    <div className='flex justify-center items-center fixed inset-0 bg-gray-500/[.8]' onClick={() => router.back()}>
      <Image className='rounded-2xl' src={item.url} alt={item.alt} height={216 * 2} width={384 * 2} onClick={(e) => e.stopPropagation()} />
    </div>
  )
}
