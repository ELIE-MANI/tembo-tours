import Image from "next/image";

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
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition">

      <div className="relative h-72">

        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />

      </div>

      <div className="p-6">

        <p className="text-[#009879] font-medium mb-2">
          {location}
        </p>

        <h2 className="text-2xl font-bold mb-4">
          {name}
        </h2>

        <p className="text-gray-600">
          {description}
        </p>

      </div>

    </div>
  );
}