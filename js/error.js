var isIE = /*@cc_on!@*/false || !!document.documentMode;

var html = document.getElementsByTagName("html")[0];

if (isIE == true) {
    html.innerHTML = '<link rel="stylesheet" href="./css/font.css"><div class="errorp"><h1 clsss="unsurrport"> 본 페이지는 인터넷 익스플로러에서 작동하지 않습니다</h1> <br><h3 class="useother"> 다음과 같은 브라우저를 사용해주세요</h3> <br><table><tbody><tr><td><img src="./assets/Browser-Icon/Chrome.png"></td><td><img src="./assets/Browser-Icon/Firefox.png"></td><td><img src="./assets/Browser-Icon/Opera.png"></td><td><img src="./assets/Browser-Icon/Safari.png"></td><td><img src="./assets/Browser-Icon/Edge.png"></td></tr><tr><td>Chrome</td><td>Firefox</td><td>Opera</td><td>Safari</td><td>Edge</td></tr></tbody></table></div><style>.errorp{font-family:NanumSquare_acB,Arial,sans-serif;border-radius:16px;padding:20px;text-align:center}.unsurrport{font-family:NanumSquare_acB,Arial,sans-serif}.useother{font-family:NanumSquare_acB,Arial,sans-serif}table{margin-left:50%;transform:translate(-50%)}img{width:80px;height:80px}table{border-spacing:30px}tr{text-align:center}td{font-family:NanumSquare_acB,Arial,sans-serif;font-size:17px}</style>'
}