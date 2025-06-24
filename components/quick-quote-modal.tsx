"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Calculator, Send, Phone, MessageCircle } from "lucide-react"

interface QuickQuoteModalProps {
  productName?: string
  productId?: string
  trigger?: React.ReactNode
}

export default function QuickQuoteModal({ productName, productId, trigger }: QuickQuoteModalProps) {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    quantity: "",
    urgency: "",
    notes: ""
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
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Reset form and close modal
    setFormData({
      name: "",
      phone: "",
      email: "",
      quantity: "",
      urgency: "",
      notes: ""
    })
    
    setIsSubmitting(false)
    setOpen(false)
    
    // Show success message
    alert("✅ Yêu cầu báo giá đã được gửi thành công! Chúng tôi sẽ liên hệ với bạn trong vòng 2h.")
  }

  const handleWhatsAppQuote = () => {
    const message = `Chào Royal Lotus! Tôi quan tâm đến sản phẩm "${productName || 'sản phẩm'}" (Mã: ${productId || 'N/A'}) và muốn được báo giá. 

Thông tin liên hệ:
- Họ tên: ${formData.name || '[Chưa nhập]'}
- Điện thoại: ${formData.phone || '[Chưa nhập]'}
- Số lượng cần: ${formData.quantity || '[Chưa nhập]'}
- Ghi chú: ${formData.notes || 'Không có'}

Xin vui lòng báo giá và tư vấn cho tôi. Cảm ơn!`

    const whatsappUrl = `https://wa.me/84911219966?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
    setOpen(false)
  }

  const defaultTrigger = (
    <Button className="bg-primary hover:bg-primary/90">
      <Calculator className="h-4 w-4 mr-2" />
      Báo giá nhanh
    </Button>
  )

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || defaultTrigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center text-xl">
            <Calculator className="h-5 w-5 text-primary mr-3" />
            Báo giá nhanh
          </DialogTitle>
          <DialogDescription>
            {productName ? (
              <>Yêu cầu báo giá cho sản phẩm: <span className="font-semibold text-primary">{productName}</span></>
            ) : (
              "Điền thông tin dưới đây để nhận báo giá nhanh chóng"
            )}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="quick-name" className="text-sm font-medium text-gray-700">
                Họ và tên *
              </Label>
              <Input
                id="quick-name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Nhập họ và tên"
                required
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="quick-phone" className="text-sm font-medium text-gray-700">
                Số điện thoại *
              </Label>
              <Input
                id="quick-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="Nhập số điện thoại"
                required
                className="mt-1"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="quick-email" className="text-sm font-medium text-gray-700">
              Email
            </Label>
            <Input
              id="quick-email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="Nhập địa chỉ email"
              className="mt-1"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="quick-quantity" className="text-sm font-medium text-gray-700">
                Số lượng cần báo giá
              </Label>
              <Input
                id="quick-quantity"
                type="text"
                value={formData.quantity}
                onChange={(e) => handleInputChange("quantity", e.target.value)}
                placeholder="VD: 100m2, 500 cái..."
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="quick-urgency" className="text-sm font-medium text-gray-700">
                Mức độ khẩn cấp
              </Label>
              <Select value={formData.urgency} onValueChange={(value) => handleInputChange("urgency", value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Chọn mức độ" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="normal">Bình thường (2-3 ngày)</SelectItem>
                  <SelectItem value="urgent">Khẩn cấp (trong ngày)</SelectItem>
                  <SelectItem value="asap">Rất khẩn cấp (ngay lập tức)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="quick-notes" className="text-sm font-medium text-gray-700">
              Ghi chú thêm
            </Label>
            <Textarea
              id="quick-notes"
              value={formData.notes}
              onChange={(e) => handleInputChange("notes", e.target.value)}
              placeholder="Màu sắc, chất liệu, ứng dụng cụ thể..."
              rows={3}
              className="mt-1"
            />
          </div>

          {productName && productId && (
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Sản phẩm:</span> {productName}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Mã SP:</span> {productId}
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
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
            
            <Button 
              type="button" 
              variant="outline" 
              onClick={handleWhatsAppQuote}
              className="flex-1 text-green-600 border-green-600 hover:bg-green-50"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Chat WhatsApp
            </Button>
          </div>

          <div className="text-center">
            <p className="text-xs text-gray-500">
              Hoặc gọi trực tiếp:{" "}
              <Button 
                variant="link" 
                className="p-0 h-auto text-xs font-medium text-primary"
                onClick={() => window.open("tel:0911219966")}
              >
                091.121.9966
              </Button>
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
} 