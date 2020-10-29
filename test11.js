exports.printBoo = function(id , msg , matti){
    var a11,b11,c11,z11;
    a11 ="";
    b11 ="";
    c11 ="";
    z11 ="";
if (id == matti[0]) {
    //質問の回答
    a11 += myCard[2][2];
    b11 += myCard[3][2];
    c11 += myCard[4][2];
}else if (id == matti[1]) {
    //質問の回答
    a11 += myCard[7][2];
    b11 += myCard[8][2];
    c11 += myCard[9][2];
} else {}
    //質問回答の表示
    z11 += "("+[msg.situgi+1]+"問目"+ ":大きいほうから3枚の数の合計は？" +")";
    z11 += parseInt(a11)+parseInt(b11)+parseInt(c11);
return z11;
};