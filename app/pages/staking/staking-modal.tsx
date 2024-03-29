import { useState } from "react"; 
import { Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import { DepositTab } from "./deposit-tab"; 
import { DepositButton } from "./deposit-button"; 
import { ApproveButton } from "./approve-button"; 
import { UnstakeButton } from "./unstake-button"; 
import { ClaimButton } from "./claim-button"; 
import { WithdrawTab } from "./withdraw-tab"; 
import { Button } from "@/components/ui/button"; 
import { useToken, stakingAddress } from "@/app/hooks/token"; 
import { formatEther, parseEther } from "viem"
import { usePrepareContractWrite, useContractWrite } from 'wagmi'; 

export const StakingModal = ({depositOnClose}: any) => {
	const { allowance } = useToken(); 
	const [input, setInput] = useState(); 
		
	return (
		<div className="flex flex-col md:pl-14 md:pr-14">
		<Tabs 
			variant="underlined"
			fullWidth={false}
			disableAnimation={false}
			classNames={{
			cursor: "bg-transparent",
			tabContent: "font-bruno w-full group-data-[selected=true]:text-clock",
			base: "justify-center group-data-[selected=true]:bg-transparent",
			tabList: "bg-transparent",
			tab: "bg-transparent"
        }}
		>
		<Tab key="deposit" title="Deposit">
			<Card className="md:pl-14 md:pr-14 bg-transparent outline-0 outline-black">
            <CardBody className="outline-0 mb-5">
				<DepositTab input={input} setInput={setInput}/>
            </CardBody>
				<div className="grid grid-cols-2 gap-x-4 mr-2 ml-2 md:mr-14 mb-10 md:ml-14"> 
					<Button
						className="bg-white font-bruno rounded-full"
						onClick={depositOnClose}
					>
						Cancel
					</Button>
				
				{!allowance || Number(allowance) < Number(input) * 1e18 ? 
					<ApproveButton amount={BigInt(parseEther(input ? input : '0'))}/>
				: 
					<DepositButton amount={BigInt(parseEther(input ? input : '0'))}/>
				}

				</div> 
          </Card>  
        </Tab>
        <Tab key="withdraw" title="Withdraw">
			<Card className="md:pl-14 md:pr-14 bg-transparent outline-0 outline-black">
            <CardBody className="outline-0 mb-5">
				<WithdrawTab />
            </CardBody>
				<div className="grid grid-cols-2 gap-x-4 mr-2 ml-2 md:mr-14 mb-10 md:ml-14"> 
					<UnstakeButton />
					<ClaimButton /> 
				</div> 
          </Card>  
        </Tab>
      </Tabs>
    </div>  
	);
}
