//var ccNumber = "4342-5620-9946-2994"

function isValid(ccNumber) {
	//console.log(ccNumber);   //show original cc number
	ccNumber = ccNumber.replace(/[^\d]/g, ''); //remove non-numbers
	//alert(ccNumber.length != 19 ? 'must be 19 numbers' : 'awesome');
	var i, l, ccNumRev;        //set variables
	sum = 0;                         
	ccNumRev = ccNumber.split("").reverse().join("");//reverse string
	//console.log(ccNumRev + "   Reversed!!!");//show cc number reversed
	for (i = 0, l = ccNumRev.length; i < l; i++) {
		num = ccNumRev[i];       //assign index to numbers
		num = +num;
		if (i % 2) {             //if index even, then * value by 2
			num *= 2;					           
			if (num < 10) {				 //adds numbers together if less than 10
			sum += num;						 //if more than 10...add number and subtract
			} else {							 //so individual digits are added ex:
				sum += num - 9;			 //3+12 should be -> 3+1+2
				} 									 //3+12-9= is the same as 3+1+2=6
			} else {
				sum += num;
			}//console.log(num); //checks if evens were multiplied
		}
		if (sum % 10 === 0) {
			alert("This is a valid credit card number")
		} else {
			alert("Sorry, not a valid number")
		}
// return sum % 10 === 0;
};


//isValid();

//THIS IS HOW IT WORKS
// Reverse the digits:
//   61789372994
// Sum the odd digits:
//   6 + 7 + 9 + 7 + 9 + 4 = 42 = s1
// The even digits:
//     1,  8,  3,  2,  9
//   Two times each even digit:
//     2, 16,  6,  4, 18
//   Sum the digits of each multiplication:
//     2,  7,  6,  4,  9
//   Sum the last:
//     2 + 7 + 6 + 4 + 9 = 28 = s2

// s1 + s2 = 70 which ends in zero which means that 49927398716 passes the Luhn test

