import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="relative h-12 w-40 mb-4">
              <Image src="/images/royal-lotus-logo.png" alt="Royal Lotus Logo" fill className="object-contain" />
            </div>
            <p className="mt-4 text-sm text-gray-300">
              Cung cấp sỉ lẻ các loại giả da công nghiệp, nguyên phụ liệu cho ngành nội thất ô tô, xe máy, sofa và nội
              thất trong nhà, giày dép, cặp túi balo vali.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Sản phẩm</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/products/automotive" className="text-gray-300 hover:text-white">
                  Nội thất ô tô
                </Link>
              </li>
              <li>
                <Link href="/products/furniture" className="text-gray-300 hover:text-white">
                  Nội thất sofa
                </Link>
              </li>
              <li>
                <Link href="/products/bags" className="text-gray-300 hover:text-white">
                  Cặp túi, balo, vali
                </Link>
              </li>
              <li>
                <Link href="/products/shoes" className="text-gray-300 hover:text-white">
                  Giày dép
                </Link>
              </li>
              <li>
                <Link href="/products/materials" className="text-gray-300 hover:text-white">
                  Nguyên phụ liệu
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Dịch vụ</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/services/manufacturing" className="text-gray-300 hover:text-white">
                  Gia công bồi dán
                </Link>
              </li>
              <li>
                <Link href="/services/sewing" className="text-gray-300 hover:text-white">
                  Xưởng may
                </Link>
              </li>
              <li>
                <Link href="/services/custom" className="text-gray-300 hover:text-white">
                  Đặt hàng theo yêu cầu
                </Link>
              </li>
              <li>
                <Link href="/services/wholesale" className="text-gray-300 hover:text-white">
                  Bán sỉ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Liên hệ</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                <span className="text-gray-300">
                  VP: 42, ngõ 87 Tân Xuân, Xuân Đỉnh, Bắc Từ Liêm, HN
                  <br />
                  Xưởng: HTX Xuân Sơn, Xã Tân Dân, Sóc Sơn, HN
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                <a href="tel:0911219966" className="text-gray-300 hover:text-white">
                  091.121.9966
                </a>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                <a href="mailto:royallotusjsc@gmail.com" className="text-gray-300 hover:text-white">
                  royallotusjsc@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} CÔNG TY CỔ PHẦN XUẤT NHẬP KHẨU ROYAL LOTUS. Tất cả các quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  )
}
