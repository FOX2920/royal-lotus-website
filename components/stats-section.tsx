"use client"

import { TrendingUp, Users, Award, Clock } from "lucide-react"

const stats = [
  {
    id: 1,
    name: "Năm kinh nghiệm",
    value: "15+",
    icon: Clock,
    description: "Trong ngành giả da công nghiệp"
  },
  {
    id: 2,
    name: "Khách hàng tin tưởng",
    value: "500+",
    icon: Users,
    description: "Doanh nghiệp lớn nhỏ trên toàn quốc"
  },
  {
    id: 3,
    name: "Sản phẩm chất lượng",
    value: "1000+",
    icon: Award,
    description: "Đa dạng màu sắc và chất liệu"
  },
  {
    id: 4,
    name: "Tăng trưởng hàng năm",
    value: "25%",
    icon: TrendingUp,
    description: "Doanh thu và thị phần"
  }
]

export default function StatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Con số ấn tượng
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Những thành tựu đáng tự hào trong hành trình phát triển của Royal Lotus
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const IconComponent = stat.icon
            return (
              <div
                key={stat.id}
                className="relative bg-white p-8 rounded-lg shadow-sm border transition-all duration-300 hover:shadow-lg hover:border-primary/20 group text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{stat.name}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 