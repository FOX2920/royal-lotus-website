"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Send, Calculator } from "lucide-react"

const productCategories = [
  { value: "automotive", label: "Nội thất ô tô" },
  { value: "furniture", label: "Nội thất sofa" },
  { value: "bags", label: "Cặp túi, balo, vali" },
  { value: "shoes", label: "Giày dép" },
  { value: "materials", label: "Nguyên phụ liệu" },
  { value: "custom", label: "Sản phẩm khác" }
]

export default function QuoteRequestForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    category: "",
    quantity: "",
    description: "",
    urgency: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    setFormData({
      name: "",
      company: "",
      phone: "",
      email: "",
      category: "",
      quantity: "",
      description: "",
      urgency: ""
    })
    
    setIsSubmitting(false)
    alert("Yêu cầu báo giá đã được gửi thành công! Chúng tôi sẽ liên hệ với bạn trong vòng 24h.")
  }

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Yêu cầu báo giá trực tuyến
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Điền thông tin dưới đây để nhận báo giá nhanh chóng và chính xác nhất
          </p>
        </div>

        <Card className="shadow-lg border-0">
          <CardHeader className="bg-primary/5 rounded-t-lg">
            <CardTitle className="flex items-center text-xl">
              <Calculator className="h-6 w-6 text-primary mr-3" />
              Thông tin yêu cầu báo giá
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Họ và tên *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Nhập họ và tên"
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                    Tên công ty
                  </Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    placeholder="Nhập tên công ty"
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Số điện thoại *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="Nhập số điện thoại"
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Nhập địa chỉ email"
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="category" className="text-sm font-medium text-gray-700">
                    Loại sản phẩm *
                  </Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Chọn loại sản phẩm" />
                    </SelectTrigger>
                    <SelectContent>
                      {productCategories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="quantity" className="text-sm font-medium text-gray-700">
                    Số lượng dự kiến
                  </Label>
                  <Input
                    id="quantity"
                    type="text"
                    value={formData.quantity}
                    onChange={(e) => handleInputChange("quantity", e.target.value)}
                    placeholder="VD: 100m2, 500 cái..."
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="urgency" className="text-sm font-medium text-gray-700">
                  Mức độ khẩn cấp
                </Label>
                <Select value={formData.urgency} onValueChange={(value) => handleInputChange("urgency", value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Chọn mức độ khẩn cấp" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="normal">Bình thường (3-5 ngày)</SelectItem>
                    <SelectItem value="urgent">Khẩn cấp (1-2 ngày)</SelectItem>
                    <SelectItem value="asap">Rất khẩn cấp (trong ngày)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="description" className="text-sm font-medium text-gray-700">
                  Mô tả chi tiết yêu cầu *
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  placeholder="Mô tả chi tiết về sản phẩm cần báo giá: màu sắc, kích thước, chất liệu, ứng dụng..."
                  rows={4}
                  required
                  className="mt-1"
                />
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Tải lên hình ảnh mẫu</span> hoặc kéo thả file vào đây
                </p>
                <p className="text-xs text-gray-500">PNG, JPG, PDF tối đa 10MB</p>
                <Button type="button" variant="outline" className="mt-4">
                  Chọn file
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-primary hover:bg-primary/90 text-white"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Đang gửi...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Gửi yêu cầu báo giá
                    </>
                  )}
                </Button>
                <Button type="button" variant="outline" className="flex-1">
                  Gọi tư vấn: 091.121.9966
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Bằng cách gửi yêu cầu, bạn đồng ý với{" "}
            <a href="/privacy" className="text-primary hover:underline">
              Chính sách bảo mật
            </a>{" "}
            của chúng tôi
          </p>
        </div>
      </div>
    </section>
  )
} 