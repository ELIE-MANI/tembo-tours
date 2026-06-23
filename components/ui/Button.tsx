interface ButtonProps{
children: React.ReactNode;
}

export default function Button({
children
}:ButtonProps){
return(
<button className="bg-[#0B3D1F] text-white px-6 py-3 rounded-xl hover:bg-[#14532D] transition">
{children}
</button>
)
}