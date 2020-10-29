exports.printBoo = function(id , msg , matti){
    var a18,b18,c18,d18,e18,h18,i18,j18,k18,z18;
    h18 ="";
    i18 ="";
    j18 ="";
    k18 ="";
    z18 ="";
if (id == matti[0]) {
    a18 =myCard[0][3];
    b18 =myCard[1][3];
    c18 =myCard[2][3];
    d18 =myCard[3][3];
    e18 =myCard[4][3];
    //質問の回答
    if (a18 == b18){
        h18 += "=";
    }else{
        h18 += " ";
    }
    if (b18 == c18){
        i18 += "=";
    }else{
        i18 += " ";
    }
    if (c18 == d18){
        j18 += "=";
    }else{
        j18 += " ";
    }
    if (d18 == e18){
        k18 += "=";
    }else{
        k18 += " ";
    }
}else if (id == matti[1]) {
    a18 =myCard[5][3];
    b18 =myCard[6][3];
    c18 =myCard[7][3];
    d18 =myCard[8][3];
    e18 =myCard[9][3];
    //質問の回答
    if (a18 == b18){
        h18 += "=";
    }else{
        h18 += " ";
    }
    if (b18 == c18){
        i18 += "=";
    }else{
        i18 += " ";
    }
    if (c18 == d18){
        j18 += "=";
    }else{
        j18 += " ";
    }
    if (d18 == e18){
        k18 += "=";
    }else{
        k18 += " ";
    }
} else {}
    //質問回答の表示
    z18 += "("+[msg.situgi+1]+"問目"+ ":同色が隣り合っているタイルはどこ？" +")";
    z18 += "1" +h18+ "2" +i18+ "3" +j18+ "4" +k18+ "5";
    
    return z18;
    
};







