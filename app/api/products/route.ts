import { NextResponse } from "next/server"
import { mockApiResponse } from "@/lib/mock-data"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { page = 1 } = body
    
    // Get API credentials from environment variables
    const appId = process.env.NHANH_APP_ID
    const secretKey = process.env.NHANH_SECRET_KEY
    const accessToken = process.env.NHANH_ACCESS_TOKEN
    const businessId = process.env.NHANH_BUSINESS_ID || "179197"
    const url = process.env.NHANH_API_URL || "https://open.nhanh.vn/api/product/search"
    
    // Nếu không có thông tin API thực, sử dụng mock data
    if (!appId || !secretKey || !accessToken || appId === "your_app_id_here") {
      console.log("Using mock data - API credentials not configured")
      return NextResponse.json(mockApiResponse)
    }

    // Validate required environment variables
    if (!appId || !secretKey || !accessToken) {
      console.error("Missing required environment variables")
      return NextResponse.json(
        { error: "Server configuration error" }, 
        { status: 500 }
      )
    }

    // API parameters
    const params = new URLSearchParams()
    params.append("version", "2.0")
    params.append("appId", appId)
    params.append("businessId", businessId)
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
      console.warn(`API responded with status: ${response.status}, falling back to mock data`)
      return NextResponse.json(mockApiResponse)
    }
    
    const data = await response.json()
    
    // Kiểm tra nếu API trả về lỗi, sử dụng mock data
    if (!data || data.code !== 1) {
      console.warn("API returned error, falling back to mock data")
      return NextResponse.json(mockApiResponse)
    }
    
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error in products API route:", error)
    console.log("Falling back to mock data due to error")
    return NextResponse.json(mockApiResponse)
  }
}
