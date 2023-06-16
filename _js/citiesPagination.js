var json1=[];
var count;
count=0;
function createAllJson(json_ar){
    
    json1=json_ar;
    countI(count);
}
function countP(n){
    count+=n;
    if(count==-1){
        count=0;
    }
    else{
        if(count>3){
            count=3;
        }
    }
    countI(count); 
}
function countI(n){
    $(".citiesM").empty();
    count=n;
    createAll(json1,count*24);
}





































