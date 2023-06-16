function CityChange(_parent,_name,_fullDescription,_pic_Url,_region){
    this.parent=_parent;
    this.name=_name;
    this.fullDescription=_fullDescription;
    this.pic_Url=_pic_Url;
    this.region=_region;
    this.imgFolder="https://motwebmediastg01.blob.core.windows.net/nop-thumbs-images/";
    // this.link=_link;
}
CityChange.prototype.addToHTML=function(){
    // var newBox=$("<div class='box'>");
    // $(this.parent).append(newBox);
    // $(newBox).append("<h3 color='black'>"+this.name+"</h3>");
    $("#idNameCity").html(this.name);
    $(".regionCity").html("<h4>אזור: "+this.region+"</h4>");
    $(".picCity").html("<img src='"+this.imgFolder+this.pic_Url+"''>");
    $(".fullDescriptionCity").html("<p>"+this.fullDescription+"</p>")
}