import Image from "next/image";

interface DestinationProps{
name:string;
image:string;
description:string;
}

export default function DestinationCard({
name,
image,
description
}:DestinationProps){

return(

<div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl duration-300">

<Image
src={image}
alt={name}
width={500}
height={350}
className="h-60 w-full object-cover"
/>

<div className="p-6">

<h3 className="text-xl font-bold text-[#0B4F6C] mb-3">
{name}
</h3>

<p className="text-gray-600">
{description}
</p>

</div>

</div>

)

}