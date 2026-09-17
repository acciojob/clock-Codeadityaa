//your JS code here. If required.
let timerDisplay=document.getElementById("timer");
let currentDate=new Date();
set interval(
	function () {
		currentDate=new Date();
		timerDisplay.innerHTML=currentDate.tolocaleString();
	},1000
		
	)
)