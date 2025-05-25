# Royal Lotus Website

Website chính thức của ROYAL LOTUS – Đam mê từng tấm da công nghiệp, nơi hội tụ chất lượng, uy tín và dịch vụ tận tâm.

## 🌟 Giới thiệu

**ROYAL LOTUS** là nơi tụi ta đam mê từng tấm da PVC, simili, da microfiber, da công nghiệp – không chỉ là nguyên liệu, mà là chất liệu tạo nên sản phẩm đẹp và bền bỉ.

- Cung cấp các loại da công nghiệp chất lượng cao, nhiều mẫu mã đẹp mắt
- Nhập khẩu chính ngạch, rõ ràng nguồn gốc, uy tín lâu năm
- Giao hàng nhanh, tư vấn tận tâm, hỗ trợ cả sỉ và lẻ
- Cung cấp sỉ lẻ các loại giả da công nghiệp, nguyên phụ liệu NỘI THẤT ô tô, xe máy, SOFA, nội thất trong nhà, GIÀY DÉP, CẶP TÚI, balo vali
- Có xưởng gia công bồi dán mút, eva, và xưởng may tại Hà Nội

## 🚀 Tính năng nổi bật

- **Giao diện hiện đại**: Hero Carousel, Stats, Testimonials, FAQ, CTA, hiệu ứng động, responsive, mobile-first
- **Trang sản phẩm**: Gallery, quick view, tìm kiếm nâng cao
- **Trang dịch vụ**: Quy trình sản xuất, dịch vụ gia công, xưởng may
- **Báo giá trực tuyến**: Form báo giá chi tiết, benefits, contact info
- **Liên hệ đa kênh**: Floating contact (gọi, chat, callback), popup thông báo
- **SEO & Hiệu suất**: Tối ưu SEO, tốc độ tải trang, PWA-ready

## 🗂️ Cấu trúc thư mục

```
├── app/                # App Router: page, layout, các route chính
│   ├── about/          # Trang giới thiệu
│   ├── products/       # Trang sản phẩm
│   ├── services/       # Trang dịch vụ
│   ├── quote/          # Trang báo giá
│   ├── contact/        # Trang liên hệ
│   └── api/            # API routes
├── components/         # Các component tái sử dụng
│   ├── hero-carousel.tsx
│   ├── stats-section.tsx
│   ├── testimonials-section.tsx
│   ├── faq-section.tsx
│   ├── quote-request-form.tsx
│   ├── floating-contact.tsx
│   ├── AboutRoyalLotusSection.tsx
│   └── ...
│   └── ui/             # UI primitives (shadcn/ui, radix)
├── public/             # Hình ảnh, tài sản tĩnh
├── styles/             # CSS, Tailwind config
├── lib/, hooks/        # Helpers, custom hooks
├── package.json        # Scripts, dependencies
└── ...
```

## 🖥️ Các trang chính

- `/` – Trang chủ: Hero, giới thiệu, stats, testimonials, FAQ, CTA
- `/about` – Về Royal Lotus: Lịch sử, sứ mệnh, giá trị, cơ sở vật chất
- `/products` – Sản phẩm: Danh mục, gallery, tìm kiếm, quick view
- `/services` – Dịch vụ: Gia công, xưởng may, quy trình sản xuất
- `/quote` – Báo giá: Form báo giá trực tuyến, thông tin liên hệ
- `/contact` – Liên hệ: Form, bản đồ, hotline, email

## 🛠️ Công nghệ sử dụng

- **Next.js 15.2.4** – App Router, SSR, SEO
- **React 19** – UI Components
- **TypeScript** – Kiểu tĩnh, an toàn
- **Tailwind CSS** – Utility-first CSS, responsive
- **shadcn/ui + Radix UI** – UI primitives, dialog, sheet, menu, v.v.
- **Lucide React** – Icon hiện đại
- **React Hook Form + Zod** – Quản lý form, validation
- **embla-carousel-react** – Carousel động
- **Sonner** – Toast notification
- **PWA ready** – Mobile-first, tối ưu hiệu suất

## ⚡ Hướng dẫn khởi chạy

1. **Cài đặt dependencies:**
   ```bash
   pnpm install
   # hoặc npm install / yarn install
   ```
2. **Chạy development server:**

   ```bash
   pnpm dev
   # hoặc npm run dev / yarn dev
   ```

   Truy cập [http://localhost:3000](http://localhost:3000)

3. **Build production:**
   ```bash
   pnpm build && pnpm start
   # hoặc npm run build && npm start
   ```

## 📦 Scripts

- `dev`: Chạy development server
- `build`: Build production
- `start`: Chạy production server
- `lint`: Chạy linter (ESLint)

## 📞 Liên hệ

- **Hotline:** 091.121.9966
- **Email:** royallotusjsc@gmail.com
- **Địa chỉ:** 42, ngõ 87 Tân Xuân, Xuân Đỉnh, Bắc Từ Liêm, Hà Nội

---

> Website phát triển bởi ROYAL LOTUS. Đam mê từng tấm da – Chất lượng tạo nên uy tín!
