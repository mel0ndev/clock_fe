import Image from "next/image"; 
import { FaDiscord, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; 
import { Button } from "@/components/ui/button"; 


const Footer = () => {
	return (
		<>
			<div className="grid grid-cols-3 flex items-center justify-center"> 
				<div className="flex justify-center mt-14 mb-5"> 
					<Button
						variant="ghost"
					>
						<FaXTwitter size={25}/> 
					</Button>
				</div>
				<div className="flex justify-center mt-14 mb-5"> 
					<Button
						variant="ghost"
					>
						<FaDiscord size={25}/> 
					</Button>
				</div>
				<div className="flex justify-center mt-14 mb-5"> 
					<Button
						variant="ghost"
					>
						<FaTelegram size={25}/> 
					</Button>
				</div> 
			</div> 

		</>
	); 
}

export default Footer; 
