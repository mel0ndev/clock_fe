import { ConnectButton } from '@rainbow-me/rainbowkit';

export const Web3Connect = () => {
	return (
		<div
		className="flex justify-center mt-4 mr-10"
		style={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 12,
      }}
		> 
			<ConnectButton />
		</div> 
	); 
}
