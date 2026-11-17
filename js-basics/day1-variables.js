const BASE_URL = "https://the-internet.herokuapp.com";
const TIMEOUT = 30000;
let attempCount = "chromium";
let counter = 0;

attempCount = "firefox";
counter +=1;
console.log(`Running on ${attempCount}, attempt ${counter}, timeout ${Math.floor(TIMEOUT/1000)} s, url: ${URL}`);
