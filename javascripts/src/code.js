var ccNumber = "4342562099462994"

function is_valid() {
	//this.value = this.value.replace(/[^\d]/g, '');
	//alert(ccNumber.length != 19 ? 'must be 19 numbers' : 'awesome');



console.log(ccNumber);
var ccNumRev = ccNumber.split("").reverse().join("");
console.log(ccNumRev + "   Reversed!!!");

}

 is_valid();

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

