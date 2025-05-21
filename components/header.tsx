"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "Trang chủ", href: "/" },
  { name: "Sản phẩm", href: "/products" },
  { name: "Dịch vụ", href: "/services" },
  { name: "Về chúng tôi", href: "/about" },
  { name: "Liên hệ", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
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

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b backdrop-blur transition-all duration-300 ${
        scrolled
          ? "bg-background/95 supports-[backdrop-filter]:bg-background/60 shadow-sm"
          : "bg-background/80 supports-[backdrop-filter]:bg-background/60"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 transition-transform hover:scale-105">
            <span className="sr-only">Royal Lotus</span>
            <div className="relative h-12 w-40 sm:h-14 sm:w-48">
              <Image
                src="/images/logo.png"
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
            className="flex items-center justify-center rounded-full bg-primary/10 p-2 text-primary"
            aria-label="Gọi ngay"
          >
            <Phone className="h-5 w-5" />
          </a>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="-m-2.5 p-2.5">
                <span className="sr-only">Mở menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Royal Lotus</span>
                  <div className="relative h-10 w-32">
                    <Image src="/images/logo.png" alt="Royal Lotus Logo" fill className="object-contain" />
                  </div>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                  <span className="sr-only">Đóng menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </Button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-200">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 transition-colors ${
                          pathname === item.href ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <Link
                      href="/contact"
                      className="flex w-full items-center justify-center rounded-md bg-primary px-3 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Liên hệ ngay
                    </Link>
                    <div className="mt-4 flex items-center justify-center">
                      <a href="tel:0911219966" className="flex items-center text-primary">
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
            <Link
              key={item.name}
              href={item.href}
              className={`relative text-sm font-semibold leading-6 transition-colors ${
                pathname === item.href ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              {item.name}
              {pathname === item.href && <span className="absolute -bottom-[21px] left-0 h-[2px] w-full bg-primary" />}
            </Link>
          ))}
        </div>

        {/* Desktop contact button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <a href="tel:0911219966" className="flex items-center text-primary">
            <Phone className="mr-2 h-4 w-4" />
            <span className="font-medium">091.121.9966</span>
          </a>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/contact">Liên hệ ngay</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}
