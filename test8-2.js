exports.printBoo = function(id , msg , matti){
        var a89,b89,c89,d89,e89,z89;
        a89 ="";
        b89 ="";
        c89 ="";
        d89 ="";
        e89="";
        z89 ="";
if (id == matti[0]) {
        //質問の回答
        for (i=0; i<5; i++){
            if (myCard[i][0] == "9赤" ||　myCard[i][0] == "9青"){
                if (i == 0) {
                    a89 += "9";
                }else if (i == 1){
                    b89 += "9";
                }else if (i == 2){
                    c89 += "9";
                }else if (i == 3){
                    d89 += "9";
                }else if (i == 4){
                    e89 += "9";
                }else{
                }
            } else {
                if (i == 0) {
                    a89 += "×";
                }else if (i == 1){
                    b89 += "×";
                }else if (i == 2){
                    c89 += "×";
                }else if (i == 3){
                    d89 += "×";
                }else if (i == 4){
                    e89 += "×";
                }else{
                }
            }
        }
}else if (id == matti[1]) {
        //質問の回答
        for (i=5; i<10; i++){
            if (myCard[i][0] == "9赤" ||　myCard[i][0] == "9青"){
                if (i == 5) {
                    a89 += "9";
                }else if (i == 6){
                    b89 += "9";
                }else if (i == 7){
                    c89 += "9";
                }else if (i == 8){
                    d89 += "9";
                }else if (i == 9){
                    e89 += "9";
                }else{
                }
            } else {
                if (i == 5) {
                    a89 += "×";
                }else if (i == 6){
                    b89 += "×";
                }else if (i == 7){
                    c89 += "×";
                }else if (i == 8){
                    d89 += "×";
                }else if (i == 9){
                    e89 += "×";
                }else{
                }
            }
        }
} else {}
    //質問回答の表示
    z89 += "("+[msg.situgi+1]+"問目"+ ":9はどこ？" +")";
    z89 += "[" +a89+ "]-[" +b89+ "]-[" +c89+ "]-[" +d89+ "]-[" +e89+ "]";
return z89;
};