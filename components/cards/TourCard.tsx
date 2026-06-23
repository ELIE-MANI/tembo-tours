import Image from "next/image";

interface TourProps{
title:string;
duration:string;
price:string;
image:string;
}

export default function TourCard({
title,
duration,
price,
image
}:TourProps){

return(

<div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl">

<Image
src={image}
alt={title}
width={500}
height={350}
className="w-full h-64 object-cover"
/>

<div className="p-6">

<h3 className="text-xl font-bold mb-3">
{title}
</h3>

<p className="text-gray-500">
{duration}
</p>

<p className="text-[#F4B400] font-bold text-xl mt-3">
{price}
</p>

</div>

</div>

)

}