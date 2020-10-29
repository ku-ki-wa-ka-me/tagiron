exports.printBoo = function(id , msg , matti){
        var a62,b62,c62,d62,e62,z62;
        a62 ="";
        b62 ="";
        c62 ="";
        d62 ="";
        e62="";
        z62 ="";
if (id == matti[0]) {
        //質問の回答
        for (i=0; i<5; i++){
            if (myCard[i][0] == "2赤" ||　myCard[i][0] == "2青"){
                if (i == 0) {
                    a62 += "2";
                }else if (i == 1){
                    b62 += "2";
                }else if (i == 2){
                    c62 += "2";
                }else if (i == 3){
                    d62 += "2";
                }else if (i == 4){
                    e62 += "2";
                }else{
                }
            } else {
                if (i == 0) {
                    a62 += "×";
                }else if (i == 1){
                    b62 += "×";
                }else if (i == 2){
                    c62 += "×";
                }else if (i == 3){
                    d62 += "×";
                }else if (i == 4){
                    e62 += "×";
                }else{
                }
            }
        }
}else if (id == matti[1]) {
        //質問の回答
        for (i=5; i<10; i++){
            if (myCard[i][0] == "2赤" ||　myCard[i][0] == "2青"){
                if (i == 5) {
                    a62 += "2";
                }else if (i == 6){
                    b62 += "2";
                }else if (i == 7){
                    c62 += "2";
                }else if (i == 8){
                    d62 += "2";
                }else if (i == 9){
                    e62 += "2";
                }else{
                }
            } else {
                if (i == 5) {
                    a62 += "×";
                }else if (i == 6){
                    b62 += "×";
                }else if (i == 7){
                    c62 += "×";
                }else if (i == 8){
                    d62 += "×";
                }else if (i == 9){
                    e62 += "×";
                }else{
                }
            }
        }
} else {}
    //質問回答の表示
    z62 += "("+[msg.situgi+1]+"問目"+ ":2はどこ？" +")";
    z62 += "[" +a62+ "]-[" +b62+ "]-[" +c62+ "]-[" +d62+ "]-[" +e62+ "]";
return z62;
};