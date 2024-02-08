// help the zoo manager

function calculateMoney(ticketSale) {
    if (typeof ticketSale !== 'number' || ticketSale < 0) {
        return 'Enter a positive number, Please.'
    }
    
    const ticketPrice = 120, guardSalary = 500, perStaffMealCost = 50, haveStaff = 8;
    let totalStaffCost = haveStaff * perStaffMealCost;

    let profit = (ticketPrice * ticketSale) - (guardSalary + totalStaffCost);  
    
    return profit;
}



console.log(calculateMoney(10));