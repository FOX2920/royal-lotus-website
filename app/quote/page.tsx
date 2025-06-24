import QuoteRequestForm from "@/components/quote-request-form"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Shield, Headphones, Award } from "lucide-react"

export default function QuotePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Yêu cầu báo giá
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/90">
            Nhận báo giá chính xác và nhanh chóng cho dự án của bạn
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 md:py-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mx-auto mb-3">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Phản hồi nhanh</h3>
                <p className="text-sm text-gray-600">Báo giá trong vòng 24h</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mx-auto mb-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Bảo mật thông tin</h3>
                <p className="text-sm text-gray-600">Thông tin được bảo mật tuyệt đối</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mx-auto mb-3">
                  <Headphones className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Tư vấn miễn phí</h3>
                <p className="text-sm text-gray-600">Hỗ trợ chọn sản phẩm phù hợp</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mx-auto mb-3">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Giá tốt nhất</h3>
                <p className="text-sm text-gray-600">Cam kết giá cạnh tranh nhất</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <QuoteRequestForm />

      {/* Contact Info */}
      <section className="py-10 md:py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
              Cần hỗ trợ ngay?
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-base md:text-lg text-gray-600">
              Liên hệ trực tiếp với đội ngũ tư vấn của chúng tôi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Hotline</h3>
                <p className="text-2xl font-bold text-primary mb-2">091.121.9966</p>
                <p className="text-gray-600">Hỗ trợ 24/7</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Email</h3>
                <p className="text-lg text-primary mb-2">royallotusjsc@gmail.com</p>
                <p className="text-gray-600">Phản hồi trong 2h</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Showroom</h3>
                <p className="text-gray-900 mb-2">42, ngõ 87 Tân Xuân</p>
                <p className="text-gray-600">Xuân Đỉnh, Bắc Từ Liêm, HN</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
} 