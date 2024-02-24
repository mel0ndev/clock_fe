import { useState, useEffect } from "react"; 
import { Button } from "@/components/ui/button"; 
import { Input } from "@nextui-org/react";
import { useToken } from "@/app/hooks/token"; 
import { calculateUnstakedAmount } from "@/app/utils/calculate"
import { getPrice } from "@/app/utils/price"; 

export const CalculatorContent = () => {
	const [stakedAmount, setStakedAmount] = useState(''); 
	const [price, setPrice] = useState(0); 
	const [days, setDays] = useState(''); 
	const [hours, setHours] = useState(''); 
	const [calculatedAmount, setCalculatedAmount] = useState(0); 

	useEffect(() => {
		const p = async () => {
			const usd = await getPrice(); 	
			setPrice(usd); 
		}

		const price = p(); 
	}, []); 

	const handleClick = (stakedAmount: string, days: string, hours: string) => {
		let stakedAmountNum = Number(stakedAmount); 
		let daysAmountNum = Number(days); 
		let hoursAmountNum = Number(hours); 
		
		const amount = calculateUnstakedAmount(stakedAmountNum, (daysAmountNum * 24) + hoursAmountNum); 
		if (amount) {
			setCalculatedAmount(amount - stakedAmountNum); 
		}
	}


	return (
		<div className="grid grid-rows-5 gap-y-2 pl-10 pr-10 pb-10"> 
			<div> 
				<p className="text-muted-foreground text-xs flex justify-center">
					Enter Staked Tokens Amount	
				</p> 
					<Input 
						size="sm" 
						type="number" 
						label="Enter Amount:" 
						value={stakedAmount}
						onChange={(e) => {
							e.preventDefault; 
							const re = /^[0-9\b]+$/;
							// if value is not blank, then test the regex
							if (e.target.value === '' || re.test(e.target.value)) {
								setStakedAmount(e.target.value)
							}
						}}
						classNames={{
							label: "font-bruno text-black/50 dark:text-white/90",
							input: "font-bruno"
						}}
					/> 
			</div> 

			<div className="w-full"> 
				<p className="text-muted-foreground text-xs flex justify-center">
					Time
				</p> 
				<div className="grid grid-cols-3 flex gap-x-3 justify-center items-center"> 
					<Input 
						size="sm" 
						type="number" 
						value={days}
						endContent={
						  <div className="pointer-events-none flex items-center">
          				    <span className="text-default-400 font-bruno text-small">D</span>
          				  </div>
          				}
						onChange={(e) => {
							e.preventDefault; 
							setDays(e.target.value)
						}}
						classNames={{
							label: "font-bruno text-black/50 dark:text-white/90",
							input: "font-bruno"
						}}
					/> 

					<Input 
						size="sm" 
						type="number" 
						value={hours}
						endContent={
						  <div className="pointer-events-none flex items-center">
          				    <span className="text-default-400 font-bruno text-small">H</span>
          				  </div>
          				}
						onChange={(e) => {
							e.preventDefault; 
							setHours(e.target.value)
						}}
						classNames={{
							label: "font-bruno text-black/50 dark:text-white/90",
							input: "font-bruno col-span-2",
							base: "col-span-2"
						}}
					/> 
				</div> 
			</div> 

			<div> 
				<div className="mt-5"> 
					<Button 
						className="flex bg-[#00C850] font-bruno rounded-full w-full lg:text-lg hover:bg-clock"
						onClick={() => handleClick(stakedAmount, days, hours)}
					>
						Calculate
					</Button>
				</div>
			</div> 

			<div> 
				<p className="text-muted-foreground mt-3 text-xs flex justify-center">
					Tokens You Will Receive
				</p> 
					<Input 
						size="sm" 
						type="text" 
						value={calculatedAmount.toString()}
						isReadOnly
						classNames={{
							label: "font-bruno text-black/50 dark:text-white/90",
							input: "font-bruno",
						}}
					/> 
			</div> 

			<div> 
				<p className="text-muted-foreground text-xs flex justify-center">
					$ Amount at Current Price
				</p> 
					<Input 
						size="sm" 
						type="text" 
						value={(calculatedAmount * price).toString()}
						isReadOnly
						classNames={{
							label: "font-bruno text-black/50 dark:text-white/90",
							input: "font-bruno",
						}}
					/> 
			</div> 

		</div> 
	); 
}
