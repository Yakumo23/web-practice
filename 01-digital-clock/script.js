setInterval(() => {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    console.log(now.getHours());
    console.log(now.getMinutes());
    console.log(now.getSeconds());
    hours = String(hours).padStart(2, "0")
    minutes = String(minutes).padStart(2, "0")
    seconds = String(seconds).padStart(2, "0")
    let time = hours  + ":" +  minutes  + ":" +  seconds;
    console.log(time);
    let clock  = document.getElementById("clock");
    clock.textContent = time;
}, 1000);
