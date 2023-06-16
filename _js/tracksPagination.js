
function showSlides(idT){
    var dots = document.getElementsByClassName("boxImgTrackSmall");
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    $.ajax({
        url:"_JSON/JSON_Tracks.json",
        crossDomain:false,
        dataType:"json",
        success:function(json_data_Tracks){
            for (var i = 0; i < 6; i++) {
                if(i==3){
                    i=42;
                }
                if(json_data_Tracks[i].Id==idT)
                {
                    var item=json_data_Tracks[i];
                    var track1=new Track(id_boxTrack,item.Name,item.Pic_Url,item.Address,item.City,item.Near_To,item.Best_season, item.Track_Duration,item.Track_Length,item.Track_Type,item.Trip_Type);
                    track1.addToHTML(); 
                    if(i==42){
                        i=3;
                    }
                    dots[i].className += " active"; 
                }
                if(i==42){
                    i=3;
                }
            }
        }
    })
}