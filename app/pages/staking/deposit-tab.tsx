//import { Button } from "@/components/ui/button"; 
import { Input } from "@nextui-org/react";
import { formatEther } from "viem"; 
import { useToken } from "@/app/hooks/token"; 

export const DepositTab = ({input, setInput}: any) => {
	const { balance } = useToken();

	return (
		<>
			<div className="md:pl-14 md:pr-14 pt-1"> 
				<p>
					Balance:  {balance ? formatEther(balance).toLocaleString() : '0'}
				</p> 

				<div className="w-full rounded-xl bg-slate-800 md:flex-nowrap gap-4">
					<Input 
						size="sm" 
						type="text" 
						label="Enter Amount:" 
						value={input}
						onChange={(e) => {
							e.preventDefault; 
							setInput(e.target.value)
						}}
						classNames={{
							label: "font-bruno text-sm md:text-md text-black/50 dark:text-white/90",
							input: "font-bruno"
						}}
					/> 
				</div>
			</div> 
		</>
	); 
}
