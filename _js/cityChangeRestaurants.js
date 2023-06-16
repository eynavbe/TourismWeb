function cityChangeRestaurants(_parent,_Name,_FullDescription,_Pic_Url,_Address,_Chef_Restaurant,_Opening_Hours,_Parking,_Restaurant,_Type_of_Kashrut,_URL){
    this.parent=_parent;
    this.name=_Name;
    this.fullDescription=_FullDescription;
    this.pic_Url=_Pic_Url;
    this.address=_Address;
    this.chef_Restaurant=_Chef_Restaurant;
    this.opening_Hours=_Opening_Hours;
    this.parking=_Parking;
    this.restaurant=_Restaurant;
    this.type_of_Kashrut=_Type_of_Kashrut;
    this.URL=_URL;
    this.imgFolder="https://motwebmediastg01.blob.core.windows.net/nop-thumbs-images/";
}
cityChangeRestaurants.prototype.addToHTML=function(){
    
    var newBox=$("<div class='boxRestaurantsCity card'>");
    $(this.parent).append(newBox);
    var newImg=$("<img class='boxRestaurantsCityImg' src='"+this.imgFolder+this.pic_Url+"'>");
    $(newBox).append(newImg);
    $(newBox).append("<div class='bookmark1'><h5 class='bookmark1Text'>"+this.restaurant+"</h5></div>");
    $(newBox).append("<p class='boxRestaurantsCityName'><h3>"+this.name+"</h3><em>"+this.type_of_Kashrut+" </em></p>");
   
    
    
    $(newBox).on("click",function(){
        $(back2Top).hide(600);
        $(id_darkCityWin).show(600);
        $('nav').css("background","rgba(255, 255, 255, 0)");
        $(id_darkCityImg).attr("src",""+this.imgFolder+this.pic_Url);
        var test = false;
        var name = this.name;
        var object;
        var test2 = false;
        var iEnd = (localStorage["FavoritesI"])*1;
        for (let i = 1; i <= iEnd; i++) {
            var object2 = localStorage.getItem("Favorites-"+ (i));
            object = JSON.parse(object2);
            if (object != undefined) {
                var objectName=object.name;
                while ((name.indexOf(" ") > -1) || (objectName.indexOf(" ")  > -1)) {
                    name=name.replace(" ",""); 
                    objectName=objectName.replace(" ","");
                }
                if((name.localeCompare(objectName)) == 0){
                    $(id_darkCityStar).html("<span class='addToFavorites' id='id_addToFavorites' title='להוריד מהמועדפים' style='font-size:280%;cursor:pointer;color:yellow;'>&starf;</span>");
                    test2 = true;
                    test=true;
                }
            }
        }
        if (test2 == false) {
            $(id_darkCityStar).html("<span class='addToFavorites' id='id_addToFavorites' title='הוספה למועדפים' style='font-size:280%;cursor:pointer;'>&#9734;</span>");
        }
        var name = this.name;
        var accommodation_Type = "מסעדה";
        var address = this.address;
        $('.addToFavorites').on('click', function() {
            if (test == false) {console.log(name);
                $(id_darkCityStar).html("<span class='addToFavorites' title='להוריד מהמועדפים' style='font-size:280%;cursor:pointer;color:yellow;'>&starf;</span>");
                test =true; 
                addToFavorites1(name,accommodation_Type,address);
            }
            else{
                $(id_darkCityStar).html("<span class='addToFavorites' title='הוספה למועדפים' style='font-size:280%;cursor:pointer;' >&#9734;</span>");
                test = false;
                downFromFavorites1(name,accommodation_Type,address);
            }
        });
        $(id_darkCityH2).html(this.name);
        $(id_darkCityP).html("<strong>כתובת: </strong>"+this.address+"</br>");
        $(id_darkCityP).append("<strong>כשרות: </strong>"+this.type_of_Kashrut+"</br>");
        $(id_darkCityP).append("<strong>שעות פתיחה: </strong>"+this.opening_Hours+"</br>");
        $(id_darkCityP).append("<strong>חניה: </strong>"+this.parking+"</br>");
        $(id_darkCityP).append("<strong>מסעדת שף: </strong>"+this.chef_Restaurant+"</br>");
        $(id_darkCityP).append("<a target='_blank' href='"+this.URL+"'<strong>קישור לאתר </strong></a></br>");
        $(id_darkCityP).append(this.fullDescription);
    }.bind(this))
}