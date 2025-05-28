import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import FeatureCard from "@/components/home/FeatureCard"
import TestimonialCard from "@/components/home/TestimonialCard"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-amber-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Learn <span className="text-orange-600">Punjabi</span> in a Fun & Interactive Way
              </h1>
              <p className="text-lg md:text-xl text-gray-700">
                Master the Punjabi language from alphabets to advanced sentences with our engaging lessons, games, and
                cultural immersion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                  <Link href="/dashboard" className="flex items-center gap-2">
                    Start Learning <ArrowRight size={18} />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                  <Link href="/assessment">Take Assessment Test</Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative h-[300px] md:h-[400px] w-full">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Children learning Punjabi"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-6 left-0 w-full overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-12 md:h-20"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Learn With Us?</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our platform offers a comprehensive approach to learning Punjabi with features designed for all ages.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Interactive Lessons"
              description="Engage with interactive content designed to make learning fun and effective."
              icon="BookOpen"
            />
            <FeatureCard
              title="Cultural Immersion"
              description="Learn about Punjabi culture, traditions, and history alongside the language."
              icon="Globe"
            />
            <FeatureCard
              title="Games & Activities"
              description="Reinforce learning through fun games and activities for all ages."
              icon="Gamepad2"
            />
            <FeatureCard
              title="Progress Tracking"
              description="Track your learning journey with detailed progress reports and achievements."
              icon="BarChart"
            />
            <FeatureCard
              title="Writing Practice"
              description="Download worksheets to practice writing Punjabi characters and words."
              icon="PenLine"
            />
            <FeatureCard
              title="Audio & Video"
              description="Learn proper pronunciation with audio clips and video tutorials."
              icon="Video"
            />
          </div>
        </div>
      </section>

      {/* Modules Preview Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Learning Modules</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Structured lessons aligned with Punjab Board Class 1 textbook to provide a comprehensive learning
              experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((module) => (
              <Link href={`/modules/${module}`} key={module} className="group">
                <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 group-hover:transform group-hover:scale-105">
                  <div className="h-40 bg-gradient-to-r from-orange-400 to-orange-600 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl font-bold text-white">{module}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Module {module}</h3>
                    <p className="text-gray-600">
                      {module === 1 && "Punjabi Alphabets & Basic Sounds"}
                      {module === 2 && "Simple Words & Vocabulary Building"}
                      {module === 3 && "Basic Sentences & Conversations"}
                      {module === 4 && "Grammar Fundamentals"}
                      {module === 5 && "Reading Simple Stories"}
                      {module === 6 && "Cultural Knowledge & Expressions"}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
              <Link href="/modules">Explore All Modules</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Learners Say</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Hear from students who have experienced our interactive Punjabi learning platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Amrit Singh"
              role="Student"
              quote="The interactive games made learning Punjabi so much fun! I can now read basic sentences after just a few weeks."
              imageSrc="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              name="Sarah Johnson"
              role="Parent"
              quote="My children love the colorful animations and games. It's been a great way for them to connect with their heritage."
              imageSrc="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              name="Raj Patel"
              role="Adult Learner"
              quote="The structured approach and cultural context helped me understand not just the language but also the rich Punjabi culture."
              imageSrc="/placeholder.svg?height=100&width=100"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Punjabi Learning Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of learners mastering Punjabi in a fun and interactive way.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
            <Link href="/dashboard" className="flex items-center gap-2">
              Start Learning Now <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
