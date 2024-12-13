import { NextRequest, NextResponse } from "next/server"
import db from '@/db'
import { nanoid } from "nanoid"

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams
  const pagenum = Number(params.get('pagenum')) || 1
  const pagesize = Number(params.get('pagesize')) || 2
  const query = params.get('query') || ''

  const data = db.data.posts
  let filteredData = query ? data.filter(item => {
    const { title, content } = item
    return [title, content].some(value => String(value).toLowerCase().includes(query.toLowerCase()))
  }) : data

  const total = filteredData.length
  const startIndex = (pagenum - 1) * pagesize
  const endIndex = Math.min(startIndex + pagesize, total)
  filteredData = filteredData.slice(startIndex, endIndex)
  return NextResponse.json({
    code: 0,
    total,
    data: filteredData
  })
}

// POST => /api/articles
export async function POST(request: Request) {
  const data = await request.json()
  await db.update(({ posts }) => posts.unshift({
    id: nanoid(),
    ...data
  }))
  return NextResponse.json({
    code: 0,
    message: 'add successfully',
    data
  })
}
