function lodgingMainHostels(_parent,_Name,_Pic_Url,_Accessibility,_Accommodation_Type,_Address,_Kosher,_Number_of_Beds,_Number_of_Rooms,_Parking,_Region,_Separated_Rooms,_URL,_WiFi){
    this.parent=_parent;   
    this.name=_Name;
    this.pic_Url=_Pic_Url;
    this.accessibility=_Accessibility;
    this.accommodation_Type=_Accommodation_Type;
    this.address=_Address;
    this.kosher=_Kosher;
    this.number_of_Beds=_Number_of_Beds;
    this.number_of_Rooms=_Number_of_Rooms;
    this.parking=_Parking;
    this.region=_Region;
    this.separated_Rooms=_Separated_Rooms;
    this.URL=_URL;
    this.WiFi=_WiFi;
    this.imgFolder="https://motwebmediastg01.blob.core.windows.net/nop-thumbs-images/";
}
lodgingMainHostels.prototype.addToHTML=function(){

    var newBox=document.createElement("div");
    newBox.className="boxLodgingMainHostels";
    this.parent.appendChild(newBox);
    var newBox1=document.createElement("div");
    newBox1.className="boxLodgingMainHostelsTop";
    newBox.appendChild(newBox1);
    newBox1.innerHTML+="<div class='boxLodgingMainHostelsTopBookmark1'><h5 class='boxLodgingMainHostelsTopBookmark1Text'>"+this.accommodation_Type+"</h5></div>";
    newBox1.innerHTML+="<div class='boxLodgingMainHostelsTopBookmark2'></div>";
    newBox1.innerHTML+="<h1 class='boxLodgingMainHostelsTopName'>"+this.name+"</h1>";
    newBox1.innerHTML+="<p class='boxLodgingMainHostelsTopAddress'>"+this.address+"</p>";
    var newBox2=document.createElement("div");
    newBox2.className="boxLodgingMainHostelsDown";
    newBox.appendChild(newBox2);
    newBox2.innerHTML="<img class='boxLodgingMainHostelsDownImg' src='"+this.imgFolder+this.pic_Url+"'>";
    newBox2.innerHTML+="<p class='boxLodgingMainHostelsP1'><strong><em>אזור: </em></strong>"+this.region+"</p>";
    newBox2.innerHTML+="<p class='boxLodgingMainHostelsP2'><strong><em>כשר: </em></strong>"+this.kosher+"</p>";
    newBox2.innerHTML+="<p class='boxLodgingMainHostelsP3'><strong><em>חנייה: </em></strong>"+this.parking+"</p>";
    newBox2.innerHTML+="<p class='boxLodgingMainHostelsP4'><strong><em>נגישות: </em></strong>"+this.accessibility+"</p>";
    newBox2.innerHTML+="<p class='boxLodgingMainHostelsP5'><strong><em>אינטרנט אלחוטי: </em></strong>"+this.WiFi+"</p>";
    newBox2.innerHTML+="<p class='boxLodgingMainHostelsP6'><strong><em>חדרים נפרדים: </em></strong>"+this.separated_Rooms+"</p>";
    newBox2.innerHTML+="<p class='boxLodgingMainHostelsP7'><strong><em>מספר חדרים: </em></strong>"+this.number_of_Rooms+"</p>";
    newBox2.innerHTML+="<p class='boxLodgingMainHostelsP8'><strong><em>מספר מיטות: </em></strong>"+this.number_of_Beds+"</p>";
    newBox2.innerHTML+="<botton class='boxLodgingMainHostelsBtn'><span class='boxLodgingMainHostelsSpan'><a target='_blank' href='"+this.URL+"'<strong>למידע נוסף</strong></a></span></botton>";
}