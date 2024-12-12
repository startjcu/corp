import React from 'react'
import Image from 'next/image'
import { imgs } from '@/data'
import Link from 'next/link'

export default function page() {
  return (
    <div className='p-10 flex gap-8'>
      {
        imgs.map((item, index) => {
          return (
            <Link href={`/block/photos/${index}`} key={item.alt}>
              <Image className='rounded-lg cursor-pointer' src={item.url} width={192} height={108} alt={item.alt} />
              <p>Desc: {item.alt}</p>
              <p>Price: ${item.content}</p>
            </Link>
          )
        })
      }
    </div>
  )
}
