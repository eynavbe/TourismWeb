function City(_parent,_id,_name,_pic_Url,_region){
    this.parent=_parent;
    this.id=_id;
    this.name=_name;
    this.pic_Url=_pic_Url;
    this.region=_region;
    this.imgFolder="https://motwebmediastg01.blob.core.windows.net/nop-thumbs-images/";
    // this.link=_link;
}
City.prototype.addToHTML=function(){
    var newBox=$("<div class='box card'>");
    $(this.parent).append(newBox);
    $(newBox).append("<a onclick='findThisCityIndex("+this.id+")'><h3 color='black'>"+this.name+"</h3></a>");
    // var index1=this.pic_Url.indexOf('_');
    // var index2 = this.pic_Url.indexOf("_", index1+1);
    // var subStr = this.pic_Url.substring(index1+1, index2);

    var newImg=$("<a onclick='findThisCityIndex("+this.id+")' > <img class='boxImg'   src='"+this.imgFolder+this.pic_Url+"'></a>");
    
    $(newBox).append(newImg);
    
    var newBoxRegion=$("<div class='boxRegion'>");
    $(newBox).append(newBoxRegion);
    $(newBoxRegion).append("<a onclick='findThisCityIndex("+this.id+")'> <h4 color='white'>אזור: "+this.region+"</h4></a>");
}
