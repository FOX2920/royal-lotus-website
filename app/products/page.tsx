import Image from "next/image"
import Link from "next/link"
import { Search, Filter, Grid3X3, List, ArrowRight } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gray-900 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Sản phẩm của chúng tôi
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
            Đa dạng các loại da công nghiệp chất lượng cao, nhiều mẫu mã đẹp mắt
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Tìm kiếm sản phẩm..."
                className="w-full pl-9 rounded-md border-gray-300 focus:border-primary focus:ring-primary"
              />
            </div>

            <div className="flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    <span>Lọc</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem>Mới nhất</DropdownMenuItem>
                  <DropdownMenuItem>Giá: Thấp đến cao</DropdownMenuItem>
                  <DropdownMenuItem>Giá: Cao đến thấp</DropdownMenuItem>
                  <DropdownMenuItem>Phổ biến nhất</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Tabs defaultValue="grid" className="hidden md:block">
                <TabsList className="grid w-auto grid-cols-2">
                  <TabsTrigger value="grid" className="px-3">
                    <Grid3X3 className="h-4 w-4" />
                  </TabsTrigger>
                  <TabsTrigger value="list" className="px-3">
                    <List className="h-4 w-4" />
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="rounded-full">
              Da PVC
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Da Simili
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Da Microfiber
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Da công nghiệp
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Nội thất ô tô
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Sofa
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">Danh mục sản phẩm</h2>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Category 1 */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative h-64 w-full">
                <Image 
                  src="/images/automotive-leather.png" 
                  alt="Nguyên liệu nội thất ô tô" 
                  fill 
                  className="object-cover transition-all duration-300 hover:scale-105" 
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Nguyên liệu nội thất ô tô</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Da công nghiệp cao cấp dùng cho ghế, bọc vô lăng và nội thất ô tô
                </p>
                <Link
                  href="/products/automotive"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Xem thêm <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Category 2 */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative h-64 w-full">
                <Image 
                  src="/images/furniture-leather.png" 
                  alt="Nguyên liệu nội thất" 
                  fill 
                  className="object-cover transition-all duration-300 hover:scale-105" 
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Nguyên liệu nội thất</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Da công nghiệp cho sofa, ghế và các sản phẩm nội thất khác
                </p>
                <Link
                  href="/products/furniture"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Xem thêm <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Category 3 */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative h-64 w-full">
                <Image 
                  src="/images/bags-leather.png" 
                  alt="Nguyên liệu túi xách" 
                  fill 
                  className="object-cover transition-all duration-300 hover:scale-105" 
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Nguyên liệu túi xách</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Da công nghiệp dùng cho túi xách, vali, balo và các sản phẩm thời trang
                </p>
                <Link
                  href="/products/bags"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Xem thêm <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Category 4 */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative h-64 w-full">
                <Image 
                  src="/images/shoes-leather.png" 
                  alt="Nguyên liệu giày dép" 
                  fill 
                  className="object-cover transition-all duration-300 hover:scale-105" 
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Nguyên liệu giày dép</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Da công nghiệp chất lượng cao dùng cho sản xuất giày dép các loại
                </p>
                <Link
                  href="/products/shoes"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Xem thêm <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">Sản phẩm nổi bật</h2>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Product 1 */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg product-card">
              <div className="relative h-64 w-full">
                <Image 
                  src="/images/product-1.png" 
                  alt="Da PVC cao cấp" 
                  fill 
                  className="object-cover transition-all duration-300 hover:scale-105" 
                />
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  -15%
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Da PVC cao cấp</h3>
                <p className="mt-1 text-sm text-gray-600">Chất lượng Hàn Quốc</p>
                <div className="mt-2 flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-gray-900">195.000đ</span>
                    <span className="ml-2 text-sm text-gray-500 line-through">230.000đ</span>
                  </div>
                  <div className="text-sm text-gray-500">100+ đã bán</div>
                </div>
              </CardContent>
            </Card>

            {/* Product 2 */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg product-card">
              <div className="relative h-64 w-full">
                <Image 
                  src="/images/product-2.png" 
                  alt="Da Simili mềm mịn" 
                  fill 
                  className="object-cover transition-all duration-300 hover:scale-105" 
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Da Simili mềm mịn</h3>
                <p className="mt-1 text-sm text-gray-600">Siêu bền, chống thấm nước</p>
                <div className="mt-2 flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-gray-900">180.000đ</span>
                  </div>
                  <div className="text-sm text-gray-500">80+ đã bán</div>
                </div>
              </CardContent>
            </Card>

            {/* Product 3 */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg product-card">
              <div className="relative h-64 w-full">
                <Image 
                  src="/images/product-3.png" 
                  alt="Da Microfiber cao cấp" 
                  fill 
                  className="object-cover transition-all duration-300 hover:scale-105" 
                />
                <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  Mới
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Da Microfiber cao cấp</h3>
                <p className="mt-1 text-sm text-gray-600">Nhập khẩu chính hãng</p>
                <div className="mt-2 flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-gray-900">250.000đ</span>
                  </div>
                  <div className="text-sm text-gray-500">50+ đã bán</div>
                </div>
              </CardContent>
            </Card>

            {/* Product 4 */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg product-card">
              <div className="relative h-64 w-full">
                <Image 
                  src="/images/product-4.png" 
                  alt="Da công nghiệp vân gỗ" 
                  fill 
                  className="object-cover transition-all duration-300 hover:scale-105" 
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Da công nghiệp vân gỗ</h3>
                <p className="mt-1 text-sm text-gray-600">Phong cách hiện đại</p>
                <div className="mt-2 flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-gray-900">210.000đ</span>
                  </div>
                  <div className="text-sm text-gray-500">30+ đã bán</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 text-center">
            <Button variant="outline" className="rounded-full px-8 py-2 font-medium">
              Xem tất cả sản phẩm
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Tại sao chọn Royal Lotus?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Chúng tôi cam kết mang đến cho khách hàng những sản phẩm chất lượng cao, giá cả cạnh tranh
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Benefit 1 */}
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Chất lượng cao cấp</h3>
              <p className="mt-2 text-gray-600">Sản phẩm nhập khẩu chính ngạch, rõ ràng nguồn gốc</p>
            </div>

            {/* Benefit 2 */}
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Giá cả cạnh tranh</h3>
              <p className="mt-2 text-gray-600">Cam kết giá tốt nhất trên thị trường, phù hợp mọi nhu cầu</p>
            </div>

            {/* Benefit 3 */}
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Giao hàng nhanh chóng</h3>
              <p className="mt-2 text-gray-600">Giao hàng toàn quốc, đảm bảo an toàn và đúng tiến độ</p>
            </div>

            {/* Benefit 4 */}
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Tư vấn tận tâm</h3>
              <p className="mt-2 text-gray-600">Đội ngũ tư vấn chuyên nghiệp, hỗ trợ cả sỉ và lẻ</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Bạn cần tư vấn?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-white/80">
            Hãy liên hệ với chúng tôi để được tư vấn chi tiết về sản phẩm và dịch vụ
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-2 font-medium">
              Liên hệ ngay
            </Button>
            <Button variant="outline" className="text-white hover:bg-white/10 border-white rounded-full px-8 py-2 font-medium">
              Xem bảng giá
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
import Image from "next/image"
import Link from "next/link"
import { Search, Filter, Grid3X3, List, ArrowRight } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gray-900 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Sản phẩm của chúng tôi
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
            Đa dạng các loại da công nghiệp chất lượng cao, nhiều mẫu mã đẹp mắt
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Tìm kiếm sản phẩm..."
                className="w-full pl-9 rounded-md border-gray-300 focus:border-primary focus:ring-primary"
              />
            </div>

            <div className="flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    <span>Lọc</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem>Mới nhất</DropdownMenuItem>
                  <DropdownMenuItem>Giá: Thấp đến cao</DropdownMenuItem>
                  <DropdownMenuItem>Giá: Cao đến thấp</DropdownMenuItem>
                  <DropdownMenuItem>Phổ biến nhất</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Tabs defaultValue="grid" className="hidden md:block">
                <TabsList className="grid w-auto grid-cols-2">
                  <TabsTrigger value="grid" className="px-3">
                    <Grid3X3 className="h-4 w-4" />
                  </TabsTrigger>
                  <TabsTrigger value="list" className="px-3">
                    <List className="h-4 w-4" />
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="rounded-full">
              Da PVC
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Da Simili
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Da Microfiber
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Da công nghiệp
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Nội thất ô tô
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Sofa
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">Danh mục sản phẩm</h2>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Category 1 */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative h-64 w-full">
                <Image 
                  src="/images/automotive-leather.png" 
                  alt="Nguyên liệu nội thất ô tô" 
                  fill 
                  className="object-cover transition-all duration-300 hover:scale-105" 
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Nguyên liệu nội thất ô tô</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Da công nghiệp cao cấp dùng cho ghế, bọc vô lăng và nội thất ô tô
                </p>
                <Link
                  href="/products/automotive"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Xem thêm <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Category 2 */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative h-64 w-full">
                <Image 
                  src="/images/furniture-leather.png" 
                  alt="Nguyên liệu nội thất" 
                  fill 
                  className="object-cover transition-all duration-300 hover:scale-105" 
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Nguyên liệu nội thất</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Da công nghiệp cho sofa, ghế và các sản phẩm nội thất khác
                </p>
                <Link
                  href="/products/furniture"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Xem thêm <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Category 3 */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative h-64 w-full">
                <Image 
                  src="/images/bags-leather.png" 
                  alt="Nguyên liệu túi xách" 
                  fill 
                  className="object-cover transition-all duration-300 hover:scale-105" 
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Nguyên liệu túi xách</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Da công nghiệp dùng cho túi xách, vali, balo và các sản phẩm thời trang
                </p>
                <Link
                  href="/products/bags"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Xem thêm <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Category 4 */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative h-64 w-full">
                <Image 
                  src="/images/shoes-leather.png" 
                  alt="Nguyên liệu giày dép" 
                  fill 
                  className="object-cover transition-all duration-300 hover:scale-105" 
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Nguyên liệu giày dép</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Da công nghiệp chất lượng cao dùng cho sản xuất giày dép các loại
                </p>
                <Link
                  href="/products/shoes"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Xem thêm <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">Sản phẩm nổi bật</h2>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Product 1 */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg product-card">
              <div className="relative h-64 w-full">
                <Image 
                  src="/images/product-1.png" 
                  alt="Da PVC cao cấp" 
                  fill 
                  className="object-cover transition-all duration-300 hover:scale-105" 
                />
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  -15%
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Da PVC cao cấp</h3>
                <p className="mt-1 text-sm text-gray-600">Chất lượng Hàn Quốc</p>
                <div className="mt-2 flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-gray-900">195.000đ</span>
                    <span className="ml-2 text-sm text-gray-500 line-through">230.000đ</span>
                  </div>
                  <div className="text-sm text-gray-500">100+ đã bán</div>
                </div>
              </CardContent>
            </Card>

            {/* Product 2 */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg product-card">
              <div className="relative h-64 w-full">
                <Image 
                  src="/images/product-2.png" 
                  alt="Da Simili mềm mịn" 
                  fill 
                  className="object-cover transition-all duration-300 hover:scale-105" 
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Da Simili mềm mịn</h3>
                <p className="mt-1 text-sm text-gray-600">Siêu bền, chống thấm nước</p>
                <div className="mt-2 flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-gray-900">180.000đ</span>
                  </div>
                  <div className="text-sm text-gray-500">80+ đã bán</div>
                </div>
              </CardContent>
            </Card>

            {/* Product 3 */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg product-card">
              <div className="relative h-64 w-full">
                <Image 
                  src="/images/product-3.png" 
                  alt="Da Microfiber cao cấp" 
                  fill 
                  className="object-cover transition-all duration-300 hover:scale-105" 
                />
                <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  Mới
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Da Microfiber cao cấp</h3>
                <p className="mt-1 text-sm text-gray-600">Nhập khẩu chính hãng</p>
                <div className="mt-2 flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-gray-900">250.000đ</span>
                  </div>
                  <div className="text-sm text-gray-500">50+ đã bán</div>
                </div>
              </CardContent>
            </Card>

            {/* Product 4 */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg product-card">
              <div className="relative h-64 w-full">
                <Image 
                  src="/images/product-4.png" 
                  alt="Da công nghiệp vân gỗ" 
                  fill 
                  className="object-cover transition-all duration-300 hover:scale-105" 
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Da công nghiệp vân gỗ</h3>
                <p className="mt-1 text-sm text-gray-600">Phong cách hiện đại</p>
                <div className="mt-2 flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-gray-900">210.000đ</span>
                  </div>
                  <div className="text-sm text-gray-500">30+ đã bán</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 text-center">
            <Button variant="outline" className="rounded-full px-8 py-2 font-medium">
              Xem tất cả sản phẩm
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Tại sao chọn Royal Lotus?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Chúng tôi cam kết mang đến cho khách hàng những sản phẩm chất lượng cao, giá cả cạnh tranh
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Benefit 1 */}
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Chất lượng cao cấp</h3>
              <p className="mt-2 text-gray-600">Sản phẩm nhập khẩu chính ngạch, rõ ràng nguồn gốc</p>
            </div>

            {/* Benefit 2 */}
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Giá cả cạnh tranh</h3>
              <p className="mt-2 text-gray-600">Cam kết giá tốt nhất trên thị trường, phù hợp mọi nhu cầu</p>
            </div>

            {/* Benefit 3 */}
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Giao hàng nhanh chóng</h3>
              <p className="mt-2 text-gray-600">Giao hàng toàn quốc, đảm bảo an toàn và đúng tiến độ</p>
            </div>

            {/* Benefit 4 */}
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Tư vấn tận tâm</h3>
              <p className="mt-2 text-gray-600">Đội ngũ tư vấn chuyên nghiệp, hỗ trợ cả sỉ và lẻ</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Bạn cần tư vấn?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-white/80">
            Hãy liên hệ với chúng tôi để được tư vấn chi tiết về sản phẩm và dịch vụ
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-2 font-medium">
              Liên hệ ngay
            </Button>
            <Button variant="outline" className="text-white hover:bg-white/10 border-white rounded-full px-8 py-2 font-medium">
              Xem bảng giá
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}