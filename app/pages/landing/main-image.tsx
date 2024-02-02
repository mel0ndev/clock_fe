import Image from "next/image"; 

export const MainPageImage = () => {
	return (
		<>
			<div className="mr-14">
				<div className="bg-black flex outline outline-1 outline-slate-500 rounded-xl p-10 h-[600px]">
					<Image 
						src="/maincard.png"
						alt="main"
						height={500}
						width={500}
						className="rounded-xl h-full outline outline-1 outline-slate-500"
					/>
				</div>
			</div>
		</> 
	); 
}
