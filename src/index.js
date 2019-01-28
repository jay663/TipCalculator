import 'bootstrap';
import './styles.css';
import { calculateTip, calculateTotalBill } from "./tip-calculator";
import { updateTipTable } from "./tip-formatter";
import { clearError, showInputError, validateAmount } from "./validation";

let billAmount, percent, total, percentButtons, factor;

export function ready(cb) {
    document.onreadystatechange = function () {
        if (document.readyState === "interactive") {
            cb();
        }
    }
}

function main() {
    percent = 10;    
    let element = document.querySelector('#billAmount');    
    element.addEventListener('input', handleAmountChange);
    billAmount = element.value;    

    percentButtons = document.querySelectorAll('.percents');
    percentButtons.forEach(function (el) {
        el.addEventListener('click', handlePercentSelectedClick);
    });

}

function setActivePercent(p) {
    percent = parseInt(p);    
}


function handleAmountChange(evt) {
    const amountElement = this;
    
    if(validateAmount(amountElement)){        
        billAmount = parseInt(amountElement.value);
        clearError();
        let tip = calculateTip(billAmount, percent);
        let totalBill = calculateTotalBill(billAmount,tip);
        updateTipTable(tip, totalBill, percent, billAmount);         
    }else{
        showInputError();
    }
}

function handlePercentSelectedClick(evt) {
    const currentPercent = this;
    setActivePercent(currentPercent.value);
    if(validateAmount(billAmount)){
        let tip = calculateTip(billAmount, percent);
        let totalBill = calculateTotalBill(billAmount,tip);
        updateTipTable(tip, totalBill, percent, billAmount);

        toggleActivePercentButtons(currentPercent);
    }

    console.log(parseInt(this.dataset.number));    
}

function toggleActivePercentButtons(button) {
    percentButtons = document.querySelectorAll('.percents');
    percentButtons.forEach(function (el) {
        if(el !== button){
            el.addEventListener('click', handlePercentSelectedClick);
        }else{
            el.removeEventListener('click', handlePercentSelectedClick)
        }    
        
    });    
    
}


ready(main);