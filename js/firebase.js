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

let keyArray = [];
let valueArray = [];

function getTodayData() {
    reload();

    var siteListref = firebase.database().ref('ItemArray').child(fulldate);
    siteListref.on('value', function(snapshot) {
        snapshot.forEach(function(trialSnapshot) {
            keyArray.push(trialSnapshot.key);
            valueArray.push(trialSnapshot.val());
            siteListref.off();
        });
        afterloadthings();
    }) 

}

getTodayData();

function reload(){
	getdate();
	gettime();
  }

function uploadmine(){
	reload();

    // 파이어베이스에 전송할 항목을 묶을 리스트 생성
    var sendArray = [];
    
    // 0번 항목 : 아이피
    sendArray.push(ipv4);
    
    // 1번 항목 준비 - 내용 가져옴
	var input = document.getElementById("input").value;
    console.log(input);
    // 1번 항목 : 사용자 입력 내용
    sendArray.push(input);
    
    // 2번 항목 : 하트 수 (기본 0으로 전송)
	sendArray.push(0);
    
    // 3번 항목 준비 - 나의 클릭한 것들 리스트 생성
	var Myclick = [];
    Myclick.push("");
    // 3번 항목 : 내가 클릭한 것들 (기본 빈리스트 전송)
	sendArray.push(Myclick);
    
    // 지금까지 항목을 모았던 sendArray를 전송
	firebase.database().ref("ItemArray/"+fulldate).child(fulltime).set(sendArray);
	
	console.log("ItemArray/"+fulldate+"/"+fulltime+"/"+sendArray);

	document.getElementById("inputs").style.display = "none";
	document.getElementById("terms").style.display = "none";
}

function afterloadthings(){
    inputAble();
    myinputget();
}

// 입력창과 이용약관의 보여주기 여부를 결정함
function inputAble(){
    ipArray = [];
    for (ip = 0; ip < valueArray.length; ip++){
        ipArray.push(valueArray[ip][0]);
    }
    console.log(ipArray);

    var isexit = ipArray.indexOf(ipv4);
    console.log(isexit);

    if (isexit == -1) {
        console.log("가능가능");
    } else {
        console.log("불가불가")
        document.getElementById("inputs").style.display = "none";
        document.getElementById("terms").style.display = "none";
    }
}

// 입력창과 이용약관 or 내가 쓴 글의 보여주기 여부의 교차

function playerEvent(){

}

function myinputget(){
    console.log(valueArray);
    ohanArray = [];
    for (oh = 0; oh < valueArray.length; oh++){
        ohanArray.push(valueArray[oh][1]);
    }
    console.log(ohanArray);

    for (an = 0; an < valueArray.length; an++){
        if (ipArray[an] == ipv4) {
            myohan = ohanArray[an];
            console.log(myohan);
            break;
        }
    }
    document.getElementById('myohantxt').innerHTML = myohan;
}

