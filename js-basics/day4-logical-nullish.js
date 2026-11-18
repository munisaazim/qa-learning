let isLoggedIn = true 
let cartItems = 3
let isBlocked = true
let Expected

if(isLoggedIn===true && cartItems > 0 && !isBlocked){
    Expected = "allowed";
}
else{
    Expected = "denied";
}
console.log(Expected);

const settings = { pageSize: 0, theme: null, showBanner: false, maxResults: undefined };