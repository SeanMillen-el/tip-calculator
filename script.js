//Function to Calc and display Tip, Total bill and amount per person
function calculateAndDisplay(){
    //Get the values from html form   
    let bill = parseFloat(document.getElementById('totalBill').value)
    let numOfPpl = parseInt(document.getElementById('numOfPpl').value)
    let serviceQuality = document.getElementById('serviceQuality').value
    //calculate tip. total bill, and the amount each person owes

    let tip = calculateTip(bill, serviceQuality)
    let totalBill = calculateTotalBill(Bill, Tip)
    let amtPerPer = calculateAmtPerPers(totalBill, numOfPpl)

    //Display the result in the html

    document.getElementById('tipResult').innerText = 'Tip: $' + tip.toFixed(2)
}
//helper function
function calculate(bill, quality)
    if(quality === 'Great'){
        return bill * .2
    } else if (quality === 'Good'){
        return bill * .15
    } else (quality === 'Poor');{
        return bill * .10
    }

function calculateTotalBill(bill, tip){
    return bill + tip
}

function calculateAmtPerPers(totalBill, numOfPpl){
    return totalBill/numOfPpl
}