
// function createAllJson(json_ar){

//     for(var i=0; i<json_ar.length;i++){
//         var item=json_ar[i];
//         if(item.Region=="צפון"){
//         var city1=new City(id_citiesM,item.Name,item.Pic_Url,item.Region);
//         city1.addToHTML();
//         }
//     }
// }

// var j;
function createAll(json_ar,name){
    // if(alt=='צפון'){

    // }
    // if((n+24)<json_ar.length){
    //     j=n+24;
    // }
    // else{
    //     j=json_ar.length;
    // }
    for(var i=0; i<json_ar.length;i++){
        var item=json_ar[i];
        if(item.Region==name){
        var city1=new City(id_citiesM,item.Id,item.Name,item.Pic_Url,item.Region);
        city1.addToHTML();
        // $(".pagination").before("<a onclick='countI(2)' href='#'>3</a>")
        }
        
    }
}