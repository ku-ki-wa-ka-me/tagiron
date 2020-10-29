exports.printBoo = function(id , msg , matti){
    var a3,b3,c3,d3,e3,h3,i3,j3,k3,z3;
    h3 ="";
    i3 ="";
    j3 ="";
    k3 ="";
    z3 ="";
if (id == matti[0]) {
    a3 =myCard[0][2];
    b3 =myCard[1][2];
    c3 =myCard[2][2];
    d3 =myCard[3][2];
    e3 =myCard[4][2];
    //質問の回答
    if (a3 == b3){
        h3 += 1;
    }else{
        h3 += 0;
    }
    if (b3 == c3){
        i3 += 1;
    }else{
        i3 += 0;
    }
    if (c3 == d3){
        j3 += 1;
    }else{
        j3 += 0;
    }
    if (d3 == e3){
        k3 += 1;
    }else{
        k3 += 0;
    }
}else if (id == matti[1]) {
    a3 =myCard[5][2];
    b3 =myCard[6][2];
    c3 =myCard[7][2];
    d3 =myCard[8][2];
    e3 =myCard[9][2];
    //質問の回答
    if (a3 == b3){
        h3 += 1;
    }else{
        h3 += 0;
    }
    if (b3 == c3){
        i3 += 1;
    }else{
        i3 += 0;
    }
    if (c3 == d3){
        j3 += 1;
    }else{
        j3 += 0;
    }
    if (d3 == e3){
        k3 += 1;
    }else{
        k3 += 0;
    }
} else {}
    //質問回答の表示
    z3 += "("+[msg.situgi+1]+"問目"+ ":同じ数字タイルのペアは何組ある？" +")";
    if (parseInt(h3)+parseInt(i3)+parseInt(j3)+parseInt(k3) > 0){
     z3 += parseInt(h3)+parseInt(i3)+parseInt(j3)+parseInt(k3);
     z3 += "組あります";
    }else{
     z3 += "ありません";   
    }
return z3;
};









