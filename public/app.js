//数字タイルの設定
myData = new Array(20);
myData[0] = ["0赤",1,0,"赤"];
myData[1] = ["0青",2,0,"青"];
myData[2] = ["1赤",3,1,"赤"];
myData[3] = ["1青",4,1,"青"];
myData[4] = ["2赤",5,2,"赤"];
myData[5] = ["2青",6,2,"青"];
myData[6] = ["3赤",7,3,"赤"];
myData[7] = ["3青",8,3,"青"];
myData[8] = ["4赤",9,4,"赤"];
myData[9] = ["4青",10,4,"青"];
myData[10] = ["5黄",11,5,"黄"];     
myData[11] = ["5黄",11,5,"黄"];
myData[12] = ["6赤",12,6,"赤"];
myData[13] = ["6青",13,6,"青"];
myData[14] = ["7赤",14,7,"赤"];
myData[15] = ["7青",15,7,"青"];
myData[16] = ["8赤",16,8,"赤"];
myData[17] = ["8青",17,8,"青"];
myData[18] = ["9赤",18,9,"赤"];
myData[19] = ["9青",19,9,"青"];
myFree = new Array(20);
for (i=0; i<20; i++) myFree[i] = myData[i];

var man = 1;

//一文字ずつsapnで囲む
  function spanWrap(msg) {
  const target = document.querySelector(msg);
  const nodes = target.childNodes;

  let convert = [];

  for (let node of nodes) {
    if (node.nodeType == 3) {//テキストの場合
      let text = node.textContent.replace(/\s+/g, '');
      text.split('').forEach((v) => {
        convert.push("<span>" + v + "</span>");
      });

    } else {//テキスト以外
      convert.push(node.outerHTML);
    }
  }
  target.innerHTML = convert.join("");
}

//数字色の変化
function colorChange(msg) {
	const number = document.querySelector(msg);
	const numberChild = number.getElementsByTagName('span');
	
          if(numberChild[1].textContent == "赤"){
	number.children[0].style.color = "red";
	}else if(numberChild[1].textContent == "青"){
	number.children[0].style.color = "blue";
	}else if(numberChild[1].textContent == "黄"){
	number.children[0].style.color = "yellow";
	}else{}
}

//数字ボタン押下時の処理
var not = 0;          
function ffff(f) {
    not++;
    var not1 = myData[f][0]; 
    if (not == 1) {
        document.getElementById("ans_boad_1").innerHTML = not1;
        spanWrap('#ans_boad_1');
        colorChange('#ans_boad_1');
    } else if (not == 2) {
        document.getElementById("ans_boad_2").innerHTML = not1;
        spanWrap('#ans_boad_2');
        colorChange('#ans_boad_2');
    } else if (not == 3) {
        document.getElementById("ans_boad_3").innerHTML = not1;
        spanWrap('#ans_boad_3');
        colorChange('#ans_boad_3');
    } else if (not == 4) {
        document.getElementById("ans_boad_4").innerHTML = not1;
        spanWrap('#ans_boad_4');
        colorChange('#ans_boad_4');
    } else if (not == 5) {
        document.getElementById("ans_boad_5").innerHTML = not1;
        spanWrap('#ans_boad_5');
        colorChange('#ans_boad_5');
    } else {
    }
}

//回答ボタン押下時の処理
function go(){
    var mydiv1 = document.getElementById("ans_boad_1").textContent;
    var mydiv2 = document.getElementById("ans_boad_2").textContent;
    var mydiv3 = document.getElementById("ans_boad_3").textContent;
    var mydiv4 = document.getElementById("ans_boad_4").textContent;
    var mydiv5 = document.getElementById("ans_boad_5").textContent;
    var mydiv6 = mydiv1 + mydiv2 + mydiv3 + mydiv4 + mydiv5;
    
var result = window.confirm("以下で回答します よろしいですか？\n"+mydiv6);
if(result) {
    //サーバへ回答を送信
    socket.emit("kurae", {
        text:mydiv6,
        text1:mydiv1,
        text2:mydiv2,
        text3:mydiv3,
        text4:mydiv4,
        text5:mydiv5,
        situgi:yes
});
jQuery(function($) {
$("*").css({pointerEvents: "none"});
            setTimeout(function(){
            $("*").css({pointerEvents: "auto"});
            },7000);
});
}else{
    jQuery(function($) {
            $('#answer_seat').stop().animate({
                left: "100%"
            },500);
});
answer_count++;
}
}

//クリアボタン押下時の処理
function bomb(){
    document.getElementById("ans_boad_1").textContent = "";
    document.getElementById("ans_boad_2").textContent = "";
    document.getElementById("ans_boad_3").textContent = "";
    document.getElementById("ans_boad_4").textContent = "";
    document.getElementById("ans_boad_5").textContent = "";
    not = 0;
}

