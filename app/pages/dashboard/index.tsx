import { PaymentComponent } from "./dashboard"; 
import Footer from "@/app/pages/footer/index"

const PaymentDashboard = () => {
	return (
		<div className="bg-[url('../public/money.gif')] bg-opacity-5 bg-cover"> 
			<div className="pt-10 pl-5 pr-5 md:pl-0 md:pr-0 rounded-full glow blur-10">
				<div className="flex justify-center mb-10">
					<h1 className="font-bruno"> 
						Payment Dashboard
					</h1> 
				</div>

				<div className="grid grid-cols-8 flex"> 
					<div className="bg-black bg-opacity-25 outline outline-1 outline-slate-500 h-full w-full col-span-8 md:col-span-6 md:col-start-2 md:col-end-8 rounded-xl"> 
					<PaymentComponent /> 
				</div>
				</div> 
				<div className="mb-14 mt-14"></div>
				<div className="mb-14 mt-14"></div>
				<Footer />
			</div> 
		</div>
	);
}

export default PaymentDashboard; 

