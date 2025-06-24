"use client"

import { useState } from "react"
import { MessageCircle, X, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false)
  const whatsappNumber = "84911219966" // Số điện thoại WhatsApp (định dạng quốc tế, bỏ dấu + và số 0 đầu)
  const defaultMessage = "Chào bạn! Tôi muốn tư vấn về sản phẩm giả da Royal Lotus."

  const openWhatsApp = (customMessage?: string) => {
    const message = encodeURIComponent(customMessage || defaultMessage)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
    setIsOpen(false)
  }

  const quickMessages = [
    {
      title: "Tư vấn sản phẩm",
      message: "Xin chào! Tôi muốn được tư vấn về các loại giả da phù hợp cho dự án của mình."
    },
    {
      title: "Báo giá nhanh",
      message: "Chào Royal Lotus! Tôi cần báo giá cho các sản phẩm giả da. Có thể hỗ trợ tôi được không?"
    },
    {
      title: "Xem showroom",
      message: "Tôi muốn đến thăm showroom để xem trực tiếp các mẫu giả da. Có thể hẹn lịch được không?"
    },
    {
      title: "Hỗ trợ khác",
      message: "Xin chào! Tôi cần hỗ trợ thông tin về Royal Lotus."
    }
  ]

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen ? (
          <Button
            onClick={() => setIsOpen(true)}
            className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none group"
            size="icon"
          >
            <MessageCircle className="h-7 w-7 text-white group-hover:scale-110 transition-transform duration-300" />
            <span className="sr-only">Chat WhatsApp</span>
          </Button>
        ) : (
          <Card className="w-80 shadow-2xl border-0 bg-white">
            <div className="bg-green-500 p-4 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Royal Lotus</h3>
                    <p className="text-green-100 text-sm">Trực tuyến • Phản hồi ngay</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-green-600 h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <CardContent className="p-4 space-y-3">
              <div className="text-sm text-gray-600 mb-4">
                <p className="font-medium mb-2">👋 Xin chào! Chúng tôi có thể hỗ trợ gì cho bạn?</p>
                <p>Chọn một trong các tùy chọn dưới đây hoặc gửi tin nhắn trực tiếp:</p>
              </div>
              
              {quickMessages.map((item, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start text-left h-auto p-3 hover:bg-green-50 hover:border-green-200 transition-colors duration-200"
                  onClick={() => openWhatsApp(item.message)}
                >
                  <div>
                    <div className="font-medium text-sm">{item.title}</div>
                    <div className="text-xs text-gray-500 mt-1 line-clamp-2">{item.message}</div>
                  </div>
                </Button>
              ))}
              
              <div className="pt-3 border-t">
                <Button
                  onClick={() => openWhatsApp()}
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Mở WhatsApp
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full mt-2"
                  onClick={() => window.open("tel:0911219966")}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Gọi ngay: 091.121.9966
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Overlay when chat is open on mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
} 