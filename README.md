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
- **Trang sản phẩm**: Gallery, quick view, tìm kiếm nâng cao, phân trang thông minh
- **Trang dịch vụ**: Quy trình sản xuất, dịch vụ gia công, xưởng may
- **Báo giá trực tuyến**: Form báo giá chi tiết, benefits, contact info
- **Liên hệ đa kênh**: Floating contact (gọi, chat, callback), popup thông báo
- **🤖 AI Chatbot**: Trợ lý AI thông minh với Google Gemma model, hỗ trợ khách hàng 24/7
- **SEO & Hiệu suất**: Tối ưu SEO, tốc độ tải trang, PWA-ready

## 🗂️ Cấu trúc thư mục

```
├── app/                # App Router: page, layout, các route chính
│   ├── about/          # Trang giới thiệu
│   ├── products/       # Trang sản phẩm
│   │   ├── automotive/ # Nội thất ô tô
│   │   ├── furniture/  # Nội thất sofa
│   │   ├── bags/       # Cặp sách, túi xách
│   │   └── shoes/      # Giày dép
│   ├── services/       # Trang dịch vụ
│   │   └── custom/     # Dịch vụ thiết kế theo yêu cầu
│   ├── quote/          # Trang báo giá
│   ├── contact/        # Trang liên hệ
│   └── api/            # API routes
│       └── chat/       # 🤖 AI Chatbot API endpoint
├── components/         # Các component tái sử dụng
│   ├── hero-carousel.tsx
│   ├── stats-section.tsx
│   ├── testimonials-section.tsx
│   ├── faq-section.tsx
│   ├── quote-request-form.tsx
│   ├── floating-contact.tsx
│   ├── chatbot.tsx     # 🤖 AI Chatbot component
│   ├── AboutRoyalLotusSection.tsx
│   └── ...
│   └── ui/             # UI primitives (shadcn/ui, radix)
├── public/             # Hình ảnh, tài sản tĩnh
├── styles/             # CSS, Tailwind config
├── lib/, hooks/        # Helpers, custom hooks
├── .env.local          # Environment variables (GOOGLE_AI_API_KEY)
├── package.json        # Scripts, dependencies
└── ...
```

## 🖥️ Các trang chính

- `/` – Trang chủ: Hero Carousel, giới thiệu, stats, testimonials, FAQ, CTA, AI Chatbot
- `/about` – Về Royal Lotus: Lịch sử, sứ mệnh, giá trị, cơ sở vật chất, xưởng sản xuất
- `/products` – Sản phẩm: Danh mục, gallery, tìm kiếm, quick view, phân trang
  - `/products/automotive` – Nội thất ô tô: Ghế xe, vô lăng, taplo
  - `/products/furniture` – Nội thất sofa: Sofa phòng khách, ghế văn phòng
  - `/products/bags` – Cặp sách, túi xách: Túi đeo vai, balo, ví da
  - `/products/shoes` – Giày dép: Giày công sở, thể thao, boot, sandal
- `/services` – Dịch vụ: Gia công, xưởng may, quy trình sản xuất
  - `/services/custom` – Thiết kế theo yêu cầu
- `/quote` – Báo giá: Form báo giá trực tuyến, thông tin liên hệ
- `/contact` – Liên hệ: Form, bản đồ, hotline, email, địa chỉ xưởng

## 🛠️ Công nghệ sử dụng

### Core Technologies

- **Next.js 15.2.4** – App Router, SSR, SEO optimization
- **React 19** – Modern UI Components
- **TypeScript** – Type safety và development experience
- **Tailwind CSS** – Utility-first CSS framework, responsive design

### UI & Design

- **shadcn/ui + Radix UI** – Accessible UI primitives (dialog, sheet, menu, etc.)
- **Lucide React** – Modern icon library
- **embla-carousel-react** – Smooth carousel component
- **Sonner** – Toast notifications
- **next-themes** – Dark/light mode support

### Forms & Validation

- **React Hook Form** – Efficient form management
- **Zod** – Schema validation
- **react-day-picker** – Date picker component

### AI Integration

- **🤖 Google Generative AI** – AI chatbot với Gemma-3n-e4b-it model
- **@google/generative-ai** – Google AI SDK
- **Custom Markdown Parser** – Format AI responses với **bold**, _italic_, `code`

### Data & Charts

- **recharts** – Data visualization charts
- **date-fns** – Date manipulation utilities
- **cmdk** – Command menu component

