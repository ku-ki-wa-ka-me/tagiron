//「共有」数字タイルすべての数の合計は？
exports.printBoo = function(id , msg , matti){
    var a13,b13,c13,d13,e13,h13,i13,j13,k13,l13,y13,z13;
    a13 ="";
    b13 ="";
    c13 ="";
    d13 ="";
    e13 ="";
    h13 ="";
    i13 ="";
    j13 ="";
    k13 ="";
    l13 ="";
    y13 ="";
    z13 ="";
if (id == matti[0]) {
    //質問の回答
    a13 += myCard[0][2];
    b13 += myCard[1][2];
    c13 += myCard[2][2];
    d13 += myCard[3][2];
    e13 += myCard[4][2];
    
    h13 += myCard[5][2];
    i13 += myCard[6][2];
    j13 += myCard[7][2];
    k13 += myCard[8][2];
    l13 += myCard[9][2];
}else if (id == matti[1]) {
    //質問の回答
    a13 += myCard[5][2];
    b13 += myCard[6][2];
    c13 += myCard[7][2];
    d13 += myCard[8][2];
    e13 += myCard[9][2];
    
    h13 += myCard[0][2];
    i13 += myCard[1][2];
    j13 += myCard[2][2];
    k13 += myCard[3][2];
    l13 += myCard[4][2];
} else {}
    //質問回答の表示
    z13 += "("+[msg.situgi+1]+"問目"+ ":(共)全ての合計は？" +")";
    z13 += parseInt(a13)+parseInt(b13)+parseInt(c13)+parseInt(d13)+parseInt(e13);
    
    y13 += "("+[msg.situgi+1]+"問目"+ ":(共)全ての合計は？" +")";
    y13 += parseInt(h13)+parseInt(i13)+parseInt(j13)+parseInt(k13)+parseInt(l13);
    
    return [y13 , z13];

};






