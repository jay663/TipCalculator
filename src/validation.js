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
    return true;
        // if(element.value !== '') {
        //     let numsArray = element.value.split(".");
        //     if(numsArray.length > 0){
        //         let numDec = numsArray[1].length;
        //         console.log(numDec + " number of decimals");
        //         if(numDec > 2){
        //             return false;
        //         }
    
        //     }
        // }
}