import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Truck, Factory, Award, Users, Phone } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero relative py-20 md:py-32">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Nhà cung cấp giả da công nghiệp hàng đầu
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
            Cung cấp sỉ lẻ các loại giả da công nghiệp, nguyên phụ liệu cho ngành nội thất ô tô, xe máy, sofa và nội
            thất trong nhà, giày dép, cặp túi balo vali.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-x-6">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 shadow">
              <Link href="/products">Xem sản phẩm</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20">
              <Link href="/contact">Liên hệ ngay</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sản phẩm nổi bật</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Chúng tôi cung cấp đa dạng các loại giả da chất lượng cao cho nhiều ngành công nghiệp
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Product 1 */}
            <Card className="overflow-hidden transition-all duration-300 product-card">
              <div className="relative h-64 w-full">
                <Image src="/images/car-interior.png" alt="Nội thất ô tô" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Nội thất ô tô</h3>
                <p className="mt-2 text-sm text-gray-600">Giả da cao cấp dùng cho ghế, vô lăng và nội thất ô tô</p>
                <Link
                  href="/products/automotive"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Xem thêm <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Product 2 */}
            <Card className="overflow-hidden transition-all duration-300 product-card">
              <div className="relative h-64 w-full">
                <Image src="/images/leather-sofa.png" alt="Nội thất sofa" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Nội thất sofa</h3>
                <p className="mt-2 text-sm text-gray-600">Giả da bền đẹp cho sofa và nội thất trong nhà</p>
                <Link
                  href="/products/furniture"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Xem thêm <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Product 3 */}
            <Card className="overflow-hidden transition-all duration-300 product-card">
              <div className="relative h-64 w-full">
                <Image src="/images/handbags.png" alt="Cặp túi, balo, vali" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Cặp túi, balo, vali</h3>
                <p className="mt-2 text-sm text-gray-600">Giả da đa dạng màu sắc cho túi xách và vali</p>
                <Link
                  href="/products/bags"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Xem thêm <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Product 4 */}
            <Card className="overflow-hidden transition-all duration-300 product-card">
              <div className="relative h-64 w-full">
                <Image src="/images/messenger-bag.png" alt="Giày dép" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Giày dép</h3>
                <p className="mt-2 text-sm text-gray-600">Giả da chất lượng cao cho ngành sản xuất giày dép</p>
                <Link
                  href="/products/shoes"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Xem thêm <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/products">Xem tất cả sản phẩm</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Dịch vụ của chúng tôi</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Ngoài cung cấp nguyên liệu, chúng tôi còn có xưởng gia công bồi dán và xưởng may
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border transition-all duration-300 hover:shadow-md hover:border-primary/20">
              <Factory className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">Gia công bồi dán</h3>
              <p className="mt-4 text-gray-600">
                Xưởng gia công bồi dán mút, eva và các loại vật liệu khác theo yêu cầu của khách hàng.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                  <span>Bồi dán mút, eva chất lượng cao</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                  <span>Đa dạng độ dày và mật độ</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                  <span>Đáp ứng mọi yêu cầu kỹ thuật</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link href="/services/manufacturing" className="inline-flex items-center text-primary hover:underline">
                  Tìm hiểu thêm <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border transition-all duration-300 hover:shadow-md hover:border-primary/20">
              <Factory className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">Xưởng may</h3>
              <p className="mt-4 text-gray-600">
                Xưởng may chuyên nghiệp tại Hà Nội, sản xuất các sản phẩm từ giả da theo yêu cầu.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                  <span>Vỏ bọc nội thất ô tô, xe máy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                  <span>Cặp túi, vali, giày dép</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                  <span>Bọc sofa và nội thất</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link href="/services/sewing" className="inline-flex items-center text-primary hover:underline">
                  Tìm hiểu thêm <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border transition-all duration-300 hover:shadow-md hover:border-primary/20">
              <Truck className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">Đặt hàng theo yêu cầu</h3>
              <p className="mt-4 text-gray-600">
                Nhận đặt hàng theo yêu cầu riêng của khách hàng với chất lượng cao, giá cả cạnh tranh.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                  <span>Tư vấn chọn vật liệu phù hợp</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                  <span>Thiết kế theo yêu cầu</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                  <span>Giao hàng đúng tiến độ</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link href="/services/custom" className="inline-flex items-center text-primary hover:underline">
                  Tìm hiểu thêm <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Tại sao chọn Royal Lotus?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Chúng tôi tự hào là đối tác tin cậy của nhiều doanh nghiệp trong ngành
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border text-center transition-all duration-300 hover:shadow-md hover:border-primary/20">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Chất lượng cao</h3>
              <p className="mt-2 text-gray-600">
                Sản phẩm chất lượng cao, đạt tiêu chuẩn quốc tế, bền đẹp theo thời gian.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border text-center transition-all duration-300 hover:shadow-md hover:border-primary/20">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Giao hàng nhanh chóng</h3>
              <p className="mt-2 text-gray-600">Hệ thống giao hàng nhanh chóng, đảm bảo đúng tiến độ cho khách hàng.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border text-center transition-all duration-300 hover:shadow-md hover:border-primary/20">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Factory className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Xưởng sản xuất hiện đại</h3>
              <p className="mt-2 text-gray-600">
                Xưởng sản xuất hiện đại, đội ngũ công nhân lành nghề, đảm bảo chất lượng sản phẩm.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border text-center transition-all duration-300 hover:shadow-md hover:border-primary/20">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Dịch vụ khách hàng</h3>
              <p className="mt-2 text-gray-600">
                Đội ngũ tư vấn chuyên nghiệp, hỗ trợ khách hàng 24/7, giải đáp mọi thắc mắc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Contact Button - Chỉ hiển thị trên mobile */}
      <div className="fixed bottom-6 right-6 z-50 lg:hidden">
        <a
          href="tel:0911219966"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg"
          aria-label="Gọi ngay"
        >
          <Phone className="h-6 w-6" />
        </a>
      </div>
    </div>
  )
}
