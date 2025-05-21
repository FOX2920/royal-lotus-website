# Royal Lotus Website

Trang web chính thức của Royal Lotus.

## Công nghệ sử dụng

- **Framework**: [Next.js](https://nextjs.org/) 15.2.4
- **Ngôn ngữ**: [TypeScript](https://www.typescriptlang.org/)
- **UI**:
  - [React](https://reactjs.org/) 19
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Shadcn/ui](https://ui.shadcn.com/) (dựa trên Radix UI)
  - [Lucide React](https://lucide.dev/) (Icons)
- **Quản lý Form**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod](https://zod.dev/)
- **Styling**: PostCSS, Tailwind CSS Animate
- **Linting/Formatting**: (Mặc định của Next.js, có thể là ESLint, Prettier)

## Cấu trúc thư mục chính

```
.
├── app/                      # Routes của ứng dụng (App Router)
│   ├── (pages)/              # Các thư mục con cho từng trang (ví dụ: products, services, about, contact)
│   ├── api/                  # API routes
│   ├── layout.tsx            # Layout chính của ứng dụng
│   ├── page.tsx              # Trang chủ
│   └── globals.css           # Styles global
├── components/               # Các React components tái sử dụng
│   ├── ui/                   # Các UI components nhỏ (có thể từ shadcn/ui)
│   ├── header.tsx            # Header của trang web
│   ├── footer.tsx            # Footer của trang web
│   └── ...                   # Các components khác
├── lib/                      # Các utility functions, helpers
│   └── utils.ts
├── public/                   # Chứa các tài sản tĩnh (hình ảnh, fonts, ...)
├── styles/                   # (Có thể chứa thêm các file CSS/SCSS tùy chỉnh)
├── hooks/                    # (Có thể chứa các custom React hooks)
├── next.config.mjs           # Cấu hình Next.js
├── package.json              # Quản lý dependencies và scripts
├── tailwind.config.ts        # Cấu hình Tailwind CSS
└── tsconfig.json             # Cấu hình TypeScript
```

## Khởi chạy dự án

1.  **Cài đặt dependencies:**

    ```bash
    npm install
    # hoặc
    yarn install
    # hoặc
    pnpm install
    ```

2.  **Chạy development server:**
    ```bash
    npm run dev
    # hoặc
    yarn dev
    # hoặc
    pnpm dev
    ```
    Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt để xem trang web.

## Scripts

- `dev`: Chạy development server.
- `build`: Build dự án cho production.
- `start`: Chạy production server (sau khi đã build).
- `lint`: Chạy linter (ESLint).

## Thông tin thêm

- Dự án bỏ qua lỗi ESLint và TypeScript trong quá trình build (cấu hình trong `next.config.mjs`).
- Hình ảnh không được tối ưu hóa qua Next.js Image Optimization (cấu hình trong `next.config.mjs`).
