function Track(_parent,_name,_pic_Url,_address,_City,_Near_To,_BestSeason,_trackDuration,_trackLength,_trackType,_tripType,_URL){
    this.parent=_parent;
    this.name=_name;
    this.pic_Url=_pic_Url;
    this.address=_address;
    this.city=_City
    this.nearTo=_Near_To;
    this.bestSeason=_BestSeason;
    this.trackDuration=_trackDuration;
    this.trackLength=_trackLength;
    this.trackType=_trackType;
    this.tripType=_tripType;
    this.URL=_URL;
    this.imgFolder="https://motwebmediastg01.blob.core.windows.net/nop-thumbs-images/";
}
Track.prototype.addToHTML=function(){
    this.parent.innerHTML="<img class='boxImgTrack' src='"+this.imgFolder+this.pic_Url+"''>";
    this.parent.innerHTML+="<div class='bookmark1'><h5 class='bookmark1Text'>"+this.trackType+"</h5></div>";
    this.parent.innerHTML+="<div class='bookmark2'></div>";
    var newBox1=document.createElement("div");
    newBox1.className="boxDescriptionTrack";
    this.parent.appendChild(newBox1);
    newBox1.innerHTML+="<h3>"+this.name+"</h3>";
    if(this.address==""){
        if (this.city != "") {
            newBox1.innerHTML+="<p>עיר: "+this.city+"</p>";
        }
        else{
            newBox1.innerHTML+="<p>קרוב ל: "+this.nearTo+"</p>";
        }
    }
    else{
        newBox1.innerHTML+="<p>כתובת: "+this.address+"</p>";
    }
    newBox1.innerHTML+="<p>עונה מומלצת לביקור: "+this.bestSeason+"</p>";
    newBox1.innerHTML+="<p>זמן טיול: "+this.trackDuration+"</p>";
    newBox1.innerHTML+="<p>אורך טיול: "+this.trackLength+"</p>";
    if(this.tripType != ""){
        newBox1.innerHTML+="<p>סוג טיול: "+this.tripType+"</p>";
    }
    var newBox2=document.createElement("div");
    newBox2.className="boxMoreThistrip";
    this.parent.appendChild(newBox2);
    if (window.innerWidth <609) {
        document.getElementsByClassName("boxDescriptionTrack")[0].style.width = "75%";
    }
  
    // newBox2.innerHTML+="<button><span class='boxSpan'><a target='_blank' href='"+this.URL+"'<strong>למידע נוסף</strong></a></span></botton>";
}