//ペイントツール
window.addEventListener('load', () => {
    const canvas = document.querySelector('#canvas');
    const context = canvas.getContext('2d');
    
    function fitCanvasSize() {
        // Canvas のサイズをクライアントサイズに合わせる
        canvas.width = window.document.getElementById("pre_canvas").clientWidth;
        canvas.height = window.document.getElementById("pre_canvas").clientHeight;
        
        // Canvas 全体を塗りつぶし
        context.fillStyle = "rgb(191, 255, 191)";
        context.fillRect(0, 0, canvas.width, canvas.height);
        
        // Canvas サイズに合わせて矩形を描画
        var w = canvas.width;
        var h = canvas.height;
        context.fillStyle = "white";
        context.fillRect(10, 10, w, h);
    }

    fitCanvasSize();
    window.onresize = fitCanvasSize;

    const lastPosition = { x: null, y: null };
    let isDrag = false;
    //ペン色
    var gColor = 'black';
    // セレクトボックス
    var s = document.getElementById('color');
    s.addEventListener('change', changeColor, false);
//色の変更
function changeColor(){
    gColor = document.getElementById('color').value;
}

    // 絵を書く
    function draw(x, y) {
        if(!isDrag) {
            return;
        }
        context.lineCap = 'round'; // 丸みを帯びた線にする
        context.lineJoin = 'round'; // 丸みを帯びた線にする
        context.lineWidth = 2; // 線の太さ
        context.strokeStyle = gColor; // 線の色

        if (lastPosition.x === null || lastPosition.y === null) {
            // ドラッグ開始時の線の開始位置
            context.moveTo(x, y);
        } else {
            // ドラッグ中の線の開始位置
            context.moveTo(lastPosition.x, lastPosition.y);
        }
        context.lineTo(x, y);
        context.stroke();

        lastPosition.x = x;
        lastPosition.y = y;
    }
//全消し押下時の処理
    function clear() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        // Canvas 全体を塗りつぶし
        context.fillStyle = "rgb(191, 255, 191)";
        context.fillRect(0, 0, canvas.width, canvas.height);
        
        // Canvas サイズに合わせて矩形を描画
        var w = canvas.width;
        var h = canvas.height;
        context.fillStyle = "white";
        context.fillRect(10, 10, w, h);
    }
    function dragStart(event) {
        context.beginPath();

        isDrag = true;
    }
    // マウスのドラッグが終了したら、もしくはマウスがcanvas外に移動したら
    // isDragのフラグをfalseにしてdraw関数内でお絵かき処理が中断されるようにする
    function dragEnd(event) {
        // 線を書く処理の終了を宣言する
        context.closePath();
        isDrag = false;

        // 描画中に記録していた値をリセットする
        lastPosition.x = null;
        lastPosition.y = null;
    }

    // マウス操作やボタンクリック時のイベント処理を定義する
    function initEventHandler() {
        const clearButton = document.querySelector('#clear-button');
        clearButton.addEventListener('click', clear);

        canvas.addEventListener('mousedown', dragStart);
        canvas.addEventListener('mouseup', dragEnd);
        canvas.addEventListener('mouseout', dragEnd);
        canvas.addEventListener('mousemove', (event) => {
            // eventの中の値を見たい場合は以下のようにconsole.log(event)で、
            // デベロッパーツールのコンソールに出力させると良い
            // console.log(event);

            draw(event.layerX, event.layerY);
        });
    }

    // イベント処理を初期化する
    initEventHandler();
});

//自分自身の情報を入れる
const IAM = {
  token: null,  // トークン
  name: null    // 名前
};

//-------------------------------------
// STEP1. Socket.ioサーバへ接続
//-------------------------------------
const socket = io();

// トークンを発行されたら
socket.on("token", (data)=>{
  IAM.token = data.token;
});


//！！！！！！！！！！！！個人用！！！！！！！！！！！！
//数字タイルの表示・先攻
  socket.on("zyusin1",(msg)=>{
      var n_1 = document.querySelector('.ally_card_1'); n_1.innerHTML = msg.text1;
      var n_2 = document.querySelector('.ally_card_2'); n_2.innerHTML = msg.text2;
      var n_3 = document.querySelector('.ally_card_3'); n_3.innerHTML = msg.text3;
      var n_4 = document.querySelector('.ally_card_4'); n_4.innerHTML = msg.text4;
      var n_5 = document.querySelector('.ally_card_5'); n_5.innerHTML = msg.text5;
      var Sn_1 = document.querySelector('.start_card_ally_1'); Sn_1.innerHTML = msg.text1;
      var Sn_2 = document.querySelector('.start_card_ally_2'); Sn_2.innerHTML = msg.text2;
      var Sn_3 = document.querySelector('.start_card_ally_3'); Sn_3.innerHTML = msg.text3;
      var Sn_4 = document.querySelector('.start_card_ally_4'); Sn_4.innerHTML = msg.text4;
      var Sn_5 = document.querySelector('.start_card_ally_5'); Sn_5.innerHTML = msg.text5;
      spanWrap('.ally_card_1');spanWrap('.start_card_ally_1');
      spanWrap('.ally_card_2');spanWrap('.start_card_ally_2');
      spanWrap('.ally_card_3');spanWrap('.start_card_ally_3');
      spanWrap('.ally_card_4');spanWrap('.start_card_ally_4');
      spanWrap('.ally_card_5');spanWrap('.start_card_ally_5');
      colorChange('.ally_card_1');colorChange('.start_card_ally_1');
      colorChange('.ally_card_2');colorChange('.start_card_ally_2');
      colorChange('.ally_card_3');colorChange('.start_card_ally_3');
      colorChange('.ally_card_4');colorChange('.start_card_ally_4');
      colorChange('.ally_card_5');colorChange('.start_card_ally_5');
  });
//後攻
  socket.on("zyusin2",(msg)=>{
      var s_1 = document.querySelector('.ally_card_1'); s_1.innerHTML = msg.text1;
      var s_2 = document.querySelector('.ally_card_2'); s_2.innerHTML = msg.text2;
      var s_3 = document.querySelector('.ally_card_3'); s_3.innerHTML = msg.text3;
      var s_4 = document.querySelector('.ally_card_4'); s_4.innerHTML = msg.text4;
      var s_5 = document.querySelector('.ally_card_5'); s_5.innerHTML = msg.text5;
      var Ss_1 = document.querySelector('.start_card_ally_1'); Ss_1.innerHTML = msg.text1;
      var Ss_2 = document.querySelector('.start_card_ally_2'); Ss_2.innerHTML = msg.text2;
      var Ss_3 = document.querySelector('.start_card_ally_3'); Ss_3.innerHTML = msg.text3;
      var Ss_4 = document.querySelector('.start_card_ally_4'); Ss_4.innerHTML = msg.text4;
      var Ss_5 = document.querySelector('.start_card_ally_5'); Ss_5.innerHTML = msg.text5;
      spanWrap('.ally_card_1');spanWrap('.start_card_ally_1');
      spanWrap('.ally_card_2');spanWrap('.start_card_ally_2');
      spanWrap('.ally_card_3');spanWrap('.start_card_ally_3');
      spanWrap('.ally_card_4');spanWrap('.start_card_ally_4');
      spanWrap('.ally_card_5');spanWrap('.start_card_ally_5');
      colorChange('.ally_card_1');colorChange('.start_card_ally_1');
      colorChange('.ally_card_2');colorChange('.start_card_ally_2');
      colorChange('.ally_card_3');colorChange('.start_card_ally_3');
      colorChange('.ally_card_4');colorChange('.start_card_ally_4');
      colorChange('.ally_card_5');colorChange('.start_card_ally_5');
  });
  
