import type { Metadata } from "next"
import { Play, Clock, BookOpen, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Cultural Immersion - Learn Punjabi",
  description: "Explore Punjabi culture, traditions, festivals, and more to enhance your language learning",
}

export default function CulturalImmersionPage() {
  // Mock data for cultural content
  const videos = [
    {
      id: 1,
      title: "Introduction to Punjab",
      description: "Learn about the geography, history, and people of Punjab",
      duration: "8:24",
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Punjabi Festivals",
      description: "Explore the major festivals celebrated in Punjab",
      duration: "12:45",
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Punjabi Music and Dance",
      description: "Discover the rich tradition of Punjabi music and Bhangra dance",
      duration: "10:18",
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Punjabi Cuisine",
      description: "Learn about traditional Punjabi food and cooking methods",
      duration: "15:32",
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      title: "Punjabi Literature",
      description: "Explore famous Punjabi poets and writers",
      duration: "11:05",
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      title: "Punjabi Attire",
      description: "Learn about traditional Punjabi clothing and jewelry",
      duration: "7:50",
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
  ]

  const articles = [
    {
      id: 1,
      title: "The History of Punjab",
      description: "A comprehensive look at the rich history of Punjab region",
      readTime: "8 min read",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Punjabi Wedding Traditions",
      description: "Explore the colorful and vibrant traditions of Punjabi weddings",
      readTime: "10 min read",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Sikh Religion and Punjab",
      description: "Learn about Sikhism and its deep connection to Punjab",
      readTime: "12 min read",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Punjabi Folk Tales",
      description: "Popular folk tales that have been passed down through generations",
      readTime: "15 min read",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const virtualTours = [
    {
      id: 1,
      title: "Golden Temple, Amritsar",
      description: "Take a virtual tour of the iconic Golden Temple",
      duration: "Interactive",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Punjabi Villages",
      description: "Explore traditional Punjabi village life and culture",
      duration: "Interactive",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Chandigarh City Tour",
      description: "Discover the planned city of Chandigarh",
      duration: "Interactive",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cultural Immersion</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Immerse yourself in the rich culture, traditions, and heritage of Punjab to enhance your language learning
          experience.
        </p>
      </div>

      <Tabs defaultValue="videos" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="articles">Articles</TabsTrigger>
          <TabsTrigger value="tours">Virtual Tours</TabsTrigger>
        </TabsList>

        <TabsContent value="videos" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <Card key={video.id} className="overflow-hidden">
                <div className="relative">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                    <Clock className="inline h-3 w-3 mr-1" />
                    {video.duration}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{video.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{video.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">Watch Video</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="articles" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <Card key={article.id} className="overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>{article.title}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    {article.readTime}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{article.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Read Article
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tours" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {virtualTours.map((tour) => (
              <Card key={tour.id} className="overflow-hidden">
                <img src={tour.image || "/placeholder.svg"} alt={tour.title} className="w-full h-48 object-cover" />
                <CardHeader>
                  <CardTitle>{tour.title}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {tour.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{tour.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Start Tour</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Cultural Facts Section */}
      <div className="mt-16 p-8 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Did You Know?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-2">🎵</div>
            <h3 className="font-semibold mb-2">Bhangra Origins</h3>
            <p className="text-gray-700 text-sm">
              Bhangra dance originated as a harvest celebration in Punjab and is now popular worldwide.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🏛️</div>
            <h3 className="font-semibold mb-2">Golden Temple</h3>
            <p className="text-gray-700 text-sm">
              The Golden Temple serves free meals to over 100,000 people daily, regardless of religion or background.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🌾</div>
            <h3 className="font-semibold mb-2">Agricultural Hub</h3>
            <p className="text-gray-700 text-sm">
              Punjab is known as the "Granary of India" and produces a significant portion of India's wheat and rice.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
