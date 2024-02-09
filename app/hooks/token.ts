//get abi
"use client"
import { ABI } from "./abi/abi";
//import { StakingAbi } from "@/app/hooks/abi/stakingAbi"
import { useAccount, useContractRead, useBalance, usePrepareContractWrite, useContractWrite } from 'wagmi'; 
import { mainnet } from 'wagmi/chains' 
export const clockTokenAddress = "0x4eE24376Aa1CbC1Bb14462de3f15Ca62Ff9AF75F"; 
export const stakingAddress = "0xc6Ef87e11d1Aa93afeAD200Be356E6028c3C8e5F";

export const useToken = () => {
	const { address } = useAccount(); 

	const {data: balance} = useContractRead({
		address: clockTokenAddress,
		abi: ABI, 
		functionName: "balanceOf",
		args: [address as `0x${string}`],
		watch: true
	}); 

	const {data: allowance} = useContractRead({
		address: clockTokenAddress,
		abi: ABI, 
		functionName: "allowance",
		args: [address as `0x${string}`, stakingAddress as `0x${string}`],
		watch: true
	}); 

	const approve = (amount: bigint) => {
		const { config } = usePrepareContractWrite({
		    address: clockTokenAddress,
		    abi: ABI,
		    functionName: 'approve',
			args: [stakingAddress as `0x${string}`,  amount], 
		 })
		const { data, isLoading, isSuccess, write } = useContractWrite(config);
	}

	//const deposit = async (amount: bigint) => {
	//	const { config } = await usePrepareContractWrite({
	//	    address: stakingAddress,
	//	    abi: StakingAbi,
	//	    functionName: 'stake',
	//		args: [amount], 
	//	 })
	//	const { data, isLoading, isSuccess, write } = await useContractWrite(config); 
	//}

    //const deposit = async (amount: bigint) => {
    //    if (
    //        !address ||
    //        amount === BigInt(0) ||
    //        !amount
	//	)
    //        return;

    //    try {
	//		const  prepareDepositTx  = await usePrepareContractWrite({
	//		    address: stakingAddress,
	//		    abi: StakingAbi,
	//		    functionName: 'stake',
	//			args: [amount], 
	//		 })
    //    } catch (e) {
    //        console.error(e);
    //    }
    //};

	return {
		balance: balance,
		allowance: allowance,
		approve,
	//	deposit
	}; 
}; 

