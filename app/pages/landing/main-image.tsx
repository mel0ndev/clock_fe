import Image from "next/image"; 

export const MainPageImage = () => {

	return (
		<div className="relative w-full h-full">
		<Image 
			src="/maincard.png"
			alt="main"
			fill={true}
			objectFit="cover"
			className="rounded-xl h-full outline outline-1 outline-slate-500"
		/>
		</div>
	); 
}
