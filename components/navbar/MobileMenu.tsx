"use client";

import Link from "next/link";
import { X } from "lucide-react";

interface Props{
open:boolean;
setOpen:(open:boolean)=>void;
}

export default function MobileMenu({
open,
setOpen
}:Props){

if(!open) return null;

return(

<div className="fixed inset-0 bg-black/50">

<div className="bg-[#0B3D1F] h-full w-72 p-8">

<div className="flex justify-end">

<button onClick={()=>setOpen(false)}
    >

<X size={30}/>

</button>

</div>

<div className="mt-10 flex flex-col gap-8 text-lg text-white">

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

<Link href="/booking">
Book Now
</Link>

</div>

</div>

</div>

)

}