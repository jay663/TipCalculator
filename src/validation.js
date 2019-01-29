export function isValidAmount(element) {    
    let amount = parseFloat(element.value);
    
    if (amount) {
        
        if (Number.isNaN(amount) || amount === "") {   
            return false;
        }

        if (amount <= 0) {
            return false;
        }

        if(!isValidCurrency(element)){
            return false;
        }
    }
    return true;
}

export function showInputError() {
    let billAmountGroup = document.querySelector('#billAmountGroup');
    billAmountGroup.classList.add("has-error");
}

export function clearError() {
    let billAmountGroup = document.querySelector('#billAmountGroup');
    billAmountGroup.classList.remove("has-error");
}

function isValidCurrency(element){
    let currency = element.value;
        
    // Decimal place is optional but must have 2 numbers after if used.
    // Didn't have much luck with regular expressions on currency
    let count = (currency.match(/\./g) || []).length;
    if(count > 1){
        return false;
    }

    let numsArray = currency.split(".");
    if(!Array.isArray(numsArray)){
        return true;
    } 
    
    if(numsArray.length === 2) {
        let numDec = numsArray[1].length;
        return numDec > 2 ? false : true;        
    }
               
    return true;
    
}