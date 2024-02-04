import { Button } from "@/components/ui/button"; 

export const CalculatorContent = () => {
	return (
		<div className="grid grid-rows-5 gap-y-2 p-10"> 
			<div> 
				<p className="text-muted-foreground text-xs flex justify-center">
					Enter Staked Tokens Amount	
				</p> 
				<div className="bg-slate-800 p-5 rounded-xl"> 
				</div> 
			</div> 

			<div className="w-full"> 
				<p className="text-muted-foreground text-xs flex justify-center">
					Time
				</p> 
				<div className="grid grid-cols-3 flex gap-x-3 justify-center items-center"> 
					<div className="bg-slate-800 p-5 col-span-1 rounded-xl"> 
					</div> 
					<div className="bg-slate-800 p-5 col-span-2 rounded-xl"> 
					</div> 
				</div> 
			</div> 

			<div> 
				<div className="mt-5"> 
					<Button 
						className="flex bg-[#00C850] font-bruno rounded-full w-full lg:text-xl hover:bg-clock"
					>
						Calculate
					</Button>
				</div>
			</div> 

			<div> 
				<p className="text-muted-foreground mt-3 text-xs flex justify-center">
					Tokens You Will Receive
				</p> 
				<div className="bg-slate-800 p-5 rounded-xl"> 
				</div> 
			</div> 

			<div> 
				<p className="text-muted-foreground text-xs flex justify-center">
					$ Amount at Current Price
				</p> 
				<div className="bg-slate-800 p-5 rounded-xl"> 
				</div> 
			</div> 

		</div> 
	); 
}
