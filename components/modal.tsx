"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  subtitle?: string
  children: React.ReactNode
}

export function Modal({ isOpen, onClose, title, subtitle, children }: ModalProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Add event listener to close modal on escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden" // Prevent scrolling when modal is open
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "auto" // Re-enable scrolling when modal is closed
    }
  }, [isOpen, onClose])

  if (!isMounted) return null

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-background rounded-lg w-full max-w-3xl max-h-[80vh] overflow-y-auto m-4">
        <div className="sticky top-0 bg-background p-6 border-b border-border z-10">
          <button onClick={onClose} className="absolute right-4 top-4 p-2 rounded-full hover:bg-muted">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
          <h2 className="text-2xl font-orbitron cyberpunk-gradient-text">{title}</h2>
          {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}

