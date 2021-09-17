var cp=document.querySelector('#initial-price');
var quantity=document.querySelector('#stocks-quantity');
var sp=document.querySelector('#current-price');
var button=document.querySelector('#submit-btn');
var outputBox=document.querySelector('#output-box');
// cp=Number(cp.value);
// quantity=Number(quantity.value);
// sp=Number(sp.value);
function calculate(costPrice,sellingPrice)
{
    if(costPrice>sellingPrice)
    {
        var loss=costPrice-sellingPrice;
        var lossPer=((loss/costPrice)*100).toFixed(2);
        showMessage(`You have suffered a loss of ${loss} and loss % is ${lossPer}`,1);
    }
    else if(sellingPrice>costPrice)
    {
        var profit=sellingPrice-costPrice;
        var profitPer=((profit/costPrice)*100).toFixed(2);
        showMessage(`You have gained a profit of ${profit} and profit % is ${profitPer}`,0);
    }
    else{
        showMessage(`NO profit No loss`);
    }
}
button.addEventListener('click', function call(){
    // console.log("CP "+typeof(cp.value));
    // console.log("SP "+sp.value);
    // console.log("quantity "+quantity.value);
    var initial=Number(cp.value);
    var num=Number(quantity.value);
    var current=Number(sp.value);
    if(initial==0||current==0)
    {
        showMessage('Invalid Input');
        return;
    }
    calculate(initial*num,current*num);
})
function showMessage(message,flag) {
    outputBox.innerHTML = message;
    console.log(flag);
    if(flag==1)
    {
        outputBox.style.color='red';
    }
    else
    {
        outputBox.style.color='green';
    }
  }
