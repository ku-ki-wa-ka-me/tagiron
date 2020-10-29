exports.printBoo = function(id , msg , matti){
    var a17,b17,c17,d17,e17,h17,i17,j17,k17,l17,z17;
    h17 ="";
    i17 ="";
    j17 ="";
    k17 ="";
    l17 = 0;
    z17 ="";
if (id == matti[0]) {
    a17 =myCard[0][2];
    b17 =myCard[1][2];
    c17 =myCard[2][2];
    d17 =myCard[3][2];
    e17 =myCard[4][2];
    //質問の回答
    if (a17+1 == b17){
        h17 += "-";
        l17 += 1;
    }else{
        h17 += " ";
    }
    if (b17+1 == c17){
        i17 += "-";
        l17 += 1;
    }else{
        i17 += " ";
    }
    if (c17+1 == d17){
        j17 += "-";
        l17 += 1;
    }else{
        j17 += " ";
    }
    if (d17+1 == e17){
        k17 += "-";
        l17 += 1;
    }else{
        k17 += " ";
    }
}else if (id == matti[1]) {
    a17 =myCard[5][2];
    b17 =myCard[6][2];
    c17 =myCard[7][2];
    d17 =myCard[8][2];
    e17 =myCard[9][2];
    //質問の回答
    if (a17+1 == b17){
        h17 += "-";
        l17 += 1;
    }else{
        h17 += " ";
    }
    if (b17+1 == c17){
        i17 += "-";
        l17 += 1;
    }else{
        i17 += " ";
    }
    if (c17+1 == d17){
        j17 += "-";
        l17 += 1;
    }else{
        j17 += " ";
    }
    if (d17+1 == e17){
        k17 += "-";
        l17 += 1;
    }else{
        k17 += " ";
    }
} else {}
    //質問回答の表示
    z17 += "("+[msg.situgi+1]+"問目"+ ":数が連続しているタイルはどこ？" +")";
    if (l17 > 0){
        z17 += "1" +h17+ "2" +i17+ "3" +j17+ "4" +k17+ "5";
    }else{
        z17 += "ありません";
    }
    
    return z17;
    
};








