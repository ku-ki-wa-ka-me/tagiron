exports.printBoo = function(id , msg , matti){
        var a61,b61,c61,d61,e61,z61;
        a61 ="";
        b61 ="";
        c61 ="";
        d61 ="";
        e61 ="";
        z61 ="";
if (id == matti[0]) {
        //質問の回答
        for (i=0; i<5; i++){
            if (myCard[i][0] == "1赤" ||　myCard[i][0] == "1青"){
                if (i == 0) {
                    a61 += "1";
                }else if (i == 1){
                    b61 += "1";
                }else if (i == 2){
                    c61 += "1";
                }else if (i == 3){
                    d61 += "1";
                }else if (i == 4){
                    e61 += "1";
                }else{
                }
            } else {
                if (i == 0) {
                    a61 += "×";
                }else if (i == 1){
                    b61 += "×";
                }else if (i == 2){
                    c61 += "×";
                }else if (i == 3){
                    d61 += "×";
                }else if (i == 4){
                    e61 += "×";
                }else{
                }
            }
        }
}else if (id == matti[1]) {
        //質問の回答
        for (i=5; i<10; i++){
            if (myCard[i][0] == "1赤" ||　myCard[i][0] == "1青"){
                if (i == 5) {
                    a61 += "1";
                }else if (i == 6){
                    b61 += "1";
                }else if (i == 7){
                    c61 += "1";
                }else if (i == 8){
                    d61 += "1";
                }else if (i == 9){
                    e61 += "1";
                }else{
                }
            } else {
                if (i == 5) {
                    a61 += "×";
                }else if (i == 6){
                    b61 += "×";
                }else if (i == 7){
                    c61 += "×";
                }else if (i == 8){
                    d61 += "×";
                }else if (i == 9){
                    e61 += "×";
                }else{
                }
            }
        }
} else {}
    //質問回答の表示
    z61 += "("+[msg.situgi+1]+"問目"+ ":1はどこ？" +")";
    z61 += "[" +a61+ "]-[" +b61+ "]-[" +c61+ "]-[" +d61+ "]-[" +e61+ "]";
return z61;
};