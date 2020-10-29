exports.printBoo = function(id , msg , matti){
    var a0,b0,c0,d0,e0,z0;
    a0 ="";
    b0 ="";
    c0 ="";
    d0 ="";
    e0 ="";
    z0 ="";
    if (id == matti[0]) {
    //質問の回答
    for (i=0; i<5; i++){
        if (myCard[i][3] == "赤" ){
            if (i == 0) {
                a0 += myCard[i][2];
            }else if (i == 1){
                b0 += myCard[i][2];
            }else if (i == 2){
                c0 += myCard[i][2];
            }else if (i == 3){
                d0 += myCard[i][2];
            }else if (i == 4){
                e0 += myCard[i][2];
            }else{
            }
        } else {
            if (i == 0) {
                a0 += 0;
            }else if (i == 1){
                b0 += 0;
            }else if (i == 2){
                c0 += 0;
            }else if (i == 3){
                d0 += 0;
            }else if (i == 4){
                e0 += 0;
            }else{
            }
        }
    }
}else if (id == matti[1]) {
    //質問の回答
    for (i=5; i<10; i++){
        if (myCard[i][3] == "赤" ){
            if (i == 5) {
                a0 += myCard[i][2];
            }else if (i == 6){
                b0 += myCard[i][2];
            }else if (i == 7){
                c0 += myCard[i][2];
            }else if (i == 8){
                d0 += myCard[i][2];
            }else if (i == 9){
                e0 += myCard[i][2];
            }else{
            }
        } else {
            if (i == 5) {
                a0 += 0;
            }else if (i == 6){
                b0 += 0;
            }else if (i == 7){
                c0 += 0;
            }else if (i == 8){
                d0 += 0;
            }else if (i == 9){
                e0 += 0;
            }else{
            }
        }
    }
} else {}
    //質問回答の表示
    z0 += "("+[msg.situgi+1]+"問目"+ ":赤の数の合計は？" +")";
    z0 += parseInt(a0)+parseInt(b0)+parseInt(c0)+parseInt(d0)+parseInt(e0);
return z0;
};