import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, ArrowRight, Clock, Award, Shield } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="relative h-14 w-48 mb-6">
              <Image 
                src="/images/royal-lotus-logo.png" 
                alt="Royal Lotus Logo" 
                fill 
                className="object-contain brightness-110" 
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Cung cấp sỉ lẻ các loại giả da công nghiệp chất lượng cao, nguyên phụ liệu cho ngành nội thất ô tô, 
              xe máy, sofa và nội thất trong nhà, giày dép, cặp túi balo vali.
            </p>
            
            {/* Key Features */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm text-gray-300">
                <Award className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                <span>Chất lượng đạt tiêu chuẩn quốc tế</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Shield className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                <span>Bảo hành sản phẩm lên đến 2 năm</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Clock className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                <span>Giao hàng nhanh chóng toàn quốc</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/daPVC"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5 transition-transform group-hover:scale-110" />
              </a>
              <a
                href="#"
                className="group flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5 transition-transform group-hover:scale-110" />
              </a>
              <a
                href="#"
                className="group flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110"
              >
                <span className="sr-only">YouTube</span>
                <Youtube className="h-5 w-5 transition-transform group-hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 relative">
              Sản phẩm
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/products/automotive"
                  className="group flex items-center text-gray-300 transition-all duration-300 hover:text-white hover:translate-x-1"
                >
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                  <span className="group-hover:font-medium">Nội thất ô tô</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products/furniture"
                  className="group flex items-center text-gray-300 transition-all duration-300 hover:text-white hover:translate-x-1"
                >
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                  <span className="group-hover:font-medium">Nội thất sofa</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products/bags"
                  className="group flex items-center text-gray-300 transition-all duration-300 hover:text-white hover:translate-x-1"
                >
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                  <span className="group-hover:font-medium">Cặp túi, balo, vali</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products/shoes"
                  className="group flex items-center text-gray-300 transition-all duration-300 hover:text-white hover:translate-x-1"
                >
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                  <span className="group-hover:font-medium">Giày dép</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="group flex items-center text-primary transition-all duration-300 hover:text-primary/80 hover:translate-x-1 font-medium"
                >
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                  <span>Xem tất cả sản phẩm</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 relative">
              Dịch vụ
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/services/manufacturing"
                  className="group flex items-center text-gray-300 transition-all duration-300 hover:text-white hover:translate-x-1"
                >
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                  <span className="group-hover:font-medium">Gia công bồi dán</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/sewing"
                  className="group flex items-center text-gray-300 transition-all duration-300 hover:text-white hover:translate-x-1"
                >
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                  <span className="group-hover:font-medium">Xưởng may</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/custom"
                  className="group flex items-center text-gray-300 transition-all duration-300 hover:text-white hover:translate-x-1"
                >
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                  <span className="group-hover:font-medium">Đặt hàng theo yêu cầu</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/quote"
                  className="group flex items-center text-primary transition-all duration-300 hover:text-primary/80 hover:translate-x-1 font-medium"
                >
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                  <span>Báo giá miễn phí</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 relative">
              Thông tin liên hệ
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-gray-300">
                  <div className="font-medium text-white mb-1">Văn phòng:</div>
                  <div className="text-sm leading-relaxed">42, ngõ 87 Tân Xuân, Xuân Đỉnh, Bắc Từ Liêm, Hà Nội</div>
                  <div className="font-medium text-white mt-2 mb-1">Nhà xưởng:</div>
                  <div className="text-sm leading-relaxed">HTX Xuân Sơn, Xã Tân Dân, Sóc Sơn, Hà Nội</div>
                </div>
              </li>
              <li className="flex items-center group">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <a 
                    href="tel:0911219966" 
                    className="text-gray-300 transition-colors duration-300 hover:text-white font-medium text-lg"
                  >
                    091.121.9966
                  </a>
                  <div className="text-sm text-gray-400">Hotline 24/7</div>
                </div>
              </li>
              <li className="flex items-center group">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <a
                    href="mailto:royallotusjsc@gmail.com"
                    className="text-gray-300 transition-colors duration-300 hover:text-white font-medium"
                  >
                    royallotusjsc@gmail.com
                  </a>
                  <div className="text-sm text-gray-400">Email hỗ trợ</div>
                </div>
              </li>
            </ul>

            {/* Working Hours */}
            <div className="mt-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <h4 className="text-white font-medium mb-3 flex items-center">
                <Clock className="h-4 w-4 text-primary mr-2" />
                Giờ làm việc
              </h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between text-gray-300">
                  <span>Thứ 2 - Thứ 6:</span>
                  <span className="text-white font-medium">8:00 - 17:30</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Thứ 7:</span>
                  <span className="text-white font-medium">8:00 - 12:00</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Chủ nhật:</span>
                  <span className="text-gray-400">Nghỉ</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} CÔNG TY CỔ PHẦN XUẤT NHẬP KHẨU ROYAL LOTUS
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Tất cả các quyền được bảo lưu. Thiết kế bởi Royal Lotus Team.
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
                Chính sách bảo mật
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">
                Điều khoản sử dụng
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors duration-300">
                Sơ đồ trang web
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