//質問タイルの表示
    socket.on("hintgo",(stand)=>{
        question.innerHTML=stand;
    });
//モーダル用
    socket.on("hintgo-m",(stand)=>{
        hint.innerHTML=stand;
            modal.classList.add('hidden');
            mask.classList.add('hidden');
    });
//手番じゃなくする
    socket.on("tebanH",()=>{
    mask.classList.remove('hidden');
    });
    
//手番にする
    socket.on("teban",()=>{
    mask.classList.add('hidden');
    });
    
//相手に質問タイルの開示
    socket.on("kakuninA",(msg)=>{
     jQuery(function($) {
         //履歴へ質問・回答を張り付ける
         enemy_history();
         
        function enemy_history(){
        var memo_list = document.querySelector("#history_seat_write");
        var memo_li = document.createElement("p");
        memo_li.innerHTML = msg.text;
        memo_list.appendChild(memo_li);
        //疑似要素の発現（要素の上書き？）
        var sheets = document.styleSheets,
    sheet = sheets[sheets.length - 1];
    sheet.insertRule('#history_seat_write p:nth-child('+man+'):after { visibility:' + 'visible }', sheet.cssRules.length);
        }
        man++;
});
});

function bun() {
var bun = document.querySelector('#answer_word'); bun.innerHTML = "回　答";
}

