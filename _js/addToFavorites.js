var test2;
$(document).ready(function(){
    if ((localStorage["FavoritesI"]) == undefined) {
        localStorage.setItem("FavoritesI", 1);
    } 
})
function FindFavorites1(name,addOrDoun,type){
    if (type == "BandB") {
        $.ajax({
            url:"_JSON/JSON_B_and_B.json",
            crossDomain:false,
            dataType:"json",
            success:function(json_BandB){  
                for (let i = 0; i < json_BandB.length; i++) {
                    var item = json_BandB[i];
                    nameItem = item.Name;
                    while ((nameItem.indexOf(" ") > -1) || (name.indexOf(" ")  > -1)) {
                        name=name.replace(" ",""); 
                        nameItem=nameItem.replace(" ","");
                    }
                    if (nameItem == name) {
                    
                        if (addOrDoun == "false") {
                            addToFavorites1(item.Name,item.Accommodation_Type,item.Address);
                        }
                        else{
                        
                            downFromFavorites1(item.Name,item.Accommodation_Type,item.Address);
                        }
                        
                    }
                    
                }       
            }
             
        })
    }
    if (type == "hotel") {
        $.ajax({
            url:"_JSON/JSON_Hotels.json",
            crossDomain:false,
            dataType:"json",
            success:function(json_Hotel){  
                for (let i = 0; i < json_Hotel.length; i++) {
                    var item = json_Hotel[i];
                    nameItem = item.Name;
                    while ((nameItem.indexOf(" ") > -1) || (name.indexOf(" ")  > -1)) {
                        name=name.replace(" ",""); 
                        nameItem=nameItem.replace(" ","");
                    }
                    if (nameItem == name) {
                    
                        if (addOrDoun == "false") {
                            addToFavorites1(item.Name,item.Accommodation_Type,item.Address);
                        }
                        else{
                        
                            downFromFavorites1(item.Name,item.Accommodation_Type,item.Address);
                        }
                        
                    }
                    
                }       
            }
             
        })
    }
    if (type == "hostel") {
        $.ajax({
            url:"_JSON/JSON_Hostels.json",
            crossDomain:false,
            dataType:"json",
            success:function(json_Hostel){  
                for (let i = 0; i < json_Hostel.length; i++) {
                    var item = json_Hostel[i];
                    nameItem = item.Name;
                    while ((nameItem.indexOf(" ") > -1) || (name.indexOf(" ")  > -1)) {
                        name=name.replace(" ",""); 
                        nameItem=nameItem.replace(" ","");
                    }
                    if (nameItem == name) {
                    
                        if (addOrDoun == "false") {
                            addToFavorites1(item.Name,item.Accommodation_Type,item.Address);
                        }
                        else{
                        
                            downFromFavorites1(item.Name,item.Accommodation_Type,item.Address);
                        }
                        
                    }
                    
                }       
            }
             
        })
    }
}
function downFromFavorites1(_name,_accommodation_Type,_address){
    var object;
    var test = false;
    var iEnd = (localStorage["FavoritesI"])*1;
    for (let i = 1; i <= iEnd; i++) {
        var object2 = localStorage.getItem("Favorites-"+ (i));
        object = JSON.parse(object2);
        if (object != undefined) {
            var name=_name
            var objectName=object.name;
            while ((name.indexOf(" ") > -1) || (objectName.indexOf(" ")  > -1)) {
                name=name.replace(" ",""); 
                objectName=objectName.replace(" ","");
            }
            if((name.localeCompare(objectName)) == 0){
                localStorage.removeItem("FavoritesI"+ i);
                test=true;
                iEnd = iEnd-1;
            }
        }
        if (test == true) {
            var object2 = localStorage.getItem("Favorites-"+ (i+1));
            object = JSON.parse(object2);
            object = JSON.stringify(object);
            localStorage.setItem("Favorites-"+ i, object);
            localStorage.removeItem("Favorites-"+ (i+1));
        }
    }
    if (test == true) {
        localStorage.removeItem("Favorites-"+ (iEnd));
        localStorage.setItem("FavoritesI", (iEnd));
    }
    if (parseInt(document.getElementById("id_sidenav").style.width) > 10) {
        openFavorites();
    }
}
function addToFavorites1(name1,accommodation_Type1,address1){
    test2 = false;
    var object;
    var iEnd = (localStorage["FavoritesI"])*1;
    if (iEnd > 1) {
        for (let i = 1; i <= iEnd; i++) {
            var object2 = localStorage.getItem("Favorites-"+ (i));
            object = JSON.parse(object2);
            if (object != undefined) {
                if (object.name == name1) {
                    test2 = true; 
                }
            }   
        }
    }
    if (test2 == false) {
        var favorites_obj={
            name:name1,
            accommodation_Type:accommodation_Type1,
            address:address1
        };
        localStorage.setItem(("Favorites-"+ iEnd),(JSON.stringify(favorites_obj)));   
        localStorage.setItem("FavoritesI", iEnd+1); 
    } 
    if (parseInt(document.getElementById("id_sidenav").style.width) > 10) {
        openFavorites();
    }  
}
function openFavorites() {
    
    if (window.innerWidth <609) {
        document.getElementById("id_sidenav").style.width = "100%";
        document.getElementById("id_body").style.marginLeft = "100%";
        
    }
    else{
        document.getElementById("id_sidenav").style.width = "250px";
        document.getElementById("id_body").style.marginLeft = "250px";
    }
    var iEnd2 = (localStorage["FavoritesI"])*1;
    var object2;
    if (iEnd2 > 1) {
        id_favoritesInTable.innerHTML="<tr style='text-align:center;'><td>מחק</td><td>כתובת</td><td>סוג</td><td>שם</td></tr>";
        for (let i = 1; i <= iEnd2; i++) {
            object2 = localStorage.getItem("Favorites-"+ (i));
            var object2In = JSON.parse(object2);
            if (object2In != null) {
                var nameObject2In = object2In.name;
                var addressObject2In = object2In.address;
                var accommodation_TypeObject2In = object2In.accommodation_Type;
                id_favoritesInTable.innerHTML+="<tr style='padding: 5px;'><td><img class='deleteFavorites' alt='"+i+"' style='cursor:pointer;width: 15px;display: block;margin-left: auto;margin-right: auto;' class='boxHostelsCityImg' src='../_images/trash.jpg'></td><td>"+addressObject2In+"</td><td>"+accommodation_TypeObject2In+"</td><td>"+nameObject2In+"</td></tr>"; 
            }
        }
        $('.deleteFavorites').on('click', function() {
            var alt = $(this).attr("alt");
            var object = localStorage.getItem("Favorites-"+ (alt));
            object2 = JSON.parse(object);
            downFromFavorites1(object2.name,object2.accommodation_Type,object2.address);
            // openFavorites();
        });
    }
    else{
        id_favoritesInTable.innerHTML="";

    }
  }
  function deleteAllFavorites(){
    $("#id_favoritesInTable tr").remove(); 
    var iEnd = (localStorage["FavoritesI"])*1;
    for (let i = 1; i <= iEnd; i++) {
        localStorage.removeItem("Favorites-"+ (i));
    }
    localStorage.setItem("FavoritesI", 1);
  }
  function closeFavorites() {
    document.getElementById("id_sidenav").style.width = "0";
    document.getElementById("id_body").style.marginLeft= "0";
    document.getElementsByClassName("navMain")[0].style.display = "block"; 
    // document.body.style.backgroundColor = "white";
  }