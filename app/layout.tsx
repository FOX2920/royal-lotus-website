import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingContact from "@/components/floating-contact"
import WhatsAppChat from "@/components/whatsapp-chat"
import PopupProvider from "@/components/popup-provider"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Royal Lotus - Cung cấp giả da công nghiệp chất lượng cao",
    template: "%s | Royal Lotus"
  },
  description: "CÔNG TY CỔ PHẦN XUẤT NHẬP KHẨU ROYAL LOTUS - Cung cấp sỉ lẻ các loại giả da công nghiệp, nguyên phụ liệu cho nội thất ô tô, xe máy, sofa, giày dép, cặp túi. Xưởng gia công bồi dán mút, eva và xưởng may chuyên nghiệp.",
  keywords: ["giả da", "giả da công nghiệp", "nội thất ô tô", "sofa", "túi xách", "giày dép", "gia công bồi dán", "xưởng may", "Royal Lotus"],
  authors: [{ name: "Royal Lotus JSC" }],
  creator: "Royal Lotus JSC",
  publisher: "Royal Lotus JSC",
  robots: "index, follow",
  metadataBase: new URL("https://royallotus.vn"),
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://royallotus.vn",
    siteName: "Royal Lotus",
    title: "Royal Lotus - Cung cấp giả da công nghiệp chất lượng cao",
    description: "Cung cấp sỉ lẻ các loại giả da công nghiệp chất lượng cao cho nhiều ngành công nghiệp. Liên hệ 091.121.9966 để được tư vấn.",
    images: [
      {
        url: "/images/royal-lotus-og.jpg",
        width: 1200,
        height: 630,
        alt: "Royal Lotus - Giả da công nghiệp chất lượng cao",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Royal Lotus - Cung cấp giả da công nghiệp chất lượng cao",
    description: "Cung cấp sỉ lẻ các loại giả da công nghiệp chất lượng cao cho nhiều ngành công nghiệp.",
    images: ["/images/royal-lotus-og.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://royallotus.vn",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0369a1" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <FloatingContact />
            <WhatsAppChat />
          </div>
          <PopupProvider />
        </ThemeProvider>
      </body>
    </html>
  )
}
