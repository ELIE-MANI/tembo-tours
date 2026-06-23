import TourCard from "../cards/TourCard";
import { tours } from "@/lib/data/tours";

export default function Tours(){

return(

<section className="py-24">

<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-16">

<h2 className="text-4xl font-bold text-[#0B4F6C]">

Popular Tours

</h2>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{tours.map((tour)=>(

<TourCard
key={tour.id}
{...tour}
/>

))}

</div>

</div>

</section>

)

}