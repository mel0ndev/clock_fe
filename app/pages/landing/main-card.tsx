"use client"
import Image from "next/image"; 
import { MdContentCopy } from "react-icons/md";
//import { TokenMetadata } from "@/app/hooks/token"; 
import { Button } from "@/components/ui/button"; 
//import { useAccount } from "wagmi"

export const MainCard = () => {

	return (
		<div className="sm:pl-10">
			<div>
				<p className="text-5xl text-clock font-bruno tracking-wider"> Tick Tock... </p> 
			</div>
			<div className="mt-2 inline-flex">
				<p className="mt-4 pl-10 text-2xl"><i> the clock is </i></p>
				<p className="pl-2 text-5xl text-clock font-bruno tracking-widest"> Ticking </p> 
			</div>

			<div className="mt-10 sm:pl-10"> 
				<p> 
					Stake your Clock for additional token rewards every hour based on the duration you've staked.
				</p> 
			</div> 
			<div className="mt-10 pb-14 sm:pl-10"> 
				<Button className="flex bg-[#00C850] font-bruno rounded-full pl-8 pr-10 hover:bg-clock"> 
					<Image 
						src="/uniswaplogo.png"
						width={32}
						height={32}
						alt="uniswap logo"
						className="mr-5"
					/>
					Buy here
				</Button> 
			</div> 
			<div className="mt-2 pt-5 sm:pl-10 inline-flex justify-center items-center"> 
				<p>
					Smart Contract Address: 
				</p>
				<div className="bg-gray-800 inline-flex static h-10 items-center rounded-md lg:pl-4 lg:pr-4 lg:ml-10 lg:mr-10 sm:ml-5 sm:mr-5"> 
					<p className="sm:ml-4">
						0x0sd0x0x03023401234021342134
					</p>
					<Button 
						variant="ghost" 
						size="icon"
						className="ml-5 mr-1 hover:bg-gray-300 w-6 h-6"
					> 
						<MdContentCopy />
					</Button>
				</div>
				<p>
					TAX: 10%
				</p>
			</div> 
		</div>
	); 
}
