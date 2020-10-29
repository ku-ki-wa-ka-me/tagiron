exports.printBoo = function(id , msg , matti){
        var a88,b88,c88,d88,e88,z88;
        a88 ="";
        b88 ="";
        c88 ="";
        d88 ="";
        e88="";
        z88 ="";
if (id == matti[0]) {
        //質問の回答
        for (i=0; i<5; i++){
            if (myCard[i][0] == "8赤" ||　myCard[i][0] == "8青"){
                if (i == 0) {
                    a88 += "8";
                }else if (i == 1){
                    b88 += "8";
                }else if (i == 2){
                    c88 += "8";
                }else if (i == 3){
                    d88 += "8";
                }else if (i == 4){
                    e88 += "8";
                }else{
                }
            } else {
                if (i == 0) {
                    a88 += "×";
                }else if (i == 1){
                    b88 += "×";
                }else if (i == 2){
                    c88 += "×";
                }else if (i == 3){
                    d88 += "×";
                }else if (i == 4){
                    e88 += "×";
                }else{
                }
            }
        }
}else if (id == matti[1]) {
        //質問の回答
        for (i=5; i<10; i++){
            if (myCard[i][0] == "8赤" ||　myCard[i][0] == "8青"){
                if (i == 5) {
                    a88 += "8";
                }else if (i == 6){
                    b88 += "8";
                }else if (i == 7){
                    c88 += "8";
                }else if (i == 8){
                    d88 += "8";
                }else if (i == 9){
                    e88 += "8";
                }else{
                }
            } else {
                if (i == 5) {
                    a88 += "×";
                }else if (i == 6){
                    b88 += "×";
                }else if (i == 7){
                    c88 += "×";
                }else if (i == 8){
                    d88 += "×";
                }else if (i == 9){
                    e88 += "×";
                }else{
                }
            }
        }
} else {}
    //質問回答の表示
    z88 += "("+[msg.situgi+1]+"問目"+ ":8はどこ？" +")";
    z88 += "[" +a88+ "]-[" +b88+ "]-[" +c88+ "]-[" +d88+ "]-[" +e88+ "]";
return z88;
};