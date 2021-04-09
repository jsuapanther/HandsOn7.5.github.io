//empty object
var delivInfo = {};
//element deliverTo is to display delivery address details
var delivSummary = document.getElementById("deliverTo");
//empty object
var foodInfo = {};
//variable to display foor summary
var foodSummary = document.getElementById("order");
//function processDeliveryInfo() is used to display delivery address details

function processDeliveryInfo() {
    var prop;//declared local variable prop
    //getting name entered by user and storing in the object as property
    delivInfo.name = document.getElementById("nameinput").value;
    //getting address entered by user and storing in the object as property
    delivInfo.addr = document.getElementById("addrinput").value;
    //getting city entered by user and storing in the object as property
    delivInfo.city = document.getElementById("cityinput").value;
    //getting email entered by user and storing in the object as property
    delivInfo.email = document.getElementById("emailinput").value;
    //getting phone entered by user and storing in the object as property
    delivInfo.phone = document.getElementById("phoneinput").value;
    //here using for in getting each property from object and displaying in the div with id=deliverTo
    for (prop in delivInfo) {
        //concatenate each property value using operator +
        delivSummary.innerHTML += " " + delivInfo[prop] + " ";
    }
}

//This function is used to preview order
function previewOrder() {
    //calling function to process delivery Info
    processDeliveryInfo();
    //call function processFood()
    processFood();
    //setting style to block
    //document.getSelection("selection").style = "block";
}
//function processFood()
function processFood() {
    //local variables
    var prop;
    //getting all crust
    var crustOpt = document.getElementsByName("crust");
    var toppings = 0;
    //this code is used to get all checkboxes
    var toppingsBoxes = document.getElementsByName("toppings");
    var instr = document.getElementById("instructions");
    //using if else
    if (crustOpt[0].checked) {
        //if first item is checked then
        foodInfo.crust = crustOpt[0].value;//assign value
    }
    else {
        //if second item is checked then
        foodInfo.crust = crustOpt[1].value;//assign value
    }
    //assign size property value in foodInfo object
    foodInfo.size = document.getElementById("size").value;
    //using for loop
    for (var i = 0; i < toppingsBoxes.length; i++) {
        //checking which item is checked
        if (toppingsBoxes[i].checked) {
            toppings++; //increment toppings variable by 1
            foodInfo["topping" + toppings] = toppingsBoxes[i].value;
        }
    }
    if (instr.value != null) {
        //if some special instructions are provided
        foodInfo.instructions = instr.value;//create a new property
    }
    //adding object properties to order summery sidebar
    foodSummary.innerHTML += "<p><span>Crust</span>:" + foodInfo.crust + "</p>";
    foodSummary.innerHTML += "<p><span>Size</span>:" + foodInfo.size + "</p>";
    foodSummary.innerHTML += "<p><span>Toppings</span>:</p>";
    foodSummary.innerHTML += "<ul>";
    for (var i = 1; i < 6; i++) {
        if (foodInfo["topping" + i]) {
            foodSummary.innerHTML += "<li>" + foodInfo["topping" + i] + "</li>";
        }
    }
    foodSummary.innerHTML += "</ul>";//close ul
    foodSummary.innerHTML += "<p><span>Instructions</span>:" + foodInfo.instructions;
    document.getElementById("order").style.display = "block";
}

//
//adding eventlistener on button with id=previewBtn
function addListener() {
    //getting button
    var submitButton = document.getElementById("previewBtn");
    //adding event listener
    if (submitButton.addEventListener) {
       //on click event call function previewOrder()
        submitButton.addEventListener("click", previewOrder, false);
    }
    else if (submitButton.attachEvent) {
        //onclick event call function previewOrder()
        submitButton.attachEvent("onclick", previewOrder);
    }
}
//attaching Event Listener after page loads
if (window.addEventListener) {
    window.addEventListener("load", addListener, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", addListener);
}

