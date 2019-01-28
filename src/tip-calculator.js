export function calculateTip(amount, percent) {
    let x = percent/100;
    let t = amount * x;
    return t;
}

export function calculateTotalBill(amount, tip) {    
    let b = amount + tip;
    return b;
}