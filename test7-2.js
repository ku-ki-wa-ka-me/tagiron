exports.printBoo = function(id , msg , matti){
        var a74,b74,c74,d74,e74,z74;
        a74 ="";
        b74 ="";
        c74 ="";
        d74 ="";
        e74 ="";
        z74 ="";
if (id == matti[0]) {
        //質問の回答
        for (i=0; i<5; i++){
            if (myCard[i][0] == "4赤" ||　myCard[i][0] == "4青"){
                if (i == 0) {
                    a74 += "4";
                }else if (i == 1){
                    b74 += "4";
                }else if (i == 2){
                    c74 += "4";
                }else if (i == 3){
                    d74 += "4";
                }else if (i == 4){
                    e74 += "4";
                }else{
                }
            } else {
                if (i == 0) {
                    a74 += "×";
                }else if (i == 1){
                    b74 += "×";
                }else if (i == 2){
                    c74 += "×";
                }else if (i == 3){
                    d74 += "×";
                }else if (i == 4){
                    e74 += "×";
                }else{
                }
            }
        }
}else if (id == matti[1]) {
        //質問の回答
        for (i=5; i<10; i++){
            if (myCard[i][0] == "4赤" ||　myCard[i][0] == "4青"){
                if (i == 5) {
                    a74 += "4";
                }else if (i == 6){
                    b74 += "4";
                }else if (i == 7){
                    c74 += "4";
                }else if (i == 8){
                    d74 += "4";
                }else if (i == 9){
                    e74 += "4";
                }else{
                }
            } else {
                if (i == 5) {
                    a74 += "×";
                }else if (i == 6){
                    b74 += "×";
                }else if (i == 7){
                    c74 += "×";
                }else if (i == 8){
                    d74 += "×";
                }else if (i == 9){
                    e74 += "×";
                }else{
                }
            }
        }
} else {}
    //質問回答の表示
    z74 += "("+[msg.situgi+1]+"問目"+ ":4はどこ？" +")";
    z74 += "[" +a74+ "]-[" +b74+ "]-[" +c74+ "]-[" +d74+ "]-[" +e74+ "]";
return z74;
};