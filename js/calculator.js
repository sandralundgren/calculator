// Global variables

var theDigits = []; // Stores the individual digits of a single number
var numberOperatorNumber = []; 
var result;

var displayEl = document.getElementById("theInput");

// Arithmetic functions

var addition = function(n1, n2) { return n1 + n2; };
var subtraction = function(n1, n2) { return n1 - n2; };
var multiplication = function(n1, n2) { return n1 * n2; };
var division = function(n1, n2) { return n1 / n2; };


// A function to return theDigits array without any commas to show in the display.

function stripCommas(theDigits) {    

	if (theDigits.length > 0) {

        var n = parseFloat(theDigits.join('')); 

	    displayEl.value = n;
	    
	}    
}

var clearPressed = function() {

    displayEl.value = 0;

}; 

var digitPressed = function() {

    result = 0;

    var text = $(this).text(); 

    theDigits.push(text); 

    stripCommas(theDigits);

};

//  Joins digits together and pushes an expression following the model [23,+,4,=] [5,*,81,=] into the numberOperatorNumber array.	

var getExpression = function() {

    if (theDigits.length > 0) { 

        var n = parseFloat(theDigits.join('')); 

        numberOperatorNumber.push(n); 

	displayEl.value = n;

        theDigits = []; 

    }
};

var operatorPressed = function() {

    getExpression(); 

    var text = $(this).text();

    numberOperatorNumber.push(text);

};

var equalPressed = function() { 

	getExpression();
		
	if (numberOperatorNumber[1] === "+") {

	   result = addition(numberOperatorNumber[0], numberOperatorNumber[2]);	

	} else if (numberOperatorNumber[1] === "-") {

	   result = subtraction(numberOperatorNumber[0], numberOperatorNumber[2]);	

	} else if (numberOperatorNumber[1] === "x") {
								
	   result = multiplication(numberOperatorNumber[0], numberOperatorNumber[2]);	

	} else if (numberOperatorNumber[1] === "÷") {

	   result = division(numberOperatorNumber[0], numberOperatorNumber[2]);		
	
	}

	displayEl.value = result;	

	numberOperatorNumber = []; 					    

};  


// Button listeners

$('.digits').click(digitPressed);
$('.operators').click(operatorPressed);
$('#equal').click(equalPressed);
$('#clear').click(clearPressed); 

