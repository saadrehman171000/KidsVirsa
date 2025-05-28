"use client"

import Link from "next/link"
import { Home, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 to-white">
      <div className="text-center px-4">
        <div className="mb-8">
          <div className="text-9xl font-bold text-orange-600 mb-4">404</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-lg text-gray-700 mb-8 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
            <Link href="/" className="flex items-center gap-2">
              <Home size={18} />
              Go Home
            </Link>
          </Button>
          <Button size="lg" variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft size={18} />
            Go Back
          </Button>
        </div>

        <div className="mt-12 p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Continue Learning</h2>
          <p className="text-gray-700 mb-4">Don't let this stop your learning journey! Here are some popular pages:</p>
          <div className="space-y-2">
            <Link href="/dashboard" className="block text-orange-600 hover:text-orange-700">
              → Your Dashboard
            </Link>
            <Link href="/modules" className="block text-orange-600 hover:text-orange-700">
              → Learning Modules
            </Link>
            <Link href="/games" className="block text-orange-600 hover:text-orange-700">
              → Games & Activities
            </Link>
            <Link href="/cultural-immersion" className="block text-orange-600 hover:text-orange-700">
              → Cultural Immersion
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
