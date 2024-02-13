"use client"; 
import { Button } from "@/components/ui/button"; 
import { CalculatorModal } from "./calculator"; 
import { useToken, useBlock } from "@/app/hooks/token"; 
import { calculateUnstakedAmount } from "@/app/utils/calculate"

export const PaymentComponent = () => {
	const { balance, unstakedAmount, reserves } = useToken(); 
	console.log(reserves); 
	const block = useBlock(); 
	let hoursStaked: bigint; 
	let calculatedAmount;  
	let calculatedAmount24Hours; 

	if (block && unstakedAmount) {
		hoursStaked = (block.timestamp - unstakedAmount?.[1]) / BigInt(60 * 60); 
		calculatedAmount = calculateUnstakedAmount(Number(unstakedAmount?.[0]) / 1e18,  Number(hoursStaked));
		calculatedAmount24Hours = calculateUnstakedAmount(Number(unstakedAmount?.[0]) / 1e18, Number(hoursStaked) + 24); 
	}
	
		const balances = [
			{ heading: 'Staked Balance', amount: unstakedAmount ? (Number(unstakedAmount?.[0]) / 1e18).toLocaleString() : '0' },
			{ heading: 'Total USD Value', amount: "$50,000" },
			{ heading: 'Tokens Earned Over Staked Period', amount: calculatedAmount ? calculatedAmount : '0'},
			{ heading: 'Dollars Earned Over Staked Period', amount: "$1,333.13" },
			{ heading: 'Tokens To Earn Over Next 24 Hours', amount: calculatedAmount24Hours ? calculatedAmount24Hours : '0' },
			{ heading: 'Dollars To Earn Over Next 24 Hours', amount: "$2,234.84" },
		];

	return (
			<>
				<div className="grid grid-cols-2 grid-rows-3 p-10 gap-5"> 
							{balances.map((b) => (
								<>
							<div className="flex flex-col justify-center"> 
								<div className="flex justify-center text-muted-foreground"> 
									{b.heading} 
								</div> 
								<div key={b.heading} 
									 className="bg-zinc-900 bg-opacity-75 rounded-lg p-2 opacity-7 w-full flex justify-center font-bruno">	
									{b.amount.toString()}
								</div>
							</div> 
								</>
							))}
				</div> 
					<div className="flex justify-center mb-5"> 
						<CalculatorModal />
					</div> 
			</>
		);
}
