import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Phone, Mail, Scissors, Users, Clock, Award } from "lucide-react"

export default function SewingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/sewing.png')] bg-cover bg-center opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/services" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại dịch vụ
            </Link>
          </div>
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              May gia công
            </h1>
            <p className="max-w-3xl mx-auto text-xl leading-relaxed">
              Dịch vụ may gia công chuyên nghiệp với đội ngũ thợ may có kinh nghiệm, 
              đảm bảo chất lượng sản phẩm hoàn hảo.
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
                  <Scissors className="h-6 w-6 text-primary flex-shrink-0 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Kỹ thuật chuyên nghiệp</h3>
                    <p className="text-gray-600">Đội ngũ thợ may có kinh nghiệm lâu năm, kỹ thuật may tinh xảo</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-primary flex-shrink-0 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Đội ngũ đông đảo</h3>
                    <p className="text-gray-600">Có thể đáp ứng đơn hàng lớn với số lượng nhiều trong thời gian ngắn</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Giao hàng nhanh chóng</h3>
                    <p className="text-gray-600">Cam kết giao hàng đúng thời hạn, hỗ trợ giao hàng khẩn cấp</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/sewing.png" 
                alt="May gia công" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Dịch vụ may gia công</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Chúng tôi cung cấp đa dạng dịch vụ may gia công cho nhiều loại sản phẩm
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">May túi xách</h3>
                <p className="text-sm text-gray-600">Túi xách nữ, balo, túi du lịch các loại</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">May ghế sofa</h3>
                <p className="text-sm text-gray-600">Bọc ghế sofa, ghế văn phòng, nội thất</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">May giày dép</h3>
                <p className="text-sm text-gray-600">Giày da, giày thể thao, dép sandal</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">May nội thất ô tô</h3>
                <p className="text-sm text-gray-600">Bọc ghế xe, taplo, nội thất xe hơi</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">May phụ kiện</h3>
                <p className="text-sm text-gray-600">Ví da, thắt lưng, phụ kiện thời trang</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">May theo yêu cầu</h3>
                <p className="text-sm text-gray-600">Sản phẩm đặc biệt theo thiết kế riêng</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Cần dịch vụ may gia công?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Liên hệ với chúng tôi để được tư vấn chi tiết về dịch vụ may gia công
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