import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Phone, Mail, Factory, Cog, Clock, Award } from "lucide-react"

export default function ManufacturingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/manufacturing.png')] bg-cover bg-center opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/services" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại dịch vụ
            </Link>
          </div>
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Sản xuất theo yêu cầu
            </h1>
            <p className="max-w-3xl mx-auto text-xl leading-relaxed">
              Dịch vụ sản xuất giả da theo yêu cầu riêng với quy trình chuyên nghiệp, 
              đảm bảo chất lượng và tiến độ giao hàng.
            </p>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ưu điểm dịch vụ
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Factory className="h-6 w-6 text-primary flex-shrink-0 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Quy trình hiện đại</h3>
                    <p className="text-gray-600">Trang thiết bị máy móc hiện đại, quy trình sản xuất chuẩn quốc tế</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Cog className="h-6 w-6 text-primary flex-shrink-0 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Tùy chỉnh linh hoạt</h3>
                    <p className="text-gray-600">Sản xuất theo mẫu mã, màu sắc, kích thước theo yêu cầu khách hàng</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Giao hàng đúng hạn</h3>
                    <p className="text-gray-600">Cam kết giao hàng đúng tiến độ, đảm bảo kế hoạch sản xuất của khách hàng</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/manufacturing.png" 
                alt="Sản xuất" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Quy trình sản xuất</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Quy trình sản xuất chuyên nghiệp từ khâu thiết kế đến thành phẩm
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Tư vấn thiết kế</h3>
                <p className="text-sm text-gray-600">Tư vấn mẫu mã, màu sắc phù hợp với nhu cầu</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Lập kế hoạch</h3>
                <p className="text-sm text-gray-600">Lập kế hoạch sản xuất chi tiết, báo giá chính xác</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Sản xuất</h3>
                <p className="text-sm text-gray-600">Tiến hành sản xuất với quy trình kiểm soát chất lượng</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">4</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Giao hàng</h3>
                <p className="text-sm text-gray-600">Kiểm tra chất lượng cuối cùng và giao hàng</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Cần tư vấn dịch vụ sản xuất?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Liên hệ với chúng tôi để được tư vấn chi tiết về dịch vụ sản xuất theo yêu cầu
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact" className="inline-flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Liên hệ tư vấn
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link href="/quote" className="inline-flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                Yêu cầu báo giá
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 