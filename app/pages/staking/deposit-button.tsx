import { useToken, stakingAddress } from "@/app/hooks/token"; 
import { usePrepareContractWrite, useContractWrite } from 'wagmi'; 
import { StakingAbi } from "@/app/hooks/abi/stakingAbi"

import { Button } from "@/components/ui/button"; 


export const DepositButton = ({amount}: any) => {
	if (amount != 0) {
		const { config } = usePrepareContractWrite({
			address: stakingAddress,
			abi: StakingAbi,
			functionName: 'stake',
			args: [amount], 
		}); 

		const { data, isLoading, isSuccess, write } = useContractWrite(config); 

		return (
			<Button 
				className="bg-clock font-bruno rounded-full"
				onClick={() => write?.()}
			> 
				Deposit
			</Button>
		); 
	} else {
			return (
			<Button 
				className="bg-clock font-bruno rounded-full"
			> 
				Deposit
			</Button>
		); 
		
	}
}
