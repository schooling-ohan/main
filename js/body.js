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

var text = mm + "월 " + dd + "일 오늘의 한마디"
document.getElementById("top-blue-bar-text").innerHTML = text;

function close_window() {
	  close();
  }

function q_close_window() {
	if (confirm("오늘의 한마디를 끝내시겠습니까?\n본 창은 테스트 때만 표시됩니다.")) {
	  close();
	}
  }