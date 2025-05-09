"use client"

import { useState, useEffect } from "react"
import PopupAnnouncement from "@/components/popup-announcement"

export default function PopupProvider() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <PopupAnnouncement
      imageUrl="/images/royal-lotus-banner.png"
      altText="Royal Lotus - Premium Microfiber & PVC Leather"
      duration={5000}
    />
  )
}
