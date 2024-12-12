import React from 'react'
import { imgs } from '@/data'
import Image from 'next/image'

export default async function Photo({ params }: { params: { id: string } }) {
  const idx = +(await params).id
  const item = imgs[idx]

  return (
    <div>
      <Image className='rounded-2xl mt-10 mx-auto' src={item.url} alt={item.alt} height={216} width={384} />
      <p>硬导航得到的结果</p>
    </div>
  )
}
