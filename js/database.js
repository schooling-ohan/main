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

timer = setInterval(getTodayData, 200);

function getTodayData() {
    reload();
    if (document.getElementById("top-blue-bar-text").innerHTML != text) {
        document.getElementById("top-blue-bar-text").innerHTML = text;
    }
    keyArray = [];
    valueArray = [];

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



function reload(){
	getdate(false);
	gettime(false);
  }

function uploadmine(){
    var input = document.getElementById("input").value;
    document.getElementById("input").value = "";
    console.log(input);
    if ( ( input.trim() == "" ) || (input == null) ) {
        alert("오늘의 한마디를 입력해주세요");
    } else {
        reload();

        // 파이어베이스에 전송할 항목을 묶을 리스트 생성
        var sendArray = [];
    
        // 0번 항목 : 아이피
        sendArray.push(ip);
    
        // 1번 항목 준비 - 내용 가져옴
	
        //console.log(input);
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
	
	    //console.log("ItemArray/"+fulldate+"/"+fulltime+"/"+sendArray);

	    document.getElementById("inputs").style.display = "none";
        document.getElementById("terms").style.display = "none";

        location.reload();

    }
}

function afterloadthings(){
    inputAble();
    myinputget();
}

// 입력창과 이용약관의 보여주기 여부를 결정함
function inputAble(){
    ipArray = [];
    for (ips = 0; ips < valueArray.length; ips++){
        ipArray.push(valueArray[ips][0]);
    }
    //console.log(ipArray);

    var isexit = ipArray.indexOf(ip);
    //console.log(isexit);

    if (isexit == -1) {
        //console.log("가능가능");
        document.getElementById("inputs").style.display = "block";
        document.getElementById("terms").style.display = "block";
        document.getElementById("myohan").style.display = "none";
        document.getElementById("myheart").style.display = "none";
    } else {
        //console.log("불가불가")
        document.getElementById("inputs").style.display = "none";
        document.getElementById("terms").style.display = "none";
        document.getElementById("myohan").style.display = "flex";
        document.getElementById("myheart").style.display = "flex";
    }
        
}

// 입력창과 이용약관 or 내가 쓴 글의 보여주기 여부의 교차

function playerEvent(){

}

function myinputget(){
    //console.log(valueArray);
    ohanArray = [];
    heartArray = [];
    for (oh = 0; oh < valueArray.length; oh++){
        ohanArray.push(valueArray[oh][1]);
        heartArray.push(valueArray[oh][2]);
    }
    //console.log(ohanArray);

    for (an = 0; an < valueArray.length; an++){
        if (ipArray[an] == ip) {
            myohan = ohanArray[an];
            myheart = heartArray[an];
            //console.log(myohan);
            //console.log(myheart);
            if (!(document.getElementById("myHeartText").innerHTML.includes(myheart))){
                document.getElementById("myHeartText").innerHTML = myheart + "&nbsp";
            }
            break;
        }
    }
    if (document.getElementById('myohan').innerHTML != myohan) {
        document.getElementById('myohan').innerHTML = myohan;
    } 
}

function cookie(){
    console.log(document.cookie);
}

document.onload = setTimeout(friendsload, 1000);

function friendsload(){
    reload();
    friendskeyArray = [];
    friendsvalueArray = [];

    var siteListref = firebase.database().ref('ItemArray').child(fulldate);
    siteListref.on('value', function(snapshot) {
        snapshot.forEach(function(trialSnapshot) {
            friendskeyArray.push(trialSnapshot.key);
            friendsvalueArray.push(trialSnapshot.val());
            siteListref.off();
        });

        if (friendsvalueArray.length == 1) {
            if (document.cookie.includes("true") == true && document.cookie.includes(fulldate) == true){
                document.cookie = "true" + fulldate;
                location.reload();
            }  
        }

        reversevalue = friendsvalueArray.reverse();
        constantine = [];

        if (friendskeyArray.length % 2 == 0) {
            for (j = 0; j < reversevalue.length; j++) {
                if (j % 2 == 0){
                    k = j + 1
                    constantine.push('<div class="constantine"><hr class="friendLong"><div class="lefthings"><div class="line1"> <label class="nickname">' + reversevalue[j][0] + '</label><hr class="nick_report"> <a class="report" onclick="report(this.id);" style="cursor: pointer;" id="' + reversevalue[j][0] + '_r">신고</a></div><div class="line2"><div class="smallHeartCover" onclick="smallHeart(this.id);" style="cursor: pointer;" id="' + reversevalue[j][0] + '_s"><div class="smallHeart"></div></div> <label class="text" id="text">' + reversevalue[j][1] + '</label><div class="crown" onclick="crown(this.id);" style="cursor: pointer; pointer-events: none; display: none;" id="' + reversevalue[j][0] + '_c"></div><div class="bigHeartCover" onclick="bigHeart(this.id);" style="cursor: pointer;" id="' + reversevalue[j][0] + '_b"><div class="bigHeartText" id="' + reversevalue[j][0] + '_t"></div><div class="bigHeart"></div></div></div></div>');
                    constantine.push('<div class="righthings"><div class="line1"><label class="nickname">' + reversevalue[k][0] + '</label><hr class="nick_report"><a class="report" onclick="report(this.id);" style="cursor: pointer;" id="' + reversevalue[k][0] + '_r">신고</a></div><div class="line2"><div class="smallHeartCover" onclick="smallHeart(this.id);" style="cursor: pointer;" id="' + reversevalue[k][0] + '_s"><div class="smallHeart"></div></div><label class="text" id="text">' + reversevalue[k][1] + '</label><div class="crown" onclick="crown(this.id);" style="cursor: pointer; pointer-events: none; display: none;" id="' + reversevalue[k][0] + '_c"></div><div class="bigHeartCover" onclick="bigHeart(this.id);" style="cursor: pointer;" id="' + reversevalue[k][0] + '_b"><div class="bigHeartText" id="' + reversevalue[k][0] + '_t"></div><div class="bigHeart"></div></div></div></div></div>');
                }
            }
        } else if (friendskeyArray.length % 2 == 1) {
            for (j = 0; j < reversevalue.length - 1; j++) {
                if (j % 2 == 0 && reversevalue.length > 1){
                    k = j + 1
                    constantine.push('<div class="constantine"><hr class="friendLong"><div class="lefthings"><div class="line1"> <label class="nickname">' + reversevalue[j][0] + '</label><hr class="nick_report"> <a class="report" onclick="report(this.id);" style="cursor: pointer;" id="' + reversevalue[j][0] + '_r">신고</a></div><div class="line2"><div class="smallHeartCover" onclick="smallHeart(this.id);" style="cursor: pointer;" id="' + reversevalue[j][0] + '_s"><div class="smallHeart"></div></div> <label class="text" id="text">' + reversevalue[j][1] + '</label><div class="crown" onclick="crown(this.id);" style="cursor: pointer; pointer-events: none; display: none;" id="' + reversevalue[j][0] + '_c"></div><div class="bigHeartCover" onclick="bigHeart(this.id);" style="cursor: pointer;" id="' + reversevalue[j][0] + '_b"><div class="bigHeartText" id="' + reversevalue[j][0] + '_t"></div><div class="bigHeart"></div></div></div></div>');
                    constantine.push('<div class="righthings"><div class="line1"><label class="nickname">' + reversevalue[k][0] + '</label><hr class="nick_report"><a class="report" onclick="report(this.id);" style="cursor: pointer;" id="' + reversevalue[k][0] + '_r">신고</a></div><div class="line2"><div class="smallHeartCover" onclick="smallHeart(this.id);" style="cursor: pointer;" id="' + reversevalue[k][0] + '_s"><div class="smallHeart"></div></div><label class="text" id="text">' + reversevalue[k][1] + '</label><div class="crown" onclick="crown(this.id);" style="cursor: pointer; pointer-events: none; display: none;" id="' + reversevalue[k][0] + '_c"></div><div class="bigHeartCover" onclick="bigHeart(this.id);" style="cursor: pointer;" id="' + reversevalue[k][0] + '_b"><div class="bigHeartText" id="' + reversevalue[k][0] + '_t"></div><div class="bigHeart"></div></div></div></div></div>');
                }
            }
            last = reversevalue.length - 1;
            constantine.push('<div class="onlyconstantine"><hr class="friendLong"><div class="thing"><div class="line1"><label class="nickname">' + reversevalue[last][0] + '</label><hr class="nick_report"><a class="report" onclick="report(this.id);" style="cursor: pointer;" id="' + reversevalue[last][0] + '_r">신고</a></div><div class="line2"><div class="smallHeartCover" onclick="smallHeart(this.id);" style="cursor: pointer;" id="' + reversevalue[last][0] + '_s"><div class="smallHeart"></div></div><label class="text" id="text">' + reversevalue[last][1] + '</label><div class="crown" onclick="crown(this.id);" style="cursor: pointer; pointer-events: none; display: none;" id="' + reversevalue[last][0] + '_c"></div><div class="bigHeartCover" onclick="bigHeart(this.id);" style="cursor: pointer;" id="' + reversevalue[last][0] + '_b"><div class="bigHeartText" id="' + reversevalue[last][0] + '_t"></div><div class="bigHeart"></div></div></div></div></div>');
        }

        var flist = document.getElementById('friendslist').innerHTML.replace(/[0-9]/g, '');
        var flist = flist.replace(/display: none;/g, '');
        var flist = flist.replace(/display: inline-block;/g, '');

        var cs = constantine.join('').replace(/[0-9]/g, '');
        var cs = cs.replace(/display: none;/g, '');
        var cs = cs.replace(/display: inline-block;/g, '');

        if (flist != cs) {
            document.getElementById('friendslist').innerHTML = constantine.join('');
        }

        setTimeout(friendsheart, 1000);
    })
}


function friendsheart(){
    reload();
    heartkeyArray = [];
    heartvalueArray = [];

    var siteListref = firebase.database().ref('ItemArray').child(fulldate);
    siteListref.on('value', function(snapshot) {
        snapshot.forEach(function(trialSnapshot) {
            heartkeyArray.push(trialSnapshot.key);
            heartvalueArray.push(trialSnapshot.val());
            siteListref.off();
        });

        for (h = 0; h < heartvalueArray.length; h++){
            if (document.getElementById(heartvalueArray[h][0] + '_t').innerHTML != String(heartvalueArray[h][2])){
                document.getElementById(heartvalueArray[h][0] + '_t').innerHTML = String(heartvalueArray[h][2]);
            }
        }

        setTimeout(findbiggest, 1000);
    })
}

function findbiggest(){
    reload();
    biggestkeyArray = [];
    biggestvalueArray = [];
    biggestImsi = [];
    biggest = [];

    var siteListref = firebase.database().ref('ItemArray').child(fulldate);
    siteListref.on('value', function(snapshot) {
        snapshot.forEach(function(trialSnapshot) {
            biggestkeyArray.push(trialSnapshot.key);
            biggestvalueArray.push(trialSnapshot.val());
            siteListref.off();
        });
        for (b = 0; b < biggestvalueArray.length; b++){
            biggestImsi.push(biggestvalueArray[b][2]);
        }
        max = Math.max.apply(null, biggestImsi);

        for (bi = 0; bi < biggestvalueArray.length; bi++){
            if (biggestvalueArray[bi][2] == max){
                biggest.push(biggestvalueArray[bi][0]);
            }
        }

        for (bye = 0; bye < biggestvalueArray.length; bye++){
            if (!(biggest.includes(biggestvalueArray[bye][0] + '_c'))){
                document.getElementById(biggestvalueArray[bye][0] + '_c').style.display = "none";
            }
        }

        for (big = 0; big < biggest.length; big++){
            if (document.getElementById(biggest[big] + "_c").style.display != "inline-block"){
                document.getElementById(biggest[big] + "_c").style.display = "inline-block";
            }
        }
        
        setTimeout(friendsload, 1000);
    })
}


function bigHeart(id){
    alert("bigHeart : " + id);
}

function smallHeart(id){
    alert("smallHeart : " + id);
}

function report(id){
    alert("report : " + id);
}