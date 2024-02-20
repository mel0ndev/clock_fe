import { useToken, stakingAddress } from "@/app/hooks/token"; 
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from 'wagmi'; 
import { StakingAbi } from "@/app/hooks/abi/stakingAbi"; 
import { Spinner } from "@/app/components/spinner"; 
import { OnSuccess } from "@/app/components/on-success"; 

import { Button } from "@/components/ui/button"; 


export const DepositButton = ({amount}: any) => {
		const { config } = usePrepareContractWrite({
			address: stakingAddress,
			abi: StakingAbi,
			functionName: 'stake',
			args: [amount], 
		}); 

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
				{isLoading ? <Spinner /> : 'Deposit'}
			</Button>
			{isSuccess && (
				<OnSuccess data={data}/> 
			)}
			</>
	);
}
