"use client"

import React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Search, ArrowUpDown, ChevronLeft, ChevronRight, Filter, Calculator } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { format } from "date-fns"
import { vi } from "date-fns/locale"
import QuickQuoteModal from "@/components/quick-quote-modal"

const categories = [
  {
    id: "automotive",
    name: "Nội thất ô tô",
    description: "Giả da cao cấp dùng cho ghế, vô lăng và nội thất ô tô",
    image: "/images/car-interior.png",
  },
  {
    id: "furniture",
    name: "Nội thất sofa",
    description: "Giả da bền đẹp cho sofa và nội thất trong nhà",
    image: "/images/leather-sofa.png",
  },
  {
    id: "bags",
    name: "Cặp túi, balo, vali",
    description: "Giả da đa dạng màu sắc cho túi xách và vali",
    image: "/images/handbags.png",
  },
  {
    id: "shoes",
    name: "Giày dép",
    description: "Giả da chất lượng cao cho ngành sản xuất giày dép",
    image: "/images/messenger-bag.png",
  },
  {
    id: "materials",
    name: "Nguyên phụ liệu",
    description: "Các loại nguyên phụ liệu cho ngành sản xuất giả da",
    image: "/images/leather-materials.png",
  },
]

// Cập nhật interface Product để phản ánh đúng cấu trúc API
interface Product {
  idNhanh: string
  name: string
  unit: string
  updatedAt: number
  inventory: {
    remain: number
    holding: number
    available: number
  }
}

// Định nghĩa kiểu cho các cột có thể sắp xếp
type SortableColumn = "idNhanh" | "name" | "unit" | "updatedAt" | "remain" | "holding" | "available"

