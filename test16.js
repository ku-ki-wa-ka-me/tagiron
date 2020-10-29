exports.printBoo = function(id , msg , matti){
if (id == matti[0]) {
    var a16,b16,c16,d16,e16,z16;
    a16 ="";
    b16 ="";
    c16 ="";
    d16 ="";
    e16 ="";
    z16 ="";
    //質問の回答
    for (i=0; i<5; i++){
        if (myCard[i][3] == "赤"){
            if (i == 0) {
                a16 += 1;
            }else if (i == 1){
                b16 += 1;
            }else if (i == 2){
                c16 += 1;
            }else if (i == 3){
                d16 += 1;
            }else if (i == 4){
                e16 += 1;
            }else{
            }
        } else {
            if (i == 0) {
                a16 += 0;
            }else if (i == 1){
                b16 += 0;
            }else if (i == 2){
                c16 += 0;
            }else if (i == 3){
                d16 += 0;
            }else if (i == 4){
                e16 += 0;
            }else{
            }
        }
    }
}else if (id == matti[1]) {
    var a16,b16,c16,d16,e16,z16;
    a16 ="";
    b16 ="";
    c16 ="";
    d16 ="";
    e16 ="";
    z16 ="";
    //質問の回答
    for (i=5; i<10; i++){
        if (myCard[i][3] == "赤"){
            if (i == 5) {
                a16 += 1;
            }else if (i == 6){
                b16 += 1;
            }else if (i == 7){
                c16 += 1;
            }else if (i == 8){
                d16 += 1;
            }else if (i == 9){
                e16 += 1;
            }else{
            }
        } else {
            if (i == 5) {
                a16 += 0;
            }else if (i == 6){
                b16 += 0;
            }else if (i == 7){
                c16 += 0;
            }else if (i == 8){
                d16 += 0;
            }else if (i == 9){
                e16 += 0;
            }else{
            }
        }
    }
} else {}
    //質問回答の表示
    z16 += "("+[msg.situgi+1]+"問目"+ ":赤の数字タイルは何枚ある？" +")";
    z16 += parseInt(a16)+parseInt(b16)+parseInt(c16)+parseInt(d16)+parseInt(e16);
    z16 += "枚あります";
    
    return z16;

};






