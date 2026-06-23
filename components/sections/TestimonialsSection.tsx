import TestimonialCard from "../cards/TestimonialCard";
import { testimonials } from "@/lib/data/testimonials";

export default function Testimonials(){

return(

<section className="py-24 bg-gray-50">

<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-16">

<h2 className="text-4xl font-bold text-[#0B4F6C]">

What Our Clients Say

</h2>

<p className="text-gray-600 mt-4">

Experiences shared by travelers from around the world.

</p>

</div>

<div className="grid md:grid-cols-3 gap-8">

{testimonials.map((testimonial: any)=>(

<TestimonialCard
key={testimonial.id}
{...testimonial}
/>

))}

</div>

</div>

</section>

)

}