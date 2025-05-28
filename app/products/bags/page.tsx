import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Phone, Mail, Star, Shield, Sparkles, Award } from "lucide-react"

export default function BagsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/leather-bags.png')] bg-cover bg-center opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/products" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại sản phẩm
            </Link>
          </div>
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Túi xách
            </h1>
            <p className="max-w-3xl mx-auto text-xl leading-relaxed">
              Giả da cao cấp chuyên dùng cho túi xách, ví, balo với độ bền cao, 
              khả năng chống nước tốt và thiết kế thời trang.
            </p>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Đặc điểm nổi bật
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Sparkles className="h-6 w-6 text-primary flex-shrink-0 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Thiết kế thời trang</h3>
                    <p className="text-gray-600">Bề mặt đẹp mắt, phù hợp với xu hướng thời trang hiện đại</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Chống nước hiệu quả</h3>
                    <p className="text-gray-600">Bảo vệ đồ đạc bên trong khỏi nước và độ ẩm</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Star className="h-6 w-6 text-primary flex-shrink-0 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Độ bền vượt trội</h3>
                    <p className="text-gray-600">Chịu được ma sát, kéo căng và sử dụng lâu dài</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/leather-bags.png" 
                alt="Túi xách da" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ứng dụng</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Sản phẩm được sử dụng rộng rãi trong ngành công nghiệp túi xách và phụ kiện
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Túi xách nữ</h3>
                <p className="text-sm text-gray-600">Túi đeo vai, túi xách tay cao cấp</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Balo</h3>
                <p className="text-sm text-gray-600">Balo laptop, balo du lịch</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Ví da</h3>
                <p className="text-sm text-gray-600">Ví nam, ví nữ, ví đựng thẻ</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Phụ kiện khác</h3>
                <p className="text-sm text-gray-600">Túi đựng laptop, túi du lịch</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Cần tư vấn về sản phẩm?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Liên hệ với chúng tôi để được tư vấn chi tiết và báo giá tốt nhất
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