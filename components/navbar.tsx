"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/icon.png" alt="Stretching Remindly 로고" width={36} height={36} className="w-9 h-9" />
          <div className="flex items-center gap-2">
            <span className="cyberpunk-gradient-text text-xl hidden sm:inline-block">STRETCH_REMINDLY</span>
            <span className="inline-flex items-center rounded-md bg-secondary/20 px-2 py-1 text-xs font-medium text-secondary ring-1 ring-inset ring-secondary/30">
              BETA
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#features"
            className="text-sm font-medium hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Features
          </a>
          <a
            href="#screenshots"
            className="text-sm font-medium hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("screenshots")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Screenshots
          </a>
          <a
            href="#faq"
            className="text-sm font-medium hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            FAQ
          </a>
          <Button
            asChild
            className="cyberpunk-button bg-primary hover:bg-primary/90"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("download")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <a href="#download">Download</a>
          </Button>
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">메뉴 열기</span>
        </Button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden p-4 pt-0 bg-background border-b border-border/40 animate-accordion-down">
          <nav className="flex flex-col space-y-4 py-4">
            <a
              href="#features"
              className="text-sm font-medium hover:text-primary transition-colors px-4 py-2"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
                setIsMenuOpen(false)
              }}
            >
              Features
            </a>
            <a
              href="#screenshots"
              className="text-sm font-medium hover:text-primary transition-colors px-4 py-2"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("screenshots")?.scrollIntoView({ behavior: "smooth" })
                setIsMenuOpen(false)
              }}
            >
              Screenshots
            </a>
            <a
              href="#faq"
              className="text-sm font-medium hover:text-primary transition-colors px-4 py-2"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })
                setIsMenuOpen(false)
              }}
            >
              FAQ
            </a>
            <Button
              asChild
              className="cyberpunk-button bg-primary hover:bg-primary/90 w-full"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("download")?.scrollIntoView({ behavior: "smooth" })
                setIsMenuOpen(false)
              }}
            >
              <a href="#download">Download</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

