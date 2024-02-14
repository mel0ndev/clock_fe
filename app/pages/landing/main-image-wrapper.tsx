import { MainPageImage } from "./main-image"; 
export const MainImageWrapper = () => {

	return (
		<>
			<div className="lg:h-full lg:w-full">
				<div className="lg:bg-black lg:flex lg:outline lg:outline-1 lg:outline-slate-500 lg:rounded-xl lg:p-10 lg:h-full lg:w-11/12">
					<MainPageImage />
				</div>
			</div>
		</> 
	); 
}
