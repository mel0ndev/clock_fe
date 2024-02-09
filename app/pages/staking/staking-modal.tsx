import { useState } from "react"; 
import { Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import { DepositTab } from "./deposit-tab"; 
import { DepositButton } from "./deposit-button"
import { WithdrawTab } from "./withdraw-tab"; 
import { Button } from "@/components/ui/button"; 
import { useToken, stakingAddress } from "@/app/hooks/token"; 
import { formatEther, parseEther } from "viem"
import { usePrepareContractWrite, useContractWrite } from 'wagmi'; 
import { ABI } from "@/app/hooks/abi/abi"
import { StakingAbi } from "@/app/hooks/abi/stakingAbi"

export const StakingModal = ({depositOnClose}: any) => {
	const { allowance, approve } = useToken(); 
	const [input, setInput] = useState(""); 
		
	return (
    <div className="flex flex-col pl-14 pr-14">
		<Tabs 
			aria-label="Options"
			variant="solid"
			fullWidth={false}
			disableAnimation={false}
			classNames={{
			cursor: "opacity-0",
			tabContent: "font-bruno w-full group-data-[selected=true]:text-clock",
			base: "justify-center",
			tabList: "bg-transparent",
			tab: "bg-transparent"
        }}
		>
		<Tab key="deposit" title="Deposit">
          <Card className="pl-14 pr-14 bg-transparent outline-0 outline-black">
            <CardBody className="outline-0 mb-5">
				<DepositTab input={input} setInput={setInput}/>
            </CardBody>
				<div className="grid grid-cols-2 gap-x-4 mr-14 mb-10 ml-14"> 
					<Button
						className="bg-white font-bruno rounded-full"
						onClick={depositOnClose}
					>
						Cancel
					</Button>
				
				{!allowance || Number(allowance) < Number(input) * 1e18 ? 
					<Button 
						className="bg-clock font-bruno rounded-full"
						//disabled={}
						onClick={() => approve(BigInt(parseEther(input)))}
					> 
						Approve
					</Button>
				: 
					<DepositButton amount={BigInt(parseEther(input))}/>
				}

				</div> 
          </Card>  
        </Tab>
        <Tab key="withdraw" title="Withdraw">
          <Card className="pl-14 pr-14 bg-transparent outline-0 outline-black">
            <CardBody className="outline-0 mb-5">
				<WithdrawTab />
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
    </div>  
	);
}
