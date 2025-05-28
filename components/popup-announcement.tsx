"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, Phone, Gift, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PopupAnnouncementProps {
  imageUrl: string
  altText: string
  duration?: number // Thời gian hiển thị tính bằng mili giây
}

export default function PopupAnnouncement({
  imageUrl,
  altText,
  duration = 10000, // Mặc định 10 giây
}: PopupAnnouncementProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    // Hiển thị popup sau khi component được mount
    const showTimeout = setTimeout(() => {
      setIsVisible(true)
    }, 500) // Delay nhỏ để trang load xong

    // Tự động đóng popup sau khoảng thời gian duration
    const hideTimeout = setTimeout(() => {
      setIsVisible(false)
    }, duration + 500)

    // Cleanup timeouts khi component unmount
    return () => {
      clearTimeout(showTimeout)
      clearTimeout(hideTimeout)
    }
  }, [duration])

  // Nếu không hiển thị, không render gì cả
  if (!isVisible) return null

  return (    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md animate-fade-in p-4">
      <div className="relative max-w-3xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden animate-popup-bounce-in max-h-[90vh] overflow-y-auto">{/* Thêm max-height và overflow để tránh popup quá to */}
        {/* Header với hiệu ứng gradient */}
        <div className="relative bg-gradient-to-r from-primary via-primary/90 to-primary/80 p-6 text-white">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/royal-lotus-banner.png')] opacity-10 bg-cover bg-center"></div>
          <div className="relative flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm animate-heartbeat">
                <Gift className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">🎉 Khuyến mãi đặc biệt!</h2>
                <p className="text-white/90 text-lg">Giảm giá lên đến 30% cho đơn hàng đầu tiên</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white hover:text-white transition-all duration-300 hover:rotate-90"
              onClick={() => setIsVisible(false)}
              aria-label="Đóng"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
        </div>        <div className="flex flex-col lg:flex-row">
          {/* Phần hình ảnh */}
          <div className="lg:w-1/2 relative">            <div className="relative h-64 lg:h-96 w-full overflow-hidden rounded-lg bg-gray-100">
              {!imageError ? (
                <Image 
                  src={imageUrl || "/images/royal-lotus-banner.png"} 
                  alt={altText} 
                  fill 
                  className="object-contain hover:scale-105 transition-transform duration-700" 
                  priority 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="flex items-center justify-center h-full bg-gradient-to-br from-primary/20 to-primary/10">
                  <div className="text-center">
                    <Gift className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-primary">Royal Lotus</h3>
                    <p className="text-gray-600">Chuyên gia nguyên liệu da</p>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
            {/* Badge khuyến mãi */}
            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm shadow-lg animate-pulse">
              -30%
            </div>
            {/* Sparkle effects */}
            <div className="absolute top-6 right-6 text-yellow-400 animate-sparkle text-lg">✨</div>
            <div className="absolute bottom-12 left-6 text-yellow-400 animate-sparkle text-lg" style={{animationDelay: '1s'}}>⭐</div>
          </div>

          {/* Phần nội dung */}
          <div className="lg:w-1/2 p-8 flex flex-col justify-center">
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400 hover:scale-125 transition-transform duration-300" style={{animationDelay: `${star * 0.1}s`}} />
                  ))}
                  <span className="text-gray-600 font-medium">(4.9/5 - 500+ đánh giá)</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
                  Royal Lotus - Chuyên gia nguyên liệu da
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  🏆 <strong>Chất lượng hàng đầu:</strong> Nguyên liệu da cao cấp, bền đẹp<br/>
                  🚚 <strong>Giao hàng nhanh:</strong> Miễn phí ship toàn quốc<br/>
                  💎 <strong>Gia công chuyên nghiệp:</strong> Bồi dán, may theo yêu cầu<br/>
                  📞 <strong>Tư vấn 24/7:</strong> Hỗ trợ khách hàng tận tâm
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border border-green-200 hover:shadow-lg transition-shadow duration-300">
                <h4 className="font-bold text-xl text-green-800 mb-2">🎁 Ưu đãi đặc biệt hôm nay!</h4>
                <ul className="text-green-700 space-y-2">
                  <li className="hover:text-green-800 transition-colors duration-300">✅ Giảm 30% đơn hàng đầu tiên từ 2 triệu</li>
                  <li className="hover:text-green-800 transition-colors duration-300">✅ Tặng phí gia công bồi dán (tiết kiệm 500k)</li>
                  <li className="hover:text-green-800 transition-colors duration-300">✅ Miễn phí vận chuyển toàn quốc</li>
                  <li className="hover:text-green-800 transition-colors duration-300">✅ Tư vấn thiết kế miễn phí</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-bold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse hover:animate-none"
                  onClick={() => window.open('tel:0911219966', '_self')}
                >
                  <Phone className="mr-3 h-5 w-5 animate-bounce" />
                  Gọi ngay: 091.121.9966
                </Button>
                <Button 
                  variant="outline"
                  className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105"
                  onClick={() => {
                    setIsVisible(false)
                    window.location.href = '/contact'
                  }}
                >
                  Nhận báo giá
                </Button>
              </div>

              <p className="text-center text-sm text-gray-500">
                ⏰ Ưu đãi có hạn! Còn lại: 
                <span className="font-bold text-red-500 ml-1 animate-pulse">2 ngày 14 giờ</span>
              </p>
            </div>
          </div>
        </div>

        {/* Progress bar với gradient */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-200">
          <div
            className="h-full bg-gradient-to-r from-primary via-yellow-400 to-red-500 transition-all ease-linear shadow-lg"
            style={{
              width: "100%",
              animationName: "countdown",
              animationDuration: `${duration}ms`,
              animationTimingFunction: "linear",
            }}
          />
        </div>
      </div>
    </div>
  )
}
