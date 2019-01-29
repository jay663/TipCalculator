import 'bootstrap';
import './styles.css';
import { calculateTipAmount, calculateTotalBill } from "./tip-calculator";
import { updateTipTable, clearTipTable } from "./tip-formatter";
import { clearError, showInputError, isValidAmount } from "./validation";

let billAmount, percent, percentButtons;

export function ready(cb) {
    document.onreadystatechange = function () {
        if (document.readyState === "interactive") {
            cb();
        }
    }
}

function main() {
    percent = 10;    
    billAmount = 0;
    let element = document.querySelector('#billAmount');    
    element.addEventListener('input', handleAmountChange);    

    percentButtons = document.querySelectorAll('.percents');
    percentButtons.forEach(function (el) {
        el.addEventListener('click', handlePercentSelectedClick);
    });

}

function handleAmountChange(evt) {
    const amountElement = this;
    
    if(!(amountElement.value)){
        clearTipTable();
        return;
    }


    if(isValidAmount(amountElement)){        
        clearError();
        
        billAmount = parseFloat(amountElement.value);                
        calculateAndDisplayTip(billAmount, percent);
         
    }else{
        showInputError();
    }
}

function calculateAndDisplayTip(billAmount, percent) {
    let tip = calculateTipAmount(billAmount, percent);
    let totalBill = calculateTotalBill(billAmount,tip);
    updateTipTable(tip, totalBill, percent, billAmount);    
}

function handlePercentSelectedClick(evt) {
    const currentPercent = this;
    percent = parseInt(currentPercent.value);    
    
    if(isValidAmount(billAmount)){
        calculateAndDisplayTip(billAmount, percent);
        toggleActivePercentButtons(currentPercent);
    }

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