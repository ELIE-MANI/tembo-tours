import { destinations } from "@/lib/data/destinations";
import DestinationCard from "../cards/DestinationCard";

export default function Destinations(){

return(

<section className="py-24 bg-gray-50">

<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-16">

<h2 className="text-4xl font-bold text-[#0B4F6C]">

Explore Rwanda

</h2>

<p className="text-gray-600 mt-4">

Discover breathtaking destinations.

</p>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{destinations.map((destination : any)=>(

<DestinationCard
key={destination.id}
{...destination}
/>

))}

</div>

</div>

</section>

)

}