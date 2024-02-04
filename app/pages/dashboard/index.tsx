import { PaymentComponent } from "./dashboard"; 

const PaymentDashboard = () => {
	return (
		<div className="bg-[url('../public/money.gif')] bg-opacity-5 bg-cover"> 
			<div className="p-10 rounded-full glow blur-10">
				<div className="flex flex-col items-center mb-10">
					<h1 className="font-bruno"> 
						Payment Dashboard
					</h1> 
				</div>

				<div className="grid grid-cols-8 flex"> 
				<div className="bg-black bg-opacity-25 outline outline-1 outline-slate-500 h-full w-full col-span-6 col-start-2 col-end-8 rounded-xl"> 
					<PaymentComponent /> 
				</div>
				</div> 
			</div> 
		</div>
	);
}

export default PaymentDashboard; 

