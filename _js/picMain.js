
var count=0;
var t=0;
var timar=setInterval(countS,5000);
pic_ar=["picMain1","picMain2","picMain3","picMain4"];
function countS(){
    t=count+1;
    if(t>=4){
        t=0;
    }
    count=t;
    countI(t); 
}
function countP(n){
    count+=n;
    if(count==-1){
        count=2;
    }
    else{
        if(count>=4){
            count=0;
        }
    }
    countI(count); 
}
function countI(n){
    count=n;
    id_img.src="_images/"+pic_ar[count]+".jpg";
}





































