exports.printBoo = function(id , msg , matti){
    var a9,b9,c9,d9,e9,z9;
    a9 ="";
    b9 ="";
    c9 ="";
    d9 ="";
    e9 ="";
    z9 ="";
if (id == matti[0]) {
    //質問の回答
    for (i=0; i<5; i++){
        if (myCard[i][3] == "青" ){
            if (i == 0) {
                a9 += myCard[i][2];
            }else if (i == 1){
                b9 += myCard[i][2];
            }else if (i == 2){
                c9 += myCard[i][2];
            }else if (i == 3){
                d9 += myCard[i][2];
            }else if (i == 4){
                e9 += myCard[i][2];
            }else{
            }
        } else {
            if (i == 0) {
                a9 += 0;
            }else if (i == 1){
                b9 += 0;
            }else if (i == 2){
                c9 += 0;
            }else if (i == 3){
                d9 += 0;
            }else if (i == 4){
                e9 += 0;
            }else{
            }
        }
    }
}else if (id == matti[1]) {
    //質問の回答
    for (i=5; i<10; i++){
        if (myCard[i][3] == "青" ){
            if (i == 5) {
                a9 += myCard[i][2];
            }else if (i == 6){
                b9 += myCard[i][2];
            }else if (i == 7){
                c9 += myCard[i][2];
            }else if (i == 8){
                d9 += myCard[i][2];
            }else if (i == 9){
                e9 += myCard[i][2];
            }else{
            }
        } else {
            if (i == 5) {
                a9 += 0;
            }else if (i == 6){
                b9 += 0;
            }else if (i == 7){
                c9 += 0;
            }else if (i == 8){
                d9 += 0;
            }else if (i == 9){
                e9 += 0;
            }else{
            }
        }
    }
} else {}
    //質問回答の表示
    z9 += "("+[msg.situgi+1]+"問目"+ ":青の数の合計は？" +")";
    z9 += parseInt(a9)+parseInt(b9)+parseInt(c9)+parseInt(d9)+parseInt(e9);
return z9;
};