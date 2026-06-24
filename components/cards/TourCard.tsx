import Image from "next/image";

interface TourProps{
title:string;
location:string;
duration:string;
image:string;
price:string;
}

export default function TourCard({
title,
location,
duration,
image,
price
}:TourProps){

return(

<div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition">

<div className="relative h-72">

<Image
src={image}
alt={title}
fill
className="object-cover"
/>

</div>

<div className="p-6">

<p className="text-[#009879] font-medium">
{location}
</p>

<h2 className="text-2xl font-bold mt-2 mb-4">
{title}
</h2>

<div className="flex justify-between items-center">

<div>

<p className="text-gray-500">
{duration}
</p>

<p className="text-[#009879] font-bold text-xl">
{price}
</p>

</div>

<button className="bg-[#009879] text-white px-5 py-3 rounded-xl">
Book Tour
</button>

</div>

</div>

</div>

)

}