//当たり
    socket.on("Atari",(msg)=>{
        bun();
      var a_1 = document.querySelector('#answer_1'); a_1.innerHTML = msg.text1;
      var a_2 = document.querySelector('#answer_2'); a_2.innerHTML = msg.text2;
      var a_3 = document.querySelector('#answer_3'); a_3.innerHTML = msg.text3;
      var a_4 = document.querySelector('#answer_4'); a_4.innerHTML = msg.text4;
      var a_5 = document.querySelector('#answer_5'); a_5.innerHTML = msg.text5;
      spanWrap('#answer_1');colorChange('#answer_1');
      spanWrap('#answer_2');colorChange('#answer_2');
      spanWrap('#answer_3');colorChange('#answer_3');
      spanWrap('#answer_4');colorChange('#answer_4');
      spanWrap('#answer_5');colorChange('#answer_5');
jQuery(function($) {
    $('#answer_seat').stop().animate({left: "100%"},500);
    $("#answer_word").animate({ marginLeft: '0%'  },200);
    $.each([ '#answer_1', '#answer_2', '#answer_3', '#answer_4', '#answer_5' ], function( index, value ) {
    $( value ).css({ zIndex: "900" }).delay(1500).delay( index * 200 ).animate({ marginLeft: '0%'  },200);});
    setTimeout(function(){
    $("#mask_A").removeClass( "hidden" );},5000);
});
    setTimeout(function(){
    var owari = document.querySelector('#answer_word'); owari.innerHTML = "あなたの勝ちです！更新します…";},7000);
    setTimeout(function(){
    window.location.href = 'https://dedede.paiza-user-lite.cloud:3000/';},10000);
});
    socket.on("AtariH",(msg)=>{
        bun();
      var a_1 = document.querySelector('#answer_1'); a_1.innerHTML = msg.text1;
      var a_2 = document.querySelector('#answer_2'); a_2.innerHTML = msg.text2;
      var a_3 = document.querySelector('#answer_3'); a_3.innerHTML = msg.text3;
      var a_4 = document.querySelector('#answer_4'); a_4.innerHTML = msg.text4;
      var a_5 = document.querySelector('#answer_5'); a_5.innerHTML = msg.text5;
      spanWrap('#answer_1');colorChange('#answer_1');
      spanWrap('#answer_2');colorChange('#answer_2');
      spanWrap('#answer_3');colorChange('#answer_3');
      spanWrap('#answer_4');colorChange('#answer_4');
      spanWrap('#answer_5');colorChange('#answer_5');
jQuery(function($) {
    $('#answer_seat').stop().animate({left: "100%"},500);
    $("#answer_word").animate({ marginLeft: '0%'  },200);
    $.each([ '#answer_1', '#answer_2', '#answer_3', '#answer_4', '#answer_5' ], function( index, value ) {
    $( value ).css({ zIndex: "900" }).delay(1500).delay( index * 200 ).animate({ marginLeft: '0%'  },200);});
    setTimeout(function(){
    $("#mask_A").removeClass( "hidden" );},5000);
});
    setTimeout(function(){
    var owari = document.querySelector('#answer_word'); owari.innerHTML = "あなたの負けです　更新します…";},7000);
    setTimeout(function(){
    window.location.href = 'https://dedede.paiza-user-lite.cloud:3000/';},10000);   
});
//外れ
    socket.on("Hazure",(msg)=>{
        bun();
      var a_1 = document.querySelector('#answer_1'); a_1.innerHTML = msg.text1;
      var a_2 = document.querySelector('#answer_2'); a_2.innerHTML = msg.text2;
      var a_3 = document.querySelector('#answer_3'); a_3.innerHTML = msg.text3;
      var a_4 = document.querySelector('#answer_4'); a_4.innerHTML = msg.text4;
      var a_5 = document.querySelector('#answer_5'); a_5.innerHTML = msg.text5;
      spanWrap('#answer_1');colorChange('#answer_1');
      spanWrap('#answer_2');colorChange('#answer_2');
      spanWrap('#answer_3');colorChange('#answer_3');
      spanWrap('#answer_4');colorChange('#answer_4');
      spanWrap('#answer_5');colorChange('#answer_5');
jQuery(function($) {
    $('#answer_seat').stop().animate({left: "100%"},500);
    $("#answer_word").animate({ marginLeft: '0%'  },200).delay(6500).animate({marginLeft: '150%'},200);
    $.each([ '#answer_1', '#answer_2', '#answer_3', '#answer_4', '#answer_5' ], function( index, value ) {
    $( value ).css({ zIndex: "900" }).delay(1500).delay( index * 100 ).animate({ marginLeft: '0%'  },200)
    .delay(5000).animate({marginLeft: '150%'},200);
    });
    setTimeout(function(){$("#mask_H").removeClass( "hidden" );},5000);
    setTimeout(function(){$("#mask_H").addClass( "hidden" );},6800);
});
    setTimeout(function(){
    var owari = document.querySelector('#answer_word'); owari.innerHTML = "残念！解答権が移ります……";},5000);
    enemy_history();
        function enemy_history(){
        var memo_list = document.querySelector("#history_seat_write");
        var memo_li = document.createElement("p");
        memo_li.innerHTML =  "("+[msg.situgi+1]+"問目"+ ":【回答】"+ msg.text +")";
        memo_list.appendChild(memo_li);
        //疑似要素の発現（要素の上書き？）
        var sheets = document.styleSheets,
    sheet = sheets[sheets.length - 1];
    sheet.insertRule('#history_seat_write p:nth-child('+man+'):before { visibility:' + 'visible }', sheet.cssRules.length);
        }
        man++;
        //質問回数のカウント
        yes++;
        couplus();
    });
    socket.on("HazureH",(msg)=>{
        bun();
      var a_1 = document.querySelector('#answer_1'); a_1.innerHTML = msg.text1;
      var a_2 = document.querySelector('#answer_2'); a_2.innerHTML = msg.text2;
      var a_3 = document.querySelector('#answer_3'); a_3.innerHTML = msg.text3;
      var a_4 = document.querySelector('#answer_4'); a_4.innerHTML = msg.text4;
      var a_5 = document.querySelector('#answer_5'); a_5.innerHTML = msg.text5;
      spanWrap('#answer_1');colorChange('#answer_1');
      spanWrap('#answer_2');colorChange('#answer_2');
      spanWrap('#answer_3');colorChange('#answer_3');
      spanWrap('#answer_4');colorChange('#answer_4');
      spanWrap('#answer_5');colorChange('#answer_5');
jQuery(function($) {
    $('#answer_seat').stop().animate({left: "100%"},500);
    $("#answer_word").animate({ marginLeft: '0%'  },200).delay(6500).animate({marginLeft: '150%'},200);
    $.each([ '#answer_1', '#answer_2', '#answer_3', '#answer_4', '#answer_5' ], function( index, value ) {
    $( value ).css({ zIndex: "900" }).delay(1500).delay( index * 100 ).animate({ marginLeft: '0%'  },200)
    .delay(5000).animate({marginLeft: '150%'},200);
    });
    setTimeout(function(){$("#mask_H").removeClass( "hidden" );},5000);
    setTimeout(function(){$("#mask_H").addClass( "hidden" );},6800);
});
    setTimeout(function(){
    var owari = document.querySelector('#answer_word'); owari.innerHTML = "解答権が移ります……";},5000);
    enemy_history();
        function enemy_history(){
        var memo_list = document.querySelector("#history_seat_write");
        var memo_li = document.createElement("p");
        memo_li.innerHTML =  "("+[msg.situgi+1]+"問目"+ ":【回答】"+ msg.text +")";
        memo_list.appendChild(memo_li);
        //疑似要素の発現（要素の上書き？）
        var sheets = document.styleSheets,
    sheet = sheets[sheets.length - 1];
    sheet.insertRule('#history_seat_write p:nth-child('+man+'):after { visibility:' + 'visible }', sheet.cssRules.length);
        }
        man++;
    });
    


//！！！！！！！！！！！！個人用！！！！！！！！！！！！


var yes = 0;
couplus();
//質問回数の確認
function couplus(){
    var counterIn;
    counterIn ="";
    counterIn += "質問回数：" + yes + "回";
    document.getElementById("counter").innerHTML = counterIn;
}
//----------------------------------------回答の作成----------------------------------
//s=後攻の持ち札・0~4
//n=先攻の持ち札・5~9

//2択タイル選択の準備
var selectJ1 = document.getElementById('select1');
var selectJ2 = document.getElementById('select2');
var modal = document.getElementById('modal');
var mask = document.getElementById('mask');
var answer001 = "";
var answer002 = "";

//回答）サーバからの返答を一元管理・排出
 socket.on("yusaburu0-b",(msg)=>{
     jQuery(function($) {
         var come1 = document.getElementById('enemy_comment');
         var come2 = come1.getElementsByTagName('p');
         come2[0].innerHTML=msg.text;
         
         //相手の発言のホップアップを出す
         enemy_voice();
         //履歴へ質問・回答を張り付ける
         enemy_history();
         
         function enemy_voice(){
        $('#enemy_comment').css({
            opacity: 0,
            visibility: "visible",
            top: "-30%"
        }).animate({
            opacity: 1,
            top: "0%",
            queue: true
        },500).delay(1000).animate({
            top: "-30%"
        },1000); 
        }
        
        
        function enemy_history(){
        var memo_list = document.querySelector("#history_seat_write");
        var memo_li = document.createElement("p");
        memo_li.innerHTML = msg.text;
        memo_list.appendChild(memo_li);
        //疑似要素の発現（要素の上書き？）
        var sheets = document.styleSheets,
    sheet = sheets[sheets.length - 1];
    sheet.insertRule('#history_seat_write p:nth-child('+man+'):before { visibility:' + 'visible }', sheet.cssRules.length);
        }
        man++;
});
        //質問回数のカウント
        yes++;
        couplus();
 });
 
