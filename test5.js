exports.printBoo = function(id , msg , matti){
    var a5,b5,c5,d5,e5,z5;
    a5 ="";
    b5 ="";
    c5 ="";
    d5 ="";
    e5 ="";
    z5 ="";
if (id == matti[0]) {
    //質問の回答
    for (i=0; i<5; i++){
        if (myCard[i][0] == "0赤" ||　myCard[i][0] == "0青"){
            if (i == 0) {
                a5 += "0";
            }else if (i == 1){
                b5 += "0";
            }else if (i == 2){
                c5 += "0";
            }else if (i == 3){
                d5 += "0";
            }else if (i == 4){
                e5 += "0";
            }else{
            }
        } else {
            if (i == 0) {
                a5 += "×";
            }else if (i == 1){
                b5 += "×";
            }else if (i == 2){
                c5 += "×";
            }else if (i == 3){
                d5 += "×";
            }else if (i == 4){
                e5 += "×";
            }else{
            }
        }
    }
}else if (id == matti[1]) {
    //質問の回答
    for (i=5; i<10; i++){
        if (myCard[i][0] == "0赤" ||　myCard[i][0] == "0青"){
            if (i == 5) {
                a5 += "0";
            }else if (i == 6){
                b5 += "0";
            }else if (i == 7){
                c5 += "0";
            }else if (i == 8){
                d5 += "0";
            }else if (i == 9){
                e5 += "0";
            }else{
            }
        } else {
            if (i == 5) {
                a5 += "×";
            }else if (i == 6){
                b5 += "×";
            }else if (i == 7){
                c5 += "×";
            }else if (i == 8){
                d5 += "×";
            }else if (i == 9){
                e5 += "×";
            }else{
            }
        }
    }
} else {}
    //質問回答の表示
    z5 += "("+[msg.situgi+1]+"問目"+ ":0はどこ？" +")";
    z5 += "[" +a5+ "]-[" +b5+ "]-[" +c5+ "]-[" +d5+ "]-[" +e5+ "]";
return z5;
};