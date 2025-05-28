import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Phone, Mail, Palette, Lightbulb, Zap, Award } from "lucide-react"

export default function CustomPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/custom-design.png')] bg-cover bg-center opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/services" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại dịch vụ
            </Link>
          </div>
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Thiết kế theo yêu cầu
            </h1>
            <p className="max-w-3xl mx-auto text-xl leading-relaxed">
              Dịch vụ thiết kế và phát triển sản phẩm giả da theo ý tưởng riêng của khách hàng, 
              từ concept đến sản phẩm hoàn thiện.
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
                  <Palette className="h-6 w-6 text-primary flex-shrink-0 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Thiết kế sáng tạo</h3>
                    <p className="text-gray-600">Đội ngũ thiết kế chuyên nghiệp, sáng tạo theo ý tưởng khách hàng</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Lightbulb className="h-6 w-6 text-primary flex-shrink-0 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Tư vấn chuyên sâu</h3>
                    <p className="text-gray-600">Tư vấn về chất liệu, màu sắc, kỹ thuật phù hợp với từng ứng dụng</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="h-6 w-6 text-primary flex-shrink-0 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Phát triển nhanh chóng</h3>
                    <p className="text-gray-600">Quy trình phát triển sản phẩm nhanh từ ý tưởng đến mẫu thử</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/custom-design.png" 
                alt="Thiết kế theo yêu cầu" 
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Quy trình thiết kế</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Quy trình thiết kế chuyên nghiệp từ ý tưởng đến sản phẩm hoàn thiện
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Trao đổi ý tưởng</h3>
                <p className="text-sm text-gray-600">Lắng nghe và hiểu rõ ý tưởng của khách hàng</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Thiết kế concept</h3>
                <p className="text-sm text-gray-600">Tạo ra bản thiết kế concept ban đầu</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Phát triển mẫu</h3>
                <p className="text-sm text-gray-600">Phát triển và hoàn thiện thiết kế</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">4</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Tạo mẫu thử</h3>
                <p className="text-sm text-gray-600">Sản xuất mẫu thử để khách hàng đánh giá</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">5</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Sản xuất hàng loạt</h3>
                <p className="text-sm text-gray-600">Triển khai sản xuất theo số lượng yêu cầu</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Lĩnh vực ứng dụng</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Chúng tôi có thể thiết kế cho nhiều lĩnh vực khác nhau
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Thời trang</h3>
                <p className="text-sm text-gray-600">Túi xách, giày dép, phụ kiện thời trang</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Nội thất</h3>
                <p className="text-sm text-gray-600">Sofa, ghế, đồ nội thất cao cấp</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Ô tô</h3>
                <p className="text-sm text-gray-600">Nội thất xe hơi, ghế xe, taplo</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Công nghiệp</h3>
                <p className="text-sm text-gray-600">Ứng dụng đặc biệt trong công nghiệp</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Y tế</h3>
                <p className="text-sm text-gray-600">Sản phẩm y tế, thiết bị chuyên dụng</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Khác</h3>
                <p className="text-sm text-gray-600">Các ứng dụng đặc biệt khác</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Có ý tưởng sản phẩm mới?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Liên hệ với chúng tôi để được tư vấn và phát triển ý tưởng thành sản phẩm thực tế
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