//回答)共有タイルの相手への排出
 socket.on("yusaburu0-c",(msg)=>{
     jQuery(function($) {
         var come1 = document.getElementById('enemy_comment');
         var come2 = come1.getElementsByTagName('p');
         come2[0].innerHTML=msg.text;
         
         //相手の発言のホップアップを出す
         enemy_voice();
         //履歴へ質問・回答を張り付ける
         enemy_history();
         
         function enemy_voice(){
        $('#enemy_comment').css({
            opacity: 0,
            visibility: "visible",
            top: "-30%"
        }).animate({
            opacity: 1,
            top: "0%",
            queue: true
        },500).delay(1000).animate({
            top: "-30%"
        },1000); 
        }
        
        function enemy_history(){
        var memo_list = document.querySelector("#history_seat_write");
        var memo_li = document.createElement("p");
        memo_li.innerHTML = msg.text;
        memo_list.appendChild(memo_li);
        //疑似要素の発現（要素の上書き？）
        var sheets = document.styleSheets,
    sheet = sheets[sheets.length - 1];
    sheet.insertRule('#history_seat_write p:nth-child('+man+'):after { visibility:' + 'visible }', sheet.cssRules.length);
        }
        man++;
});
});

//赤の数の合計は？★
function hint0() {
    socket.emit("yusaburu0",{
        text:msg,
        situgi:yes,
        toi:"赤の数の合計は？"
    });
}

//5はどこ？★
function hint1() {
    socket.emit("yusaburu1",{
        text:msg,
        situgi:yes,
        toi:"5はどこ？"
    });
}

//奇数は何枚ある？
function hint2() {
    socket.emit("yusaburu2",{
        text:msg,
        situgi:yes,
        toi:"奇数は何枚ある？"
    });
}

//同じ数字タイルのペアは何組ある？
function hint3() {
    socket.emit("yusaburu3",{
        text:msg,
        situgi:yes,
        toi:"同じ数字タイルのペアは何組ある？"
    });
}

//6または7はどこ？
function hint4() {
    //どちらかを選択
    answer001 = "6";
    answer002 = "7";
    document.getElementById("select1").innerHTML = answer001; 
    document.getElementById("select2").innerHTML = answer002; 
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
    
    selectJ1.onclick =function() {
        modal.classList.add('hidden');
    socket.emit("yusaburu4-1",{
        text:msg,
        situgi:yes,
        toi:"6はどこ？"
    });
    }
    selectJ2.onclick =function() {
        modal.classList.add('hidden');
    socket.emit("yusaburu4-2",{
        text:msg,
        situgi:yes,
        toi:"7はどこ？"
    });
    }
}

//0はどこ？
function hint5() {
    socket.emit("yusaburu5",{
        text:msg,
        situgi:yes,
        toi:"0はどこ？"
    });
}

//1または2はどこ？
function hint6() {
    //どちらかを選択
    answer001 = "1";
    answer002 = "2";
    document.getElementById("select1").innerHTML = answer001; 
    document.getElementById("select2").innerHTML = answer002; 
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
    
    selectJ1.onclick =function() {
        modal.classList.add('hidden');
    socket.emit("yusaburu6-1",{
        text:msg,
        situgi:yes,
        toi:"1はどこ？"
    });
    }
    selectJ2.onclick =function() {
        modal.classList.add('hidden');
    socket.emit("yusaburu6-2",{
        text:msg,
        situgi:yes,
        toi:"2はどこ？"
    });
    }
}

//3または4はどこ？
function hint7() {
    //どちらかを選択
    answer001 = "3";
    answer002 = "4";
    document.getElementById("select1").innerHTML = answer001; 
    document.getElementById("select2").innerHTML = answer002; 
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
    
    selectJ1.onclick =function() {
        modal.classList.add('hidden');
    socket.emit("yusaburu7-1",{
        text:msg,
        situgi:yes,
        toi:"3はどこ？"
    });
    }
    selectJ2.onclick =function() {
        modal.classList.add('hidden');
    socket.emit("yusaburu7-2",{
        text:msg,
        situgi:yes,
        toi:"4はどこ？"
    });
    }
}

//8または9はどこ？
function hint8() {
    //どちらかを選択
    answer001 = "8";
    answer002 = "9";
    document.getElementById("select1").innerHTML = answer001; 
    document.getElementById("select2").innerHTML = answer002; 
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
    
    selectJ1.onclick =function() {
        modal.classList.add('hidden');
    socket.emit("yusaburu8-1",{
        text:msg,
        situgi:yes,
        toi:"8はどこ？"
    });
    }
    selectJ2.onclick =function() {
        modal.classList.add('hidden');
    socket.emit("yusaburu8-2",{
        text:msg,
        situgi:yes,
        toi:"9はどこ？"
    });
    }
}

//青の数の合計は？
function hint9() {
    socket.emit("yusaburu9",{
        text:msg,
        situgi:yes,
        toi:"青の数の合計は？"
    });
}

//小さいほうから3枚の数の合計は？
function hint10() {
    socket.emit("yusaburu10",{
        text:msg,
        situgi:yes,
        toi:"小さいほうから3枚の数の合計は？"
    });
}

//大きいほうから3枚の数の合計は？
function hint11() {
    socket.emit("yusaburu11",{
        text:msg,
        situgi:yes,
        toi:"大きいほうから3枚の数の合計は？"
    });
}

