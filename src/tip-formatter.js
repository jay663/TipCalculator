export function updateTipTable(tip, totalBill, percent, billAmount) {
    clearTipTable();
    let tipCalculation = document.querySelector('#tipCalculation'); 
    let billAmountText = formatFloat(billAmount);
    let tipText = formatFloat(tip);
    let totalText = formatFloat(totalBill);

    let tipPercentTextElement = document.querySelector('#tipAmount'); 
    tipPercentTextElement.innerHTML = `You are tipping ${percent}%`

    let billElement = createListItem(`Bill Amount: $${billAmountText}`);        
    tipCalculation.appendChild(billElement);
    
    let tipElement = createListItem(`Tip Percentage: ${percent}%`);        
    tipCalculation.appendChild(tipElement);

    let tipChargeElement = createListItem(`Amount of tip: $${tipText}`);    
    tipCalculation.appendChild(tipChargeElement);

    let totalElement = createListItem(`Total to be Paid: $${totalText}`);        
    tipCalculation.appendChild(totalElement);

}

export function clearTipTable(){
    document.querySelectorAll(".list-group-item").forEach(e => e.parentNode.removeChild(e));   
}

function formatFloat(amount){
    if(!Number.isNaN(amount) && typeof(amount) === "number"){
        return amount.toFixed(2);
    }

    return "0.00";
}

function createListItem(itemText) {
    let element = document.createElement("li");    
    element.appendChild(document.createTextNode(itemText));
    element.classList.add("list-group-item");
    return element;
}

