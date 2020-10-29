exports.printBoo = function(id , msg , matti){
            var a47,b47,c47,d47,e47,z47;
        a47 ="";
        b47 ="";
        c47 ="";
        d47 ="";
        e47 ="";
        z47 ="";
if (id == matti[0]) {
        //質問の回答
        for (i=0; i<5; i++){
            if (myCard[i][0] == "7赤" ||　myCard[i][0] == "7青"){
                if (i == 0) {
                    a47 += "7";
                }else if (i == 1){
                    b47 += "7";
                }else if (i == 2){
                    c47 += "7";
                }else if (i == 3){
                    d47 += "7";
                }else if (i == 4){
                    e47 += "7";
                }else{
                }
            } else {
                if (i == 0) {
                    a47 += "×";
                }else if (i == 1){
                    b47 += "×";
                }else if (i == 2){
                    c47 += "×";
                }else if (i == 3){
                    d47 += "×";
                }else if (i == 4){
                    e47 += "×";
                }else{
                }
            }
        }
}else if (id == matti[1]) {
        //質問の回答
        for (i=5; i<10; i++){
            if (myCard[i][0] == "7赤" ||　myCard[i][0] == "7青"){
                if (i == 5) {
                    a47 += "7";
                }else if (i == 6){
                    b47 += "7";
                }else if (i == 7){
                    c47 += "7";
                }else if (i == 8){
                    d47 += "7";
                }else if (i == 9){
                    e47 += "7";
                }else{
                }
            } else {
                if (i == 5) {
                    a47 += "×";
                }else if (i == 6){
                    b47 += "×";
                }else if (i == 7){
                    c47 += "×";
                }else if (i == 8){
                    d47 += "×";
                }else if (i == 9){
                    e47 += "×";
                }else{
                }
            }
        }
} else {}
        //質問回答の表示
    z47 += "("+[msg.situgi+1]+"問目"+ ":7はどこ？" +")";
    z47 += "[" +a47+ "]-[" +b47+ "]-[" +c47+ "]-[" +d47+ "]-[" +e47+ "]";
return z47;
};