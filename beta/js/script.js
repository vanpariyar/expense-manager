/*
var addMoreBtn = document.getElementById('addMore');
var amountDetails = document.getElementsByClassName('amount-details');
var clonedDetails =  amountDetails[0].innerHTML
var i =0 ;

function cloneAmountInput() {

    // or clone.id = ""; if the divs don't need an ID
    amountDetails[0].insertAdjacentHTML(amountDetails[0], clonedDetails);
}

addMoreBtn.addEventListener("click", cloneAmountInput);
*/
function myFunction() {
    var x = document.getElementById("myTopnav");
    (x.className === "topnav") ? x.className += " responsive" : x.className = "topnav";   
}
