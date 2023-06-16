function TrackSmall(_parent,_id,_pic_Url){
    this.parent=_parent;
    this.id=_id;
    this.pic_Url=_pic_Url;
    this.imgFolder="https://motwebmediastg01.blob.core.windows.net/nop-thumbs-images/";
}
TrackSmall.prototype.addToHTML=function(){
    var newBox3=document.createElement("div");
    newBox3.className="boxTrackSmall";
    this.parent.appendChild(newBox3);
    newBox3.innerHTML="<img class='boxImgTrackSmall' src='"+this.imgFolder+this.pic_Url+"' onclick='showSlides("+this.id+")'>";    
    
}