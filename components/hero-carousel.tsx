"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "Nhà cung cấp giả da công nghiệp hàng đầu",
    subtitle: "Chất lượng cao - Giá cạnh tranh - Dịch vụ tận tâm",
    description: "Cung cấp sỉ lẻ các loại giả da công nghiệp, nguyên phụ liệu cho ngành nội thất ô tô, xe máy, sofa và nội thất trong nhà, giày dép, cặp túi balo vali.",
    image: "/images/hero-bg.jpg",
    cta1: { text: "Xem sản phẩm", href: "/products" },
    cta2: { text: "Liên hệ ngay", href: "/contact" }
  },
  {
    id: 2,
    title: "Xưởng sản xuất hiện đại",
    subtitle: "Công nghệ tiên tiến - Quy trình chuyên nghiệp",
    description: "Với xưởng sản xuất hiện đại và đội ngũ công nhân lành nghề, chúng tôi cam kết mang đến những sản phẩm chất lượng cao nhất.",
    image: "/images/leather-materials.png",
    cta1: { text: "Tìm hiểu thêm", href: "/about" },
    cta2: { text: "Xem xưởng", href: "/services" }
  },
  {
    id: 3,
    title: "Dịch vụ gia công chuyên nghiệp",
    subtitle: "Bồi dán - May gia công - Thiết kế theo yêu cầu",
    description: "Ngoài cung cấp nguyên liệu, chúng tôi còn có xưởng gia công bồi dán và xưởng may chuyên nghiệp tại Hà Nội.",
    image: "/images/car-interior.png",
    cta1: { text: "Dịch vụ", href: "/services" },
    cta2: { text: "Báo giá", href: "/contact" }
  }
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                <div className="animate-fade-in">
                  <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-6xl">
                    {slide.title}
                  </h1>
                  <p className="mt-4 text-lg font-medium text-primary-foreground/90 sm:text-xl">
                    {slide.subtitle}
                  </p>
                  <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300 sm:text-xl">
                    {slide.description}
                  </p>
                  <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-x-6">
                    <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-lg">
                      <Link href={slide.cta1.href}>{slide.cta1.text}</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-gray-900">
                      <Link href={slide.cta2.href}>{slide.cta2.text}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:bg-white/30"
        aria-label="Slide trước"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:bg-white/30"
        aria-label="Slide tiếp theo"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              index === currentSlide ? "bg-primary scale-125" : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Đi đến slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play Control */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-6 right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:bg-white/30"
        aria-label={isAutoPlaying ? "Tạm dừng tự động chuyển" : "Bật tự động chuyển"}
      >
        <Play className={`h-5 w-5 ${isAutoPlaying ? "opacity-50" : "opacity-100"}`} />
      </button>
    </section>
  )
} 