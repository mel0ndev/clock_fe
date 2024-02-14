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

				  <div className="md:grid md:grid-cols-3 h-screen flex justify-center md:pb-14 sm:h-screen items-center">
					<div className="md:col-span-2 md:flex md:pl-4"> 
		  	    	 	<MainCard /> 
		  	    	</div> 
					<div className="hidden lg:flex lg:justify-end lg:h-5/6 lg:w-full lg:col-start-3 lg:col-span-1 "> 
							<MainImageWrapper /> 
					</div> 
				</div>

				<div className="bg-[url('../public/vectorbg.png')] bg-cover mb-10 pb-10">
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

