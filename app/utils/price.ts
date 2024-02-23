import { ChainId, Token, WETH9, CurrencyAmount } from '@uniswap/sdk-core'; 
import { Route, Pair } from '@uniswap/v2-sdk'; 
import { clockTokenAddress } from "@/app/hooks/token";
import { usePublicClient, useContractRead } from "wagmi"; 
import { UniswapV2PoolAbi } from "@/app/hooks/abi/uniswapV2PoolAbi"; 
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

export const publicClient = createPublicClient({
  chain: mainnet,
  transport: http()
})

const CLOCK = new Token(ChainId.MAINNET, "0x4E60241335aaf1eba97dEE9a8C7d9F0387529286", 18); 
const DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18)

export const createPair = async (token: any): Promise<Pair | undefined>  => {
	const pairAddress = Pair.getAddress(token, WETH9[CLOCK.chainId]); 

	const reserves = await publicClient.readContract({	
		address: pairAddress as `0x${string}`,
		abi: UniswapV2PoolAbi, 
		functionName: "getReserves",
	}); 
	
	const tokens = [token, WETH9[CLOCK.chainId]]; 
	const [token0, token1] = tokens[0].sortsBefore(tokens[1]) ? tokens : [tokens[1], tokens[0]]; 
	
	let pair; 
	if (reserves) {
		pair = new Pair(CurrencyAmount.fromRawAmount(token0, reserves?.[0].toString()), CurrencyAmount.fromRawAmount(token1, reserves?.[1].toString())); 
	}

  return pair; 
}

export const getPrice = async (): Promise<number> => {
	const pair = await createPair(CLOCK); 
	let clockPrice; 
	if (pair) { 
		const route = new Route([pair], WETH9[CLOCK.chainId], CLOCK); 
		clockPrice = route.midPrice.invert().toSignificant(6); 
	}

	const usdPrice = await createPair(DAI); 
	let ethInUSD; 
	if (usdPrice) { 
		const route = new Route([usdPrice], WETH9[CLOCK.chainId], DAI); 
		ethInUSD = route.midPrice.toSignificant(6); 
	}

	return Number(ethInUSD) * Number(clockPrice); 
}

