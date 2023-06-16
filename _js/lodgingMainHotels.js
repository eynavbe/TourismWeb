function lodgingMainHotels(_parent,_Name,_Pic_Url,_Accessibility,_Accommodation_Type,_Address,_City,_Hotel_Classification,_Kosher,_Number_of_Rooms,_Parking,_Rated,_Swimming_Pool,_Region,_URL,_WiFi){
    this.parent=_parent;
    this.name=_Name;
    this.pic_Url=_Pic_Url;
    this.accessibility=_Accessibility;
    this.accommodation_Type=_Accommodation_Type;
    this.address=_Address;
    this.city=_City;
    this.hotel_Classification=_Hotel_Classification;
    this.kosher=_Kosher;
    this.number_of_Rooms=_Number_of_Rooms;
    this.parking=_Parking;
    this.rated=_Rated;
    this.swimming_Pool=_Swimming_Pool;
    this.region=_Region;
    this.URL=_URL;
    this.WiFi=_WiFi;
    this.imgFolder="https://motwebmediastg01.blob.core.windows.net/nop-thumbs-images/";
}
lodgingMainHotels.prototype.addToHTML=function(){

    var newBox=document.createElement("div");
    newBox.className="boxLodgingMainHotels";
    this.parent.appendChild(newBox);
    var newBox1=document.createElement("div");
    newBox1.className="boxLodgingMainHotelsTop";
    newBox.appendChild(newBox1);
    newBox1.innerHTML+="<div class='boxLodgingMainHotelsTopBookmark1'><h5 class='boxLodgingMainHotelsTopBookmark1Text'>"+this.accommodation_Type+"</h5></div>";
    newBox1.innerHTML+="<div class='boxLodgingMainHotelsTopBookmark2'></div>";
    newBox1.innerHTML+="<h1 class='boxLodgingMainHotelsTopName'>"+this.name+"</h1>";
    if(this.rated != "לא"){
        for (var i = 1; i <= 5; i++) {
            var index = this.hotel_Classification.indexOf(i);
            if (index != -1) {
                var subStr = this.hotel_Classification.substr(index,1);
                for (var j = 0; j < subStr; j++) {
                    newBox1.innerHTML+="<span class='boxLodgingMainHotelsClassification' style='font-size:280%;color:yellow;'>&starf;</span>";   
                }  
            }  
        }
         
    }
    newBox1.innerHTML+="<p class='boxLodgingMainHotelsTopAddress'>"+this.address+"</p>";
    var newBox2=document.createElement("div");
    newBox2.className="boxLodgingMainHotelsDown";
    newBox.appendChild(newBox2);
    newBox2.innerHTML="<img class='boxLodgingMainHotelsDownImg' src='"+this.imgFolder+this.pic_Url+"'>";
    newBox2.innerHTML+="<p class='boxLodgingMainHotelsP1'><strong><em>אזור: </em></strong>"+this.region+"</p>";
    newBox2.innerHTML+="<p class='boxLodgingMainHotelsP2'><strong><em>כשר: </em></strong>"+this.kosher+"</p>";
    newBox2.innerHTML+="<p class='boxLodgingMainHotelsP3'><strong><em>בריכת שחייה: </em></strong>"+this.swimming_Pool+"</p>";
    newBox2.innerHTML+="<p class='boxLodgingMainHotelsP4'><strong><em>חנייה: </em></strong>"+this.parking+"</p>";
    newBox2.innerHTML+="<p class='boxLodgingMainHotelsP5'><strong><em>נגישות: </em></strong>"+this.accessibility+"</p>";
    newBox2.innerHTML+="<p class='boxLodgingMainHotelsP6'><strong><em>אינטרנט אלחוטי: </em></strong>"+this.WiFi+"</p>";
    newBox2.innerHTML+="<p class='boxLodgingMainHotelsP7'><strong><em>מספר חדרים: </em></strong>"+this.number_of_Rooms+"</p>";
    newBox2.innerHTML+="<botton class='boxLodgingMainHotelsBtn'><span class='boxLodgingMainHotelsSpan'><a target='_blank' href='"+this.URL+"'<strong>למידע נוסף</strong></a></span></botton>";
}