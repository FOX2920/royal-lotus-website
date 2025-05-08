import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { page = 1 } = body

    // API parameters
    const appId = "75250"
    const secretKey =
      "TLydtuuLGr1Eu5H9qouty1WJo7Fwvz7BSjgnphuuYtvefUyv7PNd4LIMA45wL8YOvukjYlkU6Xx4XBgNfWJpVlqfM49bIv7Qwu5ixuyNOiS6T3ZUZzWmZcbM9xUX9YbE"
    const accessToken =
      "IUiDkryMM4Xb1ZauBn55aCkqiW4DvGvEXsDV5YqFbhY0AyAiB2ZWIubSsGUxwfbLhBeOKTqRJmOOzkhr3tBKruSyVIcMN0eADS7XjbKcgM6qs2IyZPoX5Z9umoZVvRdZ8OeVeTbg2DgIhunixOLLXb0dB0QZK0DUEgvefwYppr8NjvlnIvgmYwGVilSbKlesWiBZfWoKYp3Sqj5ewOEvd29It0E5OlVmn4TlRwsrkm1258CVCmH6rFHJmja"

    const url = "https://open.nhanh.vn/api/product/search"

    const params = new URLSearchParams()
    params.append("version", "2.0")
    params.append("appId", appId)
    params.append("businessId", "179197")
    params.append("accessToken", accessToken)
    params.append("secretKey", secretKey)
    params.append("data", JSON.stringify({ page }))

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    })

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`)
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error in products API route:", error)
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}
