export function calculateTipAmount(amount, percent) {
    let x = percent/100;
    let tip = parseFloat((amount * x).toFixed(2));
    return tip;
}

export function calculateTotalBill(amount, tip) {    
    let bill = amount + tip;
    return bill;
}