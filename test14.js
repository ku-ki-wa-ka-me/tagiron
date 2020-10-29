//偶数は何枚ある？（0も含む）
exports.printBoo = function(id , msg , matti){
    //console.log(id);
    //console.log(msg);
if (id == matti[0]) {
    var a14,b14,c14,d14,e14,z14;
    a14 ="";
    b14 ="";
    c14 ="";
    d14 ="";
    e14 ="";
    z14 ="";
    //質問の回答
    for (i=0; i<5; i++){
        if (myCard[i][2] % 2 == 0){
            if (i == 0) {
                a14 += 1;
            }else if (i == 1){
                b14 += 1;
            }else if (i == 2){
                c14 += 1;
            }else if (i == 3){
                d14 += 1;
            }else if (i == 4){
                e14 += 1;
            }else{
            }
        } else {
            if (i == 0) {
                a14 += 0;
            }else if (i == 1){
                b14 += 0;
            }else if (i == 2){
                c14 += 0;
            }else if (i == 3){
                d14 += 0;
            }else if (i == 4){
                e14 += 0;
            }else{
            }
        }
    }
}else if (id == matti[1]) {
    var a14,b14,c14,d14,e14,z14;
    a14 ="";
    b14 ="";
    c14 ="";
    d14 ="";
    e14 ="";
    z14 ="";
    //質問の回答
    for (i=5; i<10; i++){
        if (myCard[i][2] % 2 == 0){
            if (i == 5) {
                a14 += 1;
            }else if (i == 6){
                b14 += 1;
            }else if (i == 7){
                c14 += 1;
            }else if (i == 8){
                d14 += 1;
            }else if (i == 9){
                e14 += 1;
            }else{
            }
        } else {
            if (i == 5) {
                a14 += 0;
            }else if (i == 6){
                b14 += 0;
            }else if (i == 7){
                c14 += 0;
            }else if (i == 8){
                d14 += 0;
            }else if (i == 9){
                e14 += 0;
            }else{
            }
        }
    }
} else {}
    //質問回答の表示
    z14 += "("+[msg.situgi+1]+"問目"+ ":偶数は何枚ある？（0も含む）" +")";
    z14 += parseInt(a14)+parseInt(b14)+parseInt(c14)+parseInt(d14)+parseInt(e14);
    z14 += "枚あります";
    
    return z14;

};













