exports.printBoo = function(id , msg , matti){
if (id == matti[0]) {
    var a15,b15,c15,d15,e15,z15;
    a15 ="";
    b15 ="";
    c15 ="";
    d15 ="";
    e15 ="";
    z15 ="";
    //質問の回答
    for (i=0; i<5; i++){
        if (myCard[i][3] == "青"){
            if (i == 0) {
                a15 += 1;
            }else if (i == 1){
                b15 += 1;
            }else if (i == 2){
                c15 += 1;
            }else if (i == 3){
                d15 += 1;
            }else if (i == 4){
                e15 += 1;
            }else{
            }
        } else {
            if (i == 0) {
                a15 += 0;
            }else if (i == 1){
                b15 += 0;
            }else if (i == 2){
                c15 += 0;
            }else if (i == 3){
                d15 += 0;
            }else if (i == 4){
                e15 += 0;
            }else{
            }
        }
    }
}else if (id == matti[1]) {
    var a15,b15,c15,d15,e15,z15;
    a15 ="";
    b15 ="";
    c15 ="";
    d15 ="";
    e15 ="";
    z15 ="";
    //質問の回答
    for (i=5; i<10; i++){
        if (myCard[i][3] == "青"){
            if (i == 5) {
                a15 += 1;
            }else if (i == 6){
                b15 += 1;
            }else if (i == 7){
                c15 += 1;
            }else if (i == 8){
                d15 += 1;
            }else if (i == 9){
                e15 += 1;
            }else{
            }
        } else {
            if (i == 5) {
                a15 += 0;
            }else if (i == 6){
                b15 += 0;
            }else if (i == 7){
                c15 += 0;
            }else if (i == 8){
                d15 += 0;
            }else if (i == 9){
                e15 += 0;
            }else{
            }
        }
    }
} else {}
    //質問回答の表示
    z15 += "("+[msg.situgi+1]+"問目"+ ":青の数字タイルは何枚ある？" +")";
    z15 += parseInt(a15)+parseInt(b15)+parseInt(c15)+parseInt(d15)+parseInt(e15);
    z15 += "枚あります";
    
    return z15;
    
};



















