$(document).ready(function(){
    $.ajax({
        url:"_JSON/JSON_Hotels.json",
        crossDomain:false,
        dataType:"json",
        success:function(json_Hotels){   
                createOneHotel(json_Hotels);
            }
         
    })
    $.ajax({
        url:"_JSON/JSON_B_and_B.json",
        crossDomain:false,
        dataType:"json",
        success:function(json_BandB){  
            createOneBandB(json_BandB);
        }
         
    })
    $.ajax({
        url:"_JSON/JSON_Hostels.json",
        crossDomain:false,
        dataType:"json",
        success:function(json_Hostels){
            createOneHostel(json_Hostels);
        }
    })

    // $(".boxLodgingMainHotels").click(function(){
    //     $(".boxLodgingMainHotelsTop").animate({
    //         height: "500px"
    //     },"slow");
    // });
   
})