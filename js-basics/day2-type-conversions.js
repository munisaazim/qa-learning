console.log("25"); //25
console.log(""); //nothing
console.log (" "); //empty line
console.log("25years"); //25years
console.log("-5");  //-5
console.log("17.5"); //17.5
console.log("0"); //0
console.log(null); //null (no quotes: the field is empty or missing)
console.log(undefined); //undefined (no quotes)
console.log("1e2"); //1e2

/*
Which inputs become 0, and which become NaN?
console.log("0"); //0 - become 0
NaN - for example "z"/2
As a tester, which inputs should the form reject? 
"-5"  → reject, because age can't be negative
"-"  → reject, because age can't be empty
" "  → reject, because age can't be space
"0" → reject, because age can't be zero
"null" → reject, because age can't be null
"undefined" → reject, because age can't be undefined
"1e2" → reject, because age can't be 1e2
*/