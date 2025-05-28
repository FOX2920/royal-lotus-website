import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Truck, Factory, Award, Users, Phone, Star, Quote, TrendingUp, Clock, Shield, Zap, Heart, Globe } from "lucide-react"
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
      
      {/* About Section */}
      <AboutRoyalLotusSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Featured Products Section - Improved */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <Star className="w-4 h-4 mr-2" />
              Sản phẩm chất lượng cao
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Sản phẩm nổi bật
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
              Chúng tôi cung cấp đa dạng các loại giả da chất lượng cao cho nhiều ngành công nghiệp, 
              từ nội thất ô tô đến thời trang và gia dụng
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Product 1 - Enhanced */}
            <Card className="group overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-0 shadow-lg bg-white">
              <div className="relative h-72 w-full overflow-hidden">
                <Image 
                  src="/images/car-interior.png" 
                  alt="Nội thất ô tô" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-gray-800">Cao cấp</span>
              </div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex items-center text-white">
                    <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                    </div>
                    <span className="text-sm font-medium">(4.9)</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Nội thất ô tô</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Giả da cao cấp dùng cho ghế, vô lăng và nội thất ô tô với độ bền vượt trội
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Shield className="w-4 h-4 mr-1" />
                    Bảo hành 2 năm
                </div>
                <Link
                  href="/products/automotive"
                    className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors group/link"
                >
                    Xem thêm 
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
                </div>
              </CardContent>
            </Card>

            {/* Product 2 - Enhanced */}
            <Card className="group overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-0 shadow-lg bg-white">
              <div className="relative h-72 w-full overflow-hidden">
                <Image 
                  src="/images/leather-sofa.png" 
                  alt="Nội thất sofa" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-gray-800">Bán chạy</span>
              </div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex items-center text-white">
                    <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                    </div>
                    <span className="text-sm font-medium">(4.8)</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Nội thất sofa</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Giả da bền đẹp cho sofa và nội thất trong nhà, chống thấm nước tuyệt vời
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Heart className="w-4 h-4 mr-1" />
                    Thân thiện môi trường
                </div>
                <Link
                  href="/products/furniture"
                    className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors group/link"
                >
                    Xem thêm 
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
                </div>
              </CardContent>
            </Card>

            {/* Product 3 - Enhanced */}
            <Card className="group overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-0 shadow-lg bg-white">
              <div className="relative h-72 w-full overflow-hidden">
                <Image 
                  src="/images/school-bags.jpg" 
                  alt="Cặp sách, túi xách" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-gray-800">Thời trang</span>
              </div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex items-center text-white">
                    <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                    </div>
                    <span className="text-sm font-medium">(4.7)</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cặp sách, túi xách</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Giả da chất lượng cao cho cặp sách, túi xách và phụ kiện thời trang
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Zap className="w-4 h-4 mr-1" />
                    Chống trầy xước
                </div>
                <Link
                  href="/products/bags"
                    className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors group/link"
                >
                    Xem thêm 
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
                </div>
              </CardContent>
            </Card>

            {/* Product 4 - Enhanced */}
            <Card className="group overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-0 shadow-lg bg-white">
              <div className="relative h-72 w-full overflow-hidden">
                <Image 
                  src="/images/messenger-bag.png" 
                  alt="Giày dép" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-gray-800">Chuyên nghiệp</span>
              </div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex items-center text-white">
                    <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                    </div>
                    <span className="text-sm font-medium">(4.9)</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Giày dép</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Giả da chất lượng cao cho ngành sản xuất giày dép, mềm mại và bền bỉ
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Globe className="w-4 h-4 mr-1" />
                    Xuất khẩu quốc tế
                </div>
                <Link
                  href="/products/shoes"
                    className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors group/link"
                >
                    Xem thêm 
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="/products" className="inline-flex items-center">
                Xem tất cả sản phẩm
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <Factory className="w-4 h-4 mr-2" />
              Dịch vụ chuyên nghiệp
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Dịch vụ của chúng tôi
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
              Ngoài cung cấp nguyên liệu chất lượng cao, chúng tôi còn có xưởng gia công bồi dán 
              và xưởng may hiện đại để phục vụ mọi nhu cầu của khách hàng
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 - Enhanced */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/20">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Factory className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Gia công bồi dán</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Xưởng gia công bồi dán mút, eva và các loại vật liệu khác theo yêu cầu của khách hàng 
                với công nghệ hiện đại và đội ngũ thợ lành nghề.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-1" />
                  <span className="text-gray-700">Bồi dán mút, eva chất lượng cao</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-1" />
                  <span className="text-gray-700">Đa dạng độ dày và mật độ</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-1" />
                  <span className="text-gray-700">Đáp ứng mọi yêu cầu kỹ thuật</span>
                </li>
              </ul>
              <Link 
                href="/services/manufacturing" 
                className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors group/link"
              >
                Tìm hiểu thêm 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>

            {/* Service 2 - Enhanced */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/20">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Factory className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Xưởng may</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Xưởng may chuyên nghiệp tại Hà Nội, sản xuất các sản phẩm từ giả da theo yêu cầu 
                với máy móc hiện đại và quy trình sản xuất chuẩn quốc tế.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-1" />
                  <span className="text-gray-700">Vỏ bọc nội thất ô tô, xe máy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-1" />
                  <span className="text-gray-700">Cặp túi, vali, giày dép</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-1" />
                  <span className="text-gray-700">Bọc sofa và nội thất</span>
                </li>
              </ul>
              <Link 
                href="/services/sewing" 
                className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors group/link"
              >
                Tìm hiểu thêm 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>

            {/* Service 3 - Enhanced */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/20 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Truck className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Đặt hàng theo yêu cầu</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nhận đặt hàng theo yêu cầu riêng của khách hàng với chất lượng cao, giá cả cạnh tranh 
                và thời gian giao hàng nhanh chóng.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-1" />
                  <span className="text-gray-700">Tư vấn chọn vật liệu phù hợp</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-1" />
                  <span className="text-gray-700">Thiết kế theo yêu cầu</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-1" />
                  <span className="text-gray-700">Giao hàng đúng tiến độ</span>
                </li>
              </ul>
              <Link 
                href="/services/custom" 
                className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors group/link"
              >
                Tìm hiểu thêm 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <GallerySection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Why Choose Us - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <Award className="w-4 h-4 mr-2" />
              Ưu điểm vượt trội
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Tại sao chọn Royal Lotus?
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
              Chúng tôi tự hào là đối tác tin cậy của nhiều doanh nghiệp trong ngành với 
              những ưu điểm vượt trội và dịch vụ chuyên nghiệp
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Feature 1 - Enhanced */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/20">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Chất lượng cao</h3>
              <p className="text-gray-600 leading-relaxed">
                Sản phẩm chất lượng cao, đạt tiêu chuẩn quốc tế, bền đẹp theo thời gian 
                với công nghệ sản xuất hiện đại.
              </p>
            </div>

            {/* Feature 2 - Enhanced */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/20">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Truck className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Giao hàng nhanh chóng</h3>
              <p className="text-gray-600 leading-relaxed">
                Hệ thống giao hàng nhanh chóng, đảm bảo đúng tiến độ cho khách hàng 
                với mạng lưới vận chuyển toàn quốc.
              </p>
            </div>

            {/* Feature 3 - Enhanced */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/20">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Factory className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Xưởng sản xuất hiện đại</h3>
              <p className="text-gray-600 leading-relaxed">
                Xưởng sản xuất hiện đại, đội ngũ công nhân lành nghề, đảm bảo chất lượng sản phẩm 
                với quy trình kiểm soát chất lượng nghiêm ngặt.
              </p>
            </div>

            {/* Feature 4 - Enhanced */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/20">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dịch vụ khách hàng</h3>
              <p className="text-gray-600 leading-relaxed">
                Đội ngũ tư vấn chuyên nghiệp, hỗ trợ khách hàng 24/7, giải đáp mọi thắc mắc 
                với thái độ nhiệt tình và chuyên nghiệp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section - Enhanced */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary/90 to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            Sẵn sàng bắt đầu dự án của bạn?
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-primary-foreground/90 mb-10 leading-relaxed">
            Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí và báo giá tốt nhất. 
            Đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn 24/7.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="/contact" className="inline-flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Liên hệ tư vấn
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold transition-all duration-300">
              <Link href="/products" className="inline-flex items-center">
                Xem sản phẩm
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
