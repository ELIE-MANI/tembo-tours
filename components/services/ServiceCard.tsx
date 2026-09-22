import Link from "next/link";
import {
  Hotel,
  Plane,
  Map,
  Car,
  Bus,
  ContactIcon,
  ArrowRight,
} from "lucide-react";

interface Props {
  title: string;
  description: string;
  icon: string;
  href?: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  href,
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

  const card = (
    <article className="group h-full rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Icon */}
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4A017]/10 transition-colors duration-300 group-hover:bg-[#0B3D1F]">
        <Icon
          size={30}
          className="text-[#0B3D1F] transition-colors duration-300 group-hover:text-[#D4A017]"
        />
      </div>

      {/* Title */}
      <h2 className="heading-font mb-4 text-2xl font-bold text-[#0B3D1F]">
        {title}
      </h2>

      {/* Description */}
      <p className="leading-relaxed text-gray-600">
        {description}
      </p>

      {/* Link */}
      {href && (
        <div className="mt-6 flex items-center gap-2 font-semibold text-[#0B3D1F]">
          <span>Request Service</span>

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      )}
    </article>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {card}
      </Link>
    );
  }

  return card;
}