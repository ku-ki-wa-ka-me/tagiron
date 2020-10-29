exports.printBoo = function(id , msg , matti){
            var a46,b46,c46,d46,e46,z46;
        a46 ="";
        b46 ="";
        c46 ="";
        d46 ="";
        e46 ="";
        z46 ="";
//6を選択
if (id == matti[0]) {
        //質問の回答
        for (i=0; i<5; i++){
            if (myCard[i][0] == "6赤" ||　myCard[i][0] == "6青"){
                if (i == 0) {
                    a46 += "6";
                }else if (i == 1){
                    b46 += "6";
                }else if (i == 2){
                    c46 += "6";
                }else if (i == 3){
                    d46 += "6";
                }else if (i == 4){
                    e46 += "6";
                }else{
                }
            } else {
                if (i == 0) {
                    a46 += "×";
                }else if (i == 1){
                    b46 += "×";
                }else if (i == 2){
                    c46 += "×";
                }else if (i == 3){
                    d46 += "×";
                }else if (i == 4){
                    e46 += "×";
                }else{
                }
            }
        }
}else if (id == matti[1]) {
        //質問の回答
        for (i=5; i<10; i++){
            if (myCard[i][0] == "6赤" ||　myCard[i][0] == "6青"){
                if (i == 5) {
                    a46 += "6";
                }else if (i == 6){
                    b46 += "6";
                }else if (i == 7){
                    c46 += "6";
                }else if (i == 8){
                    d46 += "6";
                }else if (i == 9){
                    e46 += "6";
                }else{
                }
            } else {
                if (i == 5) {
                    a46 += "×";
                }else if (i == 6){
                    b46 += "×";
                }else if (i == 7){
                    c46 += "×";
                }else if (i == 8){
                    d46 += "×";
                }else if (i == 9){
                    e46 += "×";
                }else{
                }
            }
        }
} else {}
    //質問回答の表示
    z46 += "("+[msg.situgi+1]+"問目"+ ":6はどこ？" +")";
    z46 += "[" +a46+ "]-[" +b46+ "]-[" +c46+ "]-[" +d46+ "]-[" +e46+ "]";
    return z46;
};