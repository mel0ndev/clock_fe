import { useToken, stakingAddress } from "@/app/hooks/token"; 
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from 'wagmi'; 
import { StakingAbi } from "@/app/hooks/abi/stakingAbi"
import { Spinner } from "@/app/components/spinner"; 
import { useState } from "react"; 

import { Button } from "@/components/ui/button"; 

export const ClaimButton = () => {
	const { unstakedAmount } = useToken(); 

	const { config } = usePrepareContractWrite({
		address: stakingAddress,
		abi: StakingAbi,
		functionName: 'claim',
	}); 

	const { data, write } = useContractWrite(config); 
	const { isLoading, isSuccess } = useWaitForTransaction({
		hash: data?.hash,
	}); 

	return (
		<>
			<Button 
				className="bg-clock font-bruno rounded-full"
				disabled={!write || isLoading}
				onClick={() => write?.()}
			> 
				{isLoading ? <Spinner /> : 'Claim'}
			</Button>
			{isSuccess && (
				<div className="flex justify-center text-muted-foreground"> 
					Success!
				</div> 
			)}
		</>
	); 

}
