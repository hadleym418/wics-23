var start = document.getElementById('start');
var reset = document.getElementById('reset');

var workingMinutes = document.getElementById('w_minutes');
var workingSeconds = document.getElementById('w_seconds');

var breakMinutes = document.getElementById('b_minutes');
var breakSeconds = document.getElementById('b_seconds');

var startTimer;

start.addEventListener('click', function(){
    if(startTimer === undefined) {
        startTimer = setInterval(timer, 1000)
    } else {
        stopInterval()
        startTimer = undefined;
    }
})

reset.addEventListener('click', function(){
    workingMinutes.innerText = 25;
    workingSeconds.innerText = "00"
    breakMinutes.innerText = 5;
    breakSeconds.innerText = "00";
    stopInterval()
    startTimer = undefined;
})

function timer() {
    if(workingSeconds.innerText != 0) {
        workingSeconds.innerText--;
    } else if(workingMinutes.innerText != 0 && workingSeconds.innerText == 0) {
        workingSeconds.innerText = 59;
        workingMinutes.innerText--;
    }

    if(workingMinutes.innerText == 0 && workingSeconds.innerText == 0) {
        if(breakSeconds.innerText != 0) {
            breakSeconds.innerText--;
        } else if(breakMinutes.innerText != 0 && breakSeconds.innerText == 0) {
            breakSeconds.innerText = 59;
            breakMinutes.innerText--;
        }
    }

    if(workingMinutes == 0 && workingSeconds == 0 && breakMinutes == 0 && breakSeconds == 0) {
        workingMinutes.innerText = 25;
        workingSeconds.innterText = "00"
        breakSeconds.innerText = 5;
        breakSeconds.innerText = "00";
    }
}

function stopInterval(){
    clearInterval(startTimer);
}