import { FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; 
import { SiGitbook } from "react-icons/si";
import { Button } from "@/components/ui/button"; 


const Footer = () => {
	return (
		<>
			<div className="grid grid-cols-3 flex items-center justify-center"> 
				<div className="flex justify-center mt-14 mb-5"> 
					<a target="_blank" href="https://twitter.com/clockclocktoken" rel="noopener noreferrer">
					<Button
						variant="ghost"
					>
						<FaXTwitter size={25}/> 
					</Button>
					</a>
				</div>
				<div className="flex justify-center mt-14 mb-5"> 
					<a target="_blank" href="https://t.me/clockclocktoken" rel="noopener noreferrer">
						<Button
							variant="ghost"
						>
							<FaTelegram size={25}/> 
						</Button>
					</a>
				</div> 
				<div className="flex justify-center mt-14 mb-5"> 
					<a target="_blank" href="https://clockclocktoken.gitbook.io/clockclock-docs/" rel="noopener noreferrer">
						<Button
							variant="ghost"
						>
							<SiGitbook size={25}/> 
						</Button>
					</a>
				</div> 
			</div> 

		</>
	); 
}

export default Footer; 
