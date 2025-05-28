import { GoogleGenerativeAI } from "@google/generative-ai"
import { NextRequest, NextResponse } from "next/server"

// Initialize the API
const genAI = new GoogleGenerativeAI("AIzaSyCUVfl2vrmBOjKyhoJfT0aiziqWkdfuSt0")

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory } = await request.json()
    
    // Get the generative model
    const model = genAI.getGenerativeModel({ model: "gemma-3n-e4b-it" })

    // Create a context-aware prompt for Royal Lotus business
    const systemPrompt = `Bạn là trợ lý AI của công ty Royal Lotus - chuyên sản xuất và cung cấp giả da công nghiệp chất lượng cao. 

Thông tin về công ty:
- Chuyên sản xuất giả da cho các ngành: nội thất ô tô, sofa, túi xách, giày dép
- Cung cấp hơn 50 màu sắc và 20+ chất liệu khác nhau
- Cam kết chất lượng 100%, kiểm tra nghiêm ngặt
- Có kho nguyên liệu đa dạng và dịch vụ may gia công

QUAN TRỌNG: 
- Trả lời NGẮN GỌN, súc tích (1-2 câu)
- Sử dụng markdown để format text: **in đậm**, *in nghiêng*, \`code\`, bullet points
- Thân thiện, chuyên nghiệp
- Nếu câu hỏi không liên quan đến sản phẩm, hãy lịch sự chuyển hướng về các dịch vụ của công ty.`

    // Build conversation context
    let conversationContext = systemPrompt + "\n\n"
    
    if (conversationHistory && conversationHistory.length > 0) {
      conversationHistory.forEach((msg: any) => {
        conversationContext += `${msg.role === 'user' ? 'Khách hàng' : 'Trợ lý'}: ${msg.content}\n`
      })
    }
    
    conversationContext += `Khách hàng: ${message}\nTrợ lý:`

    // Generate response
    const result = await model.generateContent(conversationContext)
    const response = await result.response
    const text = response.text()

    return NextResponse.json({ 
      message: text,
      success: true 
    })

  } catch (error) {
    console.error("Chat API Error:", error)
    return NextResponse.json(
      { 
        message: "Xin lỗi, tôi đang gặp vấn đề kỹ thuật. Vui lòng thử lại sau hoặc liên hệ trực tiếp qua hotline để được hỗ trợ.",
        success: false 
      },
      { status: 500 }
    )
  }
}
