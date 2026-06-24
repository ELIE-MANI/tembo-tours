import Link from "next/link";

interface BookingCardProps{
title:string;
description:string;
href:string;
}

export default function BookingCard({
title,
description,
href
}:BookingCardProps){

return(

<div className="bg-white rounded-3xl shadow-lg p-8">

<h2 className="text-2xl font-bold mb-4">
{title}
</h2>

<p className="text-gray-600 mb-8">
{description}
</p>

<Link
href={href}
className="bg-[#009879] text-white px-6 py-3 rounded-xl"
>
Book Now
</Link>

</div>

)

}