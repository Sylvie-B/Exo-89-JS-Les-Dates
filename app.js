let timestamp = document.getElementById("timestamp");
let localTime = document.getElementById("localTime");
let localDate = document.getElementById("localDate");

let thisDay = Date.now();
let thisDay2 = new Date();

timestamp.innerHTML = thisDay.toString();
localTime.innerHTML = thisDay2.toLocaleDateString();
localDate.innerHTML = thisDay2.toLocaleString();

let thisDay3 = new Date();
thisDay3.setDate(17);
thisDay3.setHours(16);

console.log(thisDay2);
console.log(thisDay3);
