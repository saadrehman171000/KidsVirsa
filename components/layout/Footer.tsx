import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">ਕ</span>
              </div>
              <span className="text-xl font-bold">Kids Virsa</span>
            </Link>
            <p className="text-gray-400">
              Master the Punjabi language through interactive lessons, games, and cultural immersion.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Learning */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Learning</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/modules" className="text-gray-400 hover:text-white transition-colors">
                  All Modules
                </Link>
              </li>
              <li>
                <Link href="/games" className="text-gray-400 hover:text-white transition-colors">
                  Games & Activities
                </Link>
              </li>
              <li>
                <Link href="/writing-practice" className="text-gray-400 hover:text-white transition-colors">
                  Writing Practice
                </Link>
              </li>
              <li>
                <Link href="/cultural-immersion" className="text-gray-400 hover:text-white transition-colors">
                  Cultural Content
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Account</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/dashboard" className="text-gray-400 hover:text-white transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/rewards" className="text-gray-400 hover:text-white transition-colors">
                  Rewards
                </Link>
              </li>
              <li>
                <Link href="/assessment" className="text-gray-400 hover:text-white transition-colors">
                  Assessment Test
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Profile Settings
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Kids Virsa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
