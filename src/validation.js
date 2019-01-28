export function validateAmount(element) {
    let amount = parseInt(element.value);
    
    if (amount) {
        console.log(amount + " is the value");
        if (isNaN(amount)) {   
            return false;
        }

        if (amount < 0) {
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