import Image from "next/image"
import { CheckCircle, Users, Award, Factory } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gray-900 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">Về chúng tôi</h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
            CÔNG TY CỔ PHẦN XUẤT NHẬP KHẨU ROYAL LOTUS - Nhà cung cấp giả da công nghiệp hàng đầu
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Giới thiệu công ty</h2>
              <p className="mt-4 text-lg text-gray-600">
                CÔNG TY CỔ PHẦN XUẤT NHẬP KHẨU ROYAL LOTUS là nhà cung cấp hàng đầu về giả da công nghiệp và nguyên phụ
                liệu cho nhiều ngành công nghiệp tại Việt Nam.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Với nhiều năm kinh nghiệm trong lĩnh vực sản xuất và cung cấp giả da, chúng tôi tự hào mang đến cho
                khách hàng những sản phẩm chất lượng cao, đa dạng về mẫu mã và màu sắc, đáp ứng mọi nhu cầu của khách
                hàng.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-0.5" />
                  <p className="text-gray-600">Cung cấp sỉ lẻ các loại giả da công nghiệp</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-0.5" />
                  <p className="text-gray-600">Nguyên phụ liệu cho ngành nội thất ô tô, xe máy</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-0.5" />
                  <p className="text-gray-600">Sofa và nội thất trong nhà</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-0.5" />
                  <p className="text-gray-600">Giày dép, cặp túi, balo, vali</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-0.5" />
                  <p className="text-gray-600">Xưởng gia công bồi dán mút, eva và xưởng may</p>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image src="/images/leather-materials.png" alt="Kho nguyên liệu" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Giá trị cốt lõi</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Những giá trị cốt lõi định hướng mọi hoạt động của chúng tôi
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Value 1 */}
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Chất lượng</h3>
              <p className="mt-2 text-gray-600">Cam kết cung cấp sản phẩm chất lượng cao, đạt tiêu chuẩn quốc tế.</p>
            </div>

            {/* Value 2 */}
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Khách hàng</h3>
              <p className="mt-2 text-gray-600">Lấy khách hàng làm trung tâm, đáp ứng mọi nhu cầu của khách hàng.</p>
            </div>

            {/* Value 3 */}
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Factory className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Đổi mới</h3>
              <p className="mt-2 text-gray-600">Không ngừng đổi mới, cải tiến sản phẩm và quy trình sản xuất.</p>
            </div>

            {/* Value 4 */}
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Hợp tác</h3>
              <p className="mt-2 text-gray-600">Xây dựng mối quan hệ hợp tác bền vững với đối tác và khách hàng.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Facilities */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Cơ sở vật chất</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Hệ thống nhà xưởng hiện đại, đáp ứng mọi nhu cầu sản xuất
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {/* Facility 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold text-gray-900">Xưởng gia công bồi dán</h3>
              <p className="mt-4 text-gray-600">
                Xưởng gia công bồi dán mút, eva hiện đại với công nghệ tiên tiến, đảm bảo chất lượng sản phẩm.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                  <span>Diện tích xưởng: 1000m²</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                  <span>Máy móc hiện đại, công nghệ tiên tiến</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                  <span>Đội ngũ công nhân lành nghề</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                  <span>Quy trình sản xuất chuyên nghiệp</span>
                </li>
              </ul>
            </div>

            {/* Facility 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold text-gray-900">Xưởng may</h3>
              <p className="mt-4 text-gray-600">
                Xưởng may chuyên nghiệp với đội ngũ thợ may lành nghề, sản xuất các sản phẩm từ giả da theo yêu cầu.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                  <span>Diện tích xưởng: 800m²</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                  <span>Máy may công nghiệp hiện đại</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                  <span>Đội ngũ thợ may lành nghề</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                  <span>Sản xuất theo yêu cầu của khách hàng</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
