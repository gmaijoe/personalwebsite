function mp3() {
	var mp3Array = new Array;
	mp3Array[0] = "1.mp3";
	mp3Array[1] = "2.mp3";
	mp3Array[2] = "3.mp3";
	var choice = Math.floor(Math.random() * mp3Array.length);
	document.getElementById("sound").innerHTML = ("<audio src='audio/" + mp3Array[choice] + "' autoplay='true'></audio>");
}

mp3()