//中央の3枚の数の合計は？
function hint12() {
    socket.emit("yusaburu12",{
        text:msg,
        situgi:yes,
        toi:"中央の3枚の数の合計は？"
    });
}

//「共有」数字タイルすべての数の合計は？
function hint13() {
    socket.emit("yusaburu13",{
        text:msg,
        situgi:yes,
        toi:"「共有」数字タイルすべての数の合計は？"
    });
}

//偶数は何枚ある？（0も含む）
function hint14() {
    socket.emit("yusaburu14",{
        text:msg,
        situgi:yes,
        toi:"偶数は何枚ある？（0も含む）"
    });
}

//青の数字タイルは何枚ある？
function hint15() {
    socket.emit("yusaburu15",{
        text:msg,
        situgi:yes,
        toi:"青の数字タイルは何枚ある？"
    });
}

//赤の数字タイルは何枚ある？
function hint16() {
    socket.emit("yusaburu16",{
        text:msg,
        situgi:yes,
        toi:"赤の数字タイルは何枚ある？"
    });
}

//数が連続している数字タイルはどこ？
function hint17() {
    socket.emit("yusaburu17",{
        text:msg,
        situgi:yes,
        toi:"数が連続している数字タイルはどこ？"
    });
}

//同じ色がとなり合っている数字タイルはどこ？
function hint18() {
    socket.emit("yusaburu18",{
        text:msg,
        situgi:yes,
        toi:"同じ色がとなり合っている数字タイルはどこ？"
    });
}

//「共有」中央の数字タイルは5以下？4以上？
function hint19() {
    socket.emit("yusaburu19",{
        text:msg,
        situgi:yes,
        toi:"「共有」中央の数字タイルは5以下？4以上？"
    });
}

//「共有」数字タイルの最大の数から、最小の数を引いた数は？
function hint20() {
    socket.emit("yusaburu20",{
        text:msg,
        situgi:yes,
        toi:"「共有」数字タイルの最大の数から、最小の数を引いた数は？"
    });
}

//×
function hint21() { alert("質問タイルがありません"); }
function hint22() { alert("質問タイルがありません"); }
function hint23() { alert("質問タイルがありません"); }
function hint24() { alert("質問タイルがありません"); }
function hint25() { alert("質問タイルがありません"); }
function hint26() { alert("質問タイルがありません"); }



 
//----------------------------------------回答の作成----------------------------------


        function nyaonyao0(msg){
        var change_card = document.getElementById("question_0");
        change_card.value = msg.q;
        change_card.onclick = new Function("hint"+msg.s+"();");
}
        function nyaonyao1(msg){
        var change_card = document.getElementById("question_1");
        change_card.value = msg.q;
        change_card.onclick = new Function("hint"+msg.s+"();");
}
        function nyaonyao2(msg){
        var change_card = document.getElementById("question_2");
        change_card.value = msg.q;
        change_card.onclick = new Function("hint"+msg.s+"();");
}
        function nyaonyao3(msg){
        var change_card = document.getElementById("question_3");
        change_card.value = msg.q;
        change_card.onclick = new Function("hint"+msg.s+"();");
}
        function nyaonyao4(msg){
        var change_card = document.getElementById("question_4");
        change_card.value = msg.q;
        change_card.onclick = new Function("hint"+msg.s+"();");
}
        function nyaonyao5(msg){
        var change_card = document.getElementById("question_5");
        change_card.value = msg.q;
        change_card.onclick = new Function("hint"+msg.s+"();");
}


