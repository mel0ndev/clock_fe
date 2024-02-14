"use client"
import Image from "next/image"; 
import Link from "next/link"; 
import { useState, useEffect } from "react"; 
import { MdContentCopy } from "react-icons/md";
import { useToken, clockTokenAddress } from "@/app/hooks/token"; 
import { Button } from "@/components/ui/button"; 

export const MainCard = () => {
	const { tax } = useToken(); 
	const [isDesktop, setDesktop] = useState(window.innerWidth > 650); 

	const updateMedia = () => {
		setDesktop(window.innerWidth > 650);
	};

	useEffect(() => {
		window.addEventListener("resize", updateMedia);
		return () => window.removeEventListener("resize", updateMedia);
	});
	

	const copy = async () => {
		await navigator.clipboard.writeText(clockTokenAddress.toString());
	}

	return (
		<div> 
			<div className="md:pl-10">
				<div className="flex justify-center md:inline-block md:justify-start">
					<p className="text-3xl md:text-5xl text-clock font-bruno md:tracking-wider"> 
						Tick Tock... 
					</p> 
				</div>
			</div>
			<div className="mt-2 md:mt-1 md:inline-flex justify-center md:justify-start">
				<p className="mt-4 md:pl-14 text-2xl flex justify-center md:justify-start mb-4"><i> the clock is </i></p>
				<p className="md:pl-2 flex justify-center md:justify-start text-5xl text-clock font-bruno tracking-widest"> Ticking </p> 
			</div>

			<div className="mt-5 flex justify-center md:justify-start"> 
				<p className="text-center md:justify-start md:text-left p-10"> 
					Stake your Clock for additional token rewards every hour based on the duration you&apos;ve staked.
				</p> 
			</div> 

			<div className="mt-10 pb-12 md:pl-10 flex justify-center md:flex-end md:mb-auto md:justify-start"> 
			<a target="_blank" href="https://google.com" rel="noopener noreferrer">
				<Button
					className="flex bg-[#00C850] lg:text-lg font-bruno rounded-full pl-6 md:pl-12 pr-8 md:pr-12 pt-7 pb-7 hover:bg-clock justify-center md:justify-start"
				> 
					<Image 
						src="/uniswaplogo.png"
						width={32}
						height={32}
						alt="uniswap logo"
						className="mr-2 md:mr-5 justify-center"
					/>
					Buy here
				</Button> 
			</a>
			</div> 
			<div className="mt-2 pt-5 md:pl-10 md:inline-flex flex justify-center items-center"> 
				<p className="flex justify-center md:flex hidden">
					Token Address: 
				</p>
				<div className="bg-zinc-900 bg-opacity-60 inline-flex justify-center h-10 items-center rounded-md md:pl-4 md:pr-4 md:ml-5 md:mr-5 ml-2 mr-2"> 
					{isDesktop ? (
					<p className="ml-4">
						{clockTokenAddress}
					</p>
					) : (
					<p className="ml-4 flex justify-center">
						{`${clockTokenAddress.substring(0, 8)}...${clockTokenAddress.substring(36,clockTokenAddress.length)}`}
					</p>

					)}
					<Button 
						variant="ghost" 
						size="icon"
						onClick={() => copy()}
					> 
						<MdContentCopy />
					</Button>
				</div>
				<p className="flex justify-center md:inline-flex">
					TAX: {tax ? tax.toString() : 'loading'}% 
				</p>
			</div> 
		</div>
	); 
}
