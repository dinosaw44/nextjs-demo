import { type Product } from "@/components/product"
import { NextRequest, NextResponse } from "next/server"

const data: Product[] = [
  "apple", "banana", "tomato", "apple juice"
].map(name => ({ name }))

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(`http://${process.env.HOST ?? 'localhost'}${request.url}`)
  const search = searchParams.get('search')
  const result = search
    ? data.filter(({ name }) => {
      return name.includes(search)
    })
    : []

  return NextResponse.json(result)
}