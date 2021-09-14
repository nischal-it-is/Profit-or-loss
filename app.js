var cp=document.querySelector('#initial-price');
var quantity=document.querySelector('#stocks-quantity');
var sp=document.querySelector('#current-price');
var button=document.querySelector('#submit-btn');
// cp=Number(cp.value);
// quantity=Number(quantity.value);
// sp=Number(sp.value);
button.addEventListener('click', function call(){
    // console.log("CP "+typeof(cp.value));
    // console.log("SP "+sp.value);
    // console.log("quantity "+quantity.value);
    var initial=Number(cp.value);
    var num=Number(quantity.value);
    var current=Number(sp.value);
    console.log(initial+" "+num+" "+current);
})