import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import { DepositTab } from "./deposit-tab"

export const StakingModal = () => {
	return (
    <div className="flex w-full flex-col p-2">
		<Tabs 
			aria-label="Options"
			variant="solid"
			fullWidth={true}
			disableAnimation={true}
			classNames={{
			cursor: "w-full opacity-0",
			tabContent: "font-bruno group-data-[selected=true]:text-clock",
        }}
		>
			<Tab key="deposit" title="Deposit">
          <Card>
            <CardBody>
				<DepositTab />
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="withdraw" title="Withdraw">
          <Card>
            <CardBody>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
    </div>  
	);
}
