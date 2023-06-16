var count;
var n;
var t;
var timar=setInterval(countS,5500);
$(document).ready(function(){
    count=0;
    n=0;
    t=0;
    countIW(count,n);
})
function countS(){
    t=count+1;
    if(t>=57){
        t=0;
    }
    count=t;
    countIW(count,1); 
}
function countPW(n){
    count+=n;
    if(count==-1){
        count=56;countIW(count,n); 
    }
    else{
        if(count>56){
            if ($('#id_weather_recommendation').html()=="") {
                $(id_weather_recommendation).empty();
                var newBox=$("<div class='boxWeather'>");
                $(id_weather_recommendation).append(newBox);
                $(newBox).append("<p>לא נמצא מזג אוויר טוב במרחב הערים במאגר נא לצאת לטיול ביום אחר או בשעה אחרת</p>");
                $(newBox).append("<p>מזג אוויר טוב זה מזג אוויר שהטמפרטורה היא בין 20 ל30 מעלות ולא צפוי גשם או מזג אוויר מעונן</p> ");
                $(".boxWeather").css({"background-color": "red","text-align": "center", "font-size": "20px"});
            }
            else{
                 count=0;countIW(count,n); 
            }
           
        }
    }
    
}
function countIW(count,n){
    // $("#id_weather_recommendation").empty();
    doAjaxWeather(count,n);
}





































