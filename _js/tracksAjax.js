$(document).ready(function(){
    doAjaxTracks();
})
function doAjaxTracks(){
    $.ajax({
        url:"_JSON/JSON_Tracks.json",
        crossDomain:false,
        dataType:"json",
        success:function(json_data){
            createAllTracks(json_data);
        }
    })
    
}

