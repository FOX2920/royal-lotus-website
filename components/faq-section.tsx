"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const faqs = [
  {
    id: 1,
    question: "Royal Lotus cung cấp những loại giả da nào?",
    answer: "Chúng tôi cung cấp đa dạng các loại giả da bao gồm: giả da PU, PVC, microfiber cho nội thất ô tô, xe máy, sofa, túi xách, giày dép và các ứng dụng công nghiệp khác. Với hơn 50 màu sắc và nhiều texture khác nhau."
  },
  {
    id: 2,
    question: "Chất lượng sản phẩm có đảm bảo không?",
    answer: "Tất cả sản phẩm của Royal Lotus đều được kiểm tra chất lượng nghiêm ngặt, đạt tiêu chuẩn quốc tế về độ bền, khả năng chống thấm nước, chống UV và an toàn cho sức khỏe. Chúng tôi cam kết bảo hành sản phẩm theo quy định."
  },
  {
    id: 3,
    question: "Thời gian giao hàng là bao lâu?",
    answer: "Đối với hàng có sẵn: 1-2 ngày trong nội thành Hà Nội, 2-3 ngày các tỉnh thành khác. Đối với hàng đặt theo yêu cầu: 5-7 ngày tùy theo số lượng và độ phức tạp của sản phẩm."
  },
  {
    id: 4,
    question: "Có nhận gia công theo yêu cầu không?",
    answer: "Có, chúng tôi có xưởng gia công bồi dán mút, eva và xưởng may chuyên nghiệp. Nhận gia công các sản phẩm từ giả da theo thiết kế và yêu cầu riêng của khách hàng với chất lượng cao."
  },
  {
    id: 5,
    question: "Giá cả như thế nào? Có giảm giá cho đơn hàng lớn không?",
    answer: "Giá cả của chúng tôi rất cạnh tranh trên thị trường. Đối với đơn hàng số lượng lớn (từ 500m2 trở lên), chúng tôi có chính sách giảm giá đặc biệt. Liên hệ để được báo giá chi tiết."
  },
  {
    id: 6,
    question: "Có thể xem mẫu trước khi đặt hàng không?",
    answer: "Có, chúng tôi hỗ trợ gửi mẫu miễn phí cho khách hàng có nhu cầu đặt hàng. Khách hàng có thể đến showroom tại Hà Nội để xem trực tiếp hoặc yêu cầu gửi mẫu qua đường bưu điện."
  },
  {
    id: 7,
    question: "Có hỗ trợ tư vấn kỹ thuật không?",
    answer: "Có, đội ngũ kỹ thuật của chúng tôi sẽ tư vấn miễn phí về việc lựa chọn loại giả da phù hợp với từng ứng dụng cụ thể, hướng dẫn sử dụng và bảo quản sản phẩm."
  },
  {
    id: 8,
    question: "Phương thức thanh toán như thế nào?",
    answer: "Chúng tôi hỗ trợ nhiều hình thức thanh toán: tiền mặt, chuyển khoản ngân hàng, thanh toán qua ví điện tử. Đối với khách hàng thân thiết, có thể thanh toán sau khi nhận hàng."
  }
]

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Câu hỏi thường gặp
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Tìm hiểu thêm về sản phẩm và dịch vụ của Royal Lotus
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <Card key={faq.id} className="overflow-hidden">
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full text-left p-6 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openItems.includes(faq.id) ? (
                    <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </div>
              </button>
              
              {openItems.includes(faq.id) && (
                <CardContent className="px-6 pb-6 pt-0">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Không tìm thấy câu trả lời bạn cần?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:0911219966"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
            >
              Gọi ngay: 091.121.9966
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-white hover:bg-primary/5 transition-colors"
            >
              Gửi câu hỏi
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 