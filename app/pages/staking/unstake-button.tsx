import { useToken, stakingAddress } from "@/app/hooks/token"; 
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from 'wagmi'; 
import { StakingAbi } from "@/app/hooks/abi/stakingAbi"
import { Spinner } from "@/app/components/spinner"; 
import { OnSuccess } from "@/app/components/on-success"; 

import { Button } from "@/components/ui/button"; 

export const UnstakeButton = () => {
	
	const { config } = usePrepareContractWrite({
		address: stakingAddress,
		abi: StakingAbi,
		functionName: 'unstake',
	}); 

	const { data, write } = useContractWrite(config); 
	const { isLoading, isSuccess } = useWaitForTransaction({
		hash: data?.hash,
	}); 

	return (
		<>
			<Button 
				className="bg-white font-bruno rounded-full"
				disabled={!write || isLoading}
				onClick={() => write?.()}
			> 
				{isLoading ? <Spinner /> : 'Unstake'}
			</Button>
			{isSuccess && (
				<OnSuccess data={data} additional="Come back in 72 hours to claim."/> 
			)}
		</>
	); 
}
