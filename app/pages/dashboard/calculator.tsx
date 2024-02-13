"use client"; 
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, useDisclosure} from "@nextui-org/react";
import { Button } from "@/components/ui/button"; 
import { CalculatorContent } from "./calculator-content"; 

export const CalculatorModal = () => {
	const {isOpen, onOpen, onOpenChange} = useDisclosure();

	return (
		<>
			<Button 
				className="flex bg-[#00C850] font-bruno rounded-full pl-10 pr-10 lg:pl-14 lg:pr-14 lg:text-lg hover:bg-clock"
				onClick={onOpen}
			>
				Calculator
			</Button>
			<Modal 
				className="bg-black rounded-lg outline outline-1 outline-slate-500"
				isOpen={isOpen} 
				onOpenChange={onOpenChange}
				backdrop="blur"
			>
				<ModalContent>
				 {(onClose) => (
					<>
              <ModalHeader className="flex flex-col gap-1 items-center font-bruno"> Calculator </ModalHeader>
              <ModalBody>
				  <CalculatorContent /> 
              </ModalBody>
            </>
          )}
        </ModalContent>
		</Modal>
		</>
	); 
}
