import { Input } from "@nextui-org/react";
import { useToken } from "@/app/hooks/token"; 
import { formatEther } from "viem"; 

export const WithdrawTab = ({input, setInput}: any) => {
	const { balance, multipliedAmount } = useToken();

	return (
		<>
			<div className="pl-14 pr-14"> 
				<p>
					Balance:  {balance ? formatEther(balance).toLocaleString() : '0'}
				</p> 

				<div className="grid grid-cols-2 gap-x-5">
				<div className="w-full rounded-xl bg-slate-800 flex-wrap md:flex-nowrap gap-4">
					<Input 
						size="sm" 
						type="text" 
						isReadOnly
						label="Unstake Amount:" 
						value={
							multipliedAmount ? 
							(Number(multipliedAmount) / 1e18).toString()
							: '0'
						}
						onChange={(e) => {
							e.preventDefault; 
							setInput(e.target.value)
						}}
						classNames={{
							label: "font-bruno text-muted-foreground text-black/50 dark:text-white/90",
							input: "font-bruno"
						}}
					/> 
				</div>

				<div className="w-full rounded-xl bg-slate-800 flex-wrap md:flex-nowrap gap-4">
					<Input 
						size="sm" 
						type="text" 
						isReadOnly
						label="Claim Amount:"
						value={multipliedAmount ? (Number(multipliedAmount) / 1e18).toString() : '0'}
						classNames={{
							label: "font-bruno text-black/50 dark:text-white/90",
							input: "font-bruno"
						}}
					/> 
				</div>

				</div>

			</div> 

		</>
	); 
}
