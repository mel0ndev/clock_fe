"use client"
import Image from "next/image"; 
import Link from "next/link"; 
import { MdContentCopy } from "react-icons/md";
import { useToken, clockTokenAddress } from "@/app/hooks/token"; 
import { Button } from "@/components/ui/button"; 

export const MainCard = () => {
	const { tax } = useToken(); 

	const copy = async () => {
		await navigator.clipboard.writeText(clockTokenAddress.toString());
	}

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
			<div className="mt-10 pb-12 sm:pl-10 w-10"> 
			<a target="_blank" href="https://google.com" rel="noopener noreferrer">
				<Button
					className="flex bg-[#00C850] lg:text-lg font-bruno rounded-full pl-12 pr-14 pt-7 pb-7 hover:bg-clock"
				> 
					<Image 
						src="/uniswaplogo.png"
						width={32}
						height={32}
						alt="uniswap logo"
						className="mr-5"
					/>
					Buy here
				</Button> 
			</a>
			</div> 
			<div className="mt-2 pt-5 sm:pl-10 inline-flex justify-center items-center"> 
				<p>
					Token Address: 
				</p>
				<div className="bg-zinc-900 bg-opacity-60 inline-flex static h-10 items-center rounded-md lg:pl-4 lg:pr-4 lg:ml-5 lg:mr-5 sm:ml-2 sm:mr-2"> 
					<p className="sm:ml-4">
						{clockTokenAddress}
					</p>
					<Button 
						variant="ghost" 
						size="icon"
						className="ml-5 mr-1 hover:bg-gray-300 w-6 h-6"
						onClick={() => copy()}
					> 
						<MdContentCopy />
					</Button>
				</div>
				<p>
					TAX: {tax ? tax.toString() : 'loading'}% 
				</p>
			</div> 
		</div>
	); 
}
