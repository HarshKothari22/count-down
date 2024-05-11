'use strict';
const endDate = "22 June 2024 12:00 AM";

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");


function clock(){
    const end = new Date(endDate)
    const now = new Date()
    // console.log(now);
    const diff = (end - now)/1000;
    // console.log(diff);
    if(diff < 0) return;
   inputs[0].value = Math.floor(diff/60/60/24);
   inputs[1].value = Math.floor(diff/60/60)%24;
   inputs[2].value = Math.floor(diff/60)%60;
   inputs[3].value = Math.floor(diff%60);
}
//1 day = 24 hours
//1 hour = 60 minutes
//1 min = 60 seconds
clock();

setInterval(() => {
        clock()
    },
    1000
);

