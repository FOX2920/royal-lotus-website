"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Anh Nguyễn Văn Minh",
    position: "Giám đốc",
    company: "Công ty TNHH Nội thất Ô tô Minh Phát",
    content: "Royal Lotus đã cung cấp giả da chất lượng cao cho xưởng của chúng tôi hơn 3 năm. Sản phẩm bền đẹp, màu sắc đa dạng và dịch vụ hỗ trợ rất chuyên nghiệp. Đặc biệt, đội ngũ tư vấn luôn nhiệt tình giúp chúng tôi chọn được chất liệu phù hợp nhất.",
    rating: 5,
    image: "/images/testimonials/customer-1.jpg",
    location: "Hà Nội",
    project: "Nội thất xe hơi cao cấp"
  },
  {
    id: 2,
    name: "Chị Trần Thị Lan",
    position: "Chủ cửa hàng",
    company: "Sofa Đẹp Luxury",
    content: "Tôi đã hợp tác với Royal Lotus được 2 năm. Chất lượng giả da cho sofa rất tốt, khách hàng luôn hài lòng. Giá cả hợp lý, giao hàng đúng hẹn. Đặc biệt là có nhiều màu sắc để lựa chọn, phù hợp với xu hướng hiện đại.",
    rating: 5,
    image: "/images/testimonials/customer-2.jpg", 
    location: "TP. Hồ Chí Minh",
    project: "Sofa phòng khách"
  },
  {
    id: 3,
    name: "Anh Lê Quang Dũng",
    position: "Giám đốc sản xuất",
    company: "Nhà máy Giày dép Hoàng Gia",
    content: "Royal Lotus là đối tác tin cậy của chúng tôi trong việc cung cấp nguyên liệu giả da cho sản xuất giày dép. Chất lượng ổn định, độ bền cao và đáp ứng được yêu cầu xuất khẩu. Xưởng gia công bồi dán của họ cũng rất chuyên nghiệp.",
    rating: 5,
    image: "/images/testimonials/customer-3.jpg",
    location: "Hải Phòng", 
    project: "Giày xuất khẩu"
  },
  {
    id: 4,
    name: "Chị Phạm Thị Hoa",
    position: "Chủ thương hiệu",
    company: "Túi xách Hoa Fashion",
    content: "Giả da của Royal Lotus có chất lượng rất tốt, mềm mại và sang trọng. Chúng tôi đã sản xuất được nhiều mẫu túi xách ưng ý khách hàng. Đội ngũ tư vấn rất tận tâm, luôn gợi ý những mẫu giả da phù hợp với từng sản phẩm.",
    rating: 5,
    image: "/images/testimonials/customer-4.jpg",
    location: "Đà Nẵng",
    project: "Túi xách thời trang"
  },
  {
    id: 5,
    name: "Anh Hoàng Văn Tài",
    position: "Kỹ sư",
    company: "Xưởng may Tài Phát", 
    content: "Xưởng may của Royal Lotus đã hỗ trợ chúng tôi sản xuất rất nhiều đơn hàng chất lượng. Máy móc hiện đại, thợ may lành nghề và luôn giao đúng tiến độ. Đây là đối tác đáng tin cậy cho các dự án lớn.",
    rating: 5,
    image: "/images/testimonials/customer-5.jpg",
    location: "Bắc Ninh",
    project: "Vỏ bọc nội thất"
  }
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Khách hàng tin tưởng
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
            Khách hàng nói gì về chúng tôi
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
            Hơn 500+ khách hàng đã tin tưởng và hợp tác với Royal Lotus trong suốt những năm qua
          </p>
        </div>

        <div className="relative">
          <Card className="overflow-hidden border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Content Side */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <Quote className="h-10 w-10 text-primary/30 mb-4" />
                    <div className="flex mb-4">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                    "{currentTestimonial.content}"
                  </blockquote>

                  <div className="space-y-3">
                    <div>
                      <div className="font-bold text-xl text-gray-900">{currentTestimonial.name}</div>
                      <div className="text-primary font-semibold">{currentTestimonial.position}</div>
                      <div className="text-gray-600">{currentTestimonial.company}</div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        📍 {currentTestimonial.location}
                      </span>
                      <span className="flex items-center">
                        🏗️ {currentTestimonial.project}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Image Side */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5"></div>
                  <div className="relative h-64 lg:h-full min-h-[400px] flex items-center justify-center p-8">
                    <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl transform rotate-6"></div>
                      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                        <Image
                          src={currentTestimonial.image}
                          alt={`${currentTestimonial.name} - ${currentTestimonial.company}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      {/* Decorative elements */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
                      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-400 rounded-full animate-pulse delay-1000"></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:bg-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:bg-white"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Khách hàng tin tưởng</div>
            </div>
            <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100">
              <div className="text-3xl font-bold text-primary mb-2">5 ⭐</div>
              <div className="text-gray-600">Đánh giá trung bình</div>
            </div>
            <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100">
              <div className="text-3xl font-bold text-primary mb-2">3+ năm</div>
              <div className="text-gray-600">Hợp tác lâu dài</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 