
function createAllJson(json_ar){
    for(var i=0;i<3;i++){
        var item=json_ar[i];
        var city1=new City(id_citiesM,item.Id,item.Name,item.Pic_Url,item.Region);
        city1.addToHTML();
    }
}
