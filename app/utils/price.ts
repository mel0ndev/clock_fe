import { ChainId, Token, WETH9, CurrencyAmount } from '@uniswap/sdk-core'; 
import { Route, Pair } from '@uniswap/v2-sdk'; 
import { clockTokenAddress } from "@/app/hooks/token";
import { usePublicClient, useContractRead } from "wagmi"; 
import { UniswapV2PoolAbi } from "@/app/hooks/abi/uniswapV2PoolAbi"; 

const CLOCK = new Token(ChainId.SEPOLIA, "0x4eE24376Aa1CbC1Bb14462de3f15Ca62Ff9AF75F", 18); 

export const useCreatePair = async (): Promise<void>  => {
//	const pairAddress = Pair.getAddress(CLOCK, WETH9[CLOCK.chainId]); 
//	
//	const {data: reserves} = useContractRead({
//		address: pairAddress as `0x${string}`,
//		abi: UniswapV2PoolAbi, 
//		functionName: "getReserves",
//		watch: true
//	}); 
//	
//	
//	const tokens = [CLOCK, WETH9[CLOCK.chainId]]; 
//	const [token0, token1] = tokens[0].sortsBefore(tokens[1]) ? tokens : [tokens[1], tokens[0]]; 
//
//	const pair = new Pair(CurrencyAmount.fromRawAmount(token0, reserves?.[0]), CurrencyAmount.fromRawAmount(token1, reserves?.[1])); 
//
//  return pair; 
}

const useGetPrice = async () => {
	const pair = await useCreatePair(); 
}
