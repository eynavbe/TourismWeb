function lodgingMainBandB(_parent,_Name,_Pic_Url,_Accessibility,_Accommodation_Type,_Address,_Kosher,_Number_of_Units,_Parking,_Rate,_Region,_URL,_WiFi){
    this.parent=_parent;   
    this.name=_Name;
    this.pic_Url=_Pic_Url;
    this.accessibility=_Accessibility;
    this.accommodation_Type=_Accommodation_Type;
    this.address=_Address;
    this.kosher=_Kosher;
    this.number_of_Units=_Number_of_Units;
    this.parking=_Parking;
    this.rate=_Rate;
    this.region=_Region;
    this.URL=_URL;
    this.WiFi=_WiFi;
    this.imgFolder="https://motwebmediastg01.blob.core.windows.net/nop-thumbs-images/";
}
lodgingMainBandB.prototype.addToHTML=function(){

    var newBox=document.createElement("div");
    newBox.className="boxLodgingMainBandB";
    this.parent.appendChild(newBox);
    var newBox1=document.createElement("div");
    newBox1.className="boxLodgingMainBandBTop";
    newBox.appendChild(newBox1);
    newBox1.innerHTML+="<div class='boxLodgingMainBandBTopBookmark1'><h5 class='boxLodgingMainBandBTopBookmark1Text'>"+this.accommodation_Type+"</h5></div>";
    newBox1.innerHTML+="<div class='boxLodgingMainBandBTopBookmark2'></div>";
    newBox1.innerHTML+="<h1 class='boxLodgingMainBandBTopName'>"+this.name+"</h1>";
    if (this.rate != "") {
        newBox1.innerHTML+="<div title='ציון' class='BandBCityCircleRate'><h1 class='BandBCityCircleRateText'>"+this.rate+"</h1></div>";   
    }
    newBox1.innerHTML+="<p class='boxLodgingMainBandBTopAddress'>"+this.address+"</p>";
    var newBox2=document.createElement("div");
    newBox2.className="boxLodgingMainBandBDown";
    newBox.appendChild(newBox2);
    newBox2.innerHTML="<img class='boxLodgingMainBandBDownImg' src='"+this.imgFolder+this.pic_Url+"'>";
    newBox2.innerHTML+="<p class='boxLodgingMainBandBP1'><strong><em>אזור: </em></strong>"+this.region+"</p>";
    newBox2.innerHTML+="<p class='boxLodgingMainBandBP2'><strong><em>כשר: </em></strong>"+this.kosher+"</p>";
    newBox2.innerHTML+="<p class='boxLodgingMainBandBP3'><strong><em>חנייה: </em></strong>"+this.parking+"</p>";
    newBox2.innerHTML+="<p class='boxLodgingMainBandBP4'><strong><em>נגישות: </em></strong>"+this.accessibility+"</p>";
    newBox2.innerHTML+="<p class='boxLodgingMainBandBP5'><strong><em>אינטרנט אלחוטי: </em></strong>"+this.WiFi+"</p>";
    newBox2.innerHTML+="<p class='boxLodgingMainBandBP6'><strong><em>מספר יחידות: </em></strong>"+this.number_of_Units+"</p>";
    newBox2.innerHTML+="<botton class='boxLodgingMainBandBBtn'><span class='boxLodgingMainBandBSpan'><a target='_blank' href='"+this.URL+"'<strong>למידע נוסף</strong></a></span></botton>";
}