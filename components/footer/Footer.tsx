import Link from "next/link";

export default function Footer(){

return(

<footer className="bg-black text-gray-300">

<div className="max-w-7xl mx-auto px-6 py-20">

<div className="grid md:grid-cols-4 gap-10">

<div>

<h3 className="text-2xl font-bold text-white mb-4">

Your Brand

</h3>

<p>

Discover Rwanda with premium travel experiences.

</p>

</div>

<div>

<h4 className="text-white font-semibold mb-4">

Quick Links

</h4>

<div className="space-y-2">

<Link href="/">Home</Link><br/>
<Link href="/about">About</Link><br/>
<Link href="/tours">Tours</Link><br/>
<Link href="/contact">Contact</Link>

</div>

</div>

<div>

<h4 className="text-white font-semibold mb-4">

Destinations

</h4>

<p>Kigali Hub</p>
<p>Akagera National Park</p>
<p>Volcano National Park</p>
<p>Nyungwe National Park</p>

</div>

<div>

<h4 className="text-white font-semibold mb-4">

Contact

</h4>

<p>+250 xxx xxx xxx</p>
<p>info@company.com</p>
<p>Kigali, Rwanda</p>

</div>

</div>

<hr className="my-10 border-gray-700"/>

<p className="text-center">

© 2026 Your Brand. All Rights Reserved.

</p>

</div>

</footer>

)

}