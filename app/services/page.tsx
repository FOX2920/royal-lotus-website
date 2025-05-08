import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gray-900 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Dịch vụ của chúng tôi
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
            Ngoài cung cấp nguyên liệu, chúng tôi còn có xưởng gia công bồi dán và xưởng may
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <Card className="overflow-hidden transition-all duration-300 product-card">
              <div className="relative h-64 w-full">
                <Image src="/images/leather-materials.png" alt="Gia công bồi dán" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Gia công bồi dán</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Xưởng gia công bồi dán mút, eva và các loại vật liệu khác theo yêu cầu của khách hàng.
                </p>
                <Link
                  href="/services/manufacturing"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Xem thêm <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="overflow-hidden transition-all duration-300 product-card">
              <div className="relative h-64 w-full">
                <Image src="/images/car-interior.png" alt="Xưởng may" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Xưởng may</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Xưởng may chuyên nghiệp tại Hà Nội, sản xuất các sản phẩm từ giả da theo yêu cầu.
                </p>
                <Link
                  href="/services/sewing"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Xem thêm <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="overflow-hidden transition-all duration-300 product-card">
              <div className="relative h-64 w-full">
                <Image src="/images/handbags.png" alt="Đặt hàng theo yêu cầu" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Đặt hàng theo yêu cầu</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Nhận đặt hàng theo yêu cầu riêng của khách hàng với chất lượng cao, giá cả cạnh tranh.
                </p>
                <Link
                  href="/services/custom"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Xem thêm <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Quy trình sản xuất</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Quy trình sản xuất chuyên nghiệp, đảm bảo chất lượng sản phẩm
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Tiếp nhận yêu cầu</h3>
              <p className="mt-2 text-gray-600">Tiếp nhận yêu cầu từ khách hàng, tư vấn chọn vật liệu phù hợp.</p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Thiết kế mẫu</h3>
              <p className="mt-2 text-gray-600">
                Thiết kế mẫu theo yêu cầu của khách hàng, chỉnh sửa đến khi khách hàng hài lòng.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Sản xuất</h3>
              <p className="mt-2 text-gray-600">
                Tiến hành sản xuất theo mẫu đã được duyệt, kiểm tra chất lượng từng công đoạn.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white mb-4">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Giao hàng</h3>
              <p className="mt-2 text-gray-600">
                Kiểm tra chất lượng sản phẩm cuối cùng, đóng gói và giao hàng đúng tiến độ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Gia công bồi dán chuyên nghiệp
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Xưởng gia công bồi dán mút, eva hiện đại với công nghệ tiên tiến, đảm bảo chất lượng sản phẩm.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-0.5" />
                  <p className="text-gray-600">Bồi dán mút, eva chất lượng cao</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-0.5" />
                  <p className="text-gray-600">Đa dạng độ dày và mật độ</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-0.5" />
                  <p className="text-gray-600">Đáp ứng mọi yêu cầu kỹ thuật</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-0.5" />
                  <p className="text-gray-600">Máy móc hiện đại, công nghệ tiên tiến</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-0.5" />
                  <p className="text-gray-600">Đội ngũ công nhân lành nghề</p>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image src="/images/leather-materials.png" alt="Gia công bồi dán" fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="mt-16 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Xưởng may chuyên nghiệp</h2>
              <p className="mt-4 text-lg text-gray-600">
                Xưởng may chuyên nghiệp tại Hà Nội, sản xuất các sản phẩm từ giả da theo yêu cầu.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-0.5" />
                  <p className="text-gray-600">Vỏ bọc nội thất ô tô, xe máy</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-0.5" />
                  <p className="text-gray-600">Cặp túi, vali, giày dép</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-0.5" />
                  <p className="text-gray-600">Bọc sofa và nội thất</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-0.5" />
                  <p className="text-gray-600">Máy may công nghiệp hiện đại</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-0.5" />
                  <p className="text-gray-600">Đội ngũ thợ may lành nghề</p>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:order-1">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image src="/images/car-interior.png" alt="Xưởng may" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
