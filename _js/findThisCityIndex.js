function findThisCityIndex(id){

    $.ajax({
        url:"_JSON/JSON_Cities_in_Israel.json",
        crossDomain:true,
        dataType:"json",
        success:function(json_data){
            for (let i = 0; i < json_data.length; i++) {
                if(json_data[i].Id==id){
                    localStorage.setItem("i",i);
                    localStorage.setItem("city",json_data[i].Name);
                    window.location.href = "city.html";
                    
                }
                
            }
            
        }
    })
   
}