exports.printBoo = function(id , msg , matti){
    var a10,b10,c10,z10;
    a10 ="";
    b10 ="";
    c10 ="";
    z10 ="";
    if (id == matti[0]) {
    //質問の回答
    a10 += myCard[0][2];
    b10 += myCard[1][2];
    c10 += myCard[2][2];
}else if (id == matti[1]) {
    //質問の回答
    a10 += myCard[5][2];
    b10 += myCard[6][2];
    c10 += myCard[7][2];
} else {}
    //質問回答の表示
    z10 += "("+[msg.situgi+1]+"問目"+ ":小さいほうから3枚の数の合計は？" +")";
    z10 += parseInt(a10)+parseInt(b10)+parseInt(c10);
return z10;
};