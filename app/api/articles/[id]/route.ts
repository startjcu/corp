import { NextResponse } from "next/server";
import db from '@/db'

interface IParams {
  params: { id: string }
}

export async function DELETE(request: Request, { params }: IParams) {
  const { id } = await params;
  await db.update(({ posts }) => {
    const index = posts.findIndex(i => id === i.id)
    posts.splice(index, 1)
  })
  return NextResponse.json({ id })

}

export async function PATCH(request: Request, { params }: IParams) {
  const { id } = await params
  const payload = await request.json()
  let idx = 0
  await db.update(({ posts }) => {
    idx = posts.findIndex(i => i.id === id)
    posts[idx] = { ...posts[idx], ...payload }
  })
  return NextResponse.json({ code: 0, data: db.data.posts[idx] })
}

export async function GET(request: Request, { params }: IParams) {
  const { id } = await params
  const data = db.data.posts.find(i => i.id === id)
  return NextResponse.json({ code: 0, msg: 'query done', data })
}
