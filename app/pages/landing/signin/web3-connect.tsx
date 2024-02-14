import { ConnectButton } from '@rainbow-me/rainbowkit';

export const Web3Connect = () => {
	return (
		<div
		className="flex justify-end mt-4 md:mr-10 text-center p-4"> 
			<ConnectButton 
				label="Connect"
				 showBalance={{
				  smallScreen: false,
  				  largeScreen: true,
  				}}
				accountStatus={{
				  smallScreen: 'avatar',
  				  largeScreen: 'full',
  				}}
			/>
		</div> 
	); 
}
