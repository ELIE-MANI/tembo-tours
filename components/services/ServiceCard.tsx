import {
  Hotel,
  Plane,
  Map,
  Car,
  Bus,
  ContactRound,
} from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: string;
};

export default function ServiceCard({
  title,
  description,
  icon,
}: ServiceCardProps) {

  const icons = {
    hotel: <Hotel size={40} />,
    plane: <Plane size={40} />,
    map: <Map size={40} />,
    car: <Car size={40} />,
    bus: <Bus size={40} />,
    passport: <ContactRound size={40} />,
  };

  return (
    <div className="bg-white rounded-3xl shadow-md p-8 hover:-translate-y-2 transition duration-300">

      <div className="text-primary mb-6">
        {icons[icon as keyof typeof icons]}
      </div>

      <h3 className="text-2xl font-semibold mb-4">
        {title}
      </h3>

      <p className="text-gray-600 leading-7">
        {description}
      </p>
<button
className="mt-6 text-primary font-semibold"
>
Learn More →
</button>
    </div>
  );
}