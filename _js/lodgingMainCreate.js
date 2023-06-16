
function createOneHotel(json_Hotels){
    var item6=json_Hotels[1];
        var lodgingMainHotels1=new lodgingMainHotels(id_lodgingM,item6.Name,item6.Pic_Url,item6.Accessibility,item6.Accommodation_Type,item6.Address,item6.City,item6.Hotel_Classification,item6.Kosher,item6.Number_of_Rooms,item6.Parking,item6.Rated,item6.Swimming_Pool,item6.Region,item6.URL,item6.WiFi);  
        lodgingMainHotels1.addToHTML();
}
function createOneBandB(json_BandB){
    var item=json_BandB[0];
    var lodgingMainBandB1=new lodgingMainBandB(id_lodgingM,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.Kosher,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi);     
    lodgingMainBandB1.addToHTML();
}
function createOneHostel(json_Hostels){
    var item=json_Hostels[2];
    var lodgingMainHostels1=new lodgingMainHostels(id_lodgingM,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.Kosher,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi);     
    lodgingMainHostels1.addToHTML();
}