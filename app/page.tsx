import Image from "next/image";
import { SignInBar } from "@/app/pages/landing/signin/index"
import { MainPageImage } from "@/app/pages/landing/main-image"
import { MainCard } from "@/app/pages/landing/main-card"

export default function Home() {
  return (
	  <div className="main">
		  <div className="bg-[url('../public/Glowglow.png')] bg-no-repeat">
		  <SignInBar /> 
			  <div className="grid grid-cols-4 h-screen items-center bg-abstract bg-cover">
		 	     <div className="col-span-3 flex pl-14 mr-14 mb-16"> 
		 	   	  <MainCard /> 
		 	     </div> 
		 	     <div className="flex flex-start mb-14 pb-16"> 
		 	   	  <MainPageImage /> 
		 	     </div> 
		 	 </div>
		  </div>
	  </div>
  );
}

