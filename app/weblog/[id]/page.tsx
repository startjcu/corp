import React from 'react'

interface IParams {
  params: {
    id: string
  }
}

// 多次使用到，定义一个接口
export async function generateMetadata({ params }: IParams) {
  const id = (await params).id
  return { title: `detail ${id}` }
}

// 单次使用，可以直接在后面定义参数类型
export default async function page({ params }: { params: { id: string } }) {
  const id = (await params).id
  return (
    <div>weblog: {id}</div>
  )
}
