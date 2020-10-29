exports.printBoo = function(id , msg , matti){
    var a12,b12,c12,z12;
    a12 ="";
    b12 ="";
    c12 ="";
    z12 ="";
if (id == matti[0]) {
    //質問の回答
    a12 += myCard[1][2];
    b12 += myCard[2][2];
    c12 += myCard[3][2];
}else if (id == matti[1]) {
    //質問の回答
    a12 += myCard[6][2];
    b12 += myCard[7][2];
    c12 += myCard[8][2];
} else {}
    //質問回答の表示
    z12 += "("+[msg.situgi+1]+"問目"+ ":中央の3枚の数の合計は？" +")";
    z12 += parseInt(a12)+parseInt(b12)+parseInt(c12);
    
    return z12;
};