import { Input } from "@nextui-org/react";
import { useState, useEffect } from "react"; 
import { useToken, useBlock } from "@/app/hooks/token"; 
import { formatEther } from "viem"; 

export const WithdrawTab = ({input, setInput}: any) => {
	const [hours, setHours] = useState(BigInt(0)); 
	const { balance, multipliedAmount, unstakedAmount } = useToken();
	const block = useBlock(); 

	useEffect(() => {
		if (block && unstakedAmount && unstakedAmount[0] > 0) {
			let hours = (block.timestamp - unstakedAmount?.[2]) / BigInt(60 * 60); 
			setHours(BigInt(hours)); 
		}
	}, [block])

	return (
		<>
			<div className="md:pl-14 md:pr-14 pt-1"> 
				<p>
					Balance:  {balance ? formatEther(balance).toLocaleString() : '0'}
				</p> 
				<div className="grid grid-cols-2 gap-x-2 md:gap-x-5">
				<div className="w-full rounded-xl bg-slate-800 md:flex-nowrap gap-4">
					<Input 
						size="sm" 
						type="text" 
						isReadOnly
						label="Unstake:" 
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
							label: "font-bruno text-xs md:text-md text-black/50 dark:text-white/90 mb-2",
							input: "font-bruno"
						}}
					/> 
				</div>
			

				<div className="w-full rounded-xl bg-slate-800 md:flex-nowrap gap-4">
					<Input 
						size="sm" 
						type="text" 
						isReadOnly
						label="Claim:"
						value={hours >= 72 ? (Number(multipliedAmount) / 1e18).toString() : '0'}
						classNames={{
							label: "font-bruno text-xs md:text-md text-black/50 dark:text-white/90 mb-2",
							input: "font-bruno"
						}}
					/> 
				</div>

				</div>
				<p className="flex justify-center text-xs text-muted-foreground text-center "> There is a 72 waiting period before tokens are released and in that time there are no additional tokens earned </p>
			</div> 

		</>
	); 
}
