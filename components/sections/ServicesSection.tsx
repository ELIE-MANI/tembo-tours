import {
Hotel,
Plane,
Map,
Car,
Bus,
} from "lucide-react";

import { services } from "@/lib/data/services";

const iconMap = {
hotel: Hotel,
plane: Plane,
map: Map,
car: Car,
bus: Bus,

};

export default function Services() {
return (
<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-16">

<h2 className="text-4xl font-bold text-[#0B4F6C]">
Our Services
</h2>

<p className="text-gray-600 mt-4">
Complete travel solutions tailored for unforgettable journeys.
</p>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{services.map((service : any) => {

const Icon =
iconMap[service.icon as keyof typeof iconMap];

return (

<div
key={service.id}
className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300"
>

<div className="w-16 h-16 rounded-full bg-[#F4B400]/10 flex items-center justify-center mb-6">

<Icon
size={32}
className="text-[#F4B400]"
/>

</div>

<h3 className="text-xl font-semibold text-[#0B4F6C] mb-3">

{service.title}

</h3>

<p className="text-gray-600">
{service.description}
</p>

</div>

);

})}

</div>

</div>
</section>
);
}