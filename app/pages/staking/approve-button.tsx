import { useToken, stakingAddress, clockTokenAddress } from "@/app/hooks/token"; 
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from 'wagmi'; 
import { Spinner } from "@/app/components/spinner"; 
import { ABI } from "@/app/hooks/abi/abi"
import { OnSuccess } from "@/app/components/on-success"; 

import { Button } from "@/components/ui/button"; 


export const ApproveButton = ({amount}: any) => {
	
	const { config } = usePrepareContractWrite({
			address: clockTokenAddress,
			abi: ABI,
			functionName: 'approve',
			args: [stakingAddress, BigInt(amount)], 
		})
	const { data, write } = useContractWrite(config); 
	const { isLoading, isSuccess } = useWaitForTransaction({
		hash: data?.hash,
	})


	return (
		<>
		<Button 
			className="bg-clock font-bruno rounded-full"
			disabled={!write || isLoading}
			onClick={() => write?.()}
		> 
			{isLoading ? <Spinner /> : 'Approve'} 
		</Button>
			{isSuccess && (
				<OnSuccess data={data}/> 
			)}
		</>
	);
}
