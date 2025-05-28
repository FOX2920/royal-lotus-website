import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Phone, Clock, ThumbsUp } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-16 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/services-bg.png" alt="Dịch vụ" fill className="object-cover" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Dịch vụ chuyên nghiệp
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
            Ngoài cung cấp nguyên liệu, chúng tôi còn có xưởng gia công bồi dán và xưởng may chất lượng cao
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button className="bg-white text-primary hover:bg-white/90 rounded-md px-6 py-2 font-medium">
              Liên hệ tư vấn
            </Button>
            <Button variant="outline" className="text-white hover:bg-white/10 border-white rounded-md px-6 py-2 font-medium">
              Xem thêm
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Dịch vụ của chúng tôi</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Cung cấp các dịch vụ chuyên nghiệp, đáp ứng mọi nhu cầu của khách hàng
            </p>
          </div>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-0 shadow-sm">
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src="/images/leather-materials.png" 
                  alt="Gia công bồi dán" 
                  fill 
                  className="object-cover transition-all duration-300 hover:scale-105" 
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full">
                    Dịch vụ nổi bật
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Gia công bồi dán</h3>
                <p className="mt-3 text-gray-600">
                  Xưởng gia công bồi dán mút, eva và các loại vật liệu khác theo yêu cầu của khách hàng với công nghệ tiên tiến.
                </p>
                <div className="mt-4 flex items-center text-gray-500 text-sm">
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  <span>98% khách hàng hài lòng</span>
                </div>
                <Link
                  href="/services/manufacturing"
                  className="mt-5 inline-flex items-center justify-center w-full bg-primary text-white py-2.5 rounded-md hover:bg-primary/90 transition-colors font-medium"
                >
                  Tìm hiểu thêm <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-0 shadow-sm">
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src="/images/car-interior.png" 
                  alt="Xưởng may" 
                  fill 
                  className="object-cover transition-all duration-300 hover:scale-105" 
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full">
                    Chất lượng cao
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Xưởng may chuyên nghiệp</h3>
                <p className="mt-3 text-gray-600">
                  Xưởng may chuyên nghiệp tại Hà Nội, sản xuất các sản phẩm từ giả da theo yêu cầu với đội ngũ thợ may lành nghề.
                </p>
                <div className="mt-4 flex items-center text-gray-500 text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Giao hàng đúng tiến độ</span>
                </div>
                <Link
                  href="/services/sewing"
                  className="mt-5 inline-flex items-center justify-center w-full bg-primary text-white py-2.5 rounded-md hover:bg-primary/90 transition-colors font-medium"
                >
                  Tìm hiểu thêm <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-0 shadow-sm">
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src="/images/handbags.png" 
                  alt="Đặt hàng theo yêu cầu" 
                  fill 
                  className="object-cover transition-all duration-300 hover:scale-105" 
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full">
                    Tùy chỉnh
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Đặt hàng theo yêu cầu</h3>
                <p className="mt-3 text-gray-600">
                  Nhận đặt hàng theo yêu cầu riêng của khách hàng với chất lượng cao, giá cả cạnh tranh và tư vấn tận tâm.
                </p>
                <div className="mt-4 flex items-center text-gray-500 text-sm">
                  <Phone className="h-4 w-4 mr-1" />
                  <span>Tư vấn miễn phí 24/7</span>
                </div>
                <Link
                  href="/services/custom"
                  className="mt-5 inline-flex items-center justify-center w-full bg-primary text-white py-2.5 rounded-md hover:bg-primary/90 transition-colors font-medium"
                >
                  Tìm hiểu thêm <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Quy trình sản xuất chuyên nghiệp</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Đảm bảo chất lượng sản phẩm và thời gian giao hàng đúng tiến độ
            </p>
          </div>

          <div className="mt-16 relative">
            {/* Timeline connector */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>

            <div className="space-y-12 relative">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <h3 className="text-xl font-semibold text-gray-900">Tiếp nhận yêu cầu</h3>
                  <p className="mt-3 text-gray-600">
                    Tiếp nhận yêu cầu từ khách hàng, tư vấn chọn vật liệu phù hợp với nhu cầu và ngân sách. Chúng tôi cung cấp các mẫu và giúp khách hàng đưa ra quyết định phù hợp nhất.
                  </p>
                </div>
                <div className="mx-auto my-6 md:my-0 flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white shadow-lg z-10">
                  <span className="text-xl font-bold">1</span>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left"></div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-1 md:order-none"></div>
                <div className="mx-auto my-6 md:my-0 flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white shadow-lg z-10 order-2 md:order-none">
                  <span className="text-xl font-bold">2</span>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left order-3 md:order-none">
                  <h3 className="text-xl font-semibold text-gray-900">Thiết kế mẫu</h3>
                  <p className="mt-3 text-gray-600">
                    Thiết kế mẫu theo yêu cầu của khách hàng, chỉnh sửa đến khi khách hàng hoàn toàn hài lòng. Chúng tôi sử dụng công nghệ thiết kế hiện đại để đảm bảo sản phẩm đúng với mong đợi.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <h3 className="text-xl font-semibold text-gray-900">Sản xuất</h3>
                  <p className="mt-3 text-gray-600">
                    Tiến hành sản xuất theo mẫu đã được duyệt với máy móc hiện đại và đội ngũ công nhân lành nghề. Mỗi công đoạn đều được kiểm tra chất lượng kỹ lưỡng để đảm bảo sản phẩm đạt tiêu chuẩn cao nhất.
                  </p>
                </div>
                <div className="mx-auto my-6 md:my-0 flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white shadow-lg z-10">
                  <span className="text-xl font-bold">3</span>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left"></div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-1 md:order-none"></div>
                <div className="mx-auto my-6 md:my-0 flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white shadow-lg z-10 order-2 md:order-none">
                  <span className="text-xl font-bold">4</span>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left order-3 md:order-none">
                  <h3 className="text-xl font-semibold text-gray-900">Giao hàng</h3>
                  <p className="mt-3 text-gray-600">
                    Kiểm tra chất lượng sản phẩm cuối cùng, đóng gói cẩn thận và giao hàng đúng tiến độ cam kết. Chúng tôi cung cấp dịch vụ giao hàng toàn quốc và hỗ trợ khách hàng trong suốt quá trình sử dụng sản phẩm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="lg:grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <Image 
                  src="/images/leather-materials.png" 
                  alt="Gia công bồi dán" 
                  fill 
                  className="object-cover h-full w-full" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 mix-blend-multiply"></div>
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-white">Gia công bồi dán</h3>
                    <p className="mt-2 text-white/90 max-w-sm mx-auto">
                      Chất lượng hàng đầu, công nghệ tiên tiến
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  Gia công bồi dán chuyên nghiệp
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Xưởng gia công bồi dán mút, eva hiện đại với công nghệ tiên tiến, đảm bảo chất lượng sản phẩm và tiến độ giao hàng.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-900">Bồi dán mút, eva chất lượng cao</h4>
                      <p className="mt-1 text-gray-600">Sử dụng nguyên liệu chất lượng, đảm bảo độ bền và tính thẩm mỹ cao.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-900">Đa dạng độ dày và mật độ</h4>
                      <p className="mt-1 text-gray-600">Đáp ứng mọi nhu cầu với đa dạng độ dày và mật độ khác nhau.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-900">Máy móc hiện đại</h4>
                      <p className="mt-1 text-gray-600">Sử dụng máy móc hiện đại, công nghệ tiên tiến và đội ngũ công nhân lành nghề.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-md px-6 py-2 font-medium">
                    Liên hệ tư vấn
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="lg:grid lg:grid-cols-2">
              <div className="p-8 lg:p-12 order-2 lg:order-1">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  Xưởng may chuyên nghiệp
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Xưởng may chuyên nghiệp tại Hà Nội, sản xuất các sản phẩm từ giả da theo yêu cầu với chất lượng cao nhất.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-900">Vỏ bọc nội thất ô tô, xe máy</h4>
                      <p className="mt-1 text-gray-600">Sản xuất vỏ bọc nội thất ô tô, xe máy với chất lượng cao và độ bền vượt trội.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-900">Túi xách, vali, giày dép</h4>
                      <p className="mt-1 text-gray-600">Sản xuất túi xách, vali, giày dép với thiết kế độc đáo và chất lượng tốt.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-900">Đội ngũ thợ may lành nghề</h4>
                      <p className="mt-1 text-gray-600">Đội ngũ thợ may lành nghề, máy móc hiện đại, đảm bảo sản phẩm chất lượng cao.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-md px-6 py-2 font-medium">
                    Liên hệ tư vấn
                  </Button>
                </div>
              </div>
              <div className="relative h-64 lg:h-auto order-1 lg:order-2">
                <Image 
                  src="/images/car-interior.png" 
                  alt="Xưởng may" 
                  fill 
                  className="object-cover h-full w-full" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-primary/80 mix-blend-multiply"></div>
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-white">Xưởng may</h3>
                    <p className="mt-2 text-white/90 max-w-sm mx-auto">
                      Chuyên nghiệp, tận tâm, chất lượng
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Sẵn sàng hợp tác?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-white/80">
            Liên hệ với chúng tôi ngay hôm nay để được tư vấn và báo giá miễn phí
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button className="bg-white text-primary hover:bg-white/90 rounded-md px-8 py-2.5 font-medium">
              Liên hệ ngay
            </Button>
            <Button variant="outline" className="text-white hover:bg-white/10 border-white rounded-md px-8 py-2.5 font-medium">
              Tìm hiểu thêm
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
