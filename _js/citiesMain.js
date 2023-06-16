function City(_parent,_id,_name,_pic_Url,_region){
    this.parent=_parent;
    this.id=_id;
    this.name=_name;
    this.pic_Url=_pic_Url;
    this.region=_region;
    this.imgFolder="https://motwebmediastg01.blob.core.windows.net/nop-thumbs-images/";
}
City.prototype.addToHTML=function(){
    var newBox=document.createElement("div");
    newBox.className="box";
    this.parent.appendChild(newBox);
    newBox.innerHTML="<img class='boxImg' src='"+this.imgFolder+this.pic_Url+"'>";
    newBox.innerHTML+="<h3 class='boxName' color='black'>"+this.name+"</h3>";
    
    newBox.innerHTML+="<a onclick='findThisCityIndex("+this.id+")'><botton class='boxBtn'><span class='boxSpan'>יותר מידע</span></botton></a>"
}


    // var newBox=$("<div class='box'>");
    // $(this.parent).append(newBox);
    // $(newBox).append("<a href='"+subStr+".html'><h3 color='black'>"+this.name+"</h3>");
    // var index1=this.pic_Url.indexOf('_');
    // var index2 = this.pic_Url.indexOf("_", index1+1);
    // var subStr = this.pic_Url.substring(index1+1, index2);
    // var newImg=$("<a href='"+subStr+".html'> <img class='boxImg' src='"+this.imgFolder+this.pic_Url+"'></a>");
    // $(newBox).append(newImg);
    // var newBoxRegion=$("<div class='boxRegion'>");
    // $(newBox).append(newBoxRegion);
    // $(newBoxRegion).append("<a href='"+subStr+".html'> <h4 color='white'>אזור: "+this.region+"</h4>");
// }
