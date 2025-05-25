import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Truck, Factory, Award, Users, Phone, Star, Quote, TrendingUp, Clock, Shield } from "lucide-react"
import HeroCarousel from "@/components/hero-carousel"
import TestimonialsSection from "@/components/testimonials-section"
import StatsSection from "@/components/stats-section"
import FAQSection from "@/components/faq-section"
import AboutRoyalLotusSection from "@/components/AboutRoyalLotusSection"
import GallerySection from "@/components/gallery-section"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Carousel Section */}
      <HeroCarousel />
      <AboutRoyalLotusSection />

      {/* Stats Section */}
      <StatsSection />

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
            <Card className="overflow-hidden transition-all duration-300 product-card group">
              <div className="relative h-64 w-full overflow-hidden">
                <Image src="/images/car-interior.png" alt="Nội thất ô tô" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Nội thất ô tô</h3>
                <p className="mt-2 text-sm text-gray-600">Giả da cao cấp dùng cho ghế, vô lăng và nội thất ô tô</p>
                <div className="mt-3 flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">(4.9)</span>
                </div>
                <Link
                  href="/products/automotive"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline group-hover:text-primary/80"
                >
                  Xem thêm <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            {/* Product 2 */}
            <Card className="overflow-hidden transition-all duration-300 product-card group">
              <div className="relative h-64 w-full overflow-hidden">
                <Image src="/images/leather-sofa.png" alt="Nội thất sofa" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Nội thất sofa</h3>
                <p className="mt-2 text-sm text-gray-600">Giả da bền đẹp cho sofa và nội thất trong nhà</p>
                <div className="mt-3 flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">(4.8)</span>
                </div>
                <Link
                  href="/products/furniture"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline group-hover:text-primary/80"
                >
                  Xem thêm <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            {/* Product 3 */}
            <Card className="overflow-hidden transition-all duration-300 product-card group">
              <div className="relative h-64 w-full overflow-hidden">
                <Image src="/images/school-bags.jpg" alt="Cặp sách, túi xách" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Cặp sách, túi xách</h3>
                <p className="mt-2 text-sm text-gray-600">Giả da chất lượng cao cho cặp sách, túi xách và phụ kiện</p>
                <div className="mt-3 flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">(4.7)</span>
                </div>
                <Link
                  href="/products/bags"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline group-hover:text-primary/80"
                >
                  Xem thêm <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            {/* Product 4 */}
            <Card className="overflow-hidden transition-all duration-300 product-card group">
              <div className="relative h-64 w-full overflow-hidden">
                <Image src="/images/messenger-bag.png" alt="Giày dép" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Giày dép</h3>
                <p className="mt-2 text-sm text-gray-600">Giả da chất lượng cao cho ngành sản xuất giày dép</p>
                <div className="mt-3 flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">(4.9)</span>
                </div>
                <Link
                  href="/products/shoes"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline group-hover:text-primary/80"
                >
                  Xem thêm <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-primary hover:bg-primary/90 px-8 py-3 text-lg">
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
            <div className="bg-white p-8 rounded-lg shadow-sm border transition-all duration-300 hover:shadow-lg hover:border-primary/20 group">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6 group-hover:bg-primary/20 transition-colors">
                <Factory className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Gia công bồi dán</h3>
              <p className="text-gray-600 mb-6">
                Xưởng gia công bồi dán mút, eva và các loại vật liệu khác theo yêu cầu của khách hàng.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                  <span className="text-sm">Bồi dán mút, eva chất lượng cao</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                  <span className="text-sm">Đa dạng độ dày và mật độ</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                  <span className="text-sm">Đáp ứng mọi yêu cầu kỹ thuật</span>
                </li>
              </ul>
              <Link href="/services/manufacturing" className="inline-flex items-center text-primary hover:underline font-medium">
                Tìm hiểu thêm <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border transition-all duration-300 hover:shadow-lg hover:border-primary/20 group">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6 group-hover:bg-primary/20 transition-colors">
                <Factory className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Xưởng may</h3>
              <p className="text-gray-600 mb-6">
                Xưởng may chuyên nghiệp tại Hà Nội, sản xuất các sản phẩm từ giả da theo yêu cầu.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                  <span className="text-sm">Vỏ bọc nội thất ô tô, xe máy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                  <span className="text-sm">Cặp túi, vali, giày dép</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                  <span className="text-sm">Bọc sofa và nội thất</span>
                </li>
              </ul>
              <Link href="/services/sewing" className="inline-flex items-center text-primary hover:underline font-medium">
                Tìm hiểu thêm <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border transition-all duration-300 hover:shadow-lg hover:border-primary/20 group">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6 group-hover:bg-primary/20 transition-colors">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Đặt hàng theo yêu cầu</h3>
              <p className="text-gray-600 mb-6">
                Nhận đặt hàng theo yêu cầu riêng của khách hàng với chất lượng cao, giá cả cạnh tranh.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                  <span className="text-sm">Tư vấn chọn vật liệu phù hợp</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                  <span className="text-sm">Thiết kế theo yêu cầu</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                  <span className="text-sm">Giao hàng đúng tiến độ</span>
                </li>
              </ul>
              <Link href="/services/custom" className="inline-flex items-center text-primary hover:underline font-medium">
                Tìm hiểu thêm <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <GallerySection />

      {/* Testimonials Section */}
      <TestimonialsSection />

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
            <div className="bg-white p-6 rounded-lg shadow-sm border text-center transition-all duration-300 hover:shadow-md hover:border-primary/20 group">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Chất lượng cao</h3>
              <p className="mt-2 text-gray-600">
                Sản phẩm chất lượng cao, đạt tiêu chuẩn quốc tế, bền đẹp theo thời gian.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border text-center transition-all duration-300 hover:shadow-md hover:border-primary/20 group">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Giao hàng nhanh chóng</h3>
              <p className="mt-2 text-gray-600">Hệ thống giao hàng nhanh chóng, đảm bảo đúng tiến độ cho khách hàng.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border text-center transition-all duration-300 hover:shadow-md hover:border-primary/20 group">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Factory className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Xưởng sản xuất hiện đại</h3>
              <p className="mt-2 text-gray-600">
                Xưởng sản xuất hiện đại, đội ngũ công nhân lành nghề, đảm bảo chất lượng sản phẩm.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border text-center transition-all duration-300 hover:shadow-md hover:border-primary/20 group">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
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

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Sẵn sàng bắt đầu dự án của bạn?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-primary-foreground/90">
            Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí và báo giá tốt nhất
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              <Link href="/contact">Liên hệ tư vấn</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link href="/products">Xem sản phẩm</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