//2人揃った時の初動をつける・（質問タイルは後付けなのでここで移動操作等行う）
    socket.on("start_move",()=>{

jQuery(function($) {
        $.each([ '.ally_card_1', '.ally_card_2', '.ally_card_3', '.ally_card_4', '.ally_card_5' ], function( index, value ) {
        $( value ).delay(3400).delay( index * 200 ).animate({ marginTop: '0%'  },500);
    });
　　    $.each([ '.enemy_card_1', '.enemy_card_2', '.enemy_card_3', '.enemy_card_4', '.enemy_card_5' ], function( index, value ) {
        $( value ).delay(3400).delay( index * 200 ).animate({ bottom: '0%'  },500);
    });
        $.each([ '#question_0', '#question_1', '#question_2', '#question_3', '#question_4', '#question_5' ], function( index, value ) {
        $( value ).delay(5000).delay( index * 200 ).animate({ 
            top: '0%',
            left: '0%',
            right: '0%',
            bottom: '0%'
        },500,"easeOutCubic");
    });
    
    
    //各クエスチョン番号に合わせたタイルの変更
        $("#question_0").click(function(){
    var set0 = $(this).attr('value');
     $('#select1').off();
     $('#select2').off();
    if (set0 == "1または2はどこ？" || set0 == "3または4はどこ？" || set0 == "6または7はどこ？" || set0 == "8または9はどこ？"){
            $("#select1").click(function(){
            socket.emit("test_go_0");
            no_click();
            card_play0();
            setTimeout(function(){
            $("*").css({pointerEvents: "auto"});
        },4000);
            });
            $("#select2").click(function(){
            socket.emit("test_go_0");
            no_click();
            card_play0();
            setTimeout(function(){
            $("*").css({pointerEvents: "auto"});
        },4000);
            });
        } else if (set0 == "×") {
        } else {
            socket.emit("test_go_0");
            no_click();
            card_play0();
            setTimeout(function(){
            $("*").css({pointerEvents: "auto"});
        },4000);
        }
    });
    
        $("#question_1").click(function(){
    var set1 = $(this).attr('value');
     $('#select1').off();
     $('#select2').off();
    if (set1 == "1または2はどこ？" || set1 == "3または4はどこ？" || set1 == "6または7はどこ？" || set1 == "8または9はどこ？"){
            $("#select1").click(function(){
            socket.emit("test_go_1");
            no_click();
            card_play1();
            setTimeout(function(){
            $("*").css({pointerEvents: "auto"});
        },4000);
            });
            $("#select2").click(function(){
            socket.emit("test_go_1");
            no_click();
            card_play1();
            setTimeout(function(){
            $("*").css({pointerEvents: "auto"});
        },4000);
            });
        } else if (set1 == "×") {
        } else {
            socket.emit("test_go_1");
            no_click();
            card_play1();
            setTimeout(function(){
            $("*").css({pointerEvents: "auto"});
        },4000);
        }
    });
    
        $("#question_2").click(function(){
    var set2 = $(this).attr('value');
     $('#select1').off();
     $('#select2').off();
    if (set2 == "1または2はどこ？" || set2 == "3または4はどこ？" || set2 == "6または7はどこ？" || set2 == "8または9はどこ？"){
            $("#select1").click(function(){
            socket.emit("test_go_2");
            no_click();
            card_play2();
            setTimeout(function(){
            $("*").css({pointerEvents: "auto"});
        },4000);
            });
            $("#select2").click(function(){
            socket.emit("test_go_2");
            no_click();
            card_play2();
            setTimeout(function(){
            $("*").css({pointerEvents: "auto"});
        },4000);
            });
        } else if (set2 == "×") {
        } else {
            socket.emit("test_go_2");
            no_click();
            card_play2();
            setTimeout(function(){
            $("*").css({pointerEvents: "auto"});
        },4000);
        }
    });
    
        $("#question_3").click(function(){
    var set3 = $(this).attr('value');
     $('#select1').off();
     $('#select2').off();
    if (set3 == "1または2はどこ？" || set3 == "3または4はどこ？" || set3 == "6または7はどこ？" || set3 == "8または9はどこ？"){
            $("#select1").click(function(){
            socket.emit("test_go_3");
            no_click();
            card_play3();
            setTimeout(function(){
            $("*").css({pointerEvents: "auto"});
        },4000);
            });
            $("#select2").click(function(){
            socket.emit("test_go_3");
            no_click();
            card_play3();
            setTimeout(function(){
            $("*").css({pointerEvents: "auto"});
        },4000);
            });
        } else if (set3 == "×") {
        } else {
            socket.emit("test_go_3");
            no_click();
            card_play3();
            setTimeout(function(){
            $("*").css({pointerEvents: "auto"});
        },4000);
        }
    });
    
        $("#question_4").click(function(){
    var set4 = $(this).attr('value');
     $('#select1').off();
     $('#select2').off();
    if (set4 == "1または2はどこ？" || set4 == "3または4はどこ？" || set4 == "6または7はどこ？" || set4 == "8または9はどこ？"){
            $("#select1").click(function(){
            socket.emit("test_go_4");
            no_click();
            card_play4();
            setTimeout(function(){
            $("*").css({pointerEvents: "auto"});
        },4000);
            });
            $("#select2").click(function(){
            socket.emit("test_go_4");
            no_click();
            card_play4();
            setTimeout(function(){
            $("*").css({pointerEvents: "auto"});
        },4000);
            });
        } else if (set4 == "×") {
        } else {
            socket.emit("test_go_4");
            no_click();
            card_play4();
            setTimeout(function(){
            $("*").css({pointerEvents: "auto"});
        },4000);
        }
    });
    
        $("#question_5").click(function(){
    var set5 = $(this).attr('value');
     $('#select1').off();
     $('#select2').off();
    if (set5 == "1または2はどこ？" || set5 == "3または4はどこ？" || set5 == "6または7はどこ？" || set5 == "8または9はどこ？"){
            $("#select1").click(function(){
            socket.emit("test_go_5");
            no_click();
            card_play5();
            setTimeout(function(){
            $("*").css({pointerEvents: "auto"});
        },4000);
            });
            $("#select2").click(function(){
            socket.emit("test_go_5");
            no_click();
            card_play5();
            setTimeout(function(){
            $("*").css({pointerEvents: "auto"});
        },4000);
            });
        } else if (set5 == "×") {
        } else {
            socket.emit("test_go_5");
            no_click();
            card_play5();
            setTimeout(function(){
            $("*").css({pointerEvents: "auto"});
        },4000);
        }
    });
    
        function card_play0(){
            $("#question_0").css({ zIndex: "500" }).animate({left: "30.5%",top: "20%",},400)
           .delay(1500).animate({top:"-100%"},400).animate({top:"25%",left:"198%"},1)
        　　.delay(500).animate({top:"0%",left:"0%"},500,"easeOutCubic").animate({ zIndex: "0" },1);
        }
    
    function card_play1(){
        $("#question_1").css({ zIndex: "500" }).animate({top: "20%",},400)
            .delay(1500).animate({top:"-100%"},400).animate({top:"25%",left:"198%"},1)
            .delay(500).animate({top:"0%",left:"0%"},500,"easeOutCubic").animate({ zIndex: "0" },1);
    }
    
    function card_play2(){
        $("#question_2").css({ zIndex: "500" }).animate({left: "-30.5%",top: "20%",},400)
            .delay(1500).animate({top:"-100%"},400).animate({top:"25%",left:"198%"},1)
            .delay(500).animate({top:"0%",left:"0%"},500,"easeOutCubic").animate({ zIndex: "0" },1);
    }
    
    function card_play3(){
        $("#question_3").css({ zIndex: "500" }).animate({left: "30.5%",top: "-20%",},400)
            .delay(1500).animate({top:"-150%"},400).animate({top:"25%",left:"198%"},1)
            .delay(500).animate({top:"0%",left:"0%"},500,"easeOutCubic").animate({ zIndex: "0" },1);
    }
    
    function card_play4(){
        $("#question_4").css({ zIndex: "500" }).animate({top: "-20%",},400)
            .delay(1500).animate({top:"-150%"},400).animate({top:"25%",left:"198%"},1)
            .delay(500).animate({top:"0%",left:"0%"},500,"easeOutCubic").animate({ zIndex: "0" },1);
    }
    
    function card_play5(){
        $("#question_5").css({ zIndex: "500" }).animate({left: "-30.5%",top: "-20%",},400)
            .delay(1500).animate({top:"-150%"},400).animate({top:"25%",left:"198%"},1)
            .delay(500).animate({top:"0%",left:"0%"},500,"easeOutCubic").animate({ zIndex: "0" },1);
    }
            
        function no_click(){
        $("#question_0, #question_1, #question_2, #question_3, #question_4, #question_5").css({pointerEvents: "none"});
        }

socket.on("test_back_0",function(msg) {
setTimeout(nyaonyao0, 3000, msg);
});
socket.on("test_back_1",function(msg) {
setTimeout(nyaonyao1, 3000, msg);
});
socket.on("test_back_2",function(msg) {
setTimeout(nyaonyao2, 3000, msg);
});
socket.on("test_back_3",function(msg) {
setTimeout(nyaonyao3, 3000, msg);
});
socket.on("test_back_4",function(msg) {
setTimeout(nyaonyao4, 3000, msg);
});
socket.on("test_back_5",function(msg) {
setTimeout(nyaonyao5, 3000, msg);
});

    socket.on("ecm_0",()=>{
            $("#question_0").css({ zIndex: "500" }).animate({left: "30.5%",top: "20%",},400)
           .delay(1500).animate({top:"150%"},400).animate({top:"25%",left:"198%"},1)
        　　.delay(500).animate({top:"0%",left:"0%"},500,"easeOutCubic").animate({ zIndex: "0" },1);
    });
    socket.on("ecm_1",()=>{
        $("#question_1").css({ zIndex: "500" }).animate({top: "20%",},400)
            .delay(1500).animate({top:"150%"},400).animate({top:"25%",left:"198%"},1)
            .delay(500).animate({top:"0%",left:"0%"},500,"easeOutCubic").animate({ zIndex: "0" },1);
    });
    socket.on("ecm_2",()=>{
        $("#question_2").css({ zIndex: "500" }).animate({left: "-30.5%",top: "20%",},400)
            .delay(1500).animate({top:"150%"},400).animate({top:"25%",left:"198%"},1)
            .delay(500).animate({top:"0%",left:"0%"},500,"easeOutCubic").animate({ zIndex: "0" },1);
    });
    socket.on("ecm_3",()=>{
        $("#question_3").css({ zIndex: "500" }).animate({left: "30.5%",top: "-20%",},400)
            .delay(1500).animate({top:"150%"},400).animate({top:"25%",left:"198%"},1)
            .delay(500).animate({top:"0%",left:"0%"},500,"easeOutCubic").animate({ zIndex: "0" },1);
    });
    socket.on("ecm_4",()=>{
        $("#question_4").css({ zIndex: "500" }).animate({top: "-20%",},400)
            .delay(1500).animate({top:"150%"},400).animate({top:"25%",left:"198%"},1)
            .delay(500).animate({top:"0%",left:"0%"},500,"easeOutCubic").animate({ zIndex: "0" },1);
    });
    socket.on("ecm_5",()=>{
        $("#question_5").css({ zIndex: "500" }).animate({left: "-30.5%",top: "-20%",},400)
            .delay(1500).animate({top:"150%"},400).animate({top:"25%",left:"198%"},1)
            .delay(500).animate({top:"0%",left:"0%"},500,"easeOutCubic").animate({ zIndex: "0" },1);
    });

});


//手札をセット
jQuery(function($) {
    $.each([ '.start_card_enemy_1', '.start_card_enemy_2', '.start_card_enemy_3', '.start_card_enemy_4', '.start_card_enemy_5' ], function( index, value ) {
        $( value ).delay( index * 100 ).animate({ left: '0%'},300,"easeOutQuart")
        .delay(2000).animate({bottom: '200%'},300);
    });
    
    $.each([ '.start_card_ally_1', '.start_card_ally_2', '.start_card_ally_3', '.start_card_ally_4', '.start_card_ally_5' ], function( index, value ) {
        $( value ).delay( index * 100 ).animate({ left: '0%'},300,"easeOutQuart")
        .delay(2000).animate({top: '200%'},300);
    });
});
    });