export default function ProductsPage() {
  // Product table state
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortColumn, setSortColumn] = useState<SortableColumn>("updatedAt") // Mặc định sắp xếp theo ngày cập nhật
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc") // Mặc định hiển thị ngày gần nhất trước
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(20) // Tăng số lượng hiển thị mặc định
  const [showFilters, setShowFilters] = useState(false)
  const productsPerPage = itemsPerPage

  useEffect(() => {
    fetchProducts()
  }, [])

  // Fetch products from API
  const fetchPage = async (page: number) => {
    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ page }),
      })

      if (!response.ok) {
        throw new Error(`API responded with status: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error(`Error fetching page ${page}:`, error)
      return null
    }
  }
  const fetchProducts = async () => {
    try {
      setLoading(true)

      // Fetch first page to get total pages
      const firstPageResponse = await fetchPage(1)

      if (firstPageResponse && firstPageResponse.data) {
        const totalPages = firstPageResponse.data.totalPages
        setTotalPages(totalPages)

        // Collect all products from all pages
        let allProducts: Product[] = []

        // Tăng số trang lấy để có nhiều dữ liệu hơn
        const pagesToFetch = Math.min(totalPages, 5)

        for (let page = 1; page <= pagesToFetch; page++) {
          const pageData = await fetchPage(page)

          if (pageData && pageData.data && pageData.data.products) {
            const pageProducts = Object.values(pageData.data.products) as Product[]
            allProducts = [...allProducts, ...pageProducts]
          }
        }

        // Sắp xếp sản phẩm theo ngày cập nhật gần nhất (mặc định)
        allProducts.sort((a, b) => b.updatedAt - a.updatedAt)
        
        setProducts(allProducts)
      }

      setLoading(false)
    } catch (error) {
      console.error("Error fetching products:", error)
      setLoading(false)
    }
  }

  // Filter products based on search term
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.idNhanh.toString().includes(searchTerm),
  )

  // Sort products - cập nhật để xử lý đúng các trường inventory
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortColumn === "updatedAt") {
      return sortDirection === "asc" ? a[sortColumn] - b[sortColumn] : b[sortColumn] - a[sortColumn]
    } else if (sortColumn === "remain" || sortColumn === "holding" || sortColumn === "available") {
      // Truy cập các trường trong inventory
      const aValue = a.inventory?.[sortColumn] || 0
      const bValue = b.inventory?.[sortColumn] || 0
      return sortDirection === "asc" ? aValue - bValue : bValue - aValue
    } else {
      return sortDirection === "asc"
        ? a[sortColumn].toString().localeCompare(b[sortColumn].toString())
        : b[sortColumn].toString().localeCompare(a[sortColumn].toString())
    }
  })

  // Paginate products
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  const calculatedTotalPages = Math.ceil(sortedProducts.length / productsPerPage)

  const handleSort = (column: SortableColumn) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Scroll to table on mobile
    if (window.innerWidth < 768) {
      const tableElement = document.getElementById("products-table")
      if (tableElement) {
        tableElement.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  const handleItemsPerPageChange = (value: string) => {
    setItemsPerPage(Number(value))
    setCurrentPage(1) // Reset to first page when changing items per page
  }
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000)
    return format(date, "dd/MM/yyyy HH:mm", { locale: vi })
  }

  // Kiểm tra sản phẩm có được cập nhật trong 7 ngày qua không
  const isRecentlyUpdated = (timestamp: number) => {
    const now = new Date().getTime()
    const updatedDate = new Date(timestamp * 1000).getTime()
    const daysDiff = (now - updatedDate) / (1000 * 60 * 60 * 24)
    return daysDiff <= 7
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gray-900 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Sản phẩm của chúng tôi
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
            Đa dạng các loại giả da công nghiệp chất lượng cao cho nhiều ngành công nghiệp
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-8">Danh mục sản phẩm</h2>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Card key={category.id} className="overflow-hidden transition-all duration-300 product-card">
                <div className="relative h-64 w-full image-hover">
                  <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                  <p className="mt-2 text-sm text-gray-600">{category.description}</p>
                  <Link
                    href={`/products/${category.id}`}
                    className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Xem thêm <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}          </div>
        </div>
      </section>

      {/* Product Table Section */}
      <section className="py-16 bg-gray-50" id="products-table">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Danh sách sản phẩm</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Tìm kiếm và xem thông tin chi tiết về các sản phẩm của chúng tôi
            </p>
            <div className="mt-2 flex items-center justify-center gap-2 text-sm text-gray-500">
              <span>📅 Sắp xếp theo ngày cập nhật gần nhất</span>
              <span>•</span>
              <span>🆕 Sản phẩm mới cập nhật trong 7 ngày</span>
            </div>
          </div>

          <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input
                placeholder="Tìm kiếm theo tên hoặc mã sản phẩm..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Button variant="outline" size="icon" className="sm:hidden" onClick={() => setShowFilters(!showFilters)}>
                <Filter className="h-4 w-4" />
              </Button>
              <div className={`flex items-center gap-2 ${showFilters ? "flex" : "hidden"} sm:flex`}>
                <span className="text-sm text-gray-500">Hiển thị:</span>
                <Select defaultValue="20" onValueChange={handleItemsPerPageChange}>
                  <SelectTrigger className="w-20">
                    <SelectValue placeholder="20" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="20">20</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                    <SelectItem value="100">100</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="rounded-md border bg-white overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">
                      <Button variant="ghost" onClick={() => handleSort("idNhanh")} className="flex items-center">
                        Mã SP
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </Button>
                    </TableHead>
                    <TableHead>
                      <Button variant="ghost" onClick={() => handleSort("name")} className="flex items-center">
                        Tên sản phẩm
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </Button>
                    </TableHead>
                    <TableHead className="w-[100px]">
                      <Button variant="ghost" onClick={() => handleSort("unit")} className="flex items-center">
                        Đơn vị
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </Button>
                    </TableHead>
                    <TableHead className="w-[150px]">
                      <Button variant="ghost" onClick={() => handleSort("updatedAt")} className="flex items-center">
                        <span className={sortColumn === "updatedAt" ? "text-primary font-semibold" : ""}>
                          Cập nhật 
                          {sortColumn === "updatedAt" && (
                            <span className="ml-1 text-xs">
                              ({sortDirection === "desc" ? "Mới nhất" : "Cũ nhất"})
                            </span>
                          )}
                        </span>
                        <ArrowUpDown className={`ml-2 h-4 w-4 ${sortColumn === "updatedAt" ? "text-primary" : ""}`} />
                      </Button>
                    </TableHead>
                    <TableHead className="text-right w-[100px]">
                      <Button
                        variant="ghost"
                        onClick={() => handleSort("remain")}
                        className="flex items-center justify-end"
                      >
                        Tồn kho
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </Button>
                    </TableHead>
                    <TableHead className="text-right w-[100px]">
                      <Button
                        variant="ghost"
                        onClick={() => handleSort("available")}
                        className="flex items-center justify-end"
                      >
                        Khả dụng
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </Button>
                    </TableHead>
                    <TableHead className="w-[120px] text-center">
                      Thao tác
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loading ? (
                    Array.from({ length: 10 }).map((_, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <Skeleton className="h-6 w-16" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="h-6 w-full" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="h-6 w-12" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="h-6 w-24" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="h-6 w-16" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="h-6 w-16" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="h-8 w-20" />
                        </TableCell>
                      </TableRow>
                    ))
                  ) : currentProducts.length > 0 ? (
                    currentProducts.map((product) => (
                      <TableRow key={product.idNhanh} className="hover:bg-gray-50">
                        <TableCell className="font-medium">{product.idNhanh}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Link
                              href={`/products/detail/${product.idNhanh}`}
                              className="hover:text-primary hover:underline"
                            >
                              {product.name}
                            </Link>
                            {isRecentlyUpdated(product.updatedAt) && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Mới
                              </span>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>{product.unit}</TableCell>
                        <TableCell>
                          <div className="flex flex-col">
                            <span className={isRecentlyUpdated(product.updatedAt) ? "font-semibold text-green-700" : ""}>
                              {formatDate(product.updatedAt)}
                            </span>
                            {isRecentlyUpdated(product.updatedAt) && (
                              <span className="text-xs text-green-600">Cập nhật gần đây</span>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">{product.inventory?.remain || 0}</TableCell>
                        <TableCell className="text-right">{product.inventory?.available || 0}</TableCell>
                        <TableCell className="text-center">
                          <QuickQuoteModal
                            productName={product.name}
                            productId={product.idNhanh}
                            trigger={
                              <Button variant="outline" size="sm" className="text-xs">
                                <Calculator className="h-3 w-3 mr-1" />
                                Báo giá
                              </Button>
                            }
                          />
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={7} className="h-24 text-center">
                        Không tìm thấy sản phẩm nào
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Pagination */}
          {!loading && calculatedTotalPages > 1 && (
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6 gap-4">
              <div className="text-sm text-gray-500 order-2 sm:order-1 text-center sm:text-left">
                Hiển thị {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, sortedProducts.length)} trong số{" "}
                {sortedProducts.length} sản phẩm
              </div>
              <div className="flex items-center justify-center space-x-2 order-1 sm:order-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                {Array.from({ length: calculatedTotalPages }, (_, i) => i + 1)
                  .filter(
                    (page) =>
                      page === 1 ||
                      page === calculatedTotalPages ||
                      (page >= currentPage - 1 && page <= currentPage + 1),
                  )
                  .map((page, index, array) => (
                    <React.Fragment key={page}>
                      {index > 0 && array[index - 1] !== page - 1 && <span className="px-2">...</span>}
                      <Button
                        variant={currentPage === page ? "default" : "outline"}
                        size="icon"
                        onClick={() => handlePageChange(page)}
                      >
                        {page}
                      </Button>
                    </React.Fragment>
                  ))}
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === calculatedTotalPages}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Quick Quote CTA */}
      <section className="py-12 bg-primary/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
            Cần báo giá cho nhiều sản phẩm?
          </h2>
          <p className="text-gray-600 mb-6">
            Sử dụng form báo giá chi tiết để nhận tư vấn toàn diện
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/quote">
              <Calculator className="h-4 w-4 mr-2" />
              Form báo giá chi tiết
            </Link>
          </Button>
        </div>
      </section>

      {/* Materials Showcase */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="animate-slide-up">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Kho nguyên liệu đa dạng</h2>
              <p className="mt-4 text-lg text-gray-600">
                Chúng tôi cung cấp đa dạng các loại giả da với nhiều màu sắc, họa tiết và chất liệu khác nhau, đáp ứng
                mọi nhu cầu của khách hàng.
              </p>
              <div className="mt-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <span className="text-xl font-bold">50+</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Màu sắc đa dạng</h3>
                    <p className="mt-2 text-base text-gray-600">
                      Hơn 50 màu sắc khác nhau, từ các màu cơ bản đến các màu đặc biệt theo yêu cầu.
                    </p>
                  </div>
                </div>
                <div className="mt-8 flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <span className="text-xl font-bold">20+</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Họa tiết độc đáo</h3>
                    <p className="mt-2 text-base text-gray-600">
                      Nhiều họa tiết độc đáo từ da bò, da cừu đến các họa tiết hiện đại, thời trang.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image src="/images/showroom-1.jpg" alt="Kho nguyên liệu giả da" fill className="object-cover" />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image src="/images/showroom-2.jpg" alt="Đa dạng màu sắc giả da" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
