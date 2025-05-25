import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const galleryImages = [
  {
    id: 1,
    src: "/images/showroom-1.jpg",
    alt: "Phòng hàng mẫu Royal Lotus",
    title: "Showroom chính",
    description: "Không gian trưng bày sản phẩm hiện đại"
  },
  {
    id: 2,
    src: "/images/showroom-2.jpg", 
    alt: "Góc khác của phòng hàng mẫu",
    title: "Khu vực mẫu vật",
    description: "Đa dạng các loại da và màu sắc"
  },
  {
    id: 3,
    src: "/images/research-development.jpg",
    alt: "Phòng nghiên cứu và phát triển",
    title: "Phòng R&D",
    description: "Nghiên cứu và phát triển sản phẩm mới"
  },
  {
    id: 4,
    src: "/images/school-bags.jpg",
    alt: "Sản phẩm cặp sách",
    title: "Cặp sách học sinh",
    description: "Sản phẩm hoàn thiện chất lượng cao"
  }
]

export default function GallerySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Thư viện hình ảnh
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Khám phá showroom và sản phẩm của Royal Lotus
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <Card key={image.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={image.src} 
                  alt={image.alt} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{image.title}</h3>
                <p className="text-sm text-gray-600">{image.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 