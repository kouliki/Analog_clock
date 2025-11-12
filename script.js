

/// calculation for the timings 

// 12 hour=360 deg 
// 1 hour=360/12=30
// h hours=30h+m/2

// 60 mins=30           -|
// 1 min=30/60=1/2       |     ---> for hour calculation
// m mins=(1/2)m         |

// 60min=360deg
// 1 min=360/60=6 deg       ---> for mins calculation
// m min=6m 

// 60 sec=360deg
// 1 sec=360/60=6deg        ---> for secs calculation
// s secs=6s 

// ********************************//


let hr=document.getElementById('hrs');
let min=document.getElementById('min');
let sec=document.getElementById('secs');

function displayTime(){

    let date=new Date();

    // geting hour,mins,secs, rom date

    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();

    let hrotation= 30*hh+mm/2;
    let mrotation=6*mm;
    let sRotation=6*ss;

   hr.style.transform = `rotate(${hrotation}deg)`;
    min.style.transform = `rotate(${mrotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

}
displayTime(); // run once immediately

setInterval(displayTime, 1000);
