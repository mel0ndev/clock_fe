import Image from "next/image";
import { SignInBar } from "@/app/pages/landing/signin/index"
import { MainImageWrapper } from "@/app/pages/landing/main-image-wrapper"
import { MainCard } from "@/app/pages/landing/main-card"
import Staking from "@/app/pages/staking/index"
import PaymentDashboard from "@/app/pages/dashboard/index"

export default function Home() {
  return (
	  <>
		  <div className="bg-abstract bg-cover bg-right-top">
			<div className="bg-[url('../public/Glowglow.png')] bg-no-repeat">
		  	  <SignInBar /> 

				<div className="md:grid md:grid-cols-3 md:items-center flex justify-center md:h-3/4 md:pb-16">
					<div className="md:col-span-2 md:flex md:pl-4"> 
		  	    	 	<MainCard /> 
		  	    	</div> 
					<div className="hidden lg:flex lg:justify-center lg:h-full lg:w-full lg:col-start-3 lg:col-span-1 lg:ml-14"> 
							<MainImageWrapper /> 
					</div> 
				</div>

				<div className="bg-[url('../public/vectorbg.png')] bg-cover">
					<Staking /> 
				</div>
				
				<div>
					<PaymentDashboard />
				</div>

		  	</div>
		  </div>
	  </>
  );
}

