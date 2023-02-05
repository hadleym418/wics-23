xprediction = 0;
yprediction = 0;
webgazer.setGazeListener(function(data, elapsedTime) {
	if (data == null) {
		return;
	}
	xprediction = data.x; //these x coordinates are relative to the viewport
	yprediction = data.y; //these y coordinates are relative to the viewport
}).begin();