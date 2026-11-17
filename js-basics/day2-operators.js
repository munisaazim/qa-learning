let counterPass = 0;
counterPass += 3;
let counterFail = 0;
counterFail +=2;
let total = counterPass + counterFail;
let passRate = Math.floor((3*100)/5);
console.log(`Passed: ${counterPass}, Failed: ${counterFail}, Total: ${total}, Passs rate: ${passRate}%`);

const price1 = "120";
const price2 = "80";
const discountPercent = "10";
let totalCost = (+price1) + (+price2);
let totalCostWithDiscount = Math.floor((Math.floor(totalCost * discountPercent))/100);
let totalCostSum = (totalCost - totalCostWithDiscount)
console.log(`Toal after ${discountPercent}% discount: ${totalCostSum} AED`);

let orderNumber = 1047;
console.log(`Check even or odd: ${orderNumber % 2}`);
