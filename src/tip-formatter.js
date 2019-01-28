export function updateTipTable(tip, totalBill, percent, billAmount) {
    document.querySelectorAll(".list-group-item").forEach(e => e.parentNode.removeChild(e));
    let tipCalculation = document.querySelector('#tipCalculation'); 
    
    let tipPercentTextElement = document.querySelector('#tipAmount'); 
    tipPercentTextElement.innerHTML = `You are tipping ${tip}%`

    let billElement = createListItem(`Bill Amount: $${billAmount}%`);        
    tipCalculation.appendChild(billElement);
    
    let tipElement = createListItem(`Tip Percentage: ${percent}%`);        
    tipCalculation.appendChild(tipElement);

    let tipChargeElement = createListItem(`Amount of tip: $${tip}`);    
    tipCalculation.appendChild(tipChargeElement);

    let totalElement = createListItem(`Total to be Paid: $${totalBill}`);        
    tipCalculation.appendChild(totalElement);

    console.log("The Tip is: " + tip);
    console.log("The totalBill is: " + totalBill);
    console.log("The percent is: " + percent);
    console.log("The billamount is: " + billAmount);
}


function createListItem(itemText) {
    let element = document.createElement("li");    
    element.appendChild(document.createTextNode(itemText));
    element.classList.add("list-group-item");
    return element;
}