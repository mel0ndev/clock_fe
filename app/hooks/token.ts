//get abi
"use client"
import { ChainId, Token, WETH9, CurrencyAmount } from '@uniswap/sdk-core'; 
import { Route, Pair } from '@uniswap/v2-sdk'; 
import { UniswapV2PoolAbi } from "@/app/hooks/abi/uniswapV2PoolAbi"; 
import { mainnet } from 'wagmi/chains' 
import { useEffect, useState } from 'react';
import { ABI } from "./abi/abi";
import { StakingAbi } from "@/app/hooks/abi/stakingAbi"
import { 
	useAccount, 
	useBlockNumber, 
	useContractRead,
	useBalance,
	usePrepareContractWrite,
	useContractWrite,
	usePublicClient
} from 'wagmi'; 


export const clockTokenAddress = "0x10DC02799E909c868A7E100819ffDCBc185aaBe9"; 
export const stakingAddress = "0xc8BA402ebdf6f2d959fd2dc2b311eD45A5f34E9f";

export const useToken = () => {
	const { address } = useAccount(); 
	const blockNumber = useBlockNumber(); 

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

	const {data: unstakedAmount} = useContractRead({
		address: stakingAddress,
		abi: StakingAbi, 
		functionName: "stakingBalances",
		args: [address as `0x${string}`],
		watch: true
	});

	const {data: tax} = useContractRead({
		address: clockTokenAddress,
		abi: ABI, 
		functionName: "TAX_AMOUNT",
		watch: true
	}); 

	const {data: multipliedAmount} = useContractRead({
		address: stakingAddress,
		abi: StakingAbi, 
		functionName: "multiplyStakingBalance",
		args: [address as `0x${string}`],
		watch: true
	}); 

	const CLOCK = new Token(ChainId.MAINNET, "0x6B175474E89094C44Da98b954EedeAC495271d0F", 18); 
	const pairAddress = Pair.getAddress(CLOCK, WETH9[ChainId.MAINNET]); 
	const {data: reserves} = useContractRead({
		address: pairAddress as `0x${string}`,
		abi: UniswapV2PoolAbi, 
		functionName: "getReserves",
		watch: true
	}); 

	return {
		balance: balance,
		allowance: allowance,
		unstakedAmount: unstakedAmount,
		tax: tax,
		blockNumber: blockNumber,
		reserves: reserves,
		multipliedAmount: multipliedAmount
	}; 
}; 


export function useBlock() {
    const client = usePublicClient();
    const [block, setBlock] = useState<any>(null);

    useEffect(() => {
        async function fetchBlock() {
            try {
                const block = await client.getBlock();
                setBlock(block);
            } catch (error) {
                console.error('Error fetching block:', error);
            }
        }

        fetchBlock();
    }, [client]);

    return block
}

