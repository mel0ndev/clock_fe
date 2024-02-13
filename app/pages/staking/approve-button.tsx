import { useToken, stakingAddress, clockTokenAddress } from "@/app/hooks/token"; 
import { usePrepareContractWrite, useContractWrite } from 'wagmi'; 
import { ABI } from "@/app/hooks/abi/abi"

import { Button } from "@/components/ui/button"; 


export const ApproveButton = ({amount}: any) => {
	
	const { config } = usePrepareContractWrite({
			address: clockTokenAddress,
			abi: ABI,
			functionName: 'approve',
			args: [stakingAddress, BigInt(amount)], 
		})
	const { data, isLoading, isSuccess, write } = useContractWrite(config); 


	return (
			<Button 
				className="bg-clock font-bruno rounded-full"
				disabled={!write}
				onClick={() => write?.()}
			> 
				Approve
			</Button>
	);
}
