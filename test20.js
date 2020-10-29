exports.printBoo = function(id , msg , matti){
        var a20,b20,c20,d20,y20,z20;
    y20 ="";
    z20 ="";
if (id == matti[0]) {
    a20 = myCard[0][2];
    b20 = myCard[4][2];
    
    c20 = myCard[5][2];
    d20 = myCard[9][2];
}else if (id == matti[1]) {
    a20 = myCard[5][2];
    b20 = myCard[9][2];

    c20 = myCard[0][2];
    d20 = myCard[4][2];
} else {}
    //質問回答の表示
    z20 += "("+[msg.situgi+1]+"問目"+ ":(共)最大-最小=？" +")";
    z20 += parseInt(b20)-parseInt(a20);
    
    y20 += "("+[msg.situgi+1]+"問目"+ ":(共)最大-最小=？" +")";
    y20 += parseInt(d20)-parseInt(c20);
    
    return [y20 , z20];
    
};