import { useToken, stakingAddress } from "@/app/hooks/token"; 
import { usePrepareContractWrite, useContractWrite } from 'wagmi'; 
import { StakingAbi } from "@/app/hooks/abi/stakingAbi"

import { Button } from "@/components/ui/button"; 


export const DepositButton = ({amount}: any) => {
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
				disabled={!write}
				onClick={() => write?.()}
			> 
				Deposit
			</Button>
	);
}
