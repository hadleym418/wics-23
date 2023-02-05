var noise = false;
let alarm = new Audio('../assets/buzz_sound.mp3');
window.onload=function(){
    start.addEventListener('click', function(){
        if(noise == false) {
            console.log("Started");
            noise = true;
            console.log(noise);
        } else {
            noise = false;
        }
    })

    reset.addEventListener('click', function(){
        noise = false;
    })
}

setInterval(function(){ 
    if(noise) {
        if(xprediction > 1300 || xprediction < 300 || yprediction < 100 || yprediction > 300) {
            alarm.play();
        }
    }
}, 4000);