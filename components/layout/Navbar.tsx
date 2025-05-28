"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, User, LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/modules", label: "Modules" },
    { href: "/games", label: "Games" },
    { href: "/writing-practice", label: "Writing" },
    { href: "/cultural-immersion", label: "Culture" },
    { href: "/rewards", label: "Rewards" },
  ]

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">ਪ</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Learn Punjabi</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-orange-600 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4 mr-2" />
              Profile
            </Button>
            <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white">
              <LogIn className="h-4 w-4 mr-2" />
              Sign In
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMenu}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="border-t pt-4 mt-4 space-y-2">
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Button>
                <Button size="sm" className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                  <LogIn className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
