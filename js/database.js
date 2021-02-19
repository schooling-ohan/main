//const { domainToUnicode } = require("url");

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

function afterloadthings(){
    inputAble();
    myinputget();
}

function reload(){
    getdate(false);
    gettime(false);
}

function uploadmine(){
    var input = document.getElementById("input").value;
    document.getElementById("input").value = "";
    console.log(input);

    if ((input.trim() == "") || (input == null)) {
        alert("오늘의 한마디를 입력해주세요");
    } else {
        reload();
        var sendArray = [];
        if (ip == '112.151.179.200'){
            sendArray.push('관리자')
        } else{
            sendArray.push(ip);
        }
        sendArray.push(input);
        sendArray.push(0);

        var Myclick = [];
        Myclick.push("");

        sendArray.push(Myclick);
        firebase.database().ref("ItemArray/"+fulldate).child(fulltime).set(sendArray);

        document.getElementById("inputs").style.display = "none";
        document.getElementById("terms").style.display = "none";
    }
}

function inputAble(){
    ipArray = [];
    for (ips = 0; ips < valueArray.length; ips++){
        ipArray.push(valueArray[ips][0]);
    }

    var isexit = ipArray.indexOf(ip);

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

function myinputget(){
    ohanArray = [];
    heartArray = [];

    for (oh = 0; oh < valueArray.length; oh++){
        ohanArray.push(valueArray[oh][1]);
        heartArray.push(valueArray[oh][2]);
    }

    for (an = 0; an < valueArray.length; an++){
        if (ipArray[an] == ip) {
            myohan = ohanArray[an];
            myheart = heartArray[an];

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

document.onload = setTimeout(friendsload, 500);

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
            
    if (friendsvalueArray.length > 1 && friendsvalueArray[0].join('') == friendsvalueArray[1].join('')){
        console.log('중복입니다');
        location.reload();
        return;
    }

        reversevalue = friendsvalueArray.reverse();
        constantine = [];

        if (friendskeyArray.length % 2 == 0) {
            for (j = 0; j < reversevalue.length; j++) {
                if (j % 2 == 0){
                    k = j + 1
                    constantine.push(`
                    <div class="constantine">
                    <hr class="friendLong">
                    <div class="lefthings">
                       <div class="line1">
                          <label class="nickname">` + reversevalue[j][0] + `</label>
                          <hr class="nick_report">
                          <a class="report" onclick="report(this.id);" style="cursor: pointer;" id="` + reversevalue[j][0] + `_r">신고</a>
                       </div>
                       <div class="line2">
                          <div class="smallHeartCover" onclick="smallHeart(this.id);" style="cursor: pointer;" id="` + reversevalue[j][0] + `_s">
                             <div class="smallHeart"></div>
                          </div>
                          <label class="text" id="text">` + reversevalue[j][1] + `</label>
                          <div class="crown" onclick="crown(this.id);" style="cursor: pointer; pointer-events: none; display: none;" id="` + reversevalue[j][0] + `_c"></div>
                          <div class="bigHeartCover" onclick="bigHeart(this.id);" style="cursor: pointer;" id="` + reversevalue[j][0] + `_b">
                             <div class="bigHeartText" id="` + reversevalue[j][0] + `_t"></div>
                             <svg class="heartSVG" data-name="heartSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" id="` + reversevalue[j][0] + `_g">
                             <path d="M339.38,233c49.85-1.33,93.69,15.82,130.28,47,25.5,21.75,42.17,18.39,67.87-.56C647,198.67,784.74,226.82,843.29,339.34,881.13,412.07,873.54,492,815.13,551.7,723.74,645.2,628.54,735,535.2,826.56c-22.34,21.92-42.9,20.85-64.87-.72C378.05,735.26,283.94,646.5,193.45,554.17c-56.85-58-68.76-128.58-35.43-203.78C192.7,272.15,256.76,237.57,339.38,233Z"></path>
                         </svg>
                          </div>
                       </div>
                    </div>
                    `);

                    constantine.push(`
                    <div class="righthings">
                       <div class="line1">
                          <label class="nickname">` + reversevalue[k][0] + `</label>
                          <hr class="nick_report">
                          <a class="report" onclick="report(this.id);" style="cursor: pointer;" id="` + reversevalue[k][0] + `_r">신고</a>
                       </div>
                       <div class="line2">
                          <div class="smallHeartCover" onclick="smallHeart(this.id);" style="cursor: pointer;" id="` + reversevalue[k][0] + `_s">
                             <div class="smallHeart"></div>
                          </div>
                          <label class="text" id="text">` + reversevalue[k][1] + `</label>
                          <div class="crown" onclick="crown(this.id);" style="cursor: pointer; pointer-events: none; display: none;" id="` + reversevalue[k][0] + `_c"></div>
                          <div class="bigHeartCover" onclick="bigHeart(this.id);" style="cursor: pointer;" id="` + reversevalue[k][0] + `_b">
                             <div class="bigHeartText" id="` + reversevalue[k][0] + `_t"></div>
                             <svg class="heartSVG" data-name="heartSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" id="` + reversevalue[k][0] + `_g">
                             <path d="M339.38,233c49.85-1.33,93.69,15.82,130.28,47,25.5,21.75,42.17,18.39,67.87-.56C647,198.67,784.74,226.82,843.29,339.34,881.13,412.07,873.54,492,815.13,551.7,723.74,645.2,628.54,735,535.2,826.56c-22.34,21.92-42.9,20.85-64.87-.72C378.05,735.26,283.94,646.5,193.45,554.17c-56.85-58-68.76-128.58-35.43-203.78C192.7,272.15,256.76,237.57,339.38,233Z"></path>
                         </svg>
                          </div>
                       </div>
                    </div>
                    </div>
                    `);
                }
            }
        } else if (friendskeyArray.length % 2 == 1) {
            for (j = 0; j < reversevalue.length - 1; j++) {
                if (j % 2 == 0 && reversevalue.length > 1){
                    k = j + 1
                    constantine.push(`
                    <div class="constantine">
                    <hr class="friendLong">
                    <div class="lefthings">
                       <div class="line1">
                          <label class="nickname">` + reversevalue[j][0] + `</label>
                          <hr class="nick_report">
                          <a class="report" onclick="report(this.id);" style="cursor: pointer;" id="` + reversevalue[j][0] + `_r">신고</a>
                       </div>
                       <div class="line2">
                          <div class="smallHeartCover" onclick="smallHeart(this.id);" style="cursor: pointer;" id="` + reversevalue[j][0] + `_s">
                             <div class="smallHeart"></div>
                          </div>
                          <label class="text" id="text">` + reversevalue[j][1] + `</label>
                          <div class="crown" onclick="crown(this.id);" style="cursor: pointer; pointer-events: none; display: none;" id="` + reversevalue[j][0] + `_c"></div>
                          <div class="bigHeartCover" onclick="bigHeart(this.id);" style="cursor: pointer;" id="` + reversevalue[j][0] + `_b">
                             <div class="bigHeartText" id="` + reversevalue[j][0] + `_t"></div>
                             <svg class="heartSVG" data-name="heartSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" id="` + reversevalue[j][0] + `_g">
                             <path d="M339.38,233c49.85-1.33,93.69,15.82,130.28,47,25.5,21.75,42.17,18.39,67.87-.56C647,198.67,784.74,226.82,843.29,339.34,881.13,412.07,873.54,492,815.13,551.7,723.74,645.2,628.54,735,535.2,826.56c-22.34,21.92-42.9,20.85-64.87-.72C378.05,735.26,283.94,646.5,193.45,554.17c-56.85-58-68.76-128.58-35.43-203.78C192.7,272.15,256.76,237.57,339.38,233Z"></path>
                         </svg>
                          </div>
                       </div>
                    </div>
                    `);

                    constantine.push(`
                    <div class="righthings">
                       <div class="line1">
                          <label class="nickname">` + reversevalue[k][0] + `</label>
                          <hr class="nick_report">
                          <a class="report" onclick="report(this.id);" style="cursor: pointer;" id="` + reversevalue[k][0] + `_r">신고</a>
                       </div>
                       <div class="line2">
                          <div class="smallHeartCover" onclick="smallHeart(this.id);" style="cursor: pointer;" id="` + reversevalue[k][0] + `_s">
                             <div class="smallHeart"></div>
                          </div>
                          <label class="text" id="text">` + reversevalue[k][1] + `</label>
                          <div class="crown" onclick="crown(this.id);" style="cursor: pointer; pointer-events: none; display: none;" id="` + reversevalue[k][0] + `_c"></div>
                          <div class="bigHeartCover" onclick="bigHeart(this.id);" style="cursor: pointer;" id="` + reversevalue[k][0] + `_b">
                             <div class="bigHeartText" id="` + reversevalue[k][0] + `_t"></div>
                             <svg class="heartSVG" data-name="heartSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" id="` + reversevalue[k][0] + `_g">
                             <path d="M339.38,233c49.85-1.33,93.69,15.82,130.28,47,25.5,21.75,42.17,18.39,67.87-.56C647,198.67,784.74,226.82,843.29,339.34,881.13,412.07,873.54,492,815.13,551.7,723.74,645.2,628.54,735,535.2,826.56c-22.34,21.92-42.9,20.85-64.87-.72C378.05,735.26,283.94,646.5,193.45,554.17c-56.85-58-68.76-128.58-35.43-203.78C192.7,272.15,256.76,237.57,339.38,233Z"></path>
                         </svg>
                          </div>
                       </div>
                    </div>
                    </div>
                    `);
                }
            }
            last = reversevalue.length - 1;
            constantine.push(`
            <div class="onlyconstantine">
               <hr class="friendLong">
               <div class="thing">
                  <div class="line1">
                     <label class="nickname">` + reversevalue[last][0] + `</label>
                     <hr class="nick_report">
                     <a class="report" onclick="report(this.id);" style="cursor: pointer;" id="` + reversevalue[last][0] + `_r">신고</a>
                  </div>
                  <div class="line2">
                     <div class="smallHeartCover" onclick="smallHeart(this.id);" style="cursor: pointer;" id="` + reversevalue[last][0] + `_s">
                        <div class="smallHeart"></div>
                     </div>
                     <label class="text" id="text">` + reversevalue[last][1] + `</label>
                     <div class="crown" onclick="crown(this.id);" style="cursor: pointer; pointer-events: none; display: none;" id="` + reversevalue[last][0] + `_c"></div>
                     <div class="bigHeartCover" onclick="bigHeart(this.id);" style="cursor: pointer;" id="` + reversevalue[last][0] + `_b">
                        <div class="bigHeartText" id="` + reversevalue[last][0] + `_t"></div>
                        <svg class="heartSVG" data-name="heartSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" id="` + reversevalue[last][0] + `_g">
                        <path d="M339.38,233c49.85-1.33,93.69,15.82,130.28,47,25.5,21.75,42.17,18.39,67.87-.56C647,198.67,784.74,226.82,843.29,339.34,881.13,412.07,873.54,492,815.13,551.7,723.74,645.2,628.54,735,535.2,826.56c-22.34,21.92-42.9,20.85-64.87-.72C378.05,735.26,283.94,646.5,193.45,554.17c-56.85-58-68.76-128.58-35.43-203.78C192.7,272.15,256.76,237.57,339.38,233Z"></path>
                    </svg>
                     </div>
                  </div>
               </div>
            </div>
            `);
        }

        var flist = document.getElementById('friendslist').innerHTML.replace(/[0-9]/g, '');
        var flist = flist.replace(/display: none;/g, '');
        var flist = flist.replace(/display: inline-block;/g, '');

        

        var cs = constantine.join('').replace(/[0-9]/g, '');
        var cs = cs.replace(/display: none;/g, '');
        var cs = cs.replace(/display: inline-block;/g, '');


        if (flist != cs) {
            document.getElementById('friendslist').innerHTML = constantine.join('');
            console.log(flist)
            console.log(cs)
        }

        var heartcountArray = [];

        for (h = 0; h < friendsvalueArray.length; h++){
            heartcountArray.push(friendsvalueArray[h][2])
            try {
                if (document.getElementById(friendsvalueArray[h][0] + '_t').innerHTML != String(friendsvalueArray[h][2])){
                    document.getElementById(friendsvalueArray[h][0] + '_t').innerHTML = String(friendsvalueArray[h][2]);
                    
                }
            }
            catch(err) {
                fload();
            }
        }

        biggestImsi = [];
        biggest = [];

        for (b = 0; b < friendsvalueArray.length; b++){
            biggestImsi.push(friendsvalueArray[b][2]);
        }
        max = Math.max.apply(null, biggestImsi);

        for (bi = 0; bi < friendsvalueArray.length; bi++){
            if (friendsvalueArray[bi][2] == max){
                biggest.push(friendsvalueArray[bi][0]);
            }
        }

        for (bye = 0; bye < friendsvalueArray.length; bye++){
            if (!(biggest.includes(friendsvalueArray[bye][0] + '_c'))){
                document.getElementById(friendsvalueArray[bye][0] + '_c').style.display = "none";
            }
        }

        for (big = 0; big < biggest.length; big++){
            if (document.getElementById(biggest[big] + "_c").style.display != "inline-block"){
                document.getElementById(biggest[big] + "_c").style.display = "inline-block";
            }
        }

        for (color = 0; color < friendsvalueArray.length; color++){
            var svgns = 'http://www.w3.org/2000/svg';
            var gradient = document.createElementNS(svg, 'linearGradient');
            var svg = document.createElementNS(svgns, 'svg');
            
            var persent = friendsvalueArray[color][2] / max * 100
            if (persent == NaN){
                var persent = 100;
            }
            var stops = [
                {
                    'color' : "#FF8174",
                    'offset' : '0%',
                    'opacity' : '1'
                }, {
                    'color' : "#FF8174",
                    'offset' : persent + '%',
                    'opacity' : '1'
                }, {
                    'color' : "#CCCCCC",
                    'offset' : persent + '%',
                    'opacity' : '1'
                }, {
                    'color' : "#CCCCCC",
                    'offset' : '100%',
                    'opacity' : '1'
                }
            ]

            for (i = 0, length = stops.length; i < length; i++){
                var stop = document.createElementNS(svg, 'stop')
                stop.setAttribute('offset', stops[i].offset)
                stop.setAttribute('stop-color', stops[i].color)
                stop.setAttribute('stop-opacity', stops[i].opacity)

                gradient.appendChild(stop)
            }
            
            gradient.id = 'lg' + friendsvalueArray[color][0]
            // gradient.setAttribute('x1', '0');
            // gradient.setAttribute('y1', '1');
            // gradient.setAttribute('x2', '0');
            // gradient.setAttribute('y2', '0');

            //document.getElementById(friendsvalueArray[color][0] + '_g').appendChild(gradient);
            //document.getElementById(friendsvalueArray[color][0] + '_g').setAttribute('fill','url(/#lg' + friendsvalueArray[color][0] + ')')
        }

        fload();
    })
}

function fload(){
    setTimeout(friendsload, 200);
}

document.onload = setTimeout(getyes(true), 500);

function getyes(bool) {
	var imyesdate = new Date();
		imyesdate.setDate(imyesdate.getDate() - 1);
		
	var year = imyesdate.getFullYear();
	var month = imyesdate.getMonth() + 1;
	var month = String(month).padStart(2, '0');
	var day = imyesdate.getDate();
	var day = String(day).padStart(2, '0');
	yesdate = year + "/" + month + "/" + day;

	if (bool == true){
		console.log("yesdate : " + yesdate);
    }
    
    yesterdaybest();
}

function yesterdaybest(){
    yeskeyArray = [];
    yesvalueArray = [];

    var siteListref = firebase.database().ref('ItemArray').child(yesdate);
    siteListref.on('value', function(snapshot) {
        snapshot.forEach(function(trialSnapshot) {
            yeskeyArray.push(trialSnapshot.key);
            yesvalueArray.push(trialSnapshot.val());
            siteListref.off();
        });

        yesbiggestImsi = [];
        yesbiggest = [];

        for (b = 0; b < yesvalueArray.length; b++){
            yesbiggestImsi.push(yesvalueArray[b][2]);
        }
        max = Math.max.apply(null, yesbiggestImsi);

        for (bi = 0; bi < yesvalueArray.length; bi++){
            if (yesvalueArray[bi][2] == max){
                yesbiggest.push(yesvalueArray[bi]);
            }
        }

        yesbsetlist = [];

        for (y = 0; y < yesbiggest.length; y++){
            yesbsetlist.push(`
            <div class="yestantine">
               <div class="lineA">
                  <div class="yescrown"></div>
                  <label class="yesnickname">` + yesbiggest[y][0] + `</label>
                  <div class="yeshearts">
                     <div class="yeshearttext">` + yesbiggest[y][2] + `</div>
                     <div class="yessmallHeartCover">
                        <div class="yessmallHeart"></div>
                     </div>
                  </div>
               </div>
               <div class="lineB"><label class="yestext">` + yesbiggest[y][1] + `</label></div>
               <hr class="yeslong">
            </div>
            `);
        }

        document.getElementById('yesterdayList').innerHTML = yesbsetlist.join('');
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