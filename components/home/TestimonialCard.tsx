import Image from "next/image"

interface TestimonialCardProps {
  name: string
  role: string
  quote: string
  imageSrc: string
}

export default function TestimonialCard({ name, role, quote, imageSrc }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <Image src={imageSrc || "/placeholder.svg"} alt={name} width={50} height={50} className="rounded-full mr-4" />
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">"{quote}"</p>
    </div>
  )
}
