"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PopupAnnouncementProps {
  imageUrl: string
  altText: string
  duration?: number // Thời gian hiển thị tính bằng mili giây
}

export default function PopupAnnouncement({
  imageUrl,
  altText,
  duration = 10000, // Mặc định 10 giây
}: PopupAnnouncementProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Hiển thị popup sau khi component được mount
    const showTimeout = setTimeout(() => {
      setIsVisible(true)
    }, 500) // Delay nhỏ để trang load xong

    // Tự động đóng popup sau khoảng thời gian duration
    const hideTimeout = setTimeout(() => {
      setIsVisible(false)
    }, duration + 500)

    // Cleanup timeouts khi component unmount
    return () => {
      clearTimeout(showTimeout)
      clearTimeout(hideTimeout)
    }
  }, [duration])

  // Nếu không hiển thị, không render gì cả
  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="relative max-w-lg w-full mx-4 bg-white rounded-lg shadow-xl overflow-hidden">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 z-10 bg-white/80 hover:bg-white/90 rounded-full"
          onClick={() => setIsVisible(false)}
          aria-label="Đóng"
        >
          <X className="h-5 w-5" />
        </Button>

        <div className="relative aspect-[4/3] w-full">
          <Image src={imageUrl || "/placeholder.svg"} alt={altText} fill className="object-contain" priority />
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
          <div
            className="h-full bg-primary transition-all duration-[5000ms] ease-linear"
            style={{
              width: "100%",
              animationName: "countdown",
              animationDuration: `${duration}ms`,
              animationTimingFunction: "linear",
            }}
          />
        </div>
      </div>
    </div>
  )
}
