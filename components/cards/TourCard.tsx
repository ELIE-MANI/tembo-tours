import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock } from "lucide-react";

interface TourProps {
  title: string;
  location: string;
  duration: string;
  image: string;
  price: string;
}

export default function TourCard({
  title,
  location,
  duration,
  image,
  price,
}: TourProps) {
  return (
    <div className="group body-font bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition duration-300">
      
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        
        {/* Location */}
        <div className="flex items-center gap-2 text-[#D4A017] font-medium mb-2">
          <MapPin size={16} />
          <span>{location}</span>
        </div>

        {/* Title */}
        <h2 className="heading-font text-2xl font-bold text-[#0B3D1F] mt-2 mb-4">
          {title}
        </h2>

        {/* Footer */}
        <div className="flex justify-between items-center">
          <div>
            
            {/* Duration */}
            <div className="flex items-center gap-2 text-gray-500 mb-2">
              <Clock size={16} />
              <p>{duration}</p>
            </div>

            {/* Price */}
            <p className="text-[#D4A017] font-bold text-2xl">
              {price}
            </p>
          </div>

          {/* CTA */}
          <Link
            href="/booking/tour"
            className="bg-[#0B3D1F] text-white px-5 py-3 rounded-xl font-semibold hover:bg-[#14532d] transition"
          >
            Book Tour
          </Link>
        </div>
      </div>
    </div>
  );
}