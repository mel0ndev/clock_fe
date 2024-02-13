export function calculateUnstakedAmount(initialAmount: number, hours: number) {

	let days = Math.floor(hours / 24); 
	let amount; 
	if (days > 0) {
		const leftover = hours - (days * 24); 
		let bal = initialAmount; 	
		let hoursToPass; 
		for (let i = 0; i < days + 1; i++) {
			if (i == days) {
				hoursToPass = leftover; 
			} else {
				hoursToPass = 24; 
			}

			amount = compoundInterestWithIncreasingRate(bal, hoursToPass); 
			bal = amount; 
		}
	} else {
		amount = compoundInterestWithIncreasingRate(initialAmount, hours); 
	}

	return amount; 
}

function compoundInterestWithIncreasingRate(initialAmount: number, hours: number) {
	let currentAmount = initialAmount; 
    let hourlyInterestRate = 0.1;
	let increaseRate = 0.1; 
	let compoundingFrequency = 1; 

    for (let hour = 1; hour <= hours; hour++) {
        // Calculate interest for the current hour
        const hourlyInterest = currentAmount * (hourlyInterestRate / 100) / compoundingFrequency;

        // Add interest to the current amount
        currentAmount += hourlyInterest;

        // Increase the interest rate by the specified increase rate
        hourlyInterestRate += increaseRate;
    }

    return currentAmount;
}
