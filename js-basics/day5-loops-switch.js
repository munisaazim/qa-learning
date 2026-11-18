const attempts = ["123", "secret", "secret", "qwerty"];
const correctPassword = "secret";
const MAX_ATTEMPTS = 3;
let loggedIn = false;

for (let i = 0; i < attempts.length && i < MAX_ATTEMPTS; i++) {
  const attemptNumber = i + 1;
  const password = attempts[i];
  if(password ===correctPassword){
    console.log(`Attempt ${attemptNumber}: login successful ✅`);
    loggedIn = true;
    break;
  }
  else{
      console.log(`Attempt ${attemptNumber} wrong password`);
  }
}
if(!loggedIn){
      console.log("Account locked 🔒");
}

for (let day = 0; day <= 8; day++) {
  switch(day){
    case 1:
    case 3:
    case 5:
        console.log("Regression tests");
        break;
    case 2:
    case 4:
        console.log("Smoke test");
        break;
    case 6:
    case 7:
        console.log("No test run");
        break;
    default:
        console.log("Invalid day");

}
}
