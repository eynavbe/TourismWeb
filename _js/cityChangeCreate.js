$(document).ready(function(){
    $.ajax({
        url:"_JSON/JSON_Cities_in_Israel.json",
        crossDomain:false,
        dataType:"json",
        success:function(json_data){
                    var item1=json_data[localStorage.i];
                    var cityChange1=new CityChange(id_city,item1.Name,item1.FullDescription,item1.Pic_Url,item1.Region);
                    cityChange1.addToHTML();
                }
         
    })
    $.ajax({
        url:"_JSON/JSON_Attractions.json",
        crossDomain:false,
        dataType:"json",
        success:function(json_attractions){
            for (let j = 0; j < json_attractions.length; j++) {
                if (localStorage.city == "תל אביב") {
                    localStorage.city ="תל אביב יפו";
                }
                var a=(localStorage.city);
                var bCity=(json_attractions[j].City);
                var bNear_To=(json_attractions[j].Near_To);
                var bRegion=(json_attractions[j].Region);
                
                while ((a.indexOf(" ") > -1) || (bCity.indexOf(" ")  > -1) || (bNear_To.indexOf(" ")  > -1) || (bRegion.indexOf(" ")  > -1)) {
                    a=a.replace(" ",""); 
                    bCity=bCity.replace(" ","");
                    bNear_To=bNear_To.replace(" ","");
                    bRegion=bRegion.replace(" ","");  
                }
               if (((bCity.localeCompare(a)) == 0) || ((bNear_To.localeCompare(a)) == 0)  || ((bRegion.localeCompare(a)) == 0)) {
                var item2=json_attractions[j];
                var cityChangeAttractions1=new CityChangeAttractions(id_attractionsCity,item2.Name,item2.FullDescription,item2.Pic_Url,item2.Address,item2.Attraction_Type,item2.Opening_Hours,item2.Parking,item2.Suitable_for_Children,item2.URL);
                cityChangeAttractions1.addToHTML();  
               }
                
            }
             $(id_darkCityBtn).on("click",function(){
                 $(id_darkCityWin).hide(400);
                 $(back2Top).show(400);
                 $('nav').css("background","rgba(255, 255, 255, 1)");
             })    
                
        }
         
    })
    $.ajax({
        url:"_JSON/JSON_Restaurants.json",
        crossDomain:false,
        dataType:"json",
        success:function(json_Restaurants){
            for (let j = 0; j < json_Restaurants.length; j++) {
                if (localStorage.city == "תל אביב") {
                    localStorage.city ="תל אביב יפו";
                }
                var a=(localStorage.city);
                var bCity=(json_Restaurants[j].City);
                var bNear_To=(json_Restaurants[j].Near_To);
                var bRegion=(json_Restaurants[j].Region);
                
                while ((a.indexOf(" ") > -1) || (bCity.indexOf(" ")  > -1) || (bNear_To.indexOf(" ")  > -1) || (bRegion.indexOf(" ")  > -1)) {
                    a=a.replace(" ",""); 
                    bCity=bCity.replace(" ","");
                    bNear_To=bNear_To.replace(" ","");
                    bRegion=bRegion.replace(" ","");  
                }
               if (((bCity.localeCompare(a)) == 0) || ((bNear_To.localeCompare(a)) == 0)  || ((bRegion.localeCompare(a)) == 0)) {
                var item3=json_Restaurants[j];
                var cityChangeRestaurants1=new cityChangeRestaurants(id_restaurantsCity,item3.Name,item3.FullDescription,item3.Pic_Url,item3.Address,item3.Chef_Restaurant,item3.Opening_Hours,item3.Parking,item3.Restaurant_,item3.Type_of_Kashrut,item3.URL);
                cityChangeRestaurants1.addToHTML();  
               }
                
            }
             $(id_darkCityBtn).on("click",function(){
                 $(id_darkCityWin).hide(400);
                 $(back2Top).show(400);
                 $('nav').css("background","rgba(255, 255, 255, 1)");
             })    
                
        }
         
    })
    $.ajax({
        url:"_JSON/JSON_Hotels.json",
        crossDomain:false,
        dataType:"json",
        success:function(json_Hotels){
            for (let j = 0; j < json_Hotels.length; j++) {
                if (localStorage.city == "תל אביב") {
                    localStorage.city ="תל אביב יפו";
                }
                var a=(localStorage.city);
                var bCity=(json_Hotels[j].City);
                var bNear_To=(json_Hotels[j].Near_To);
                var bRegion=(json_Hotels[j].Region);
                
                while ((a.indexOf(" ") > -1) || (bCity.indexOf(" ")  > -1) || (bNear_To.indexOf(" ")  > -1) || (bRegion.indexOf(" ")  > -1)) {
                    a=a.replace(" ",""); 
                    bCity=bCity.replace(" ","");
                    bNear_To=bNear_To.replace(" ","");
                    bRegion=bRegion.replace(" ","");  
                }
                
               if (((bCity.localeCompare(a)) == 0) || ((bNear_To.localeCompare(a)) == 0)  || ((bRegion.localeCompare(a)) == 0)) {
                var item6=json_Hotels[j];
                var cityChangeHotels1=new cityChangeHotels(id_hotelsCity,item6.Name,item6.FullDescription,item6.Pic_Url,item6.Accessibility,item6.Accommodation_Type,item6.Address,item6.Hotel_Classification,item6.Kosher,item6.Number_of_Rooms,item6.Parking,item6.Rated,item6.Swimming_Pool,item6.URL,item6.WiFi);
                cityChangeHotels1.addToHTML();  
               }
                
            }
             $(id_darkCityBtn).on("click",function(){
                 $(id_darkCityWin).hide(400);
                 $(back2Top).show(400);
                 $('nav').css("background","rgba(255, 255, 255, 1)");
             })    
                
        }
         
    })
    $.ajax({
        url:"_JSON/JSON_B_and_B.json",
        crossDomain:false,
        dataType:"json",
        success:function(json_BandB){
            for (let j = 0; j < json_BandB.length; j++) {
                if (localStorage.city == "תל אביב") {
                    localStorage.city ="תל אביב יפו";
                }
                var a=(localStorage.city);
                var bCity=(json_BandB[j].City);
                var bNear_To=(json_BandB[j].Near_To);
                var bRegion=(json_BandB[j].Region);
               
                while ((a.indexOf(" ") > -1) || (bCity.indexOf(" ")  > -1) || (bNear_To.indexOf(" ")  > -1) || (bRegion.indexOf(" ")  > -1)) {
                    a=a.replace(" ",""); 
                    bCity=bCity.replace(" ","");
                    bNear_To=bNear_To.replace(" ","");
                    bRegion=bRegion.replace(" ","");  
                }
                
               if (((bCity.localeCompare(a)) == 0) || ((bNear_To.localeCompare(a)) == 0)  || ((bRegion.localeCompare(a)) == 0)) {
                var item4=json_BandB[j];
                var cityChangeBandB1=new CityChangeBandB(id_BandBCity,item4.Name,item4.FullDescription,item4.Pic_Url,item4.Accessibility,item4.Accommodation_Type,item4.Address,item4.Kosher,item4.Number_of_Units,item4.Parking,item4.Rate,item4.URL,item4.WiFi);
                cityChangeBandB1.addToHTML();  
               }
                
            }
             $(id_darkCityBtn).on("click",function(){
                 $(id_darkCityWin).hide(400);
                 $(back2Top).show(400);
                 $('nav').css("background","rgba(255, 255, 255, 1)");
             })    
                
        }
         
    })
    $.ajax({
        url:"_JSON/JSON_Hostels.json",
        crossDomain:false,
        dataType:"json",
        success:function(json_Hostels){
            for (let j = 0; j < json_Hostels.length; j++) {
                if (localStorage.city == "תל אביב") {
                    localStorage.city ="תל אביב יפו";
                }
                var a=(localStorage.city);
                var bCity=(json_Hostels[j].City);
                var bNear_To=(json_Hostels[j].Near_To);
                var bRegion=(json_Hostels[j].Region);
                
                while ((a.indexOf(" ") > -1) || (bCity.indexOf(" ")  > -1) || (bNear_To.indexOf(" ")  > -1) || (bRegion.indexOf(" ")  > -1)) {
                    a=a.replace(" ",""); 
                    bCity=bCity.replace(" ","");
                    bNear_To=bNear_To.replace(" ","");
                    bRegion=bRegion.replace(" ","");  
                }
               if (((bCity.localeCompare(a)) == 0) || ((bNear_To.localeCompare(a)) == 0)  || ((bRegion.localeCompare(a)) == 0)) {
                var item5=json_Hostels[j];
                var cityChangeHostels1=new CityChangeHostels(id_hostelsCity,item5.Name,item5.FullDescription,item5.Pic_Url,item5.Accessibility,item5.Accommodation_Type,item5.Address,item5.Kosher,item5.Number_of_Beds,item5.Number_of_Rooms,item5.Parking,item5.Separated_Rooms,item5.URL,item5.WiFi);
                cityChangeHostels1.addToHTML();  
               }
                
            }
             $(id_darkCityBtn).on("click",function(){
                 $(id_darkCityWin).hide(400);
                 $(back2Top).show(400);
                 $('nav').css("background","rgba(255, 255, 255, 1)");
             })    
                
        }
         
    })
   
})