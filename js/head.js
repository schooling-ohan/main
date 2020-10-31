getip();



function getdate() {
	var rightNow = new Date();
	var res = rightNow.toISOString().slice(0,10).replace(/-/g,"");
	var year = res.slice(0,4);
	var month = res.slice(4,6);
	var day = res.slice(6,8);
	fulldate = year + "-" + month + "-" + day;
	console.log(fulldate);
}

  function gettime() {
	var rightNow = new Date();
	var Hour = rightNow.getHours();
	var Hour = String(Hour).padStart(2, '0');
	var min = rightNow.getMinutes();
	var min = String(min).padStart(2, '0');
	var second = rightNow.getSeconds();
	var second = String(second).padStart(2, '0');
	var milisecond = rightNow.getMilliseconds();
	var milisecond = String(milisecond).padStart(3, '0');
	fulltime = Hour  + min  + second + "_" + milisecond;
	console.log(fulltime);
  }

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
    ipv4 = data.split("\n");
    ipv4 = ipv4[2].replace("ip=", "");
    console.log(ipv4);
})
}

