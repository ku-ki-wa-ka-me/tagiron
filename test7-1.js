exports.printBoo = function(id , msg , matti){
        var a73,b73,c73,d73,e73,z73;
        a73 ="";
        b73 ="";
        c73 ="";
        d73 ="";
        e73 ="";
        z73 ="";
if (id == matti[0]) {
        //質問の回答
        for (i=0; i<5; i++){
            if (myCard[i][0] == "3赤" ||　myCard[i][0] == "3青"){
                if (i == 0) {
                    a73 += "3";
                }else if (i == 1){
                    b73 += "3";
                }else if (i == 2){
                    c73 += "3";
                }else if (i == 3){
                    d73 += "3";
                }else if (i == 4){
                    e73 += "3";
                }else{
                }
            } else {
                if (i == 0) {
                    a73 += "×";
                }else if (i == 1){
                    b73 += "×";
                }else if (i == 2){
                    c73 += "×";
                }else if (i == 3){
                    d73 += "×";
                }else if (i == 4){
                    e73 += "×";
                }else{
                }
            }
        }
}else if (id == matti[1]) {
        //質問の回答
        for (i=5; i<10; i++){
            if (myCard[i][0] == "3赤" ||　myCard[i][0] == "3青"){
                if (i == 5) {
                    a73 += "3";
                }else if (i == 6){
                    b73 += "3";
                }else if (i == 7){
                    c73 += "3";
                }else if (i == 8){
                    d73 += "3";
                }else if (i == 9){
                    e73 += "3";
                }else{
                }
            } else {
                if (i == 5) {
                    a73 += "×";
                }else if (i == 6){
                    b73 += "×";
                }else if (i == 7){
                    c73 += "×";
                }else if (i == 8){
                    d73 += "×";
                }else if (i == 9){
                    e73 += "×";
                }else{
                }
            }
        }
} else {}
    //質問回答の表示
    z73 += "("+[msg.situgi+1]+"問目"+ ":3はどこ？" +")";
    z73 += "[" +a73+ "]-[" +b73+ "]-[" +c73+ "]-[" +d73+ "]-[" +e73+ "]";
return z73;
};