webgazer.setGazeListener(function(data, elapsedTime) {
	if (data == null) {
		return;
	}
	var xprediction = data.x; //these x coordinates are relative to the viewport
	var yprediction = data.y; //these y coordinates are relative to the viewport
	let alarm = new Audio('../assets/buzz_sound.mp3');
	var start = Date.now();
	console.log(start);
	console.log(Date.now);
	// if((Date.now() - start) > 120000) {
	// 	alarm.play();
	// 	// if(xprediction > 1300 || xprediction < 100 || yprediction > 300 || yprediction < -600) {
	// 	// 	// var timerStart = Date.now();
	// 	// 	// if((Date.now() - timerStart) > 2000) {
	// 	// 		alarm.play();
	// 	// 		// timerStart = Date.now();
	// 	// 	// }
	// 	// }
	// }
	// console.log(xprediction, yprediction); //elapsed time is based on time since begin was called
}).begin();
		