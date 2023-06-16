
function createAllApi(json_data_weather,nJs){
    $.ajax({
        url:"_JSON/JSON_Cities_in_Israel.json",
        crossDomain:true,
        dataType:"json",
        success:function(json_data_city){
            // var forcast = json_data_weather['forecast']['forecastoday'];console.log(forcast);
            // var forecastText2 = forcast[0]['day']['condition']['text'];console.log(forecastText2);
    var forecastText=json_data_weather.forecast.forecastday[0].day.condition.text;
    
    var forecastHigh=json_data_weather.forecast.forecastday[0].day.maxtemp_c;
    forecastHigh=Math.floor(forecastHigh);
    var forecastLow=json_data_weather.forecast.forecastday[0].day.mintemp_c;
    forecastLow=Math.floor(forecastLow);
    var location=json_data_weather.location.name;
    // var locationE=location;
    var conditionTemp=json_data_weather.forecast.forecastday[0].day.avgtemp_c;
    conditionTemp=Math.floor(conditionTemp);
    var d = new Date();
    var day = d.getDay();
    var test = false;
    // var day=json_data_weather.query.results.channel.item.forecast[0].day;
    var skyImg = json_data_weather.forecast.forecastday[0].day.condition.icon;
    // var num=((num-32)*5)/9
    switch(day) {
        case 0:
        day="ראשון"
        break;
        case 1:
            day="שני"
          break;
        case 2:
        day="שלישי"
          break;
          case 3:
          day="רביעי"
          break;
          case 4:
          day="חמישי"
          break;
          case 5:
          day="ששי"
          break;
          case 6:
          day="שבת"
          break;
    }
    for (var i = 0; i < json_data_city.length; i++) {
        if(json_data_city[i].FAQ==location)
        {
            location=json_data_city[i].Name;
            pic_Url=json_data_city[i].Pic_Url;
            break;
        }
    }
    if((conditionTemp<=30 && conditionTemp>=18)&& forecastText != "Rain" && forecastText != "Scattered Showers")
    {
        // switch(forecast.text) {
        //     case "Mostly Sunny":
        //     skyImg="PartlyCloudy.png";
        //     break;
        //     case "Sunny":
        //     skyImg="Sunny.png"
        //       break;
        //     case "Partly Cloudy":
        //     skyImg="PartlyCloudy.png"
        //       break;
        //       case "Fair":
        //       skyImg="Fair.png"
        //       break;
              
        // }
        test = true;
        var weather1=new Weather(id_weather_recommendation,location,forecastHigh,forecastLow,day ,conditionTemp, skyImg,pic_Url);
        weather1.addToHTML();
    }
   else{
        // if($('#id_weather_recommendation').html()==""){
        //     $("#id_weather_recommendation").css({"cursor": "wait"});
        // }
        // if((locationE=="Yizreel") && ($('#id_weather_recommendation').html()==""))
        // {
            // $(id_weather_recommendation).empty();
            // var newBox=$("<div class='boxWeather'>");
            // $(id_weather_recommendation).append(newBox);
            // $(newBox).append("<p>לא נמצא מזג אוויר טוב במרחב הערים במאגר נא לצאת לטיול ביום אחר או בשעה אחרת</p>");
            // $(newBox).append("<p>מזג אוויר טוב זה מזג אוויר שהטמפרטורה היא בין 20 ל30 מעלות ולא צפוי גשם או מזג אוויר מעונן</p> ");
            // $(".boxWeather").css({"background-color": "red","text-align": "center", "font-size": "20px"});
        // }
        countPW(nJs);
    }
}

})
}
