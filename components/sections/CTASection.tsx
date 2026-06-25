import Link from "next/link";

export default function CTA(){

return(

<section className="py-28 bg-[#0B4F6C]">

<div className="max-w-4xl mx-auto px-6 text-center">

<h2 className="text-5xl font-bold text-white mb-8">

Start Your Adventure Today

</h2>

<p className="text-gray-200 text-lg mb-10">

Discover Rwanda's beauty with unforgettable experiences and premium services.

</p>

<Link
href="/contact"
className="bg-secondary text-white px-10 py-4 rounded-full font-semibold hover:scale-105 transition"
>

Contact Us

</Link>

</div>

</section>

)

}