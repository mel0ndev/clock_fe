"use client"; 
import Image from "next/image"
import { useState, useEffect } from "react"; 
import { Button } from "@/components/ui/button"; 
import { Modal, ModalContent, ModalHeader, ModalBody, useDisclosure } from "@nextui-org/react";
import { StakingModal } from "./staking-modal"

export const StakingInfo = () => {
	const {isOpen, onOpen, onOpenChange} = useDisclosure();

	const [isDesktop, setDesktop] = useState(window.innerWidth > 650); 

	const updateMedia = () => {
		setDesktop(window.innerWidth > 650);
	};

	useEffect(() => {
		window.addEventListener("resize", updateMedia);
		return () => window.removeEventListener("resize", updateMedia);
	});
	
	return (
		<>
			<div className="grid grid-cols-3 grid-rows-2 p-1">

				<div className="flex flex-col items-center justify-center">
					<p className="font-bruno text-clock md:text-2xl lg:text-4xl text-sm">
						+0.1%-0.9%
					</p>
					<p className="text-xs text-muted-foreground">
						1st-9th Hours
					</p>
				</div>
				
		{isDesktop ? (
				<div className="flex flex-col items-center justify-center">
					<Image
						src="/clock.svg"
						alt="clock svg"
						width={128}
						height={128}
						className="mt-5 md:mt-10 md:pt-5"
					/>
				</div>
		) : (
				<div className="flex flex-col items-center justify-center">
					<Image
						src="/clock.svg"
						alt="clock svg"
						width={64}
						height={64}
						className="mt-5 md:mt-10 md:pt-5"
					/>
				</div>
		)}
				<div className="flex flex-col items-center justify-center">
					<p className="font-bruno text-clock md:text-2xl lg:text-4xl text-sm">
						+1.5%
					</p>
					<p className="text-xs text-muted-foreground">
						15th Hour
					</p>
				</div>

				<div className="flex flex-col items-center justify-center">
					<p className="font-bruno text-clock md:text-2xl lg:text-4xl text-sm">
						+1%
					</p>
					<p className="text-xs text-muted-foreground">
						10th Hour
					</p>
				</div>

				<div className="flex flex-col items-center justify-center">
					<Button 
						className="flex bg-[#00C850] font-bruno rounded-full pl-5 pr-5 md:pl-14 md:pr-14 md:text-lg hover:bg-clock"
						onClick={onOpen}
					> 
						<p className="font-bruno text-xs md:text-lg">
							Stake
						</p>
					</Button>

						<Modal 
							className="bg-black rounded-lg outline outline-1 outline-slate-500"
							isOpen={isOpen} 
							onOpenChange={onOpenChange}
							backdrop="blur"
							size="5xl"
						>
							<ModalContent>
							 {(onClose) => (
								<>
							<ModalBody className="md:p-14">
							  <StakingModal depositOnClose={onClose}/>
            			  </ModalBody>

            			</>
          )}
					</ModalContent>
				</Modal>
				</div>

				<div className="flex flex-col items-center justify-center">
					<p className="font-bruno text-clock md:text-2xl lg:text-4xl text-sm">
						+2.4%
					</p>
					<p className="text-xs text-muted-foreground">
						24th Hour
					</p>
				</div>

			</div>
		</>
	); 
}
