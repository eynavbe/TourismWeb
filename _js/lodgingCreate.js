function createOneHotel(json_Hotels){
    for (let j = 0; j < json_Hotels.length; j++) {
        var item6=json_Hotels[j];
        var lodgingMainHotels1=new lodgingHotels(id_lodging,item6.Name,item6.Pic_Url,item6.Accessibility,item6.Accommodation_Type,item6.Address,item6.City,item6.Hotel_Classification,item6.Kosher,item6.Near_To,item6.Number_of_Rooms,item6.Parking,item6.Rated,item6.Swimming_Pool,item6.Region,item6.URL,item6.WiFi,item6.X,item6.Y);  
        lodgingMainHotels1.addToHTML();
    }
}
function createOneBandB(json_BandB){
    for (let j = 0; j < json_BandB.length; j++) {
        var item=json_BandB[j];
        var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
        lodgingMainBandB1.addToHTML();
    }
}
function createOneHostel(json_Hostels){
    for (let j = 0; j < json_Hostels.length; j++) {
        var item=json_Hostels[j];
        var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
        lodgingMainHostels1.addToHTML();
    }
}
