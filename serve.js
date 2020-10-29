const crypto = require('crypto');
const app  = require("express")();
const http = require("http").createServer(app);
const io   = require("socket.io")(http);

//！！！！！！！！！個人用！！！！！！！！！！！
let matti = [];
let taiki = [];
var s1,s2,s3,s4,s5,n1,n2,n3,n4,n5;
var yesS = 0;

var stand;
function kaitou() {
    stand = ""; 
    //htmlへ表記：質問タイル
    for(i=0; i<6; i++){
stand += "<input id='question_" + i +"' type='button' value='"+myHint[i][0]+"' onclick='hint"+myHint[i][1]+"();'>";
    }
}

//手番の交代
function teban2(id){
if (id == matti[0]) {
    io.to(matti[0]).emit("tebanH");
    io.to(matti[1]).emit("teban");
}else if (id == matti[1]) {
    io.to(matti[1]).emit("tebanH");
    io.to(matti[0]).emit("teban");
} else {}
}
//相手へ質問タイルの開示
function kaiji(id,msg) {
    var zzz = "";
if (id == matti[0]) {
    zzz += "("+[msg.situgi+1]+"問目:"+ msg.toi +")";
    io.to(matti[1]).emit("kakuninA",{
        text:zzz
    });
}else if (id == matti[1]) {
    zzz += "("+[msg.situgi+1]+"問目:"+ msg.toi +")";
    io.to(matti[0]).emit("kakuninA",{
        text:zzz
    });
} else {}
}
//！！！！！！！！！個人用！！！！！！！！！！！

// HTMLやJSなどを配置するディレクトリ
const DOCUMENT_ROOT = __dirname + "/public";

/**
 * "/"にアクセスがあったらindex.htmlを返却
 */
app.get("/", (req, res)=>{
  res.sendFile(DOCUMENT_ROOT + "/index.html");
});
app.get("/:file", (req, res)=>{
  res.sendFile(DOCUMENT_ROOT + "/" + req.params.file);
});

/**
 * [イベント] ユーザーが接続
 */
