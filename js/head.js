var rightNow = new Date();
var res = rightNow.toISOString().slice(0, 10).replace(/-/g, "");
var yyyy = res.slice(0, 4);
var mm = res.slice(4, 6);
var dd = res.slice(6, 8);
var fulltime = yyyy + "-" + mm + "-" + dd;

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

$.get('https://www.cloudflare.com/cdn-cgi/trace', function (data) {
	ipv4 = data.split("\n");
	ipv4 = ipv4[2].replace("ip=", "");
	for (i = 0; i < 4; i++) {
		ipv4 = ipv4.replace(".", "_");
	}

	console.log(ipv4);
})

var Config = {
	apiKey: "AIzaSyCyQGYZJSfjI07yhxkybLOg7syB575Rco4",
	authDomain: "schooling-ohan.firebaseapp.com",
	databaseURL: "https://schooling-ohan.firebaseio.com",
	projectId: "schooling-ohan",
	storageBucket: "schooling-ohan.appspot.com",
	messagingSenderId: "427494436659",
	appId: "1:427494436659:web:822a8c47edc2527caa5846",
	measurementId: "G-DLNDV9SM7F"
};
firebase.initializeApp(Config);

