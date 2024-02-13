import { useToken, stakingAddress, clockTokenAddress } from "@/app/hooks/token"; 
import { usePrepareContractWrite, useContractWrite } from 'wagmi'; 
import { ABI } from "@/app/hooks/abi/abi"

import { Button } from "@/components/ui/button"; 


export const ApproveButton = ({amount}: any) => {

	if (amount != 0) {
		const { config } = usePrepareContractWrite({
				address: clockTokenAddress,
				abi: ABI,
				functionName: 'approve',
				args: [stakingAddress, amount], 
			})
		const { data, isLoading, isSuccess, write } = useContractWrite(config); 

		return (
			<Button 
				className="bg-clock font-bruno rounded-full"
				onClick={() => write?.()}
			> 
				Approve
			</Button>
		); 
	} else {
		return (
			<Button 
				className="bg-clock font-bruno rounded-full"
			> 
				Approve
			</Button>
		); 
	}
}
