let timestamp = document.getElementById("timestamp");
let localTime = document.getElementById("localTime");
let localDate = document.getElementById("localDate");

let toDay = Date.now();
let toDayToo = new Date();
// 1 add the today date
timestamp.innerHTML = toDay.toString();
// 2 add local date
localTime.innerHTML = toDayToo.toLocaleDateString();
// 3 add local hour
localDate.innerHTML = toDayToo.getHours() + ":" + toDayToo.getMinutes();

// 4 cretate a today date
let thisDay = new Date();
let oneDay = new Date();
oneDay.setDate(thisDay.getDate() + 2);
oneDay.setHours(thisDay.getHours() + 6);



if(oneDay > thisDay){
    // interval between two dates
    let time = oneDay.getTime() - thisDay.getTime();
    // number of days
    let dayTime = Math.floor(time / 1000 / 60 / 60 /24);
    // number of hours
    let hourTime = Math.floor((time - (dayTime * 1000 * 60 *60 *24))/1000 / 60 /60);
    // seconds
    let secTime = Math.floor(time - (dayTime * 1000 * 60 * 60 * 24) - (hourTime * 1000 * 60 * 60));

    // create an element
    let newDate = document.createElement("div");
    newDate.innerHTML = "L'interval est de " + dayTime + " jour(s) " + hourTime + " heure(s) et " + secTime + " seconde(s)";
    document.body.appendChild(newDate);
}
