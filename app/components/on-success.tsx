import { Card, CardBody } from "@nextui-org/react";
import { Modal, ModalContent, ModalBody, useDisclosure } from "@nextui-org/react";

export const OnSuccess = ({data, additional}: any) => {
	const {isOpen, onOpen, onOpenChange} = useDisclosure();

	return (
		<Modal 
			className="bg-black rounded-lg outline outline-1 outline-slate-500"
			defaultOpen={true}
			onOpenChange={onOpenChange}
			isDismissable
			placement="center"
			backdrop="blur"
			size="2xl"
		>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalBody className="md:p-14 flex text-center justify-center">
							<div> 
							<div className="text-clock text-3xl">
								Success!
							</div> 
								<p className="text-md pt-2"> 
								<b> The transaction was completed. </b> 
									{additional && (
										<div className="mt-2"> 
											<p> {additional} </p> 	
										</div> 
									)}
								<p className="hover:text-white text-muted-foreground text-sm"> 
									<a href={`https://etherscan.io/tx/${data?.hash}`}> 
									Click here to view on Etherscan. 
									</a> 
								</p> 
							</p> 
							</div> 
						</ModalBody>
					</>
				)}
			</ModalContent>
		</Modal>
	); 
}
