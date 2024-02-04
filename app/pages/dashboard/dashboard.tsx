import { Button } from "@/components/ui/button"; 
import { CalculatorModal } from "./calculator"

export const PaymentComponent = () => {

	const balances = [
		{ heading: 'Token Balance', amount: "1280" },
		{ heading: 'Total USD Value', amount: "$50,000" },
		{ heading: 'Tokens Earned In Last Period', amount: "134.234234" },
		{ heading: 'Dollars Earned In Last Period', amount: "$1,333.13" },
		{ heading: 'Tokens To Earn Over Next Period', amount: "254.123123" },
		{ heading: 'Dollars To Earn Over Next Period', amount: "$2,234.84" },
	];

	return (
		<>
			<div className="grid grid-cols-2 grid-rows-3 p-10 gap-5"> 
						{balances.map((balance) => (
							<>
						<div className="flex flex-col justify-center"> 
							<div className="flex justify-center text-muted-foreground"> 
								{balance.heading} 
							</div> 
							<div key={balance.heading} 
								 className="bg-slate-800 rounded-xl p-2 opacity-7 w-full flex justify-center font-bruno">	
								{balance.amount}
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
