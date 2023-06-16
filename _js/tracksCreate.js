// var testWindow;
$(window).scroll(function() {
    // console.log((document.getElementsByClassName("boxTrackSmallRow")[0].offsetWidth) );
    if (window.innerWidth <609) {
        if ((document.getElementsByClassName('boxTrackSmall')[0].offsetWidth) > 80) {
            window.location.href = '../main.html';
        }
    }
    else{
        if ((document.getElementsByClassName('boxTrackSmall')[0].offsetWidth) < 80) {
            window.location.href = '../main.html';
        }
    }

})
function createAllTracks(json_ar){
    for(var i=0;i<6;i++){
        if(i==3){
            i=42;
        }
        var item=json_ar[i];
        var track1=new TrackSmall(id_boxTrackSmallRow,item.Id,item.Pic_Url);
        track1.addToHTML();
        if(i==42){
            i=3;
        }
        if(i==0){
            var track2=new Track(id_boxTrack,item.Name,item.Pic_Url,item.Address,item.City,item.Near_To,item.Best_season, item.Track_Duration,item.Track_Length,item.Track_Type,item.Trip_Type,item.URL);
            track2.addToHTML();
            var dots = document.getElementsByClassName("boxImgTrackSmall");
            dots[0].className += " active";
        }
    }
    // var testWindow;
    if (window.innerWidth <609) {
        // console.log((document.getElementsByClassName("boxTrackSmallRow")[0].offsetWidth) != "8.5%");
        // if ((document.getElementsByClassName("boxTrackSmallRow")[0].offsetWidth) != "8.5%") {
        //     window.location.href = '../main.html';
        // }
        // window.location.href = '../main.html';
        document.getElementsByClassName("boxTrackSmallRow")[0].style.width = "90%";
        document.getElementsByClassName("boxTrackSmall")[0].style.width = "8.5%";
        document.getElementsByClassName("boxImgTrackSmall")[0].style.width = "100%";
        document.getElementsByClassName("boxTrackSmall")[1].style.width = "8.5%";
        document.getElementsByClassName("boxImgTrackSmall")[1].style.width = "100%";
        document.getElementsByClassName("boxTrackSmall")[2].style.width = "8.5%";
        document.getElementsByClassName("boxImgTrackSmall")[2].style.width = "100%";
        document.getElementsByClassName("boxTrackSmall")[3].style.width = "8.5%";
        document.getElementsByClassName("boxImgTrackSmall")[3].style.width = "100%";
        document.getElementsByClassName("boxTrackSmall")[4].style.width = "8.5%";
        document.getElementsByClassName("boxImgTrackSmall")[4].style.width = "100%";
        document.getElementsByClassName("boxTrackSmall")[5].style.width = "8.5%";
        document.getElementsByClassName("boxImgTrackSmall")[5].style.width = "100%";
        // testWindow = 1;
    }
    
}
