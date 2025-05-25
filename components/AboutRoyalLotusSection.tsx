import { CheckCircle, Truck, Award, Users, Factory } from "lucide-react"

export default function AboutRoyalLotusSection() {
  return (
    <section className="bg-white py-12 px-4 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">ROYAL LOTUS – Đam mê từng tấm da</h2>
      <p className="mb-4 text-lg">
        ROYAL LOTUS là nơi tụi ta đam mê từng tấm da PVC, simili, da microfiber, da công nghiệp – không chỉ là nguyên liệu, mà là chất liệu tạo nên sản phẩm đẹp và bền bỉ.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-base">
        <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" /><span><b>Chuyên cung cấp</b> các loại da công nghiệp chất lượng cao, nhiều mẫu mã đẹp mắt</span></li>
        <li className="flex items-start"><Award className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" /><span><b>Nhập khẩu chính ngạch</b>, rõ ràng nguồn gốc, uy tín lâu năm</span></li>
        <li className="flex items-start"><Truck className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" /><span><b>Giao hàng nhanh</b>, tư vấn tận tâm, hỗ trợ cả sỉ và lẻ</span></li>
        <li className="flex items-start"><Factory className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" /><span><b>Cung cấp sỉ lẻ</b> các loại giả da công nghiệp, nguyên phụ liệu NỘI THẤT ô tô, xe máy, SOFA, nội thất trong nhà, GIÀY DÉP, CẶP TÚI, balo vali.</span></li>
        <li className="flex items-start"><Users className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" /><span><b>Có xưởng gia công</b> bồi dán mút, eva, và xưởng may tại Hà Nội.</span></li>
      </ul>
    </section>
  )
} 