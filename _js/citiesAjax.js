$(document).ready(function(){
    doAjaxCity();
})
function doAjaxCity(){
    $.ajax({
        url:"_JSON/JSON_Cities_in_Israel.json",
        crossDomain:true,
        dataType:"json",
        success:function(json_data){
            createAllJson(json_data);
        }
    })
    
}

