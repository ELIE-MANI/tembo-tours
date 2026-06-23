"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {

const [open,setOpen]=useState(false);

return (

<header className="sticky top-0 z-50 bg-white shadow-sm">

<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

<Link
href="/"
className="text-2xl font-bold text-[#0B4F6C]"
>
YourBrand
</Link>

<nav className="hidden md:flex gap-8 text-gray-700">

<Link href="/">Home</Link>

<Link href="/destinations">
Destinations
</Link>

<Link href="/tours">
Tours
</Link>

<Link href="/about">
About
</Link>
<Link href="/services">
Services
</Link>


<Link href="/contact">
Contact
</Link>

</nav>

<Link
href="/booking"
className="hidden md:block bg-[#F4B400] text-white px-5 py-3 rounded-full"
>
Book Now
</Link>

<button
className="md:hidden text-black"
onClick={()=>setOpen(true)}
>

<Menu size={30}/>

</button>

</div>

<MobileMenu
open={open}
setOpen={setOpen}
/>

</header>

)

}