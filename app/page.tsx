import Image from "next/image";
import { SignInBar } from "@/app/pages/landing/signin/index"
import { MainPageImage } from "@/app/pages/landing/main-image"
import { MainCard } from "@/app/pages/landing/main-card"
import Staking from "@/app/pages/staking/index"
import PaymentDashboard from "@/app/pages/dashboard/index"

export default function Home() {
  return (
	  <>
		  <div className="bg-abstract bg-cover bg-right-top">
			<div className="bg-[url('../public/Glowglow.png')] bg-no-repeat">
		  	  <SignInBar /> 

		  	  	<div className="grid grid-cols-3 items-center">
		  	    	<div className="col-span-2 flex pl-4 mb-16"> 
		  	    	 	<MainCard /> 
		  	    	</div> 
		  	    	<div className="flex flex-end col-start-3 col-span-1 mb-14 pb-16"> 
		  	    	 	<MainPageImage /> 
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

