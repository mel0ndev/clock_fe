import Image from "next/image"; 

export const Logo = () => {
	return (
		<div className="flex ml-14 mt-5">
			<Image 
				src="/logo.png"		
				alt="logo"
				width={250}
				height={250}
				className="h-16 w-16 rounded-full outline outline-1 outline-clock shadow-md shadow-clock"
			/>
		</div>
	); 
}
