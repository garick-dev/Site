let nd = document.getElementById("day")
let h = document.getElementById("hours");
let m = document.getElementById("minutes");
let s = document.getElementById("seconds");


setInterval(tic,1000);

function tic() {
    let d = new Date();

    let day = 53 - d.getDay();
    if(day<10) {
        day = "0" + day;
    }
    let hours = 23 - d.getHours();
    if(hours<10) {
        hours = "0" + hours;
    }
    let min = 59 - d.getMinutes();
    if(min<10) {
        min = "0" + min;
    }
    let sec = 59 - d.getSeconds();
    if(sec<10) {
        sec = "0" + sec;
    }
    
    nd.innerHTML = day + ":"
    h.innerHTML = hours + ":";
    m.innerHTML = min + ":";
    s.innerHTML = sec ;

}