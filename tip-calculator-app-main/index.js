const bill = document.getElementById("bill");
const people = document.getElementById("npeople");
const tip = document.getElementById("tip");
const arlert = document.getElementById("hide");
const tip5 = document.getElementById("5");
const tip10 = document.getElementById("10");
const tip15 = document.getElementById("15");
const tip25 = document.getElementById("25");
const tip50 = document.getElementById("50");
const tipAm = document.getElementById("tip-amount");
const tipTo = document.getElementById("tip-total");
var tipPercent;

arlert.style.display = "none";

function validateInputBill(event) {
    // Get the input element
    var input = event.target;
  
    // Replace any characters that are not numbers or dot (.) with an empty string
    input.value = input.value.replace(/[^0-9.]/g, '');
  
    // Remove extra dot (.) characters
    var dotsCount = (input.value.match(/\./g) || []).length;
    if (dotsCount > 1) {
      input.value = input.value.replace(/\./g, '');
    }
  }

function changeStyleCustomTip(){
    tipPercent = tip.value/100;
}

function calculateTip(){
    if(people.value == 0){ 
        arlert.style.display = "block";
        people.style.borderColor = "red";
    }else{
        arlert.style.display = "none";
        people.style.borderColor = "green";
        var tipAmount = bill.value*tipPercent/people.value;
        var tipTotal = bill.value*tipPercent;
        tipAmount = tipAmount.toFixed(2);
        tipTotal = tipTotal.toFixed(2);
        console.log(tipAmount);
        console.log(tipTotal);
        tipAm.textContent =  tipAmount;
        tipTo.textContent = tipTotal;
    }
    
}

tip.addEventListener("focus", function() {
  tip.style.textAlign = "right";
  tip.style.paddingRight = "2%";
  tip.placeholder ="";
});

tip.addEventListener("blur", function() {
    tip.placeholder ="Custom";
    tip.style.textAlign = "center";
  });

/*tip5.addEventListener("click", function() {
    var tips =[tip5, tip10, tip15, tip25, tip50];
    tip5.style.backgroundColor = "rgb(181, 225, 225)";
    tip5.style.color = "hsl(183, 100%, 15%)";
    tipPercent = 0.05;
    tips.splice(tips.indexOf(tip5), 1);
    for(var i= 0; i<tips.length; i++){
        tips[i].style.backgroundColor ="hsl(183, 100%, 15%)";
        tips[i].style.color ="rgb(181, 225, 225)";
    }
    calculateTip();
});
tip10.addEventListener("click", function() {
    var tips =[tip5, tip10, tip15, tip25, tip50];
    tip10.style.backgroundColor = "rgb(181, 225, 225)";
    tip10.style.color = "hsl(183, 100%, 15%)";
    tipPercent = 0.1;
    tips.splice(tips.indexOf(tip10), 1);
    for(var i= 0; i<tips.length; i++){
        tips[i].style.backgroundColor ="hsl(183, 100%, 15%)";
        tips[i].style.color ="rgb(181, 225, 225)";
    }
    calculateTip();
});
tip15.addEventListener("click", function() {
    var tips =[tip5, tip10, tip15, tip25, tip50];
    tip15.style.backgroundColor = "rgb(181, 225, 225)";
    tip15.style.color = "hsl(183, 100%, 15%)";
    tipPercent = 0.15;
    tips.splice(tips.indexOf(tip15), 1);
    for(var i= 0; i<tips.length; i++){
        tips[i].style.backgroundColor ="hsl(183, 100%, 15%)";
        tips[i].style.color ="rgb(181, 225, 225)";
    }
    calculateTip();
});
tip25.addEventListener("click", function() {
    var tips =[tip5, tip10, tip15, tip25, tip50];
    tip25.style.backgroundColor = "rgb(181, 225, 225)";
    tip25.style.color = "hsl(183, 100%, 15%)";
    tipPercent = 0.25;
    tips.splice(tips.indexOf(tip25), 1);
    for(var i= 0; i<tips.length; i++){
        tips[i].style.backgroundColor ="hsl(183, 100%, 15%)";
        tips[i].style.color ="rgb(181, 225, 225)";
    }
    calculateTip();
});
tip50.addEventListener("click", function() {
    var tips =[tip5, tip10, tip15, tip25, tip50];
    tip50.style.backgroundColor = "rgb(181, 225, 225)";
    tip50.style.color = "hsl(183, 100%, 15%)";
    tipPercent = 0.5;
    tips.splice(tips.indexOf(tip50), 1);
    for(var i= 0; i<tips.length; i++){
        tips[i].style.backgroundColor ="hsl(183, 100%, 15%)";
        tips[i].style.color ="rgb(181, 225, 225)";
    }
    calculateTip();
});*/
const collections = document.querySelectorAll(".preset");
collections.forEach(function(presettip){
    presettip.addEventListener("click", function(event){
        tipPercent = parseInt(presettip.id)/100;
        presettip.style.backgroundColor = "rgb(181, 225, 225)";
        presettip.style.color = "hsl(183, 100%, 15%)";
        collections.forEach(function(otherTip){
            if(otherTip!==event.target){
                otherTip.style.backgroundColor ="hsl(183, 100%, 15%)";
                otherTip.style.color ="rgb(181, 225, 225)";
            }
        })
        calculateTip();
    });
});


