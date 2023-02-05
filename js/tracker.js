let xprediction = 0;
let yprediction = 0;
let alarm = new Audio('../assets/buzz_sound.mp3');
webgazer.setGazeListener(function(data, elapsedTime) {
	if (data == null) {
		return;
	}
	xprediction = data.x; //these x coordinates are relative to the viewport
	yprediction = data.y; //these y coordinates are relative to the viewport
}).begin();

if((window.noise) && (xprediction < 100 || xprediction > 1200 || yprediction > 250 || yprediction < 50)) {
	console.log("Space");
	alarm.play();
}