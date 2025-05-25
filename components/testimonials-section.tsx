"use client"

import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Anh Nguyễn Văn A",
    company: "Công ty TNHH Nội thất ABC",
    role: "Giám đốc",
    content: "Royal Lotus đã cung cấp cho chúng tôi những sản phẩm giả da chất lượng cao với giá cả hợp lý. Dịch vụ giao hàng nhanh chóng và đúng hẹn.",
    rating: 5,
    avatar: "/images/avatar-1.jpg"
  },
  {
    id: 2,
    name: "Chị Trần Thị B",
    company: "Xưởng may túi xách XYZ",
    role: "Chủ xưởng",
    content: "Chất lượng giả da rất tốt, màu sắc đa dạng và bền đẹp. Đội ngũ tư vấn nhiệt tình, hỗ trợ chúng tôi chọn được loại vật liệu phù hợp nhất.",
    rating: 5,
    avatar: "/images/avatar-2.jpg"
  },
  {
    id: 3,
    name: "Anh Lê Văn C",
    company: "Garage ô tô DEF",
    role: "Kỹ thuật viên",
    content: "Sản phẩm giả da nội thất ô tô của Royal Lotus có chất lượng tuyệt vời. Khách hàng của chúng tôi đều rất hài lòng với độ bền và tính thẩm mỹ.",
    rating: 5,
    avatar: "/images/avatar-3.jpg"
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Khách hàng nói gì về chúng tôi
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Những phản hồi tích cực từ khách hàng là động lực để chúng tôi không ngừng cải thiện
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white shadow-sm border transition-all duration-300 hover:shadow-lg hover:border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Quote className="h-8 w-8 text-primary/30" />
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-primary">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="ml-3 text-lg font-semibold text-gray-900">4.9/5</span>
            <span className="ml-2 text-gray-600">từ 200+ đánh giá</span>
          </div>
        </div>
      </div>
    </section>
  )
} 