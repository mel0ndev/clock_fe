import { Logo } from "./logo"; 
import { Web3Connect } from "./web3-connect"; 

export const SignInBar = () => {
	return (
		<div className="grid grid-cols-4">
			<div>
				<Logo />
			</div>
			<div className="col-end-5">
				<Web3Connect />
			</div>
		</div>
	); 
}
