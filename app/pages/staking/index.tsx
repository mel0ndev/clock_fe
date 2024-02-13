import Image from "next/image"; 
import { StakingInfo } from "./info"; 

const Staking = () => {
	return (
		<>
			<div className="flex flex-col md:mt-14 mb-8 md:mb-14">
				<h1 className="font-bruno flex justify-center"> 
					Hourly rewards compounding
				</h1> 
			</div>
		<div className="grid grid-cols-8 flex"> 
			<div className="bg-black bg-opacity-25 outline outline-1 outline-slate-500 h-full w-full col-span-6 col-start-2 col-end-8 rounded-xl"> 
				<StakingInfo />
			</div>
		</div>
			<div className="flex flex-col items-center mb-5 md:mb-10 mt-2">
			<Image 
				src="/howitworks.svg"
				alt="how it works"
				width={500}
				height={500}
				className="md:mb-14 md:mt-5 md:mt-14"
			/>
			<div className="md:mt-8"></div>
		</div>
		</> 
	); 
}

export default Staking; 
