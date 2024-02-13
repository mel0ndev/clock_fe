import { useToken, stakingAddress } from "@/app/hooks/token"; 
import { usePrepareContractWrite, useContractWrite } from 'wagmi'; 
import { StakingAbi } from "@/app/hooks/abi/stakingAbi"

import { Button } from "@/components/ui/button"; 

export const UnstakeButton = () => {
	
	const { config } = usePrepareContractWrite({
		address: stakingAddress,
		abi: StakingAbi,
		functionName: 'unstake',
	}); 

	const { data, isLoading, isSuccess, write } = useContractWrite(config); 

	return (
		<Button 
			className="bg-white font-bruno rounded-full"
			onClick={() => write?.()}
		> 
			Unstake
		</Button>
	); 
}
