"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Send, Facebook, Clock, CheckCircle, MessageCircle, Users, Award } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4 mr-2" />
            Liên hệ với chúng tôi
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl mb-6">
            Sẵn sàng hỗ trợ bạn
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
            Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng tư vấn và hỗ trợ bạn tìm ra giải pháp tốt nhất. 
            Hãy liên hệ ngay để được báo giá miễn phí!
          </p>
          
          {/* Quick Stats */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">1000+</div>
              <div className="text-sm text-gray-300">Khách hàng tin tưởng</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-sm text-gray-300">Hỗ trợ khách hàng</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Award className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">15+</div>
              <div className="text-sm text-gray-300">Năm kinh nghiệm</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form - Enhanced */}
            <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-xl border border-gray-100">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Gửi tin nhắn cho chúng tôi</h2>
                <p className="text-gray-600 leading-relaxed">
                  Điền thông tin vào form dưới đây, chúng tôi sẽ liên hệ lại trong thời gian sớm nhất. 
                  Tất cả thông tin của bạn sẽ được bảo mật tuyệt đối.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-6 bg-green-50 text-green-700 rounded-xl border border-green-200">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                    <p className="font-semibold text-lg">Cảm ơn bạn đã liên hệ!</p>
                  </div>
                  <p className="text-green-600">
                    Chúng tôi đã nhận được tin nhắn của bạn và sẽ phản hồi trong vòng 24 giờ. 
                    Để được hỗ trợ nhanh hơn, bạn có thể gọi trực tiếp hotline: 
                    <a href="tel:0911219966" className="font-semibold hover:underline ml-1">091.121.9966</a>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Họ và tên *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="h-12 border-gray-300 focus:border-primary focus:ring-primary"
                        placeholder="Nhập họ và tên của bạn"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="h-12 border-gray-300 focus:border-primary focus:ring-primary"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Số điện thoại *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="h-12 border-gray-300 focus:border-primary focus:ring-primary"
                        placeholder="0912 345 678"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Tiêu đề *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="h-12 border-gray-300 focus:border-primary focus:ring-primary"
                        placeholder="Chủ đề cần tư vấn"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nội dung *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="border-gray-300 focus:border-primary focus:ring-primary resize-none"
                      placeholder="Mô tả chi tiết nhu cầu của bạn để chúng tôi có thể tư vấn tốt nhất..."
                    />
                  </div>
                  <div>
                    <Button 
                      type="submit" 
                      className="w-full h-12 bg-primary hover:bg-primary/90 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Đang gửi...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-5 w-5" />
                          Gửi tin nhắn
                        </span>
                      )}
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500 text-center">
                    Bằng cách gửi form này, bạn đồng ý với 
                    <a href="/privacy" className="text-primary hover:underline ml-1">chính sách bảo mật</a> của chúng tôi.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Info - Enhanced */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Thông tin liên hệ</h2>
                <p className="text-gray-600 leading-relaxed">
                  Quý khách có thể liên hệ với chúng tôi qua các kênh sau để được hỗ trợ nhanh chóng và hiệu quả nhất.
                </p>
              </div>

              <div className="space-y-6">
                {/* Office Address */}
                <div className="group bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <MapPin className="h-7 w-7" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Văn phòng</h3>
                      <p className="text-gray-600 leading-relaxed">
                        42, ngõ 87 Tân Xuân, Xuân Đỉnh, Bắc Từ Liêm, Hà Nội
                      </p>
                      <p className="text-sm text-gray-500 mt-1">Mở cửa: Thứ 2 - Thứ 6 (8:00 - 17:30)</p>
                    </div>
                  </div>
                </div>

                {/* Factory Address */}
                <div className="group bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <MapPin className="h-7 w-7" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Nhà xưởng</h3>
                      <p className="text-gray-600 leading-relaxed">
                        HTX Xuân Sơn, Xã Tân Dân, Sóc Sơn, Hà Nội
                      </p>
                      <p className="text-sm text-gray-500 mt-1">Khu vực sản xuất và gia công</p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="group bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <Phone className="h-7 w-7" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Hotline</h3>
                      <p className="text-gray-600 mb-1">
                        <a 
                          href="tel:0911219966" 
                          className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
                        >
                          091.121.9966
                        </a>
                      </p>
                      <p className="text-sm text-gray-500">Hỗ trợ 24/7 - Miễn phí tư vấn</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="group bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <Mail className="h-7 w-7" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
                      <p className="text-gray-600 mb-1">
                        <a
                          href="mailto:royallotusjsc@gmail.com"
                          className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors"
                        >
                          royallotusjsc@gmail.com
                        </a>
                      </p>
                      <p className="text-sm text-gray-500">Phản hồi trong vòng 24 giờ</p>
                    </div>
                  </div>
                </div>

                {/* Facebook */}
                <div className="group bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <Facebook className="h-7 w-7" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Facebook</h3>
                      <p className="text-gray-600 mb-1">
                        <a
                          href="https://www.facebook.com/daPVC"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors"
                        >
                          facebook.com/daPVC
                        </a>
                      </p>
                      <p className="text-sm text-gray-500">Theo dõi tin tức và sản phẩm mới</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="bg-gradient-to-br from-primary to-primary/80 p-6 rounded-xl text-white">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Clock className="h-6 w-6 mr-2" />
                  Giờ làm việc
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Thứ Hai - Thứ Sáu</span>
                    <span className="font-bold">8:00 - 17:30</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Thứ Bảy</span>
                    <span className="font-bold">8:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Chủ Nhật</span>
                    <span className="text-primary-foreground/70">Nghỉ</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-white/10 rounded-lg">
                  <p className="text-sm text-primary-foreground/90">
                    💡 <strong>Lưu ý:</strong> Hotline hỗ trợ 24/7 cho các trường hợp khẩn cấp
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Enhanced */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <MapPin className="w-4 h-4 mr-2" />
              Vị trí địa lý
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">Tìm đường đến chúng tôi</h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed">
              Văn phòng và nhà xưởng của chúng tôi được đặt tại vị trí thuận lợi, dễ dàng di chuyển từ mọi nơi trong Hà Nội
            </p>
          </div>
          <div className="h-96 w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.4737883168486!2d105.78880807596354!3d21.050473987227377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab32dd484c53%3A0x4c8fe625a61abb8a!2zNDIgTmfDtSA4NyBUw6JuIFh1w6JuLCBYdcOibiBEw6xuaCwgVOG7qyBMacOqbSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1683881234567!5m2!1svi!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bản đồ văn phòng Royal Lotus"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}