io.on("connection", (socket)=>{
  
  //---------------------------------
  // ログイン
  //---------------------------------
  (()=>{
    // トークンを作成
    const token = makeToken(socket.id);

    // 本人にトークンを送付
    io.to(socket.id).emit("token", {token:token});
  })();

    let id = socket.id;
    matti.push(id);
  console.log("ユーザーが接続しました");
  console.log(matti.length);
  console.log(socket.id);
  
        socket.on('disconnect', () => {
        console.log('切断しました');
        matti.pop(id);
        console.log(matti.length);
    });


//二人そろった-----------------------------------------------------------------
  if (matti.length == 2  ) {
      console.log("整いました");
yesS = 0;
      //数字タイル、配牌の設定-------------------------------------------------------
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

//シャッフル(500回)
for (i=0; i<500; i++){ // 500回 myFree の内容をシャッフルする
    myA = Math.floor( Math.random() * 20 ); // 0～29 を決める
    myB = Math.floor( Math.random() * 20 ); // 0～29 を決める
    myBackup = myFree[myA];      // myFree の myA番目とmyB番目の内容を入れ替える
    myFree[myA] = myFree[myB];
    myFree[myB] = myBackup;
}

// myFreeの最初の10個を取り出す
myCard = new Array(5);
for (i=0; i<10; i++) myCard[i] = myFree[i]; 

//相手と自分の手札を配る
quiz();
function quiz() {
    //相手の
    s1 = ""; s2 = ""; s3 = ""; s4 = ""; s5 = "";  
    //並び替え
    for (i=0; i<4; i++){ // ５枚のカードを昇順に並べ替える。
        for (j=i+1; j<5; j++){
            if (myCard[i] > myCard[j]){  // 上の方がでかい？
                myBackup = myCard[i];     // 入れ替える
                myCard[i] = myCard[j];
                myCard[j] = myBackup;
            }
        }
    }
    //htmlへ表記：相手の
    s1 += myCard[0][0];
    s2 += myCard[1][0];
    s3 += myCard[2][0];
    s4 += myCard[3][0];
    s5 += myCard[4][0];

    //自分の
    n1 = ""; n2 = ""; n3 = ""; n4 = ""; n5 = ""; 
    //並び替え
    for (i=5; i<9; i++){ // 10枚のカードを昇順に並べ替える。
        for (j=i+1; j<10; j++){
            if (myCard[i] > myCard[j]){  // 上の方がでかい？
                myBackup = myCard[i];     // 入れ替える
                myCard[i] = myCard[j];
                myCard[j] = myBackup;
            }
        }
    }            
    //htmlへ表記：自分の
    n1 += myCard[5][0];
    n2 += myCard[6][0];
    n3 += myCard[7][0];
    n4 += myCard[8][0];
    n5 += myCard[9][0];
}
      
      //質問タイルの作成
      //質問タイルの設定
myHint = new Array(27);
myHint[0] = ["赤の数の合計は？",0];
myHint[1] = ["5はどこ？",1];
myHint[2] = ["奇数は何枚ある？",2];
myHint[3] = ["同じ数字タイルのペアは何組ある？",3];
myHint[4] = ["6または7はどこ？",4];
myHint[5] = ["0はどこ？",5];
myHint[6] = ["1または2はどこ？",6];
myHint[7] = ["3または4はどこ？",7];
myHint[8] = ["8または9はどこ？",8];
myHint[9] = ["青の数の合計は？",9];
myHint[10] = ["小さいほうから3枚の数の合計は？",10];
myHint[11] = ["大きいほうから3枚の数の合計は？",11];
myHint[12] = ["中央の3枚の数の合計は？",12];
myHint[13] = ["「共有」数字タイルすべての数の合計は？",13];
myHint[14] = ["偶数は何枚ある？（0も含む）",14];
myHint[15] = ["青の数字タイルは何枚ある？",15];
myHint[16] = ["赤の数字タイルは何枚ある？",16];
myHint[17] = ["数が連続している数字タイルはどこ？",17];
myHint[18] = ["同じ色がとなり合っている数字タイルはどこ？",18];
myHint[19] = ["「共有」中央の数字タイルは5以上？4以下？",19];
myHint[20] = ["「共有」数字タイルの最大の数から、最小の数を引いた数は？",20];
myHint[21] = ["×",21];
myHint[22] = ["×",22];
myHint[23] = ["×",23];
myHint[24] = ["×",24];
myHint[25] = ["×",25];
myHint[26] = ["×",26];

myHintB = new Array(21);
for (i=0; i<21; i++) myHintB[i] = myHint[i]

//シャッフル(500回)(質問タイル)
for (i=0; i<500; i++){ // 500回 myFree の内容をシャッフルする
    myC = Math.floor( Math.random() * 21 ); // 0～29 を決める
    myD = Math.floor( Math.random() * 21 ); // 0～29 を決める
    myBackup = myHint[myC];      // myFree の myA番目とmyB番目の内容を入れ替える
    myHint[myC] = myHint[myD];
    myHint[myD] = myBackup;
}

//質問タイルの表示、関数への移動
kaitou();
      
      //数字タイルの配布
    io.to(matti[0]).emit("zyusin1",{
        text1:n1,text2:n2,text3:n3,text4:n4,text5:n5
    });
    io.to(matti[1]).emit("zyusin2",{
        text1:s1,text2:s2,text3:s3,text4:s4,text5:s5
    });
    
//質問タイルの配布
    io.emit("hintgo" , stand);
//手番じゃない人の制限
    io.to(matti[1]).emit("tebanH");
    
//2人揃った時のスタートの初動
    io.emit("start_move");
  
    
    
  }
  
  
  
function enemy_move0(id) {
if (id == matti[0]) {
    io.to(matti[1]).emit("ecm_0");
}else if (id == matti[1]) {
    io.to(matti[0]).emit("ecm_0");
} else {}
}
function enemy_move1(id) {
if (id == matti[0]) {
    io.to(matti[1]).emit("ecm_1");
}else if (id == matti[1]) {
    io.to(matti[0]).emit("ecm_1");
} else {}
}
function enemy_move2(id) {
if (id == matti[0]) {
    io.to(matti[1]).emit("ecm_2");
}else if (id == matti[1]) {
    io.to(matti[0]).emit("ecm_2");
} else {}
}
function enemy_move3(id) {
if (id == matti[0]) {
    io.to(matti[1]).emit("ecm_3");
}else if (id == matti[1]) {
    io.to(matti[0]).emit("ecm_3");
} else {}
}
function enemy_move4(id) {
if (id == matti[0]) {
    io.to(matti[1]).emit("ecm_4");
}else if (id == matti[1]) {
    io.to(matti[0]).emit("ecm_4");
} else {}
}
function enemy_move5(id) {
if (id == matti[0]) {
    io.to(matti[1]).emit("ecm_5");
}else if (id == matti[1]) {
    io.to(matti[0]).emit("ecm_5");
} else {}
}

socket.on('test_go_0',()=>{
    io.emit("test_back_0",{
        q:myHint[0][0],
        s:myHint[0][1]
    });
    enemy_move0(id);
});
socket.on('test_go_1',()=>{
    io.emit("test_back_1",{
        q:myHint[1][0],
        s:myHint[1][1]
    });
    enemy_move1(id);
});
socket.on('test_go_2',()=>{
    io.emit("test_back_2",{
        q:myHint[2][0],
        s:myHint[2][1]
    });
    enemy_move2(id);
});
socket.on('test_go_3',()=>{
    io.emit("test_back_3",{
        q:myHint[3][0],
        s:myHint[3][1]
    });
    enemy_move3(id);
});
socket.on('test_go_4',()=>{
    io.emit("test_back_4",{
        q:myHint[4][0],
        s:myHint[4][1]
    });
    enemy_move4(id);
});
socket.on('test_go_5',()=>{
    io.emit("test_back_5",{
        q:myHint[5][0],
        s:myHint[5][1]
    });
    enemy_move5(id);
});
  
  
  
  //クライアントより回答を受領=正解かどうか確認
      socket.on('kurae', function(msg){
          //5つのカードを統合
          var s_ALL = s1 + s2 + s3 + s4 + s5;
          var n_ALL = n1 + n2 + n3 + n4 + n5;
          //正解不正解の確認
         if (id == matti[0]) {
                console.log("当たり："+s_ALL);
                console.log("回答　："+msg.text);
          if (msg.text == s_ALL) {
              console.log("正解！");
              io.to(matti[0]).emit("Atari" , msg);
              io.to(matti[1]).emit("AtariH", msg);
          }else{
              console.log("違うよ");
              io.to(matti[0]).emit("Hazure" , msg);
              io.to(matti[1]).emit("HazureH", msg);
              setTimeout(function(){teban2(id);},6500);
          }
            
         } else if (id == matti[1]) {
                console.log("当たり："+n_ALL);
        　if (msg.text == n_ALL) {
              console.log("正解！");
              io.to(matti[1]).emit("Atari" , msg);
              io.to(matti[0]).emit("AtariH", msg);
          }else{
              console.log("違うよ")
              io.to(matti[1]).emit("Hazure" , msg);
              io.to(matti[0]).emit("HazureH", msg);
              setTimeout(function(){teban2(id);},6500);
          }
             
         } else {
            console.log("誰やお前");
         }
    });

//----------------------------------------回答の作成----------------------------------
//s=後攻の持ち札・0~4
//n=先攻の持ち札・5~9

//赤の数の合計は？★
socket.on("yusaburu0",function(msg) {
var mod0 = require('./test0.js');
    //次の回答の表示
        for(i=0; i<6; i++) {
        if(myHint[i][0] == "赤の数の合計は？"){
            myBackup = myHint[i];
            myHint[i] = myHint[yesS+6];
            myHint[yesS+6] = myBackup;
            kaitou();
            yesS++;
        }
    }
        io.to(id).emit("yusaburu0-b",{
            text:mod0.printBoo(id , msg , matti)
        });
        kaiji(id,msg);
        teban2(id);
});

//5はどこ？★
socket.on("yusaburu1",function(msg) {
var mod1 = require('./test1.js');
    //次の回答の表示
        for(i=0; i<6; i++) {
        if(myHint[i][0] == "5はどこ？"){
            myBackup = myHint[i];
            myHint[i] = myHint[yesS+6];
            myHint[yesS+6] = myBackup;
            kaitou();
            yesS++;
        }
    }
        io.to(id).emit("yusaburu0-b",{
            text:mod1.printBoo(id , msg , matti)
        });
        kaiji(id,msg);
         teban2(id);
});

//奇数は何枚ある？
socket.on("yusaburu2",function(msg) { 
var mod2 = require('./test2.js');
    //次の回答の表示
        for(i=0; i<6; i++) {
        if(myHint[i][0] == "奇数は何枚ある？"){
            myBackup = myHint[i];
            myHint[i] = myHint[yesS+6];
            myHint[yesS+6] = myBackup;
            kaitou();
            yesS++;
        }
    }
        io.to(id).emit("yusaburu0-b",{
            text:mod2.printBoo(id , msg , matti)
        });
        kaiji(id,msg);
         teban2(id);
});
//同じ数字タイルのペアは何組ある？
socket.on("yusaburu3",function(msg) { 
var mod3 = require('./test3.js');
    //次の回答の表示
        for(i=0; i<6; i++) {
        if(myHint[i][0] == "同じ数字タイルのペアは何組ある？"){
            myBackup = myHint[i];
            myHint[i] = myHint[yesS+6];
            myHint[yesS+6] = myBackup;
            kaitou();
            yesS++;
        }
    }
        io.to(id).emit("yusaburu0-b",{
            text:mod3.printBoo(id , msg , matti)
        });
        kaiji(id,msg);
         teban2(id);
});
//6または7はどこ？★
socket.on("yusaburu4-1",function(msg) { 
var mod41 = require('./test4-1.js');
    //次の回答の表示
        for(i=0; i<6; i++) {
        if(myHint[i][0] == "6または7はどこ？"){
            myBackup = myHint[i];
            myHint[i] = myHint[yesS+6];
            myHint[yesS+6] = myBackup;
            kaitou();
            yesS++;
        }
    }
        io.to(id).emit("yusaburu0-b",{
            text:mod41.printBoo(id , msg , matti)
        });
        kaiji(id,msg);
         teban2(id);
});
socket.on("yusaburu4-2",function(msg) { 
var mod42 = require('./test4-2.js');
    //次の回答の表示
        for(i=0; i<6; i++) {
        if(myHint[i][0] == "6または7はどこ？"){
            myBackup = myHint[i];
            myHint[i] = myHint[yesS+6];
            myHint[yesS+6] = myBackup;
            kaitou();
            yesS++;
        }
    }
        io.to(id).emit("yusaburu0-b",{
            text:mod42.printBoo(id , msg , matti)
        });
        kaiji(id,msg);
         teban2(id);
});
//0はどこ？★
socket.on("yusaburu5",function(msg) { 
var mod5 = require('./test5.js');
    //次の回答の表示
        for(i=0; i<6; i++) {
        if(myHint[i][0] == "0はどこ？"){
            myBackup = myHint[i];
            myHint[i] = myHint[yesS+6];
            myHint[yesS+6] = myBackup;
            kaitou();
            yesS++;
        }
    }
        io.to(id).emit("yusaburu0-b",{
            text:mod5.printBoo(id , msg , matti)
        });
        kaiji(id,msg);
         teban2(id);
});
//1または2はどこ？★
socket.on("yusaburu6-1",function(msg) { 
var mod61 = require('./test6-1.js');
    //次の回答の表示
        for(i=0; i<6; i++) {
        if(myHint[i][0] == "1または2はどこ？"){
            myBackup = myHint[i];
            myHint[i] = myHint[yesS+6];
            myHint[yesS+6] = myBackup;
            kaitou();
            yesS++;
        }
    }
        io.to(id).emit("yusaburu0-b",{
            text:mod61.printBoo(id , msg , matti)
        });
        kaiji(id,msg);
         teban2(id);
});
socket.on("yusaburu6-2",function(msg) { 
var mod62 = require('./test6-2.js');
    //次の回答の表示
        for(i=0; i<6; i++) {
        if(myHint[i][0] == "1または2はどこ？"){
            myBackup = myHint[i];
            myHint[i] = myHint[yesS+6];
            myHint[yesS+6] = myBackup;
            kaitou();
            yesS++;
        }
    }
        io.to(id).emit("yusaburu0-b",{
            text:mod62.printBoo(id , msg , matti)
        });
        kaiji(id,msg);
         teban2(id);
});
//3または4はどこ？★
socket.on("yusaburu7-1",function(msg) { 
var mod71 = require('./test7-1.js');
    //次の回答の表示
        for(i=0; i<6; i++) {
        if(myHint[i][0] == "3または4はどこ？"){
            myBackup = myHint[i];
            myHint[i] = myHint[yesS+6];
            myHint[yesS+6] = myBackup;
            kaitou();
            yesS++;
        }
    }
        io.to(id).emit("yusaburu0-b",{
            text:mod71.printBoo(id , msg , matti)
        });
        kaiji(id,msg);
         teban2(id);
});
socket.on("yusaburu7-2",function(msg) { 
var mod72 = require('./test7-2.js');
    //次の回答の表示
        for(i=0; i<6; i++) {
        if(myHint[i][0] == "3または4はどこ？"){
            myBackup = myHint[i];
            myHint[i] = myHint[yesS+6];
            myHint[yesS+6] = myBackup;
            kaitou();
            yesS++;
        }
    }
        io.to(id).emit("yusaburu0-b",{
            text:mod72.printBoo(id , msg , matti)
        });
        kaiji(id,msg);
         teban2(id);
});
//8または9はどこ？★
socket.on("yusaburu8-1",function(msg) { 
var mod81 = require('./test8-1.js');
    //次の回答の表示
        for(i=0; i<6; i++) {
        if(myHint[i][0] == "8または9はどこ？"){
            myBackup = myHint[i];
            myHint[i] = myHint[yesS+6];
            myHint[yesS+6] = myBackup;
            kaitou();
            yesS++;
        }
    }
        io.to(id).emit("yusaburu0-b",{
            text:mod81.printBoo(id , msg , matti)
        });
        kaiji(id,msg);
         teban2(id);
});
socket.on("yusaburu8-2",function(msg) { 
var mod82 = require('./test8-2.js');
    //次の回答の表示
        for(i=0; i<6; i++) {
        if(myHint[i][0] == "8または9はどこ？"){
            myBackup = myHint[i];
            myHint[i] = myHint[yesS+6];
            myHint[yesS+6] = myBackup;
            kaitou();
            yesS++;
        }
    }
        io.to(id).emit("yusaburu0-b",{
            text:mod82.printBoo(id , msg , matti)
        });
        kaiji(id,msg);
         teban2(id);
});
//青の数の合計は？★
socket.on("yusaburu9",function(msg) { 
var mod9 = require('./test9.js');
    //次の回答の表示
        for(i=0; i<6; i++) {
        if(myHint[i][0] == "青の数の合計は？"){
            myBackup = myHint[i];
            myHint[i] = myHint[yesS+6];
            myHint[yesS+6] = myBackup;
            kaitou();
            yesS++;
        }
    }
        io.to(id).emit("yusaburu0-b",{
            text:mod9.printBoo(id , msg , matti)
        });
        kaiji(id,msg);
         teban2(id);
});
//小さいほうから3枚の数の合計は？★
socket.on("yusaburu10",function(msg) { 
var mod10 = require('./test10.js');
    for(i=0; i<6; i++) {
        if(myHint[i][0] == "小さいほうから3枚の数の合計は？"){
            myBackup = myHint[i];
            myHint[i] = myHint[yesS+6];
            myHint[yesS+6] = myBackup;
            kaitou();
            yesS++;
        }
    }
        //クライアントへ情報を送信
        io.to(id).emit("yusaburu0-b",{
            text:mod10.printBoo(id , msg , matti)
        });
        kaiji(id,msg);
         teban2(id);
});
//大きいほうから3枚の数の合計は？★
socket.on("yusaburu11",function(msg) { 
var mod11 = require('./test11.js');
    //次の質問の表示（●中を変更）
        for(i=0; i<6; i++) {
        if(myHint[i][0] == "大きいほうから3枚の数の合計は？"){
            myBackup = myHint[i];
            myHint[i] = myHint[yesS+6];
            myHint[yesS+6] = myBackup;
            kaitou();
            yesS++;
        }
    }
        io.to(id).emit("yusaburu0-b",{
            text:mod11.printBoo(id , msg , matti)
        });
        kaiji(id,msg);
         teban2(id);
});
//中央の3枚の数の合計は？★
socket.on("yusaburu12",function(msg) {
var mod12 = require('./test12.js');
        //次の質問の表示（yes＝msg.situgi）
        for(i=0; i<6; i++) {
        if(myHint[i][0] == "中央の3枚の数の合計は？"){
            myBackup = myHint[i];
            myHint[i] = myHint[yesS+6];
            myHint[yesS+6] = myBackup;
            kaitou();
            yesS++;
        }
    }
        io.to(id).emit("yusaburu0-b",{
            text:mod12.printBoo(id , msg , matti)
        });
        kaiji(id,msg);
         teban2(id);
});
//「共有」数字タイルすべての数の合計は？★
socket.on("yusaburu13",function(msg) { 
var mod13 = require('./test13.js');
    //次の質問の表示（yes＝msg.situgi）
        for(i=0; i<6; i++) {
        if(myHint[i][0] == "「共有」数字タイルすべての数の合計は？"){
            myBackup = myHint[i];
            myHint[i] = myHint[yesS+6];
            myHint[yesS+6] = myBackup;
            kaitou();
            yesS++;
        }
    }
if (id == matti[0]) {
        io.to(matti[0]).emit("yusaburu0-b",{
            text:mod13.printBoo(id , msg , matti)[1]
        });
        io.to(matti[1]).emit("yusaburu0-c",{
            text:mod13.printBoo(id , msg , matti)[0]
        });
}else if (id == matti[1]) {
        io.to(matti[1]).emit("yusaburu0-b",{
            text:mod13.printBoo(id , msg , matti)[1]
        });
        io.to(matti[0]).emit("yusaburu0-c",{
            text:mod13.printBoo(id , msg , matti)[0]
        });     
} else {}
        teban2(id);
});
//偶数は何枚ある？（0も含む）★★
socket.on("yusaburu14",function(msg) { 
var mod14 = require('./test14.js');
    //次の質問の表示（yes＝msg.situgi）
        for(i=0; i<6; i++) {
        if(myHint[i][0] == "偶数は何枚ある？（0も含む）"){
            myBackup = myHint[i];
            myHint[i] = myHint[yesS+6];
            myHint[yesS+6] = myBackup;
            kaitou();
            yesS++;
        }
    }
        io.to(id).emit("yusaburu0-b",{
            text:mod14.printBoo(id , msg , matti)
        });
        kaiji(id,msg);
         teban2(id);

});
//青の数字タイルは何枚ある？★★
socket.on("yusaburu15",function(msg) { 
var mod15 = require('./test15.js');
    //次の質問の表示（yes＝msg.situgi）
        for(i=0; i<6; i++) {
        if(myHint[i][0] == "青の数字タイルは何枚ある？"){
            myBackup = myHint[i];
            myHint[i] = myHint[yesS+6];
            myHint[yesS+6] = myBackup;
            kaitou();
            yesS++;
        }
    }
        io.to(id).emit("yusaburu0-b",{
            text:mod15.printBoo(id , msg , matti)
        });
        kaiji(id,msg);
         teban2(id);
});
//赤の数字タイルは何枚ある？★★
socket.on("yusaburu16",function(msg) { 
var mod16 = require('./test16.js');
    //次の質問の表示（yes＝msg.situgi）
        for(i=0; i<6; i++) {
        if(myHint[i][0] == "赤の数字タイルは何枚ある？"){
            myBackup = myHint[i];
            myHint[i] = myHint[yesS+6];
            myHint[yesS+6] = myBackup;
            kaitou();
            yesS++;
        }
    }
        io.to(id).emit("yusaburu0-b",{
            text:mod16.printBoo(id , msg , matti)
        });
        kaiji(id,msg);
         teban2(id);
});
//数が連続している数字タイルはどこ？★★
socket.on("yusaburu17",function(msg) { 
var mod17 = require('./test17.js');
    //次の質問の表示（yes＝msg.situgi）
        for(i=0; i<6; i++) {
        if(myHint[i][0] == "数が連続している数字タイルはどこ？"){
            myBackup = myHint[i];
            myHint[i] = myHint[yesS+6];
            myHint[yesS+6] = myBackup;
            kaitou();
            yesS++;
        }
    }
        io.to(id).emit("yusaburu0-b",{
            text:mod17.printBoo(id , msg , matti)
        });
        kaiji(id,msg);
         teban2(id);
});
//同じ色がとなり合っている数字タイルはどこ？★★
socket.on("yusaburu18",function(msg) { 
var mod18 = require('./test18.js');
    //次の質問の表示（yes＝msg.situgi）
        for(i=0; i<6; i++) {
        if(myHint[i][0] == "同じ色がとなり合っている数字タイルはどこ？"){
            myBackup = myHint[i];
            myHint[i] = myHint[yesS+6];
            myHint[yesS+6] = myBackup;
            kaitou();
            yesS++;
        }
    }
        io.to(id).emit("yusaburu0-b",{
            text:mod18.printBoo(id , msg , matti)
        });
        kaiji(id,msg);
         teban2(id);
});
//「共有」中央の数字タイルは5以上？4以下？★★
socket.on("yusaburu19",function(msg) { 
var mod19 = require('./test19.js');
    //次の質問の表示（yes＝msg.situgi）
        for(i=0; i<6; i++) {
        if(myHint[i][0] == "「共有」中央の数字タイルは5以上？4以下？"){
            myBackup = myHint[i];
            myHint[i] = myHint[yesS+6];
            myHint[yesS+6] = myBackup;
            kaitou();
            yesS++;
        }
    }
if (id == matti[0]) {
        io.to(matti[0]).emit("yusaburu0-b",{
            text:mod19.printBoo(id , msg , matti)[1]
        });
        io.to(matti[1]).emit("yusaburu0-c",{
            text:mod19.printBoo(id , msg , matti)[0]
        });
}else if (id == matti[1]) {
        io.to(matti[1]).emit("yusaburu0-b",{
            text:mod19.printBoo(id , msg , matti)[1]
        });
        io.to(matti[0]).emit("yusaburu0-c",{
            text:mod19.printBoo(id , msg , matti)[0]
        });     
} else {}
        teban2(id);
});
//「共有」数字タイルの最大の数から、最小の数を引いた数は？★★
socket.on("yusaburu20",function(msg) { 
var mod20 = require('./test20.js');
    //次の質問の表示（yes＝msg.situgi）
        for(i=0; i<6; i++) {
        if(myHint[i][0] == "「共有」数字タイルの最大の数から、最小の数を引いた数は？"){
            myBackup = myHint[i];
            myHint[i] = myHint[yesS+6];
            myHint[yesS+6] = myBackup;
            kaitou();
            yesS++;
        }
    }
if (id == matti[0]) {
        io.to(matti[0]).emit("yusaburu0-b",{
            text:mod20.printBoo(id , msg , matti)[1]
        });
        io.to(matti[1]).emit("yusaburu0-c",{
            text:mod20.printBoo(id , msg , matti)[0]
        });
}else if (id == matti[1]) {
        io.to(matti[1]).emit("yusaburu0-b",{
            text:mod20.printBoo(id , msg , matti)[1]
        });
        io.to(matti[0]).emit("yusaburu0-c",{
            text:mod20.printBoo(id , msg , matti)[0]
        });     
} else {}
        teban2(id);
});

});

/**
 * 3000番でサーバを起動する
 */
http.listen(3000, ()=>{
  console.log("listening on *:3000");
});

/**
 * トークンを作成する
 *
 * @param  {string} id - socket.id
 * @return {string}
 */
function makeToken(id){
  const str = "aqwsedrftgyhujiko" + id;
  return( crypto.createHash("sha1").update(str).digest('hex') );
}