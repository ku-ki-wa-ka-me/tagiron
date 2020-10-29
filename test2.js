exports.printBoo = function(id , msg , matti){
    var a2,b2,c2,d2,e2,z2;
    a2 ="";
    b2 ="";
    c2 ="";
    d2 ="";
    e2 ="";
    z2 ="";
if (id == matti[0]) {
    for (i=0; i<5; i++){
        if (myCard[i][2] % 2 == 0){
            if (i == 0) {
                a2 += 0;
            }else if (i == 1){
                b2 += 0;
            }else if (i == 2){
                c2 += 0;
            }else if (i == 3){
                d2 += 0;
            }else if (i == 4){
                e2 += 0;
            }else{
            }
        } else {
            if (i == 0) {
                a2 += 1;
            }else if (i == 1){
                b2 += 1;
            }else if (i == 2){
                c2 += 1;
            }else if (i == 3){
                d2 += 1;
            }else if (i == 4){
                e2 += 1;
            }else{
            }
        }
    }
}else if (id == matti[1]) {
    for (i=5; i<10; i++){
        if (myCard[i][2] % 2 == 0){
            if (i == 5) {
                a2 += 0;
            }else if (i == 6){
                b2 += 0;
            }else if (i == 7){
                c2 += 0;
            }else if (i == 8){
                d2 += 0;
            }else if (i == 9){
                e2 += 0;
            }else{
            }
        } else {
            if (i == 5) {
                a2 += 1;
            }else if (i == 6){
                b2 += 1;
            }else if (i == 7){
                c2 += 1;
            }else if (i == 8){
                d2 += 1;
            }else if (i == 9){
                e2 += 1;
            }else{
            }
        }
    }
} else {}
    //質問回答の表示
    z2 += "("+[msg.situgi+1]+"問目"+ ":奇数は何枚ある？" +")";
    z2 += parseInt(a2)+parseInt(b2)+parseInt(c2)+parseInt(d2)+parseInt(e2);
    z2 += "枚あります";
return z2;
};