### Development & Build

- **PWA ready** – Progressive Web App capabilities
- **PostCSS + Autoprefixer** – CSS processing
- **ESLint** – Code linting
- **Responsive design** – Mobile-first approach

## ⚡ Hướng dẫn khởi chạy

### Cài đặt và chạy dự án

1. **Clone repository:**

   ```bash
   git clone https://github.com/your-username/royal-lotus-website.git
   cd royal-lotus-website
   ```

2. **Cài đặt dependencies:**

   ```bash
   pnpm install
   # hoặc npm install / yarn install
   ```

3. **Cấu hình environment variables:**

   ```bash
   # Tạo file .env.local và thêm:
   GOOGLE_AI_API_KEY=your_google_ai_api_key_here
   ```

4. **Chạy development server:**

   ```bash
   pnpm dev
   # hoặc npm run dev / yarn dev
   ```

   Truy cập [http://localhost:3000](http://localhost:3000)

5. **Build production:**
   ```bash
   pnpm build && pnpm start
   # hoặc npm run build && npm start
   ```

### 🤖 Cấu hình AI Chatbot

Để sử dụng AI Chatbot, bạn cần:

1. **Tạo Google AI API Key:**

   - Truy cập [Google AI Studio](https://makersuite.google.com/)
   - Tạo API key mới
   - Copy API key vào file `.env.local`

2. **Model sử dụng:** `gemma-3n-e4b-it` (free tier)
3. **Features:**
   - Hỗ trợ khách hàng 24/7
   - Context-aware về sản phẩm Royal Lotus
   - Markdown formatting (bold, italic, code)
   - Lịch sử hội thoại
   - Responsive design

## 📦 Scripts

- `dev`: Chạy development server
- `build`: Build production
- `start`: Chạy production server
- `lint`: Chạy ESLint để kiểm tra code
- `deploy`: Deploy lên Vercel production
- `deploy:preview`: Deploy lên Vercel preview

## 🔧 Environment Variables

Tạo file `.env.local` và thêm các biến sau:

```bash
# Google AI API Key cho chatbot
GOOGLE_AI_API_KEY=your_google_ai_api_key_here

# Optional: Next.js config
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 🎨 Features Highlights

### 🤖 AI Chatbot

- **Model**: Google Gemma-3n-e4b-it (miễn phí)
- **Chức năng**: Tư vấn sản phẩm giả da công nghiệp
- **UI**: Floating button, expandable chat window
- **Format**: Markdown support (bold, italic, code)
- **Language**: Tiếng Việt
- **Responsive**: Mobile-first design

### 📱 Responsive Design

- **Mobile-first**: Thiết kế ưu tiên mobile
- **Breakpoints**: Tailwind CSS responsive utilities
- **Touch-friendly**: Optimized cho touch devices
- **PWA ready**: Progressive Web App capabilities

### 🎯 SEO Optimization

- **Meta tags**: Optimized cho search engines
- **Structured data**: Rich snippets support
- **Sitemap**: Auto-generated sitemap
- **Performance**: Lighthouse score 90+

## 📞 Liên hệ

### Thông tin công ty

- **Tên công ty:** CÔNG TY CỔ PHẦN XUẤT NHẬP KHẨU ROYAL LOTUS
- **Hotline:** 091.121.9966
- **Email:** royallotusjsc@gmail.com
- **Website:** [royallotus.vn](https://royallotus.vn)

### Địa chỉ

- **Văn phòng:** 42, ngõ 87 Tân Xuân, Xuân Đỉnh, Bắc Từ Liêm, Hà Nội
- **Nhà xưởng:** HTX Xuân Sơn, Xã Tân Dân, Sóc Sơn, Hà Nội
- **Giờ làm việc:** Thứ 2 - Thứ 6 (8:00 - 17:30)

### Mạng xã hội

- **Facebook:** [facebook.com/daPVC](https://www.facebook.com/daPVC)
- **Zalo:** 091.121.9966

---

> **🚀 Royal Lotus Website v2.0** - Phát triển với ❤️ sử dụng Next.js 15, React 19, TypeScript và Google AI  
> **🤖 AI-Powered** - Trợ lý ảo thông minh hỗ trợ khách hàng 24/7  
> **📱 Mobile-First** - Thiết kế responsive, tối ưu cho mọi thiết bị
>
> _"Đam mê từng tấm da – Chất lượng tạo nên uy tín!"_
