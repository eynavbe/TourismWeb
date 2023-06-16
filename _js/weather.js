function Weather(_parent,_location,_forecastHigh,_forecastLow,_day,_conditionTemp,_skyImg,_pic_Url){
    this.parent=_parent;
    this.location=_location;
    this.forecastHigh=_forecastHigh;
    this.forecastLow=_forecastLow;
    this.day=_day;
    this.conditionTemp=_conditionTemp;
    this.skyImg=_skyImg;
    this.pic_Url=_pic_Url;
    this.imgFolder="https://motwebmediastg01.blob.core.windows.net/nop-thumbs-images/";
}
Weather.prototype.addToHTML=function(){
    $(this.parent).empty();
    var newBox=document.createElement("div");
    newBox.className="boxWeather";
    this.parent.appendChild(newBox);
    newBox.innerHTML="<img id='id_boxWeatherImg' class='boxWeatherImg' src='"+this.imgFolder+this.pic_Url+"'>";
    newBox.innerHTML+="<h3 class='boxWeatherName'>"+this.location+"</h3>";
    newBox.innerHTML+="<p class='boxWeatherDay'>יום "+this.day+"</p>";
    newBox.innerHTML+="<p class='boxWeatherConditionTemp'>"+this.conditionTemp+"<sup class='circleWeather'></sup><span class='WeatherFahrenheit'>c</span></p>";
    newBox.innerHTML+="<img class='boxWeatherskyImg' src='"+this.skyImg+"'>";
    newBox.innerHTML+="<a class='boxWeatherA'>צפי להיום</a>";
    newBox.innerHTML+="<p class='boxWeatherText'><sup class='circleWeather'></sup>c  מזג האוויר המרבי היום "+this.forecastHigh+"<br><sup class='circleWeather'></sup>c  מזג אוויר המינימלי היום: "+this.forecastLow+"</p>";
    
    $(".boxWeatherA").hover(function(){
        $(".boxWeatherText").fadeIn(3000);
    },function(){
        $(".boxWeatherText").fadeOut(3000);
    });
    
    if (window.innerWidth <609) {
        document.getElementsByClassName("boxWeather")[0].style.width = "80%";
        document.getElementsByClassName("boxWeatherConditionTemp")[0].style.right = "3%";
        document.getElementsByClassName("boxWeatherskyImg")[0].style.right = "70%";
        document.getElementsByClassName("boxWeatherA")[0].style.top = "67%";
        document.getElementsByClassName("boxWeatherA")[0].style.right = "38%";
        document.getElementsByClassName("boxWeatherText")[0].style.top = "69%";
        document.getElementsByClassName("boxWeatherText")[0].style.right = "4%";
        document.getElementsByClassName("boxWeather")[0].style.margin = "0";
    }
    
    // var index1=this.pic_Url.indexOf('_');
    // var index2 = this.pic_Url.indexOf("_", index1+1);
    // var subStr = this.pic_Url.substring(index1+1, index2);

    // var newImg=$("<a href='"+subStr+".html'> <img class='boxImg' src='"+this.imgFolder+this.pic_Url+"'></a>");
    
    // $(newBox).append(newImg);
    
    // var newBoxRegion=$("<div class='boxRegion'>");
    // $(newBox).append(newBoxRegion);
    // $(newBoxRegion).append("<a href='"+subStr+".html'> <h4 color='white'>אזור: "+this.region+"</h4>"); 
}
