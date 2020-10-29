exports.printBoo = function(id , msg , matti){
    var a19,b19,y19,z19;
    a19 ="";
    b19 ="";
    y19 ="";
    z19 ="";
if (id == matti[0]) {
    //質問の回答
    a19 += myCard[2][2];
    
    b19 += myCard[7][2];
}else if (id == matti[1]) {
    //質問の回答
    a19 += myCard[7][2];
    
    b19 += myCard[2][2];
} else {}
    //質問回答の表示
    z19 += "("+[msg.situgi+1]+"問目"+ ":(共)中央のタイルは4↓か5↑か？" +")";
    if (parseInt(a19) > 4 ){
        z19 += "5以上です";
    }else{
        z19 += "4以下です";
    }
    
    y19 += "("+[msg.situgi+1]+"問目"+ ":(共)中央のタイルは4↓か5↑か？" +")";
    if (parseInt(b19) > 4 ){
        y19 += "5以上です";
    }else{
        y19 += "4以下です";
    }
    
    return [y19 , z19];
    
};