var j;
function createAll(json_ar,n){
    if((n+24)<json_ar.length){
        j=n+24;
    }
    else{
        j=json_ar.length;
    }
    for(var i=n; i<j;i++){
        var item=json_ar[i];
        var city1=new City(id_citiesM,item.Id,item.Name,item.Pic_Url,item.Region);
        city1.addToHTML();
    }
}
