import Image from "next/image"
import { Button } from "@/components/ui/button"; 

export const StakingInfo = () => {
	return (
		<>
			<div className="grid grid-cols-3 grid-rows-2">

				<div className="flex flex-col items-center justify-center">
					<p className="font-bruno text-clock lg:text-4xl sm:text-xl">
						+0.1%-0.9%
					</p>
					<p className="text-sm text-muted-foreground">
						1st-9th Hours
					</p>
				</div>

				<div className="flex flex-col items-center justify-center">
					<Image
						src="/clock.svg"
						alt="clock svg"
						width={128}
						height={128}
						className="sm:mt-5 lg:mt-10 lg:pt-5"
					/>
				</div>

				<div className="flex flex-col items-center justify-center">
					<p className="font-bruno text-clock lg:text-4xl sm:text-xl">
						+1.5%
					</p>
					<p className="text-sm text-muted-foreground">
						15th Hour
					</p>
				</div>

				<div className="flex flex-col items-center justify-center">
					<p className="font-bruno text-clock lg:text-4xl sm:text-xl">
						+1%
					</p>
					<p className="text-sm text-muted-foreground">
						10th Hour
					</p>
				</div>

				<div className="flex flex-col items-center justify-center">
					<Button className="flex bg-[#00C850] font-bruno rounded-full pl-10 pr-10 lg:pl-14 lg:pr-14 lg:text-xl hover:bg-clock"> 
						<p className="font-bruno">
							Stake
						</p>
					</Button>
				</div>

				<div className="flex flex-col items-center justify-center">
					<p className="font-bruno text-clock lg:text-4xl sm:text-xl">
						+2.4%
					</p>
					<p className="text-sm text-muted-foreground">
						24th Hour
					</p>
				</div>

			</div>
		</>
	); 
}
