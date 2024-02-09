import Image from "next/image"; 

export const MainPageImage = () => {

	return (
		<>
			<div className="mr-14">
				<div className="lg:bg-black lg:flex lg:outline lg:outline-1 lg:outline-slate-500 lg:rounded-xl lg:p-10 lg:h-full sm:hidden">
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
