"use client"

import { useState, useEffect } from "react"
import { Phone, X, Facebook, Mail, MessageCircle, Calendar, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<'contact' | 'callback' | 'chat'>('contact')
  const [callbackForm, setCallbackForm] = useState({
    name: '',
    phone: '',
    time: '',
    message: ''
  })
  const [chatMessage, setChatMessage] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setIsOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate API call
    alert(`Đã đặt lịch gọi lại cho ${callbackForm.name} - ${callbackForm.phone}`)
    setCallbackForm({ name: '', phone: '', time: '', message: '' })
    setIsOpen(false)
  }

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!chatMessage.trim()) return
    
    // Simulate chat message
    alert(`Tin nhắn đã gửi: ${chatMessage}`)
    setChatMessage('')
    setIsOpen(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 lg:hidden">
      {isOpen ? (
        <Card className="w-80 shadow-xl animate-fade-in">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Liên hệ hỗ trợ</CardTitle>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Tabs */}
            <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('contact')}
                className={`flex-1 py-2 px-3 rounded-md text-xs font-medium transition-colors ${
                  activeTab === 'contact' ? 'bg-white text-primary shadow-sm' : 'text-gray-600'
                }`}
              >
                Liên hệ
              </button>
              <button
                onClick={() => setActiveTab('callback')}
                className={`flex-1 py-2 px-3 rounded-md text-xs font-medium transition-colors ${
                  activeTab === 'callback' ? 'bg-white text-primary shadow-sm' : 'text-gray-600'
                }`}
              >
                Gọi lại
              </button>
              <button
                onClick={() => setActiveTab('chat')}
                className={`flex-1 py-2 px-3 rounded-md text-xs font-medium transition-colors ${
                  activeTab === 'chat' ? 'bg-white text-primary shadow-sm' : 'text-gray-600'
                }`}
              >
                Chat
              </button>
            </div>
          </CardHeader>
          
          <CardContent className="pt-0">
            {activeTab === 'contact' && (
              <div className="space-y-3">
                <a
                  href="tel:0911219966"
                  className="flex items-center justify-center w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-primary/90 transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  <span>Gọi ngay: 091.121.9966</span>
                </a>
                <a
                  href="https://www.facebook.com/daPVC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="h-4 w-4 mr-2" />
                  <span>Facebook</span>
                </a>
                <a
                  href="mailto:royallotusjsc@gmail.com"
                  className="flex items-center justify-center w-full bg-gray-100 text-gray-800 py-3 px-4 rounded-md hover:bg-gray-200 transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  <span>Email</span>
                </a>
                <a
                  href="/quote"
                  className="flex items-center justify-center w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors"
                >
                  <span>Yêu cầu báo giá</span>
                </a>
              </div>
            )}

            {activeTab === 'callback' && (
              <form onSubmit={handleCallbackSubmit} className="space-y-3">
                <Input
                  placeholder="Họ và tên"
                  value={callbackForm.name}
                  onChange={(e) => setCallbackForm(prev => ({ ...prev, name: e.target.value }))}
                  required
                />
                <Input
                  placeholder="Số điện thoại"
                  type="tel"
                  value={callbackForm.phone}
                  onChange={(e) => setCallbackForm(prev => ({ ...prev, phone: e.target.value }))}
                  required
                />
                <Input
                  placeholder="Thời gian mong muốn"
                  value={callbackForm.time}
                  onChange={(e) => setCallbackForm(prev => ({ ...prev, time: e.target.value }))}
                />
                <Textarea
                  placeholder="Nội dung cần tư vấn"
                  rows={3}
                  value={callbackForm.message}
                  onChange={(e) => setCallbackForm(prev => ({ ...prev, message: e.target.value }))}
                />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  <Calendar className="h-4 w-4 mr-2" />
                  Đặt lịch gọi lại
                </Button>
              </form>
            )}

            {activeTab === 'chat' && (
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3 text-sm">
                  <p className="font-medium text-gray-900 mb-1">Royal Lotus</p>
                  <p className="text-gray-600">Xin chào! Chúng tôi có thể hỗ trợ gì cho bạn?</p>
                </div>
                <form onSubmit={handleChatSubmit} className="space-y-3">
                  <Textarea
                    placeholder="Nhập tin nhắn của bạn..."
                    rows={3}
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    required
                  />
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    <Send className="h-4 w-4 mr-2" />
                    Gửi tin nhắn
                  </Button>
                </form>
                <p className="text-xs text-gray-500 text-center">
                  Chúng tôi sẽ phản hồi trong vòng 15 phút
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg animate-fade-in hover:bg-primary/90 transition-colors"
          aria-label="Liên hệ"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-bold">!</span>
          </span>
        </button>
      )}
    </div>
  )
}
