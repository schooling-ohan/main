var modalBack = document.getElementById("termsback");
var modalText = document.getElementById("termsInner");

var yesterdayBack = document.getElementById("yesterdayBehind");
var yesterdays = document.getElementById("yesterdays");

function yesterdaysview() {
	yesterdayBack.style.display = "block";
	yesterdays.style.display = "block";
}

function termsview() {
	termsback.style.display = "block";
	termsInner.style.display = "block";
}

function yesterdayshide() {
	yesterdayBack.style.display = "none";
	yesterdays.style.display = "none";
}

function termshide() {
	termsback.style.display = "none";
	termsInner.style.display = "none";
}

window.onclick = function (event) {
	if (event.target == termsback) {
		termsback.style.display = "none";
		termsInner.style.display = "none";
	}
}

function topbluebartext(){
var rightNow = new Date();
var res = rightNow.toISOString().slice(0,10).replace(/-/g,"");
var year = res.slice(0,4);
var month = res.slice(4,6);
var day = res.slice(6,8);
var text = month + "월 " + day + "일 오늘의 한마디"
document.getElementById("top-blue-bar-text").innerHTML = text;
}
topbluebartext();

function close_window() {
	  window.close();
  }

function q_close_window() {
	if (confirm("오늘의 한마디를 끝내시겠습니까?\n본 창은 테스트 때만 표시됩니다.")) {
		window.close();
	}
  }