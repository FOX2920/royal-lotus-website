"use client"

import { useState, useEffect } from "react"
import { Phone, X, Facebook, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setIsOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 lg:hidden">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-lg p-4 animate-fade-in">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-gray-900">Liên hệ ngay</h3>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-3">
            <a
              href="tel:0911219966"
              className="flex items-center justify-center w-full bg-primary text-white py-2 px-4 rounded-md"
            >
              <Phone className="h-4 w-4 mr-2" />
              <span>Gọi ngay: 091.121.9966</span>
            </a>
            <a
              href="https://www.facebook.com/daPVC"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full bg-blue-600 text-white py-2 px-4 rounded-md"
            >
              <Facebook className="h-4 w-4 mr-2" />
              <span>Facebook</span>
            </a>
            <a
              href="mailto:royallotusjsc@gmail.com"
              className="flex items-center justify-center w-full bg-gray-100 text-gray-800 py-2 px-4 rounded-md"
            >
              <Mail className="h-4 w-4 mr-2" />
              <span>Email</span>
            </a>
            <a
              href="/contact"
              className="flex items-center justify-center w-full bg-gray-100 text-gray-800 py-2 px-4 rounded-md"
            >
              <span>Gửi tin nhắn</span>
            </a>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg animate-fade-in"
          aria-label="Liên hệ"
        >
          <Phone className="h-6 w-6" />
        </button>
      )}
    </div>
  )
}
