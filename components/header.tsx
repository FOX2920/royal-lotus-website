"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "Trang chủ", href: "/" },
  { 
    name: "Sản phẩm", 
    href: "/products",
    submenu: [
      { name: "Nội thất ô tô", href: "/products/automotive" },
      { name: "Nội thất sofa", href: "/products/furniture" },
      { name: "Cặp sách, túi xách", href: "/products/bags" },
      { name: "Giày dép", href: "/products/shoes" },
    ]
  },
  { 
    name: "Dịch vụ", 
    href: "/services",
    submenu: [
      { name: "Gia công bồi dán", href: "/services/manufacturing" },
      { name: "Xưởng may", href: "/services/sewing" },
      { name: "Đặt hàng theo yêu cầu", href: "/services/custom" },
    ]
  },
  { name: "Về chúng tôi", href: "/about" },
  { name: "Báo giá", href: "/quote" },
  { name: "Liên hệ", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  // Xử lý hiệu ứng scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Đóng dropdown khi click outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null)
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  const handleDropdownToggle = (itemName: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setActiveDropdown(activeDropdown === itemName ? null : itemName)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b backdrop-blur transition-all duration-300 ${
        scrolled
          ? "bg-background/95 supports-[backdrop-filter]:bg-background/60 shadow-lg border-gray-200"
          : "bg-background/80 supports-[backdrop-filter]:bg-background/60 border-gray-100"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 transition-transform hover:scale-105 duration-300">
            <span className="sr-only">Royal Lotus</span>
            <div className="relative h-12 w-40 sm:h-14 sm:w-48">
              <Image
                src="/images/royal-lotus-logo.png"
                alt="Royal Lotus Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Mobile contact button */}
        <div className="flex items-center gap-4 lg:hidden">
          <a
            href="tel:0911219966"
            className="flex items-center justify-center rounded-full bg-primary/10 p-3 text-primary hover:bg-primary/20 transition-colors duration-300"
            aria-label="Gọi ngay"
          >
            <Phone className="h-5 w-5" />
          </a>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="-m-2.5 p-2.5 hover:bg-gray-100 transition-colors duration-300">
                <span className="sr-only">Mở menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-white">
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Royal Lotus</span>
                  <div className="relative h-10 w-32">
                    <Image src="/images/royal-lotus-logo.png" alt="Royal Lotus Logo" fill className="object-contain" />
                  </div>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                  <span className="sr-only">Đóng menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </Button>
              </div>
              <div className="flow-root">
                <div className="-my-6 divide-y divide-gray-200">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        <Link
                          href={item.href}
                          className={`-mx-3 block rounded-lg px-3 py-3 text-base font-semibold leading-7 transition-colors duration-300 ${
                            pathname === item.href ? "bg-primary/10 text-primary" : "text-foreground hover:bg-gray-50"
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                        {item.submenu && (
                          <div className="ml-4 mt-2 space-y-1">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className={`block rounded-lg px-3 py-2 text-sm leading-6 transition-colors duration-300 ${
                                  pathname === subItem.href ? "bg-primary/10 text-primary" : "text-gray-600 hover:bg-gray-50"
                                }`}
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="py-6">
                    <Link
                      href="/contact"
                      className="flex w-full items-center justify-center rounded-lg bg-primary px-3 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Liên hệ ngay
                    </Link>
                    <div className="mt-4 flex items-center justify-center">
                      <a href="tel:0911219966" className="flex items-center text-primary hover:text-primary/80 transition-colors duration-300">
                        <Phone className="mr-2 h-4 w-4" />
                        <span className="font-medium">091.121.9966</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">              {item.submenu ? (
                <div>
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      className={`text-sm font-semibold leading-6 transition-colors duration-300 ${
                        pathname.startsWith(item.href) ? "text-primary" : "text-foreground hover:text-primary"
                      }`}
                    >
                      {item.name}
                    </Link>
                    <button
                      onClick={(e) => handleDropdownToggle(item.name, e)}
                      className="ml-1 p-1 hover:bg-gray-100 rounded transition-colors duration-300"
                    >
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      } ${pathname.startsWith(item.href) ? "text-primary" : "text-gray-600"}`} />
                    </button>
                  </div>                  {activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                      <Link
                        href={item.href}
                        className="block px-4 py-3 text-sm font-medium text-primary hover:bg-primary/10 transition-colors duration-300 border-b border-gray-100"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Xem tất cả {item.name.toLowerCase()}
                      </Link>
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={`block px-4 py-3 text-sm transition-colors duration-300 ${
                            pathname === subItem.href 
                              ? "bg-primary/10 text-primary font-medium" 
                              : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                          }`}
                          onClick={() => setActiveDropdown(null)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={`relative text-sm font-semibold leading-6 transition-colors duration-300 ${
                    pathname === item.href ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                  {pathname === item.href && (
                    <span className="absolute -bottom-[21px] left-0 h-[2px] w-full bg-primary rounded-full" />
                  )}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Desktop contact button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 lg:items-center">
          <a 
            href="tel:0911219966" 
            className="flex items-center text-primary hover:text-primary/80 transition-colors duration-300 group"
          >
            <Phone className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-medium">091.121.9966</span>
          </a>
          <Button asChild className="bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-300">
            <Link href="/contact" className="inline-flex items-center">
              <Phone className="mr-2 h-4 w-4" />
              Liên hệ ngay
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}