//answerの動き
jQuery(function($) {
    var answer_count = 0;
    $(".answer").click(function() {
        answer_count++;
        if( ( answer_count % 2 ) != 0 ) {
            $('#answer_seat').stop().animate({
                left: "0%"
            },800,"easeOutCubic");
        } else if( ( answer_count % 2 ) == 0 ) {
            $('#answer_seat').stop().animate({
                left: "100%"
            },500);
        }else{}
    });
});

//メモ・履歴のボタン
jQuery(function($) {
//メモ
    var memo_count = 0;
    $(".memo").click(function() {
        memo_count++;
        if( ( memo_count % 2 ) != 0 ) {
            $('#pre_canvas').stop().animate({
        bottom: "0%"
    },800,"easeOutBounce");
        } else if( ( memo_count % 2 ) == 0 ) {
            $('#pre_canvas').stop().animate({
        bottom: "100%"
     },500);
        }else{}
});
//履歴
    var history_count = 0;
    $(".history").click(function(){
        history_count++;
        if( ( history_count % 2 ) != 0 ) {
            $('#history_seat').stop().animate({
                bottom: "0%"
            },800,"easeOutBounce");
        } else if( ( history_count % 2 ) == 0 ) {
            $('#history_seat').stop().animate({
                bottom: "100%"
            },500);
        }else{}
    });
});
//履歴の記載
jQuery(function($) {
    $(".ally_face").click(function() {
        var memo_list = document.querySelector("#history_seat_write");
        var memo_li = document.createElement("p");
        memo_li.innerHTML = "てすとてすと";
        memo_list.insertBefore(memo_li, memo_list.firstChild);
    });
});











