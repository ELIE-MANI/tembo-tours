import {
  Hotel,
  Plane,
  Map,
  Car,
  Bus,
  ContactIcon
} from "lucide-react";

interface Props {
  title: string;
  description: string;
  icon: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
}: Props) {

  const icons = {
    hotel: Hotel,
    plane: Plane,
    map: Map,
    car: Car,
    bus: Bus,
    passport: ContactIcon,
  };

  const Icon = icons[icon as keyof typeof icons];

  return (
    <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition">

      <div className="bg-[#009879]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">

        <Icon
          size={30}
          className="text-[#009879]"
        />

      </div>

      <h2 className="text-2xl font-bold mb-4">
        {title}
      </h2>

      <p className="text-gray-600">
        {description}
      </p>

    </div>
  );
}