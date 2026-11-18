let totalCost = 500;
if(totalCost<100){
    console.log("Thre is no discount");
}
else if(totalCost >=100 && totalCost< 500){
    let discount = 5;
    let payAmount = (totalCost - (discount * totalCost)/100);
    console.log(`Total: ${totalCost}, Discount: ${discount}%, Pay: ${payAmount}`)
}
else if(totalCost>=500){
    let discountTwo = 10;
    let payAmount = (totalCost - (discountTwo * totalCost)/100);
    console.log(`Total: ${totalCost}, Discount: ${discountTwo}%, Pay: ${payAmount}`)
}
let parcel = 20.1;
let parcelStatus = parcel > 20 ? "heavy" : "standard";
console.log(parcelStatus);

console.log("15" > "3"); //false
console.log("15" > 3); //true
console.log("Admin" === "admin"); //false
console.log(null >= 0); //true
console.log(undefined == 0); //false