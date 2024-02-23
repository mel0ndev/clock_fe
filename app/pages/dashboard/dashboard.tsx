"use client"; 
import { Button } from "@/components/ui/button"; 
import { useState, useEffect } from "react"; 
import { CalculatorModal } from "./calculator"; 
import { useToken, useBlock } from "@/app/hooks/token"; 
import { calculateUnstakedAmount } from "@/app/utils/calculate"
import { getPrice } from "@/app/utils/price"; 

export const PaymentComponent = () => {
	const [price, setPrice] = useState(0); 
	const { balance, unstakedAmount } = useToken(); 
	const block = useBlock(); 
	let hoursStaked: bigint; 
	let calculatedAmount;  
	let calculatedAmount24Hours; 

	useEffect(() => {
		const p = async () => {
			const usd = await getPrice(); 	
			setPrice(usd); 
		}

		const price = p(); 
	}, []); 

	if (block && unstakedAmount) {
		hoursStaked = (block.timestamp - unstakedAmount?.[1]) / BigInt(60 * 60); 
		calculatedAmount = calculateUnstakedAmount(Number(unstakedAmount?.[0]) / 1e18,  Number(hoursStaked));
		calculatedAmount24Hours = calculateUnstakedAmount(Number(unstakedAmount?.[0]) / 1e18, Number(hoursStaked) + 24); 
	}
	
		const balances = [
			{ heading: 'Staked Balance', 
				amount: 
					unstakedAmount ? 
					(Number(unstakedAmount?.[0]) / 1e18).toLocaleString() 
					: '0' 
			},
			{ heading: 'Total USD Value', 
				amount: unstakedAmount ? 
				((Number(unstakedAmount?.[0]) / 1e18) * Number(price)).toLocaleString() 
				: '0' 
			},
			{ heading: 'Tokens Earned Over Staked Period', amount: calculatedAmount ? calculatedAmount : '0'},
			{ heading: 'Dollars Earned Over Staked Period', amount: calculatedAmount ? (Number(calculatedAmount) * Number(price)).toLocaleString() : '0' },
			{ heading: 'Tokens To Earn Over Next 24 Hours', amount: calculatedAmount24Hours ? calculatedAmount24Hours : '0' },
			{ heading: 'Dollars To Earn Over Next 24 Hours', amount: calculatedAmount24Hours ? (Number(calculatedAmount24Hours) * Number(price)).toLocaleString() : '0' },
		];

	return (
			<>
				<div className="grid md:grid-cols-2 md:grid-rows-3 p-5 md:p-10 gap-5 text-center md:text-left"> 
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
