function CityChangeHostels(_parent,_Name,_FullDescription,_Pic_Url,_Accessibility,_Accommodation_Type,_Address,_Kosher,_Number_of_Beds,_Number_of_Rooms,_Parking,_Separated_Rooms,_URL,_WiFi){
    this.parent=_parent;
    this.name=_Name;
    this.fullDescription=_FullDescription;
    this.pic_Url=_Pic_Url;
    this.accessibility=_Accessibility;
    this.accommodation_Type=_Accommodation_Type;
    this.address=_Address;
    this.kosher=_Kosher;
    this.number_of_Beds=_Number_of_Beds;
    this.number_of_Rooms=_Number_of_Rooms;
    this.parking=_Parking;
    this.separated_Rooms=_Separated_Rooms;
    this.URL=_URL;
    this.WiFi=_WiFi;
    this.imgFolder="https://motwebmediastg01.blob.core.windows.net/nop-thumbs-images/";
}
CityChangeHostels.prototype.addToHTML=function(){
    
    var newBox=$("<div class='boxHostelsCity card'>");
    $(this.parent).append(newBox);
    var newImg=$("<img class='boxHostelsCityImg' src='"+this.imgFolder+this.pic_Url+"'>");
    $(newBox).append(newImg);
    // $(newBox).append("<div class='bookmark1'><h5 class='bookmark1Text'>"+this.accommodation_Type+"</h5></div>");
    $(newBox).append("<p class='boxHostelsCityName'><h3>"+this.name+"</h3><em><strong>כשרות: </strong>"+this.kosher+" </em></p>");
   
    
    
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
        var accommodation_Type = this.accommodation_Type;
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
        $(id_darkCityP).append("<strong>כשרות: </strong>"+this.kosher+"</br>");
        $(id_darkCityP).append("<strong>נגישות: </strong>"+this.accessibility+"</br>");
        $(id_darkCityP).append("<strong>מספר חדרים: </strong>"+this.number_of_Rooms+"</br>");
        $(id_darkCityP).append("<strong>מספר מיטות: </strong>"+this.number_of_Beds+"</br>");
        $(id_darkCityP).append("<strong>אינטרנט אלחוטי: </strong>"+this.WiFi+"</br>");
        $(id_darkCityP).append("<strong>שירות חדרים: </strong>"+this.separated_Rooms+"</br>");
        $(id_darkCityP).append("<strong>חניה: </strong>"+this.parking+"</br>");
        $(id_darkCityP).append("<a target='_blank' href='"+this.URL+"'<strong>קישור לאתר </strong></a></br>");
        $(id_darkCityP).append(this.fullDescription);
    }.bind(this))
}