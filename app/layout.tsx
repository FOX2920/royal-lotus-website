import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingContact from "@/components/floating-contact"
import PopupProvider from "@/components/popup-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Royal Lotus - Nhà cung cấp giả da công nghiệp hàng đầu",
  description:
    "Royal Lotus: Chuyên sỉ lẻ giả da công nghiệp, nguyên phụ liệu nội thất ô tô, sofa, giày dép, túi xách. Chất lượng hàng đầu, giá cạnh tranh.",
  // icons object removed for Next.js automatic detection
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <FloatingContact />
            <PopupProvider />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
