function lodgingBandB(_parent,_Name,_Pic_Url,_Accessibility,_Accommodation_Type,_Address,_City,_Kosher,_Near_To,_Number_of_Units,_Parking,_Rate,_Region,_URL,_WiFi,_X,_Y){
    this.parent=_parent;   
    this.name=_Name;
    this.pic_Url=_Pic_Url;
    this.accessibility=_Accessibility;
    this.accommodation_Type=_Accommodation_Type;
    this.address=_Address;
    this.city=_City;
    this.kosher=_Kosher;
    this.near_To=_Near_To;
    this.number_of_Units=_Number_of_Units;
    this.parking=_Parking;
    this.rate=_Rate;
    this.region=_Region;
    this.URL=_URL;
    this.WiFi=_WiFi;
    this.X=_X;
    this.Y=_Y;
    this.imgFolder="https://motwebmediastg01.blob.core.windows.net/nop-thumbs-images/";
}
lodgingBandB.prototype.addToHTML=function(){
    var newBox=document.createElement("div");
    newBox.className="boxLodgingBandB";
    this.parent.appendChild(newBox);
    var newBox1=document.createElement("div");
    newBox1.className="boxLodgingBandBImg";
    newBox.appendChild(newBox1);
    newBox1.innerHTML="<img class='boxLodgingBandBImgMore' src='"+this.imgFolder+this.pic_Url+"'>";
    var newBox2=document.createElement("div");
    newBox2.className="boxLodgingBandBText";
    newBox.appendChild(newBox2);
    if (this.rate != "") {
        newBox2.innerHTML+="<h1 class='boxLodgingBandBName'>"+this.name+" <span title='ציון' class='BandBCityCircleRate'><strong class='BandBCityCircleRateText'>"+this.rate+"</strong></span> י</h1>";
    }
    else{
        newBox2.innerHTML+="<h1 class='boxLodgingBandBName'>"+this.name+"</h1>";
    }
    newBox2.innerHTML+="<p class='boxLodgingBandBAddress'>"+this.address+"</p>";
    var name1 = this.name;
    this.distance(this.city,this.near_To,this.X,this.Y,this.name);
    if (localStorage[name1] != undefined) {
        if (localStorage[name1] <  1) {
            newBox2.innerHTML+="<div class='boxLodgingBandBDistance'><span>י"+(localStorage[name1]*1000)+"</span><span> מטרים ממרכז העיר </span><img class='boxLodgingBandBSymbolslocation' src='../_images/location.png'></div>";
        }
        else{
            newBox2.innerHTML+="<div class='boxLodgingBandBDistance'><span>י"+(localStorage[name1])+"</span><span> קילומטרים ממרכז העיר </span><img class='boxLodgingBandBSymbolslocation' src='../_images/location.png'></div>";
        }
    }
    if (this.WiFi != "לא") {
        newBox2.innerHTML+="<img class='boxLodgingBandBSymbolsWifi' src='../_images/wifi.png'>";
    }
    if (this.parking != "לא") {
        newBox2.innerHTML+="<img class='boxLodgingBandBSymbolsParking' src='../_images/parking.png'>";
    }
    if (this.accessibility != "לא") {
        newBox2.innerHTML+="<img class='boxLodgingBandBSymbolsAccessibility' src='../_images/accessibility.png'>";
    }

    var newBox3=document.createElement("div");
    newBox3.className="addToFavoritesBox";
    newBox2.appendChild(newBox3);
    var name = this.name;
    newBox3.innerHTML="<botton class='addToFavorites' alt='"+name+"' id='id_addToFavorites' title='הוספה למועדפים' style='font-size:280%;cursor:pointer;' >&#9734;</botton>";
    var name = this.name;
    var object;
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
                newBox3.innerHTML="<botton class='addToFavorites' alt='"+name+"' id='id_addToFavorites'  title='להוריד מהמועדפים' style='font-size:280%;cursor:pointer;color:yellow;'>&starf;</botton>";
                test2 = true;
                test=true;
            }
        }
    }
    $('.addToFavorites').on('click', function() {
        var test = false;
        var alt = $(this).attr("alt");
        var name = alt;
        var object;
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
                    FindFavorites1(alt,"true","BandB");
                    localStoragePage(0);
                    test = true;
                }
            }
        }
        if (test == false) {
        var alt = $(this).attr("alt");
        FindFavorites1(alt,"false","BandB"); 
        localStoragePage(0);
        }
    });

    newBox2.innerHTML+="<botton class='boxLodgingBandBBtn'><span class='boxLodgingBandBSpan'><a target='_blank' href='"+this.URL+"'<strong>למידע נוסף</strong></a></span></botton>";


    
}
lodgingBandB.prototype.distance=function(_cityFind,_nearTo,_x,_y,_name){
    $.ajax({
        url:"_JSON/JSON_Community.json",
        crossDomain:true,
        dataType:"json",
        success:function(json_Community){
            for(var i=0; i<json_Community.length;i++){
                var item=json_Community[i];
                if (_cityFind == item["שם_ישוב"]) {
                    _nearTo = item["לשכה"];
                }
            }   
        }
    })
    $.ajax({
        url:"_JSON/JSON_Cities_in_Israel.json",
        crossDomain:true,
        dataType:"json",
        success:function(json_Cities){
            for(var i=0; i<json_Cities.length;i++){
                var item=json_Cities[i];
                var cityFind=_cityFind;
                var nearTo=_nearTo;
                var nameCity=item.Name;
                while ((cityFind.indexOf(" ")  > -1) || (nearTo.indexOf(" ")  > -1) || (nameCity.indexOf(" ")  > -1)) {
                    cityFind=cityFind.replace(" ","");
                    nearTo=nearTo.replace(" ","");
                    nameCity=nameCity.replace(" ","");  
                }
                if((_cityFind == "תלאביביפו") || (_nearTo == "תלאביביפו") || (_cityFind == "תלאביב-יפו") || (_nearTo == "תלאביב-יפו")){
                    _cityFind = "תלאביב";
                    _nearTo = "תלאביב";
                }
                if ((nameCity == cityFind) || (nameCity == nearTo)) {
                    var p1 = new google.maps.LatLng(_x, _y);
                    var p2 = new google.maps.LatLng(item.X, item.Y);
                    distanceB = ((google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2));
                    // localStorage.clear();
                    localStorage.setItem(_name,distanceB);
                    return; 
                }
            }
        }
    })
}