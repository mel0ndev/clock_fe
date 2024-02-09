import { Button } from "@/components/ui/button"; 
import { useDisclosure } from "@nextui-org/react";

export const WithdrawTab = () => {
	return (
		<>
			<div> 
				<p>
					balance
				</p> 

				<div className="grid grid-cols-2 gap-x-5">
					<div className="w-full p-5 rounded-xl bg-slate-800">
					</div>
					<div className="w-full p-5 rounded-xl bg-slate-800">
					</div>
				</div>

				<div className="grid grid-cols-2 gap-x-4 mt-10"> 
					<Button
						className="bg-white font-bruno rounded-full"
					>
						Unstake
					</Button>

					<Button 
						className="bg-clock font-bruno rounded-full"
					> 
						Claim
					</Button>
				</div> 
			</div> 

		</>
	); 
}
