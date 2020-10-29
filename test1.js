exports.printBoo = function(id , msg , matti){
        var a,b,c,d,e,z;
    a ="";
    b ="";
    c ="";
    d ="";
    e ="";
    z ="";
    if (id == matti[0]) {
    //質問の回答
    for (i=0; i<5; i++){
        if (myCard[i][0] == "5黄"){
            if (i == 0) {
                a += "5黄";
            }else if (i == 1){
                b += "5黄";
            }else if (i == 2){
                c += "5黄";
            }else if (i == 3){
                d += "5黄";
            }else if (i == 4){
                e += "5黄";
            }else{
            }
        } else {
            if (i == 0) {
                a += "×";
            }else if (i == 1){
                b += "×";
            }else if (i == 2){
                c += "×";
            }else if (i == 3){
                d += "×";
            }else if (i == 4){
                e += "×";
            }else{
            }
        }
    }
}else if (id == matti[1]) {
    //質問の回答
    for (i=5; i<10; i++){
        if (myCard[i][0] == "5黄"){
            if (i == 5) {
                a += "5黄";
            }else if (i == 6){
                b += "5黄";
            }else if (i == 7){
                c += "5黄";
            }else if (i == 8){
                d += "5黄";
            }else if (i == 9){
                e += "5黄";
            }else{
            }
        } else {
            if (i == 5) {
                a += "×";
            }else if (i == 6){
                b += "×";
            }else if (i == 7){
                c += "×";
            }else if (i == 8){
                d += "×";
            }else if (i == 9){
                e += "×";
            }else{
            }
        }
    }
} else {}
    //質問回答の表示
    z += "("+[msg.situgi+1]+"問目"+ ":5はどこ？" +")";
    z += "[" +a+ "]-[" +b+ "]-[" +c+ "]-[" +d+ "]-[" +e+ "]";
return z;
};