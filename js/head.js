getip();

function getdate(bool) {
	var rightNow = new Date();
	var year = rightNow.getFullYear();
	var month = rightNow.getMonth() + 1;
	var month = String(month).padStart(2, '0');
	var day = rightNow.getDate();
	var day = String(day).padStart(2, '0');
	fulldate = year + "/" + month + "/" + day;

	text = month + "월 " + day + "일 오늘의 한마디"

	if (bool == true){
		console.log("fulldate : " + fulldate);
	}
}

getdate(true);

function gettime(bool) {
	var rightNow = new Date();
	var Hour = rightNow.getHours();
	var Hour = String(Hour).padStart(2, '0');
	var min = rightNow.getMinutes();
	var min = String(min).padStart(2, '0');
	var second = rightNow.getSeconds();
	var second = String(second).padStart(2, '0');
	var milisecond = rightNow.getMilliseconds();
	var milisecond = String(milisecond).padStart(3, '0');
	fulltime = Hour + min  + second + "_" + milisecond;

	if (bool == true){
		console.log("fulltime : " + fulltime);
	}
}

gettime(true);

setInterval(counter, 10);

function counter() {
	var InputBoxText = document.getElementById("input").value;
	var InputLength = InputBoxText.length

	var CounterText = document.getElementById("counter").textContent;
	var NoLimitCounter = CounterText.replace("200", "")
	var CounterNum = NoLimitCounter.match(/\d+/g).map(Number);

	if (InputLength != CounterNum) {
		document.getElementById("counter").innerHTML = InputLength + "/200자";
	}
}

function getip(){
    $.get('https://www.cloudflare.com/cdn-cgi/trace', function(data) {
    ip = data.split("\n");
    ip = ip[2].replace("ip=", "");
	console.log("ip : " + ip);
	getTodayData();
})
}

