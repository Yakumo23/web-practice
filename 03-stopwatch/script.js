let startbtn = document.getElementById("startbtn");
let stopbtn = document.getElementById("stopbtn");
let risetbtn = document.getElementById("risetbtn");
let timer = document.getElementById("timer");

let totlalSecond = 0; 
let timerId = null;

startbtn.addEventListener("click", () => {
    if (timerId !== null){
        return;
    }
    
    timerId = setInterval(() => {
        totlalSecond++;
        console.log(totlalSecond);

        let hours = Math.floor(totlalSecond / 3600);
        let minutes = Math.floor((totlalSecond % 3600) /60);
        let seconds = totlalSecond % 60;

        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        hours = String(hours).padStart(2, "0");

        timer.textContent = hours + ":" + minutes + ":"  + seconds;
    }, 1000);
});

stopbtn.addEventListener("click", () => {
    clearInterval(timerId);
    timerId = null;
});

risetbtn.addEventListener("click", () => {
    clearInterval(timerId);
    totlalSecond = 0;
    timer.textContent = "00:00:00";
    timerId = null;
});
