const URL = "https://the-internet.herokuapp.com";
const TIMEOUT = 3000;
let browserName = "chromium";
let counter = 0;

browserName = "firefox";
counter +=1;
console.log(`Running on ${browserName}, attempt ${counter}, timeout ${Math.floor(TIMEOUT/1000)} s, url: ${URL}`);
