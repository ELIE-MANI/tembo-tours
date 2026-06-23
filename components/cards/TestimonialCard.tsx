import Image from "next/image";

interface TestimonialProps{
name:string;
country:string;
comment:string;
image:string;
}

export default function TestimonialCard({
name,
country,
comment,
image
}:TestimonialProps){

return(

<div className="bg-white rounded-2xl shadow-lg p-8">

<Image
src={image}
alt={name}
width={90}
height={90}
className="rounded-full mx-auto object-cover"
/>

<h3 className="font-bold text-xl text-center mt-5">

{name}

</h3>

<p className="text-center text-gray-500 mb-6">

{country}

</p>

<p className="text-gray-600 italic text-center">

"{comment}"

</p>

</div>

)

}