import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

interface DestinationProps {
  name: string;
  location: string;
  image: string;
  description: string;
}

export default function DestinationCard({
  name,
  location,
  image,
  description,
}: DestinationProps) {
  return (
    <div className="group body-font bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition duration-300">
      
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
            sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 33vw"
          className="object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col h-full">
        
        {/* Location */}
        <div className="flex items-center gap-2 text-[#D4A017] font-medium mb-3">
          <MapPin size={16} />
          <span>{location}</span>
        </div>

        {/* Name */}
        <h2 className="heading-font text-2xl font-bold text-[#0B3D1F] mb-4">
          {name}
        </h2>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6">
          {description}
        </p>

        {/* Button */}
        <Link
          href="/tours"
          className="inline-flex items-center gap-2 text-[#0B3D1F] font-semibold hover:text-[#D4A017] transition"
        >
          Learn More
          <ArrowRight
            size={18}
            className="group-hover:translate-x-1 transition"
          />
        </Link>
      </div>
    </div>
  );
}