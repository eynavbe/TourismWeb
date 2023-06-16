var page_obj={
    hotels: 370,
    hostels: 67,
    BandB: 111,
    all: 548,
    boxRemains: 0
}
$("input[type=checkbox]").on('input',function(){
    page_obj.boxRemains=0;
    localStorage.setItem("countStop2", 0);
})
var test = true;
var count;
var countPage;
var page;
var pageAll = 0;
var valueFilteringPopular;
var boxCount;
function localStoragePage(num){
    page = (localStorage["page"]) * 1;
    page = page + num;
    if (page <= 0) {
        page = 1;
    }
    else{
        countPage=localStorage["FilteringCount"];
        if (countPage>1) {
            for (var i = 1; i < countPage; i++) {
                switch (localStorage["Filtering-" + i]) {
                    case "createBandB":
                    case "createTetelAvivAndCentralBandB":
                    case "createSouthBandB":
                    case "createTheDeadSeaBandB":
                    case "createJudeaAndSamariaBandB":
                    case "createNorthBandB":
                    case "createEilatBandB":
                    case "createJerusalemAndTheSurroundingAreaBandB":
                        pageAll=pageAll+page_obj.BandB;
                    break;
                    case "createHotels":
                    case "createTetelAvivAndCentralHotel":
                    case "createSouthHotel":
                    case "createTheDeadSeaHotel":
                    case "createJudeaAndSamariaHotel":
                    case "createNorthHotel":
                    case "createEilatHotel":
                    case "createJerusalemAndTheSurroundingAreaHotel":
                        pageAll=pageAll+page_obj.hotels;
                    break;
                    case "createHostels":
                    case "createSchool":
                    case "createTetelAvivAndCentralHostel":
                    case "createTetelAvivAndCentralScholl":
                    case "createSouthHostel":
                    case "createSouthSchool":
                    case "createTheDeadSeaHostel":
                    case "createTheDeadSeaSchool":
                    case "createJudeaAndSamariaHostel":
                    case "createJudeaAndSamariaSchool":
                    case "createNorthHostel":
                    case "createNorthSchool":
                    case "createEilatHostel":
                    case "createEilatSchool":
                    case "createJerusalemAndTheSurroundingAreaHostel":
                    case "createJerusalemAndTheSurroundingAreaSchool":
                        pageAll=pageAll+page_obj.hostels;
                    break;
                    case "createTetelAvivAndCentral":
                    case "createSouth":
                    case "createTheDeadSea":
                    case "createJudeaAndSamaria":
                    case "createNorth":
                    case "createEilat":
                    case "createJerusalemAndTheSurroundingArea":
                        pageAll=pageAll+page_obj.all;
                    break;
                }
            }
            if ((pageAll/24) < page) {
                page= page-1;
            }
        }
        
    }
    if (num == -1) {
        localStorage.setItem("countStop2", (localStorage["countStop1"]));
    }
    localStorage.removeItem("page");
    localStorage.setItem("page", page);
    localStoragePageswitch();
}
function localStoragePageswitch(){
    countPage=localStorage["FilteringCount"];
    switch (localStorage["Filtering-" + countPage]) {
    
        case "createBandB":
        createBandB();
        break;
        case "createHotels":
        createHotels();
        break;
        case "createHostels":
        createHostels();
        break;
        case "createSchool":
        createSchool();
        break;
        case "createTetelAvivAndCentral":
        createTetelAvivAndCentral();
        break;
        case "createTetelAvivAndCentralHotel":
        createTetelAvivAndCentralHotel();
        break;
        case "createTetelAvivAndCentralHostel":
        createTetelAvivAndCentralHostel();
        break;
        case "createTetelAvivAndCentralScholl":
        createTetelAvivAndCentralScholl();
        break;
        case "createTetelAvivAndCentralBandB":
        createTetelAvivAndCentralBandB();
        break;
        case "createSouth":
        createSouth();
        break;
        case "createSouthHotel":
        createSouthHotel();
        break;
        case "createSouthHostel":
        createSouthHostel();
        break;
        case "createSouthSchool":
        createSouthSchool();
        break;
        case "createSouthBandB":
        createSouthBandB();
        break;
        case "createTheDeadSeaBandB":
        createTheDeadSeaBandB();
        break;
        case "createJudeaAndSamariaBandB":
        createJudeaAndSamariaBandB();
        break;
        case "createNorthBandB":
        createNorthBandB();
        break;
        case "createEilatBandB":
        createEilatBandB();
        break;
        case "createJerusalemAndTheSurroundingAreaBandB":
        createJerusalemAndTheSurroundingAreaBandB();
        break;
        case "createTheDeadSeaHotel":
        createTheDeadSeaHotel();
        break;
        case "createJudeaAndSamariaHotel":
        createJudeaAndSamariaHotel();
        break;
        case "createNorthHotel":
        createNorthHotel();
        break;
        case "createEilatHotel":
        createEilatHotel();
        break;
        case "createJerusalemAndTheSurroundingAreaHotel":
        createJerusalemAndTheSurroundingAreaHotel();
        break;
        case "createTheDeadSeaHostel":
        createTheDeadSeaHostel();
        break;
        case "createTheDeadSeaSchool":
        createTheDeadSeaSchool();
        break;
        case "createJudeaAndSamariaHostel":
        createJudeaAndSamariaHostel();
        break;
        case "createJudeaAndSamariaSchool":
        createJudeaAndSamariaSchool();
        break;
        case "createNorthHostel":
        createNorthHostel();
        break;
        case "createNorthSchool":
        createNorthSchool();
        break;
        case "createEilatHostel":
        createEilatHostel();
        break;
        case "createEilatSchool":
        createEilatSchool();
        break;
        case "createJerusalemAndTheSurroundingAreaHostel":
        createJerusalemAndTheSurroundingAreaHostel();
        break;
        case "createJerusalemAndTheSurroundingAreaSchool":
        createJerusalemAndTheSurroundingAreaSchool();
        break;
        case "createTheDeadSea":
        createTheDeadSea();
        break;
        case "createJudeaAndSamaria":
        createJudeaAndSamaria();
        break;
        case "createNorth":
        createNorth();
        break;
        case "createEilat":
        createEilat();
        break;
        case "createJerusalemAndTheSurroundingArea":
        createJerusalemAndTheSurroundingArea();
        break;
    }
}
function countStart() {console.log(count);

    if ((localStorage["page"]) == 1) {
        count=0;
    }
    else{ 
        countPage=(localStorage["FilteringCount"])*1;console.log("countPage: "+countPage);
        
        // if ((page_obj.boxRemains>0) && (localStorage["Filtering-1"] != "creaTetelAvivAndCentral")) {
        //     count = 0;  
        // }
        // else{
            if (countPage > 1) {
                if ((localStorage["countStop2"]) != 0) {
                    count = localStorage["countStop2"];
                    count=count*1;
                    for (var i = 1; i < countPage; i++) {console.log("i"+i);console.log("localStorage[Filtering- + i]"+localStorage["Filtering-" + i]);
                        switch (localStorage["Filtering-" + i]) {
                            case "createBandB":console.log( "createBandB");
                            
                            case "createTetelAvivAndCentralBandB":
                            case "createSouthBandB":
                            case "createTheDeadSeaBandB":
                            case "createJudeaAndSamariaBandB":
                            case "createNorthBandB":
                            case "createEilatBandB":
                            case "createJerusalemAndTheSurroundingAreaBandB":
                            if( count >= page_obj.BandB){
                                count= count - page_obj.BandB;
                            }  
                            break;
                            case "createHotels":
                            case "createTetelAvivAndCentralHotel":
                            case "createSouthHotel":
                            case "createTheDeadSeaHotel":
                            case "createJudeaAndSamariaHotel":
                            case "createNorthHotel":
                            case "createEilatHotel":
                            case "createJerusalemAndTheSurroundingAreaHotel":
                            if(count >= page_obj.hotels){
                                count= count - page_obj.hotels;
                            } 
                            break;
                            case "createHostels":
                            case "createSchool":
                            case "createTetelAvivAndCentralHostel":
                            case "createTetelAvivAndCentralScholl":
                            case "createSouthHostel":
                            case "createSouthSchool":
                            case "createTheDeadSeaHostel":
                            case "createTheDeadSeaSchool":
                            case "createJudeaAndSamariaHostel":
                            case "createJudeaAndSamariaSchool":
                            case "createNorthHostel":
                            case "createNorthSchool":
                            case "createEilatHostel":
                            case "createEilatSchool":
                            case "createJerusalemAndTheSurroundingAreaHostel":
                            case "createJerusalemAndTheSurroundingAreaSchool":
                            if (count >= page_obj.hostels) {
                                 count=count - page_obj.hostels;
                            }   
                            break;
                            case "createTetelAvivAndCentral":
                            case "createSouth":
                            case "createTheDeadSea":
                            case "createJudeaAndSamaria":
                            case "createNorth":
                            case "createEilat":
                            case "createJerusalemAndTheSurroundingArea":
                            if (count >= page_obj.all) {
                                count=count - page_obj.all;
                            }   
                            break;
                        } console.log((count));  
                    }
                }
                else{
                    count=(localStorage["page"])*1;
                    if ((page_obj.boxRemains>0)) { console.log("page_obj.boxRemains "+page_obj.boxRemains);
                    
                        count = 0;  
                    }
                    for (var i = 1; i < countPage; i++) {
                        switch (localStorage["Filtering-" + i]) {
                            case "createBandB":
                            case "createTetelAvivAndCentralBandB":
                            case "createSouthBandB":
                            case "createTheDeadSeaBandB":
                            case "createJudeaAndSamariaBandB":
                            case "createNorthBandB":
                            case "createEilatBandB":
                            case "createJerusalemAndTheSurroundingAreaBandB":
                                count=((count-1)*24) - page_obj.BandB;
                            break;
                            case "createHotels":
                            case "createTetelAvivAndCentralHotel":
                            case "createSouthHotel":
                            case "createTheDeadSeaHotel":
                            case "createJudeaAndSamariaHotel":
                            case "createNorthHotel":
                            case "createEilatHotel":
                            case "createJerusalemAndTheSurroundingAreaHotel":
                                count=((count-1)*24) - page_obj.hotels;
                            break;
                            case "createHostels":
                            case "createSchool":
                            case "createTetelAvivAndCentralHostel":
                            case "createTetelAvivAndCentralScholl":
                            case "createSouthHostel":
                            case "createSouthSchool":
                            case "createTheDeadSeaHostel":
                            case "createTheDeadSeaSchool":
                            case "createJudeaAndSamariaHostel":
                            case "createJudeaAndSamariaSchool":
                            case "createNorthHostel":
                            case "createNorthSchool":
                            case "createEilatHostel":
                            case "createEilatSchool":
                            case "createJerusalemAndTheSurroundingAreaHostel":
                            case "createJerusalemAndTheSurroundingAreaSchool":
                                count=((count-1)*24) - page_obj.hostels;
                            break;
                            case "createTetelAvivAndCentral":
                            case "createSouth":
                            case "createTheDeadSea":
                            case "createJudeaAndSamaria":
                            case "createNorth":
                            case "createEilat":
                            case "createJerusalemAndTheSurroundingArea":
                                count=((count-1)*24) - page_obj.all;
                            break;
                        } console.log("count "+count);
                          
                    } 
                } 
            }
            else{
                if ((localStorage["countStop2"]) != 0) {
                    count = localStorage["countStop2"];console.log(count);
                    count=count*1;
                }
                else{
                    count=(localStorage["page"])*1;
                    count=(count-1)*24;
                }  
            }  
        // } 
    }console.log((count));  
    return count;
}
function createBandB(){  
    count = countStart();
    boxCount = 0;
    if ((count+24>page_obj.BandB) && (count < page_obj.BandB)) {
        countPage=(localStorage["FilteringCount"]) *1;
        localStorage.removeItem("FilteringCount");
        localStorage.setItem("FilteringCount", (countPage+1));
        valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
        $(".lodging").empty();
        $.ajax({
            url:"_JSON/JSON_B_and_B.json",
            crossDomain:false,
            dataType:"json",
            success:function(json_BandB){
                valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
                if ((valueFilteringPopular.length > 0) && (localStorage["countStop2"] != 0)) {
                    localStorage.setItem("countStop1", (localStorage["countStop2"]));
                }
                for (var j = count; j < json_BandB.length; j++) {
                    var item=json_BandB[j];
                    for (let i = 0; i < valueFilteringPopular.length; i++) {
                        if (valueFilteringPopular[i] == "כשר") {
                            if(item.Kosher == "לא"){
                                test =false;
                            }
                        }
                        if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                            if(item.WiFi == "לא"){
                                test =false;
                            }
                        }
                        if (valueFilteringPopular[i] == "חנייה") {
                            if(item.Parking == "לא"){
                                test =false;
                            }
                        }
                        if (valueFilteringPopular[i] == "נגישות") {
                            if(item.Accessibility == "לא"){
                                test =false;
                            }
                        }
                    }
                    if (test == true) {
                        var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                        lodgingMainBandB1.addToHTML();
                        boxCount++;
                    }
                    test = true;
                }
                localStorage.setItem("countStop2", (json_BandB.length));
                page_obj.boxRemains = 24 - boxCount;
                localStoragePageswitch();
            }    
        })   
    }
    else{
        if (page_obj.boxRemains>0) {
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $.ajax({
                url:"_JSON/JSON_B_and_B.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_BandB){
                    valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
                    if (valueFilteringPopular.length > 0) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        while ((count < json_BandB.length) && (boxCount < page_obj.boxRemains)) {
                            var item=json_BandB[count];
                            for (let i = 0; i < valueFilteringPopular.length; i++) {
                                if (valueFilteringPopular[i] == "כשר") {
                                    if(item.Kosher == "לא"){
                                        test =false;
                                    }
                                }
                                if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                    if(item.WiFi == "לא"){
                                        test =false;
                                    }
                                }
                                if (valueFilteringPopular[i] == "חנייה") {
                                    if(item.Parking == "לא"){
                                        test =false;
                                    }
                                }
                                if (valueFilteringPopular[i] == "נגישות") {
                                    if(item.Accessibility == "לא"){
                                        test =false;
                                    }
                                }
                            }
                            if (test == true) {
                                var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainBandB1.addToHTML();
                                boxCount++;
                                
                            }
                            test =true; 
                            count++;
                        }
                        localStorage.setItem("countStop2", (count));
                    }
                    else{
                        for (let i = count; i < page_obj.boxRemains; i++) {
                            var item=json_BandB[i];
                            var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                            lodgingMainBandB1.addToHTML();
                        }
                    }
                    page_obj.boxRemains=0;
                }     
            }) 
        }
        else{
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $(".lodging").empty();
            $.ajax({
                url:"_JSON/JSON_B_and_B.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_BandB){
                    if ($(".lodging").is(':empty')) {
                        if (valueFilteringPopular.length > 0) {
                            if (localStorage["countStop2"] != 0) {
                                localStorage.setItem("countStop1", (localStorage["countStop2"]));
                            }
                            while ((count < json_BandB.length) && (boxCount < 24)) {
                                var item=json_BandB[count];
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                                if (test == true) {
                                    var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainBandB1.addToHTML();
                                    boxCount++;  
                                }
                                test =true; 
                                count++;
                            }
                            localStorage.setItem("countStop2", (count));
                        }
                        else{
                            for (let i = count; i < count+24; i++) {
                                var item=json_BandB[i];
                                var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainBandB1.addToHTML();
                            }
                        }
                            
                    }
                    
                }
            })
        }
    }   
}
function createHotels(){  
    count = countStart();
    if ((count+24>page_obj.hotels) && (count < page_obj.hotels)) {
        boxCount=0;
        countPage=(localStorage["FilteringCount"]) *1;
        localStorage.removeItem("FilteringCount");
        localStorage.setItem("FilteringCount", (countPage+1));
        valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
        $(".lodging").empty();
        $.ajax({
            url:"_JSON/JSON_Hotels.json",
            crossDomain:false,
            dataType:"json",
            success:function(json_Hotels){
                valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
                if ((valueFilteringPopular.length > 0) && (localStorage["countStop2"] != 0)) {
                    localStorage.setItem("countStop1", (localStorage["countStop2"]));
                }
                for (var j = count; j < json_Hotels.length; j++) {
                    var item=json_Hotels[j];
                    for (let i = 0; i < valueFilteringPopular.length; i++) {
                        if (valueFilteringPopular[i] == "כשר") {
                            if(item.Kosher == "לא"){
                                test =false;
                            }
                        }
                        if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                            if(item.WiFi == "לא"){
                                test =false;
                            }
                        }
                        if (valueFilteringPopular[i] == "חנייה") {
                            if(item.Parking == "לא"){
                                test =false;
                            }
                        }
                        if (valueFilteringPopular[i] == "נגישות") {
                            if(item.Accessibility == "לא"){
                                test =false;
                            }
                        }
                        if (valueFilteringPopular[i] == "בריכת שחייה") {
                            if(item.Swimming_Pool == "לא"){
                                test =false;
                            }
                        }
                    }
                    if (test == true) {
                        var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                        lodgingMainHotels1.addToHTML();
                        boxCount++;
                    }
                    test = true;
                }
                localStorage.setItem("countStop2", (json_Hotels.length));
                page_obj.boxRemains = 24 - boxCount;
                localStoragePageswitch();
            }
        })  
    }
    else{
        if (page_obj.boxRemains>0) {
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $.ajax({
                url:"_JSON/JSON_Hotels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hotels){
                    valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
                    if (valueFilteringPopular.length > 0) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        while ((count < json_Hotels.length) && (boxCount < page_obj.boxRemains)) {
                            var item=json_Hotels[count];
                            for (let i = 0; i < valueFilteringPopular.length; i++) {
                                if (valueFilteringPopular[i] == "כשר") {
                                    if(item.Kosher == "לא"){
                                        test =false;
                                    }
                                }
                                if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                    if(item.WiFi == "לא"){
                                        test =false;
                                    }
                                }
                                if (valueFilteringPopular[i] == "חנייה") {
                                    if(item.Parking == "לא"){
                                        test =false;
                                    }
                                }
                                if (valueFilteringPopular[i] == "נגישות") {
                                    if(item.Accessibility == "לא"){
                                        test =false;
                                    }
                                }
                                if (valueFilteringPopular[i] == "בריכת שחייה") {
                                    if(item.Swimming_Pool == "לא"){
                                        test =false;
                                    }
                                }
                            }
                            if (test == true) {
                                var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                lodgingMainHotels1.addToHTML();
                                boxCount++;
                            }
                            test = true; 
                            count++;
                        }
                        localStorage.setItem("countStop2", (count));
                    }
                    else{
                        for (let i = count; i < page_obj.boxRemains; i++) {
                            var item=json_Hotels[i];
                            var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                            lodgingMainHotels1.addToHTML();
                        }
                    }
                    page_obj.boxRemains=0; 
                }   
            })  
        }
        else{
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $(".lodging").empty();
            $.ajax({
                url:"_JSON/JSON_Hotels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hotels){
                    if ($(".lodging").is(':empty')) {
                        if (valueFilteringPopular.length > 0) {
                            if (localStorage["countStop2"] != 0) {
                                localStorage.setItem("countStop1", (localStorage["countStop2"]));
                            }
                            while ((count < json_Hotels.length) && (boxCount < 24)) {
                                var item=json_Hotels[count];
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "בריכת שחייה") {
                                        if(item.Swimming_Pool == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                                if (test == true) {
                                    var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                    lodgingMainHotels1.addToHTML();
                                    boxCount++; 
                                }
                                test = true;
                                count++;
                            }
                            localStorage.setItem("countStop2", (count));
                        }
                        else{
                            for (let i = count; i < count+24; i++) {
                                var item=json_Hotels[i];
                                var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                lodgingMainHotels1.addToHTML();
                            }
                        }
                    }
                }    
            })  
        }
    } 
}
function createHostels(){
    count = countStart();
    if (((count + 24) > page_obj.hostels) && (count < page_obj.hostels)) {
        boxCount=0;
        countPage=(localStorage["FilteringCount"]) *1;
        localStorage.removeItem("FilteringCount");
        localStorage.setItem("FilteringCount", (countPage+1));
        valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
        $(".lodging").empty();
        $.ajax({
            url:"_JSON/JSON_Hostels.json",
            crossDomain:false,
            dataType:"json",
            success:function(json_Hostels){
                valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
                if ((localStorage["countStop2"] != 0)) {
                    localStorage.setItem("countStop1", (localStorage["countStop2"]));
                }
                for (var j = count; j < json_Hostels.length; j++) {
                    var item=json_Hostels[j];
                    if (item.Accommodation_Type != "בית ספר שדה") {
                        for (let i = 0; i < valueFilteringPopular.length; i++) {
                            if (valueFilteringPopular[i] == "כשר") {
                                if(item.Kosher == "לא"){
                                    test =false;
                                }
                            }
                            if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                if(item.WiFi == "לא"){
                                    test =false;
                                }
                            }
                            if (valueFilteringPopular[i] == "חנייה") {
                                if(item.Parking == "לא"){
                                    test =false;
                                }
                            }
                            if (valueFilteringPopular[i] == "נגישות") {
                                if(item.Accessibility == "לא"){
                                    test =false;
                                }
                            }
                            if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                if(item.Separated_Rooms == "לא"){
                                    test =false;
                                }
                            }
                        }
                        if (test == true) {
                            var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                            lodgingMainHostels1.addToHTML();
                            boxCount++;
                        }
                    }
                    test = true; 
                }
                localStorage.setItem("countStop2", (json_Hostels.length));
                page_obj.boxRemains = 24 - boxCount;
                localStoragePageswitch();
            }
        }) 
    }
    else{
        if (page_obj.boxRemains>0) {
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $.ajax({
                url:"_JSON/JSON_Hostels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hostels){
                    valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    }
                    while ((count < json_Hostels.length) && (boxCount < page_obj.boxRemains)) {
                        var item=json_Hostels[count];
                        if (valueFilteringPopular.length > 0) {
                            if (item.Accommodation_Type != "בית ספר שדה") {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                        if(item.Separated_Rooms == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                            
                            if (test == true) {
                                var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainHostels1.addToHTML();
                                boxCount++;
                            }
                        }
                            test = true;
                        }
                        else{
                            if (item.Accommodation_Type != "בית ספר שדה") {
                                var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainHostels1.addToHTML();
                                boxCount++;
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                    page_obj.boxRemains=0;
                }
            }) 
        }
        else{
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $(".lodging").empty();
            $.ajax({
                url:"_JSON/JSON_Hostels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hostels){
                    if ($(".lodging").is(':empty')) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        while ((count < json_Hostels.length) && (boxCount < 24)) {
                            var item=json_Hostels[count];
                            if (valueFilteringPopular.length > 0) {
                                if (item.Accommodation_Type != "בית ספר שדה") {
                                    for (let i = 0; i < valueFilteringPopular.length; i++) {
                                        if (valueFilteringPopular[i] == "כשר") {
                                            if(item.Kosher == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                            if(item.WiFi == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חנייה") {
                                            if(item.Parking == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "נגישות") {
                                            if(item.Accessibility == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                            if(item.Separated_Rooms == "לא"){
                                                test =false;
                                            }
                                        }
                                    }
                                    if (test == true) {
                                        var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                        lodgingMainHostels1.addToHTML();
                                        boxCount++; 
                                    }
                                    test = true;
                                    
                                }
                            }
                            else{
                                if (item.Accommodation_Type != "בית ספר שדה") {
                                    var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainHostels1.addToHTML();
                                    boxCount++;
                                    
                                }
                                
                            }
                            count++;
                        }
                        localStorage.setItem("countStop2", (count));
                    }
                }
            })  
        }
    }  
}
function createSchool(){
    count = countStart();
    if (((count + 24) > page_obj.hostels) && (count < page_obj.hostels)) {
        boxCount=0;
        countPage=(localStorage["FilteringCount"]) *1;
        localStorage.removeItem("FilteringCount");
        localStorage.setItem("FilteringCount", (countPage+1));
        valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
        $(".lodging").empty();
        $.ajax({
            url:"_JSON/JSON_Hostels.json",
            crossDomain:false,
            dataType:"json",
            success:function(json_Hostels){
                valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
                if ((localStorage["countStop2"] != 0)) {
                    localStorage.setItem("countStop1", (localStorage["countStop2"]));
                }
                for (var j = count; j < json_Hostels.length; j++) {
                    var item=json_Hostels[j];
                    if (item.Accommodation_Type == "בית ספר שדה") {
                        for (let i = 0; i < valueFilteringPopular.length; i++) {
                            if (valueFilteringPopular[i] == "כשר") {
                                if(item.Kosher == "לא"){
                                    test =false;
                                }
                            }
                            if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                if(item.WiFi == "לא"){
                                    test =false;
                                }
                            }
                            if (valueFilteringPopular[i] == "חנייה") {
                                if(item.Parking == "לא"){
                                    test =false;
                                }
                            }
                            if (valueFilteringPopular[i] == "נגישות") {
                                if(item.Accessibility == "לא"){
                                    test =false;
                                }
                            }
                            if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                if(item.Separated_Rooms == "לא"){
                                    test =false;
                                }
                            }
                        }
                        if (test == true) {
                            var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                            lodgingMainHostels1.addToHTML();
                            boxCount++;
                        }
                    }
                    test = true; 
                }
                localStorage.setItem("countStop2", (json_Hostels.length));
                page_obj.boxRemains = 24 - boxCount;
                localStoragePageswitch();
            }
        }) 
    }
    else{
        if (page_obj.boxRemains>0) {
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $.ajax({
                url:"_JSON/JSON_Hostels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hostels){
                    valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    }
                    while ((count < json_Hostels.length) && (boxCount < page_obj.boxRemains)) {
                        var item=json_Hostels[count];
                        if (valueFilteringPopular.length > 0) {
                            if (item.Accommodation_Type == "בית ספר שדה") {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                        if(item.Separated_Rooms == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                                if (test == true) {
                                    var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainHostels1.addToHTML();
                                    boxCount++;
                                }
                            }
                            test = true;
                        }
                        else{
                            if (item.Accommodation_Type == "בית ספר שדה") {
                                var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainHostels1.addToHTML();
                                boxCount++;
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                    if (count== json_Hostels.length) {
                        countPage=(localStorage["FilteringCount"]) *1;
                        localStorage.removeItem("FilteringCount");
                        localStorage.setItem("FilteringCount", (countPage+1));
                    }
                    page_obj.boxRemains=0;
                }
            })  
        }
        else{
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $(".lodging").empty();
            $.ajax({
                url:"_JSON/JSON_Hostels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hostels){
                    if ($(".lodging").is(':empty')) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        while ((count < json_Hostels.length) && (boxCount < 24)) {
                        
                            var item=json_Hostels[count];
                            if (valueFilteringPopular.length > 0) {
                                if (item.Accommodation_Type == "בית ספר שדה") {
                                    for (let i = 0; i < valueFilteringPopular.length; i++) {
                                        if (valueFilteringPopular[i] == "כשר") {
                                            if(item.Kosher == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                            if(item.WiFi == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חנייה") {
                                            if(item.Parking == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "נגישות") {
                                            if(item.Accessibility == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                            if(item.Separated_Rooms == "לא"){
                                                test =false;
                                            }
                                        }
                                    }
                                    if (test == true) {
                                        var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                        lodgingMainHostels1.addToHTML();
                                        boxCount++; 
                                    }
                                    test = true;
                                    
                                }
                            }
                            else{
                                if (item.Accommodation_Type == "בית ספר שדה") {
                                    var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainHostels1.addToHTML();
                                    boxCount++;
                                    
                                }
                               
                            }
                            count++;
                        }
                        localStorage.setItem("countStop2", (count));
                    }
                }
            })  
        }
    }  
}
function createTetelAvivAndCentral(){
    count = countStart();
    boxCount=0;
    valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
    if (count < page_obj.hotels) {
        if (page_obj.boxRemains == 0) {
            $(".lodging").empty();
        }
        $.ajax({
            url:"_JSON/JSON_Hotels.json",
            crossDomain:false,
            dataType:"json",
            success:function(json_Hotels){   
                if ($(".lodging").is(':empty')) {
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    } 
                    while ((count < json_Hotels.length) && (boxCount < 24)) {
                        var item=json_Hotels[count];
                        if (valueFilteringPopular.length > 0) {
                            if ((item.Region == "תל אביב והמרכז")) {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "בריכת שחייה") {
                                        if(item.Swimming_Pool == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                                if (test == true) {
                                    var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                    lodgingMainHotels1.addToHTML();
                                    boxCount++; 
                                }
                                test = true;
                            }
                        }
                        else{
                            if (item.Region == "תל אביב והמרכז") {
                                var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                lodgingMainHotels1.addToHTML();
                                boxCount++; 
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                    if (count == page_obj.hotels) {
                        page_obj.boxRemains=24-boxCount;
                        localStoragePageswitch();
                    }
                } 
            }
        }) 
    }
    boxCount=0;
    if ((count >= page_obj.hotels) && (count < (page_obj.hotels + page_obj.hostels))) {
        if (localStorage["countStop2"] != 0) {
            localStorage.setItem("countStop1", (localStorage["countStop2"]));
        }
        valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
        if (page_obj.boxRemains == 0) {
            $(".lodging").empty();
        }
        $.ajax({
        url:"_JSON/JSON_Hostels.json",
        crossDomain:false,
        dataType:"json",
        success:function(json_Hostels){
            if (page_obj.boxRemains == 0) {
                if ($(".lodging").is(':empty')) {
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    }
                    while (((count-page_obj.hotels) < json_Hostels.length) && (boxCount < 24)) {
                        var item=json_Hostels[count-page_obj.hotels];
                        if (valueFilteringPopular.length > 0) {
                            if ((item.Region == "תל אביב והמרכז")) {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                        test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                        if(item.Separated_Rooms == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                                if (test == true) {
                                    var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainHostels1.addToHTML();
                                    boxCount++; 
                                }
                                test = true;
                            }
                        }
                        else{
                            if (item.Region == "תל אביב והמרכז") {
                                var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainHostels1.addToHTML();
                                boxCount++;
                            }
                        }
                        count++;
                    }
                }
                localStorage.setItem("countStop2", (count));
                }
                else{
                    while (((count-page_obj.hotels) < json_Hostels.length) && (count < (page_obj.hostels+page_obj.hotels)) && (boxCount < page_obj.boxRemains)) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        var item=json_Hostels[count-page_obj.hotels];
                        if (valueFilteringPopular.length > 0) {
                            if ((item.Region == "תל אביב והמרכז")) {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                        if(item.Separated_Rooms == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                                if (test == true) {
                                    var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainHostels1.addToHTML();
                                    boxCount++; 
                                }
                                test = true;
                            }
                        }
                        else{
                            if (item.Region == "תל אביב והמרכז") {
                                var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainHostels1.addToHTML();
                                boxCount++;
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                }
                if (boxCount >= page_obj.boxRemains) {
                    page_obj.boxRemains=0;
                }
                else{
                    if (count== (page_obj.hostels+page_obj.hotels)) {
                        page_obj.boxRemains=page_obj.boxRemains-boxCount;
                        localStoragePageswitch();
                    }
                }
            }    
        })
    }
    boxCount=0;
    if ((count >= (page_obj.hotels + page_obj.hostels)) && (count < (page_obj.hotels + page_obj.hostels + page_obj.BandB))) {
        if (localStorage["countStop2"] != 0) {
            localStorage.setItem("countStop1", (localStorage["countStop2"]));
        }
        valueFilteringPopular = JSON.parse(localStorage.getItem("valueFilteringPopular"));
        if (page_obj.boxRemains == 0) {
            $(".lodging").empty();
        }
        $.ajax({
            url:"_JSON/JSON_B_and_B.json",
            crossDomain:false,
            dataType:"json",
            success:function(json_BandB){  
                if (page_obj.boxRemains == 0) {
                    if ($(".lodging").is(':empty')) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        while (((count-page_obj.hotels-page_obj.hostels) < json_BandB.length) && (boxCount < 24)) {
                            var item=json_BandB[count-page_obj.hotels-page_obj.hostels];
                            if (valueFilteringPopular.length > 0) {
                                if ((item.Region == "תל אביב והמרכז")) {
                                    for (let i = 0; i < valueFilteringPopular.length; i++) {
                                        if (valueFilteringPopular[i] == "כשר") {
                                            if(item.Kosher == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                            if(item.WiFi == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חנייה") {
                                            if(item.Parking == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "נגישות") {
                                            if(item.Accessibility == "לא"){
                                                test =false;
                                            }
                                        }
                                    }
                                    if (test == true) {
                                        var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                        lodgingMainBandB1.addToHTML();
                                        boxCount++; 
                                    }
                                    test = true;
                                }
                            }
                            else{
                                if (item.Region == "תל אביב והמרכז") {
                                    var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainBandB1.addToHTML();
                                    boxCount++;
                                } 
                            }
                            count++;
                        }
                    }
                    localStorage.setItem("countStop2", (count));
                }
                else{
                    while (((count-page_obj.hotels-page_obj.hostels) < json_BandB.length) && (boxCount < page_obj.boxRemains)) {
                        var item=json_BandB[count-page_obj.hotels-page_obj.hostels];
                        if (valueFilteringPopular.length > 0) {
                            if ((item.Region == "תל אביב והמרכז")) {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                                if (test == true) {
                                    var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainBandB1.addToHTML();
                                    boxCount++; 
                                }
                                test = true;  
                            }
                        }
                        else{
                            if (item.Region == "תל אביב והמרכז") {
                                var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainBandB1.addToHTML();
                                boxCount++;  
                            }
                        }
                        if (count == page_obj.BandB) {
                            boxCount=page_obj.BandB;
                        }
                        count++;
                    }
                    page_obj.boxRemains=0;
                    localStorage.setItem("countStop2", (count));
                }    
            }   
        }) 
    }  
}
function createTetelAvivAndCentralHotel(){
    count = countStart();
        if (page_obj.boxRemains>0) {
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $.ajax({
                url:"_JSON/JSON_Hotels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hotels){
                    valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    }
                    while ((count < json_Hotels.length) && (boxCount < page_obj.boxRemains)) {
                        var item=json_Hotels[count];
                        if (valueFilteringPopular.length > 0) {
                            if (item.Region == "תל אביב והמרכז") {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "בריכת שחייה") {
                                        if(item.Swimming_Pool == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                            
                            if (test == true) {
                                var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                lodgingMainHotels1.addToHTML();
                                boxCount++;
                            }
                        }
                            test = true;
                        }
                        else{
                            if (item.Region == "תל אביב והמרכז") {
                                var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                lodgingMainHotels1.addToHTML();
                                boxCount++;
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                    if (count== page_obj.hotels) {
                        countPage=(localStorage["FilteringCount"]) *1;
                        localStorage.removeItem("FilteringCount");
                        localStorage.setItem("FilteringCount", (countPage+1));
                    }
                    if (boxCount >= page_obj.boxRemains) {
                        page_obj.boxRemains=0;
                    }
                    else{
                        if (count== page_obj.hotels) {
                            page_obj.boxRemains=page_obj.boxRemains-boxCount;
                            localStoragePageswitch();
                        }
                    }
                }
            }) 
        }
        else{
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $(".lodging").empty();
            $.ajax({
                url:"_JSON/JSON_Hotels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hotels){
                    if ($(".lodging").is(':empty')) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        while ((count < json_Hotels.length) && (boxCount < 24)) {
                            var item=json_Hotels[count];
                            if (valueFilteringPopular.length > 0) {
                                if (item.Region == "תל אביב והמרכז") {
                                    for (let i = 0; i < valueFilteringPopular.length; i++) {
                                        if (valueFilteringPopular[i] == "כשר") {
                                            if(item.Kosher == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                            if(item.WiFi == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חנייה") {
                                            if(item.Parking == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "נגישות") {
                                            if(item.Accessibility == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "בריכת שחייה") {
                                            if(item.Swimming_Pool == "לא"){
                                                test =false;
                                            }
                                        }
                                    }
                                    if (test == true) {
                                        var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                        lodgingMainHotels1.addToHTML();
                                        boxCount++; 
                                    }
                                    test = true;
                                    
                                }
                            }
                            else{
                                if (item.Region == "תל אביב והמרכז") {
                                    var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                    lodgingMainHotels1.addToHTML();
                                    boxCount++; 
                                } 
                            }
                            count++;
                        }
                        localStorage.setItem("countStop2", (count));
                        if (count == page_obj.hotels) {
                            page_obj.boxRemains=24-boxCount;
                            countPage=(localStorage["FilteringCount"]) *1;
                            localStorage.removeItem("FilteringCount");
                            localStorage.setItem("FilteringCount", (countPage+1));
                            localStoragePageswitch();
                        }
                    }
                }
            })  
        }
    }  
function createTetelAvivAndCentralHostel(){
    count = countStart();
        if (page_obj.boxRemains>0) {
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $.ajax({
                url:"_JSON/JSON_Hostels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hostels){
                    valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    }
                    while ((count < json_Hostels.length) && (boxCount < page_obj.boxRemains)) {
                        var item=json_Hostels[count];
                        if (valueFilteringPopular.length > 0) {
                            if ((item.Accommodation_Type != "בית ספר שדה") && (item.Region == "תל אביב והמרכז")) {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                        if(item.Separated_Rooms == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                            
                            if (test == true) {
                                var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainHostels1.addToHTML();
                                boxCount++;
                            }
                        }
                            test = true;
                        }
                        else{
                            if ((item.Accommodation_Type != "בית ספר שדה") && (item.Region == "תל אביב והמרכז")) {
                                var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainHostels1.addToHTML();
                                boxCount++;
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                    if (count== page_obj.hostels) {
                        countPage=(localStorage["FilteringCount"]) *1;
                        localStorage.removeItem("FilteringCount");
                        localStorage.setItem("FilteringCount", (countPage+1));
                    }
                    if (boxCount >= page_obj.boxRemains) {
                        page_obj.boxRemains=0;
                    }
                    else{
                        if (count== page_obj.hostels) {
                            page_obj.boxRemains=page_obj.boxRemains-boxCount;
                            localStoragePageswitch();
                        }
                    }
                }
            }) 
        }
        else{
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $(".lodging").empty();
            $.ajax({
                url:"_JSON/JSON_Hostels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hostels){
                    if ($(".lodging").is(':empty')) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        while ((count < json_Hostels.length) && (boxCount < 24)) {
                            var item=json_Hostels[count];
                            if (valueFilteringPopular.length > 0) {
                                if ((item.Accommodation_Type != "בית ספר שדה") && (item.Region == "תל אביב והמרכז")) {
                                    for (let i = 0; i < valueFilteringPopular.length; i++) {
                                        if (valueFilteringPopular[i] == "כשר") {
                                            if(item.Kosher == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                            if(item.WiFi == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חנייה") {
                                            if(item.Parking == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "נגישות") {
                                            if(item.Accessibility == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                            if(item.Separated_Rooms == "לא"){
                                                test =false;
                                            }
                                        }
                                    }
                                    if (test == true) {
                                        var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                        lodgingMainHostels1.addToHTML();
                                        boxCount++; 
                                    }
                                    test = true;
                                    
                                }
                            }
                            else{
                                if ((item.Accommodation_Type != "בית ספר שדה") && (item.Region == "תל אביב והמרכז")) {
                                    var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainHostels1.addToHTML();
                                    boxCount++;
                                    
                                }
                                
                            }
                            count++;
                        }
                        localStorage.setItem("countStop2", (count));
                        if (count == page_obj.hostels) {
                            page_obj.boxRemains=24-boxCount;
                            countPage=(localStorage["FilteringCount"]) *1;
                            localStorage.removeItem("FilteringCount");
                            localStorage.setItem("FilteringCount", (countPage+1));
                            localStoragePageswitch();
                        }
                    }
                }
            })  
        }
}
function createTetelAvivAndCentralScholl(){
    count = countStart();
        if (page_obj.boxRemains>0) {
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $.ajax({
                url:"_JSON/JSON_Hostels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hostels){
                    valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    }
                    while ((count < json_Hostels.length) && (boxCount < page_obj.boxRemains)) {
                        var item=json_Hostels[count];
                        if (valueFilteringPopular.length > 0) {
                            if ((item.Accommodation_Type == "בית ספר שדה") && (item.Region == "תל אביב והמרכז")) {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                        if(item.Separated_Rooms == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                                if (test == true) {
                                    var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainHostels1.addToHTML();
                                    boxCount++;
                                }
                            }
                            test = true;
                        }
                        else{
                            if ((item.Accommodation_Type == "בית ספר שדה") && (item.Region == "תל אביב והמרכז")) {
                                var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainHostels1.addToHTML();
                                boxCount++;
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                    if (count== json_Hostels.length) {
                        countPage=(localStorage["FilteringCount"]) *1;
                        localStorage.removeItem("FilteringCount");
                        localStorage.setItem("FilteringCount", (countPage+1));
                    }
                    if (boxCount >= page_obj.boxRemains) {
                        page_obj.boxRemains=0;
                    }
                    else{
                        if (count== page_obj.hostels) {
                            page_obj.boxRemains=page_obj.boxRemains-boxCount;
                            localStoragePageswitch();
                        }
                    }
                }
            })  
        }
        else{
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $(".lodging").empty();
            $.ajax({
                url:"_JSON/JSON_Hostels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hostels){
                    if ($(".lodging").is(':empty')) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        while ((count < json_Hostels.length) && (boxCount < 24)) {
                            var item=json_Hostels[count];
                            if (valueFilteringPopular.length > 0) {
                                if ((item.Accommodation_Type == "בית ספר שדה") && (item.Region == "תל אביב והמרכז")) {
                                    for (let i = 0; i < valueFilteringPopular.length; i++) {
                                        if (valueFilteringPopular[i] == "כשר") {
                                            if(item.Kosher == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                            if(item.WiFi == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חנייה") {
                                            if(item.Parking == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "נגישות") {
                                            if(item.Accessibility == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                            if(item.Separated_Rooms == "לא"){
                                                test =false;
                                            }
                                        }
                                    }
                                    if (test == true) {
                                        var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                        lodgingMainHostels1.addToHTML();
                                        boxCount++; 
                                    }
                                    test = true;
                                    
                                }
                            }
                            else{
                                if ((item.Accommodation_Type == "בית ספר שדה") && (item.Region == "תל אביב והמרכז")) {
                                    var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainHostels1.addToHTML();
                                    boxCount++;
                                    
                                }
                               
                            }
                            count++;
                        }
                        localStorage.setItem("countStop2", (count));
                        if (count == page_obj.hostels) {
                            page_obj.boxRemains=24-boxCount;
                            countPage=(localStorage["FilteringCount"]) *1;
                            localStorage.removeItem("FilteringCount");
                            localStorage.setItem("FilteringCount", (countPage+1));
                            localStoragePageswitch();
                        }
                    }
                }
            })  
        }
}
function createTetelAvivAndCentralBandB(){
    count = countStart();
        if (page_obj.boxRemains>0) {
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $.ajax({
                url:"_JSON/JSON_B_and_B.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_BandB){
                    valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    }
                    while ((count < json_BandB.length) && (boxCount < page_obj.boxRemains)) {
                        var item=json_BandB[count];
                        if (valueFilteringPopular.length > 0) {
                            if (item.Region == "תל אביב והמרכז") {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                            
                            if (test == true) {
                                var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainBandB1.addToHTML();
                            }
                        }
                            test = true;
                        }
                        else{
                            if (item.Region == "תל אביב והמרכז") {
                                var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainBandB1.addToHTML();
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                    if (count== page_obj.BandB) {
                        countPage=(localStorage["FilteringCount"]) *1;
                        localStorage.removeItem("FilteringCount");
                        localStorage.setItem("FilteringCount", (countPage+1));
                    }
                    if (boxCount >= page_obj.boxRemains) {
                        page_obj.boxRemains=0;
                    }
                    else{
                        if (count== page_obj.BandB) {
                            page_obj.boxRemains=page_obj.boxRemains-boxCount;
                            localStoragePageswitch();
                        }
                    }
                }
            }) 
        }
        else{
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $(".lodging").empty();
            $.ajax({
                url:"_JSON/JSON_B_and_B.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_BandB){
                    if ($(".lodging").is(':empty')) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        while ((count < json_BandB.length) && (boxCount < 24)) {
                            var item=json_BandB[count];
                            if (valueFilteringPopular.length > 0) {
                                if (item.Region == "תל אביב והמרכז") {
                                    for (let i = 0; i < valueFilteringPopular.length; i++) {
                                        if (valueFilteringPopular[i] == "כשר") {
                                            if(item.Kosher == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                            if(item.WiFi == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חנייה") {
                                            if(item.Parking == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "נגישות") {
                                            if(item.Accessibility == "לא"){
                                                test =false;
                                            }
                                        }
                                    }
                                    if (test == true) {
                                        var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                        lodgingMainBandB1.addToHTML();
                                    }
                                    test = true;
                                    
                                }
                            }
                            else{
                                if (item.Region == "תל אביב והמרכז") {
                                    var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainBandB1.addToHTML();
                                } 
                            }
                            count++;
                        }
                        localStorage.setItem("countStop2", (count));
                        if (count == page_obj.BandB) {
                            page_obj.boxRemains=24-boxCount;
                            countPage=(localStorage["FilteringCount"]) *1;
                            localStorage.removeItem("FilteringCount");
                            localStorage.setItem("FilteringCount", (countPage+1));
                            localStoragePageswitch();
                        }
                    }
                }
            })  
        }
}
function createSouth(){
    count = countStart();
    boxCount=0;
    valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
    if (count < page_obj.hotels) {
        if (page_obj.boxRemains == 0) {
            $(".lodging").empty();
        }
        $.ajax({
            url:"_JSON/JSON_Hotels.json",
            crossDomain:false,
            dataType:"json",
            success:function(json_Hotels){   
                if ($(".lodging").is(':empty')) {
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    } 
                    while ((count < json_Hotels.length) && (boxCount < 24)) {
                        var item=json_Hotels[count];
                        if (valueFilteringPopular.length > 0) {
                            if ((item.Region == "דרום")) {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "בריכת שחייה") {
                                        if(item.Swimming_Pool == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                                if (test == true) {
                                    var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                    lodgingMainHotels1.addToHTML();
                                    boxCount++; 
                                }
                                test = true;
                            }
                        }
                        else{
                            if (item.Region == "דרום") {
                                var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                lodgingMainHotels1.addToHTML();
                                boxCount++; 
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                    if (count == page_obj.hotels) {
                        page_obj.boxRemains=24-boxCount;
                        localStoragePageswitch();
                    }
                } 
            }
        }) 
    }
    boxCount=0;
    if ((count >= page_obj.hotels) && (count < (page_obj.hotels + page_obj.hostels))) {
        if (localStorage["countStop2"] != 0) {
            localStorage.setItem("countStop1", (localStorage["countStop2"]));
        }
        valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
        if (page_obj.boxRemains == 0) {
            $(".lodging").empty();
        }
        $.ajax({
        url:"_JSON/JSON_Hostels.json",
        crossDomain:false,
        dataType:"json",
        success:function(json_Hostels){
            if (page_obj.boxRemains == 0) {
                if ($(".lodging").is(':empty')) {
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    }
                    while (((count-page_obj.hotels) < json_Hostels.length) && (boxCount < 24)) {
                        var item=json_Hostels[count-page_obj.hotels];
                        if (valueFilteringPopular.length > 0) {
                            if ((item.Region == "דרום")) {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                        test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                        if(item.Separated_Rooms == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                                if (test == true) {
                                    var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainHostels1.addToHTML();
                                    boxCount++; 
                                }
                                test = true;
                            }
                        }
                        else{
                            if (item.Region == "דרום") {
                                var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainHostels1.addToHTML();
                                boxCount++;
                            }
                        }
                        count++;
                    }
                }
                localStorage.setItem("countStop2", (count));
                }
                else{
                    while (((count-page_obj.hotels) < json_Hostels.length) && (count < (page_obj.hostels+page_obj.hotels)) && (boxCount < page_obj.boxRemains)) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        var item=json_Hostels[count-page_obj.hotels];
                        if (valueFilteringPopular.length > 0) {
                            if ((item.Region == "דרום")) {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                        if(item.Separated_Rooms == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                                if (test == true) {
                                    var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainHostels1.addToHTML();
                                    boxCount++; 
                                }
                                test = true;
                            }
                        }
                        else{
                            if (item.Region == "דרום") {
                                var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainHostels1.addToHTML();
                                boxCount++;
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                }
                if (boxCount >= page_obj.boxRemains) {
                    page_obj.boxRemains=0;
                }
                else{
                    if (count== (page_obj.hostels+page_obj.hotels)) {
                        page_obj.boxRemains=page_obj.boxRemains-boxCount;
                        localStoragePageswitch();
                    }
                }
            }    
        })
    }
    boxCount=0;
    if ((count >= (page_obj.hotels + page_obj.hostels)) && (count < (page_obj.hotels + page_obj.hostels + page_obj.BandB))) {
        if (localStorage["countStop2"] != 0) {
            localStorage.setItem("countStop1", (localStorage["countStop2"]));
        }
        valueFilteringPopular = JSON.parse(localStorage.getItem("valueFilteringPopular"));
        if (page_obj.boxRemains == 0) {
            $(".lodging").empty();
        }
        $.ajax({
            url:"_JSON/JSON_B_and_B.json",
            crossDomain:false,
            dataType:"json",
            success:function(json_BandB){  
                if (page_obj.boxRemains == 0) {
                    if ($(".lodging").is(':empty')) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        while (((count-page_obj.hotels-page_obj.hostels) < json_BandB.length) && (boxCount < 24)) {
                            var item=json_BandB[count-page_obj.hotels-page_obj.hostels];
                            if (valueFilteringPopular.length > 0) {
                                if ((item.Region == "דרום")) {
                                    for (let i = 0; i < valueFilteringPopular.length; i++) {
                                        if (valueFilteringPopular[i] == "כשר") {
                                            if(item.Kosher == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                            if(item.WiFi == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חנייה") {
                                            if(item.Parking == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "נגישות") {
                                            if(item.Accessibility == "לא"){
                                                test =false;
                                            }
                                        }
                                    }
                                    if (test == true) {
                                        var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                        lodgingMainBandB1.addToHTML();
                                        boxCount++; 
                                    }
                                    test = true;
                                }
                            }
                            else{
                                if (item.Region == "דרום") {
                                    var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainBandB1.addToHTML();
                                    boxCount++;
                                } 
                            }
                            count++;
                        }
                    }
                    localStorage.setItem("countStop2", (count));
                }
                else{
                    while (((count-page_obj.hotels-page_obj.hostels) < json_BandB.length) && (boxCount < page_obj.boxRemains)) {
                        var item=json_BandB[count-page_obj.hotels-page_obj.hostels];
                        if (valueFilteringPopular.length > 0) {
                            if ((item.Region == "דרום")) {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                                if (test == true) {
                                    var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainBandB1.addToHTML();
                                    boxCount++; 
                                }
                                test = true;  
                            }
                        }
                        else{
                            if (item.Region == "דרום") {
                                var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainBandB1.addToHTML();
                                boxCount++;  
                            }
                        }
                        if (count == page_obj.BandB) {
                            boxCount=page_obj.BandB;
                        }
                        count++;
                    }
                    page_obj.boxRemains=0;
                    localStorage.setItem("countStop2", (count));
                }    
            }   
        }) 
    }  
}
function createSouthHotel(){
    count = countStart();
        if (page_obj.boxRemains>0) {
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $.ajax({
                url:"_JSON/JSON_Hotels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hotels){
                    valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    }
                    while ((count < json_Hotels.length) && (boxCount < page_obj.boxRemains)) {
                        var item=json_Hotels[count];
                        if (valueFilteringPopular.length > 0) {
                            if (item.Region == "דרום") {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "בריכת שחייה") {
                                        if(item.Swimming_Pool == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                            
                            if (test == true) {
                                var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                lodgingMainHotels1.addToHTML();
                                boxCount++;
                            }
                        }
                            test = true;
                        }
                        else{
                            if (item.Region == "דרום") {
                                var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                lodgingMainHotels1.addToHTML();
                                boxCount++;
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                    if (count== page_obj.hotels) {
                        countPage=(localStorage["FilteringCount"]) *1;
                        localStorage.removeItem("FilteringCount");
                        localStorage.setItem("FilteringCount", (countPage+1));
                    }
                    if (boxCount >= page_obj.boxRemains) {
                        page_obj.boxRemains=0;
                    }
                    else{
                        if (count== page_obj.hotels) {
                            page_obj.boxRemains=page_obj.boxRemains-boxCount;
                            localStoragePageswitch();
                        }
                    }
                }
            }) 
        }
        else{
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $(".lodging").empty();
            $.ajax({
                url:"_JSON/JSON_Hotels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hotels){
                    if ($(".lodging").is(':empty')) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        while ((count < json_Hotels.length) && (boxCount < 24)) {
                            var item=json_Hotels[count];
                            if (valueFilteringPopular.length > 0) {
                                if (item.Region == "דרום") {
                                    for (let i = 0; i < valueFilteringPopular.length; i++) {
                                        if (valueFilteringPopular[i] == "כשר") {
                                            if(item.Kosher == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                            if(item.WiFi == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חנייה") {
                                            if(item.Parking == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "נגישות") {
                                            if(item.Accessibility == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "בריכת שחייה") {
                                            if(item.Swimming_Pool == "לא"){
                                                test =false;
                                            }
                                        }
                                    }
                                    if (test == true) {
                                        var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                        lodgingMainHotels1.addToHTML();
                                        boxCount++; 
                                    }
                                    test = true;
                                    
                                }
                            }
                            else{
                                if (item.Region == "דרום") {
                                    var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                    lodgingMainHotels1.addToHTML();
                                    boxCount++; 
                                } 
                            }
                            count++;
                        }
                        localStorage.setItem("countStop2", (count));
                        if (count == page_obj.hotels) {
                            page_obj.boxRemains=24-boxCount;
                            countPage=(localStorage["FilteringCount"]) *1;
                            localStorage.removeItem("FilteringCount");
                            localStorage.setItem("FilteringCount", (countPage+1));
                            localStoragePageswitch();
                        }
                    }
                }
            })  
        }
    }  
function createSouthHostel(){
    count = countStart();
        if (page_obj.boxRemains>0) {
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $.ajax({
                url:"_JSON/JSON_Hostels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hostels){
                    valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    }
                    while ((count < json_Hostels.length) && (boxCount < page_obj.boxRemains)) {
                        var item=json_Hostels[count];
                        if (valueFilteringPopular.length > 0) {
                            if ((item.Accommodation_Type != "בית ספר שדה") && (item.Region == "דרום")) {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                        if(item.Separated_Rooms == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                            
                            if (test == true) {
                                var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainHostels1.addToHTML();
                                boxCount++;
                            }
                        }
                            test = true;
                        }
                        else{
                            if ((item.Accommodation_Type != "בית ספר שדה") && (item.Region == "דרום")) {
                                var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainHostels1.addToHTML();
                                boxCount++;
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                    if (count== page_obj.hostels) {
                        countPage=(localStorage["FilteringCount"]) *1;
                        localStorage.removeItem("FilteringCount");
                        localStorage.setItem("FilteringCount", (countPage+1));
                    }
                    if (boxCount >= page_obj.boxRemains) {
                        page_obj.boxRemains=0;
                    }
                    else{
                        if (count== page_obj.hostels) {
                            page_obj.boxRemains=page_obj.boxRemains-boxCount;
                            localStoragePageswitch();
                        }
                    }
                }
            }) 
        }
        else{
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $(".lodging").empty();
            $.ajax({
                url:"_JSON/JSON_Hostels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hostels){
                    if ($(".lodging").is(':empty')) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        while ((count < json_Hostels.length) && (boxCount < 24)) {
                            var item=json_Hostels[count];
                            if (valueFilteringPopular.length > 0) {
                                if ((item.Accommodation_Type != "בית ספר שדה") && (item.Region == "דרום")) {
                                    for (let i = 0; i < valueFilteringPopular.length; i++) {
                                        if (valueFilteringPopular[i] == "כשר") {
                                            if(item.Kosher == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                            if(item.WiFi == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חנייה") {
                                            if(item.Parking == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "נגישות") {
                                            if(item.Accessibility == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                            if(item.Separated_Rooms == "לא"){
                                                test =false;
                                            }
                                        }
                                    }
                                    if (test == true) {
                                        var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                        lodgingMainHostels1.addToHTML();
                                        boxCount++; 
                                    }
                                    test = true;
                                    
                                }
                            }
                            else{
                                if ((item.Accommodation_Type != "בית ספר שדה") && (item.Region == "דרום")) {
                                    var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainHostels1.addToHTML();
                                    boxCount++;
                                    
                                }
                                
                            }
                            count++;
                        }
                        localStorage.setItem("countStop2", (count));
                        if (count == page_obj.hostels) {
                            page_obj.boxRemains=24-boxCount;
                            countPage=(localStorage["FilteringCount"]) *1;
                            localStorage.removeItem("FilteringCount");
                            localStorage.setItem("FilteringCount", (countPage+1));
                            localStoragePageswitch();
                        }
                    }
                }
            })  
        }
}
function createSouthSchool(){
    count = countStart();
        if (page_obj.boxRemains>0) {
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $.ajax({
                url:"_JSON/JSON_Hostels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hostels){
                    valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    }
                    while ((count < json_Hostels.length) && (boxCount < page_obj.boxRemains)) {
                        var item=json_Hostels[count];
                        if (valueFilteringPopular.length > 0) {
                            if ((item.Accommodation_Type == "בית ספר שדה") && (item.Region == "דרום")) {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                        if(item.Separated_Rooms == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                                if (test == true) {
                                    var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainHostels1.addToHTML();
                                    boxCount++;
                                }
                            }
                            test = true;
                        }
                        else{
                            if ((item.Accommodation_Type == "בית ספר שדה") && (item.Region == "דרום")) {
                                var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainHostels1.addToHTML();
                                boxCount++;
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                    if (count== json_Hostels.length) {
                        countPage=(localStorage["FilteringCount"]) *1;
                        localStorage.removeItem("FilteringCount");
                        localStorage.setItem("FilteringCount", (countPage+1));
                    }
                    if (boxCount >= page_obj.boxRemains) {
                        page_obj.boxRemains=0;
                    }
                    else{
                        if (count== page_obj.hostels) {
                            page_obj.boxRemains=page_obj.boxRemains-boxCount;
                            localStoragePageswitch();
                        }
                    }
                }
            })  
        }
        else{
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $(".lodging").empty();
            $.ajax({
                url:"_JSON/JSON_Hostels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hostels){
                    if ($(".lodging").is(':empty')) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        while ((count < json_Hostels.length) && (boxCount < 24)) {
                            var item=json_Hostels[count];
                            if (valueFilteringPopular.length > 0) {
                                if ((item.Accommodation_Type == "בית ספר שדה") && (item.Region == "דרום")) {
                                    for (let i = 0; i < valueFilteringPopular.length; i++) {
                                        if (valueFilteringPopular[i] == "כשר") {
                                            if(item.Kosher == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                            if(item.WiFi == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חנייה") {
                                            if(item.Parking == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "נגישות") {
                                            if(item.Accessibility == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                            if(item.Separated_Rooms == "לא"){
                                                test =false;
                                            }
                                        }
                                    }
                                    if (test == true) {
                                        var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                        lodgingMainHostels1.addToHTML();
                                        boxCount++; 
                                    }
                                    test = true;
                                    
                                }
                            }
                            else{
                                if ((item.Accommodation_Type == "בית ספר שדה") && (item.Region == "דרום")) {
                                    var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainHostels1.addToHTML();
                                    boxCount++;
                                    
                                }
                               
                            }
                            count++;
                        }
                        localStorage.setItem("countStop2", (count));
                        if (count == page_obj.hostels) {
                            page_obj.boxRemains=24-boxCount;
                            countPage=(localStorage["FilteringCount"]) *1;
                            localStorage.removeItem("FilteringCount");
                            localStorage.setItem("FilteringCount", (countPage+1));
                            localStoragePageswitch();
                        }
                    }
                }
            })  
        }
}
function createSouthBandB(){
    count = countStart();
        if (page_obj.boxRemains>0) {
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $.ajax({
                url:"_JSON/JSON_B_and_B.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_BandB){
                    valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    }
                    while ((count < json_BandB.length) && (boxCount < page_obj.boxRemains)) {
                        var item=json_BandB[count];
                        if (valueFilteringPopular.length > 0) {
                            if (item.Region == "דרום") {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                            
                            if (test == true) {
                                var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainBandB1.addToHTML();
                            }
                        }
                            test = true;
                        }
                        else{
                            if (item.Region == "דרום") {
                                var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainBandB1.addToHTML();
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                    if (count== page_obj.BandB) {
                        countPage=(localStorage["FilteringCount"]) *1;
                        localStorage.removeItem("FilteringCount");
                        localStorage.setItem("FilteringCount", (countPage+1));
                    }
                    if (boxCount >= page_obj.boxRemains) {
                        page_obj.boxRemains=0;
                    }
                    else{
                        if (count== page_obj.BandB) {
                            page_obj.boxRemains=page_obj.boxRemains-boxCount;
                            localStoragePageswitch();
                        }
                    }
                }
            }) 
        }
        else{
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $(".lodging").empty();
            $.ajax({
                url:"_JSON/JSON_B_and_B.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_BandB){
                    if ($(".lodging").is(':empty')) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        while ((count < json_BandB.length) && (boxCount < 24)) {
                            var item=json_BandB[count];
                            if (valueFilteringPopular.length > 0) {
                                if (item.Region == "דרום") {
                                    for (let i = 0; i < valueFilteringPopular.length; i++) {
                                        if (valueFilteringPopular[i] == "כשר") {
                                            if(item.Kosher == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                            if(item.WiFi == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חנייה") {
                                            if(item.Parking == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "נגישות") {
                                            if(item.Accessibility == "לא"){
                                                test =false;
                                            }
                                        }
                                    }
                                    if (test == true) {
                                        var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                        lodgingMainBandB1.addToHTML();
                                    }
                                    test = true;
                                    
                                }
                            }
                            else{
                                if (item.Region == "דרום") {
                                    var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainBandB1.addToHTML();
                                } 
                            }
                            count++;
                        }
                        localStorage.setItem("countStop2", (count));
                        if (count == page_obj.BandB) {
                            page_obj.boxRemains=24-boxCount;
                            countPage=(localStorage["FilteringCount"]) *1;
                            localStorage.removeItem("FilteringCount");
                            localStorage.setItem("FilteringCount", (countPage+1));
                            localStoragePageswitch();
                        }
                    }
                }
            })  
        }
}
function createTheDeadSea(){
    count = countStart();
    boxCount=0;
    valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
    if (count < page_obj.hotels) {
        if (page_obj.boxRemains == 0) {
            $(".lodging").empty();
        }
        $.ajax({
            url:"_JSON/JSON_Hotels.json",
            crossDomain:false,
            dataType:"json",
            success:function(json_Hotels){   
                if ($(".lodging").is(':empty')) {
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    } 
                    while ((count < json_Hotels.length) && (boxCount < 24)) {
                        var item=json_Hotels[count];
                        if (valueFilteringPopular.length > 0) {
                            if ((item.Region == "ים המלח")) {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "בריכת שחייה") {
                                        if(item.Swimming_Pool == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                                if (test == true) {
                                    var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                    lodgingMainHotels1.addToHTML();
                                    boxCount++; 
                                }
                                test = true;
                            }
                        }
                        else{
                            if (item.Region == "ים המלח") {
                                var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                lodgingMainHotels1.addToHTML();
                                boxCount++; 
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                    if (count == page_obj.hotels) {
                        page_obj.boxRemains=24-boxCount;
                        localStoragePageswitch();
                    }
                } 
            }
        }) 
    }
    boxCount=0;
    if ((count >= page_obj.hotels) && (count < (page_obj.hotels + page_obj.hostels))) {
        if (localStorage["countStop2"] != 0) {
            localStorage.setItem("countStop1", (localStorage["countStop2"]));
        }
        valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
        if (page_obj.boxRemains == 0) {
            $(".lodging").empty();
        }
        $.ajax({
        url:"_JSON/JSON_Hostels.json",
        crossDomain:false,
        dataType:"json",
        success:function(json_Hostels){
            if (page_obj.boxRemains == 0) {
                if ($(".lodging").is(':empty')) {
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    }
                    while (((count-page_obj.hotels) < json_Hostels.length) && (boxCount < 24)) {
                        var item=json_Hostels[count-page_obj.hotels];
                        if (valueFilteringPopular.length > 0) {
                            if ((item.Region == "ים המלח")) {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                        test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                        if(item.Separated_Rooms == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                                if (test == true) {
                                    var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainHostels1.addToHTML();
                                    boxCount++; 
                                }
                                test = true;
                            }
                        }
                        else{
                            if (item.Region == "ים המלח") {
                                var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainHostels1.addToHTML();
                                boxCount++;
                            }
                        }
                        count++;
                    }
                }
                localStorage.setItem("countStop2", (count));
                }
                else{
                    while (((count-page_obj.hotels) < json_Hostels.length) && (count < (page_obj.hostels+page_obj.hotels)) && (boxCount < page_obj.boxRemains)) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        var item=json_Hostels[count-page_obj.hotels];
                        if (valueFilteringPopular.length > 0) {
                            if ((item.Region == "ים המלח")) {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                        if(item.Separated_Rooms == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                                if (test == true) {
                                    var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainHostels1.addToHTML();
                                    boxCount++; 
                                }
                                test = true;
                            }
                        }
                        else{
                            if (item.Region == "ים המלח") {
                                var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainHostels1.addToHTML();
                                boxCount++;
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                }
                if (boxCount >= page_obj.boxRemains) {
                    page_obj.boxRemains=0;
                }
                else{
                    if (count== (page_obj.hostels+page_obj.hotels)) {
                        page_obj.boxRemains=page_obj.boxRemains-boxCount;
                        localStoragePageswitch();
                    }
                }
            }    
        })
    }
    boxCount=0;
    if ((count >= (page_obj.hotels + page_obj.hostels)) && (count < (page_obj.hotels + page_obj.hostels + page_obj.BandB))) {
        if (localStorage["countStop2"] != 0) {
            localStorage.setItem("countStop1", (localStorage["countStop2"]));
        }
        valueFilteringPopular = JSON.parse(localStorage.getItem("valueFilteringPopular"));
        if (page_obj.boxRemains == 0) {
            $(".lodging").empty();
        }
        $.ajax({
            url:"_JSON/JSON_B_and_B.json",
            crossDomain:false,
            dataType:"json",
            success:function(json_BandB){  
                if (page_obj.boxRemains == 0) {
                    if ($(".lodging").is(':empty')) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        while (((count-page_obj.hotels-page_obj.hostels) < json_BandB.length) && (boxCount < 24)) {
                            var item=json_BandB[count-page_obj.hotels-page_obj.hostels];
                            if (valueFilteringPopular.length > 0) {
                                if ((item.Region == "ים המלח")) {
                                    for (let i = 0; i < valueFilteringPopular.length; i++) {
                                        if (valueFilteringPopular[i] == "כשר") {
                                            if(item.Kosher == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                            if(item.WiFi == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חנייה") {
                                            if(item.Parking == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "נגישות") {
                                            if(item.Accessibility == "לא"){
                                                test =false;
                                            }
                                        }
                                    }
                                    if (test == true) {
                                        var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                        lodgingMainBandB1.addToHTML();
                                        boxCount++; 
                                    }
                                    test = true;
                                }
                            }
                            else{
                                if (item.Region == "ים המלח") {
                                    var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainBandB1.addToHTML();
                                    boxCount++;
                                } 
                            }
                            count++;
                        }
                    }
                    localStorage.setItem("countStop2", (count));
                }
                else{
                    while (((count-page_obj.hotels-page_obj.hostels) < json_BandB.length) && (boxCount < page_obj.boxRemains)) {
                        var item=json_BandB[count-page_obj.hotels-page_obj.hostels];
                        if (valueFilteringPopular.length > 0) {
                            if ((item.Region == "ים המלח")) {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                                if (test == true) {
                                    var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainBandB1.addToHTML();
                                    boxCount++; 
                                }
                                test = true;  
                            }
                        }
                        else{
                            if (item.Region == "ים המלח") {
                                var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainBandB1.addToHTML();
                                boxCount++;  
                            }
                        }
                        if (count == page_obj.BandB) {
                            boxCount=page_obj.BandB;
                        }
                        count++;
                    }
                    page_obj.boxRemains=0;
                    localStorage.setItem("countStop2", (count));
                }    
            }   
        }) 
    }  
}
function createTheDeadSeaHotel(){
    count = countStart();
        if (page_obj.boxRemains>0) {
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $.ajax({
                url:"_JSON/JSON_Hotels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hotels){
                    valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    }
                    while ((count < json_Hotels.length) && (boxCount < page_obj.boxRemains)) {
                        var item=json_Hotels[count];
                        if (valueFilteringPopular.length > 0) {
                            if (item.Region == "ים המלח") {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "בריכת שחייה") {
                                        if(item.Swimming_Pool == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                            
                            if (test == true) {
                                var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                lodgingMainHotels1.addToHTML();
                                boxCount++;
                            }
                        }
                            test = true;
                        }
                        else{
                            if (item.Region == "ים המלח") {
                                var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                lodgingMainHotels1.addToHTML();
                                boxCount++;
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                    if (count== page_obj.hotels) {
                        countPage=(localStorage["FilteringCount"]) *1;
                        localStorage.removeItem("FilteringCount");
                        localStorage.setItem("FilteringCount", (countPage+1));
                    }
                    if (boxCount >= page_obj.boxRemains) {
                        page_obj.boxRemains=0;
                    }
                    else{
                        if (count== page_obj.hotels) {
                            page_obj.boxRemains=page_obj.boxRemains-boxCount;
                            localStoragePageswitch();
                        }
                    }
                }
            }) 
        }
        else{
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $(".lodging").empty();
            $.ajax({
                url:"_JSON/JSON_Hotels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hotels){
                    if ($(".lodging").is(':empty')) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        while ((count < json_Hotels.length) && (boxCount < 24)) {
                            var item=json_Hotels[count];
                            if (valueFilteringPopular.length > 0) {
                                if (item.Region == "ים המלח") {
                                    for (let i = 0; i < valueFilteringPopular.length; i++) {
                                        if (valueFilteringPopular[i] == "כשר") {
                                            if(item.Kosher == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                            if(item.WiFi == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חנייה") {
                                            if(item.Parking == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "נגישות") {
                                            if(item.Accessibility == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "בריכת שחייה") {
                                            if(item.Swimming_Pool == "לא"){
                                                test =false;
                                            }
                                        }
                                    }
                                    if (test == true) {
                                        var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                        lodgingMainHotels1.addToHTML();
                                        boxCount++; 
                                    }
                                    test = true;
                                    
                                }
                            }
                            else{
                                if (item.Region == "ים המלח") {
                                    var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                    lodgingMainHotels1.addToHTML();
                                    boxCount++; 
                                } 
                            }
                            count++;
                        }
                        localStorage.setItem("countStop2", (count));
                        if (count == page_obj.hotels) {
                            page_obj.boxRemains=24-boxCount;
                            countPage=(localStorage["FilteringCount"]) *1;
                            localStorage.removeItem("FilteringCount");
                            localStorage.setItem("FilteringCount", (countPage+1));
                            localStoragePageswitch();
                        }
                    }
                }
            })  
        }
    }  
function createTheDeadSeaHostel(){
    count = countStart();
        if (page_obj.boxRemains>0) {
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $.ajax({
                url:"_JSON/JSON_Hostels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hostels){
                    valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    }
                    while ((count < json_Hostels.length) && (boxCount < page_obj.boxRemains)) {
                        var item=json_Hostels[count];
                        if (valueFilteringPopular.length > 0) {
                            if ((item.Accommodation_Type != "בית ספר שדה") && (item.Region == "ים המלח")) {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                        if(item.Separated_Rooms == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                            
                            if (test == true) {
                                var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainHostels1.addToHTML();
                                boxCount++;
                            }
                        }
                            test = true;
                        }
                        else{
                            if ((item.Accommodation_Type != "בית ספר שדה") && (item.Region == "ים המלח")) {
                                var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainHostels1.addToHTML();
                                boxCount++;
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                    if (count== page_obj.hostels) {
                        countPage=(localStorage["FilteringCount"]) *1;
                        localStorage.removeItem("FilteringCount");
                        localStorage.setItem("FilteringCount", (countPage+1));
                    }
                    if (boxCount >= page_obj.boxRemains) {
                        page_obj.boxRemains=0;
                    }
                    else{
                        if (count== page_obj.hostels) {
                            page_obj.boxRemains=page_obj.boxRemains-boxCount;
                            localStoragePageswitch();
                        }
                    }
                }
            }) 
        }
        else{
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $(".lodging").empty();
            $.ajax({
                url:"_JSON/JSON_Hostels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hostels){
                    if ($(".lodging").is(':empty')) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        while ((count < json_Hostels.length) && (boxCount < 24)) {
                            var item=json_Hostels[count];
                            if (valueFilteringPopular.length > 0) {
                                if ((item.Accommodation_Type != "בית ספר שדה") && (item.Region == "ים המלח")) {
                                    for (let i = 0; i < valueFilteringPopular.length; i++) {
                                        if (valueFilteringPopular[i] == "כשר") {
                                            if(item.Kosher == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                            if(item.WiFi == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חנייה") {
                                            if(item.Parking == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "נגישות") {
                                            if(item.Accessibility == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                            if(item.Separated_Rooms == "לא"){
                                                test =false;
                                            }
                                        }
                                    }
                                    if (test == true) {
                                        var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                        lodgingMainHostels1.addToHTML();
                                        boxCount++; 
                                    }
                                    test = true;
                                    
                                }
                            }
                            else{
                                if ((item.Accommodation_Type != "בית ספר שדה") && (item.Region == "ים המלח")) {
                                    var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainHostels1.addToHTML();
                                    boxCount++;
                                    
                                }
                                
                            }
                            count++;
                        }
                        localStorage.setItem("countStop2", (count));
                        if (count == page_obj.hostels) {
                            page_obj.boxRemains=24-boxCount;
                            countPage=(localStorage["FilteringCount"]) *1;
                            localStorage.removeItem("FilteringCount");
                            localStorage.setItem("FilteringCount", (countPage+1));
                            localStoragePageswitch();
                        }
                    }
                }
            })  
        }
}
function createTheDeadSeaSchool(){
    count = countStart();
        if (page_obj.boxRemains>0) {
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $.ajax({
                url:"_JSON/JSON_Hostels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hostels){
                    valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    }
                    while ((count < json_Hostels.length) && (boxCount < page_obj.boxRemains)) {
                        var item=json_Hostels[count];
                        if (valueFilteringPopular.length > 0) {
                            if ((item.Accommodation_Type == "בית ספר שדה") && (item.Region == "ים המלח")) {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                        if(item.Separated_Rooms == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                                if (test == true) {
                                    var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainHostels1.addToHTML();
                                    boxCount++;
                                }
                            }
                            test = true;
                        }
                        else{
                            if ((item.Accommodation_Type == "בית ספר שדה") && (item.Region == "ים המלח")) {
                                var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainHostels1.addToHTML();
                                boxCount++;
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                    if (count== json_Hostels.length) {
                        countPage=(localStorage["FilteringCount"]) *1;
                        localStorage.removeItem("FilteringCount");
                        localStorage.setItem("FilteringCount", (countPage+1));
                    }
                    if (boxCount >= page_obj.boxRemains) {
                        page_obj.boxRemains=0;
                    }
                    else{
                        if (count== page_obj.hostels) {
                            page_obj.boxRemains=page_obj.boxRemains-boxCount;
                            localStoragePageswitch();
                        }
                    }
                }
            })  
        }
        else{
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $(".lodging").empty();
            $.ajax({
                url:"_JSON/JSON_Hostels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hostels){
                    if ($(".lodging").is(':empty')) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        while ((count < json_Hostels.length) && (boxCount < 24)) {
                            var item=json_Hostels[count];
                            if (valueFilteringPopular.length > 0) {
                                if ((item.Accommodation_Type == "בית ספר שדה") && (item.Region == "ים המלח")) {
                                    for (let i = 0; i < valueFilteringPopular.length; i++) {
                                        if (valueFilteringPopular[i] == "כשר") {
                                            if(item.Kosher == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                            if(item.WiFi == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חנייה") {
                                            if(item.Parking == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "נגישות") {
                                            if(item.Accessibility == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                            if(item.Separated_Rooms == "לא"){
                                                test =false;
                                            }
                                        }
                                    }
                                    if (test == true) {
                                        var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                        lodgingMainHostels1.addToHTML();
                                        boxCount++; 
                                    }
                                    test = true;
                                    
                                }
                            }
                            else{
                                if ((item.Accommodation_Type == "בית ספר שדה") && (item.Region == "ים המלח")) {
                                    var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainHostels1.addToHTML();
                                    boxCount++;
                                    
                                }
                               
                            }
                            count++;
                        }
                        localStorage.setItem("countStop2", (count));
                        if (count == page_obj.hostels) {
                            page_obj.boxRemains=24-boxCount;
                            countPage=(localStorage["FilteringCount"]) *1;
                            localStorage.removeItem("FilteringCount");
                            localStorage.setItem("FilteringCount", (countPage+1));
                            localStoragePageswitch();
                        }
                    }
                }
            })  
        }
}
function createTheDeadSeaBandB(){
    count = countStart();
        if (page_obj.boxRemains>0) {
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $.ajax({
                url:"_JSON/JSON_B_and_B.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_BandB){
                    valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    }
                    while ((count < json_BandB.length) && (boxCount < page_obj.boxRemains)) {
                        var item=json_BandB[count];
                        if (valueFilteringPopular.length > 0) {
                            if (item.Region == "ים המלח") {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                            
                            if (test == true) {
                                var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainBandB1.addToHTML();
                            }
                        }
                            test = true;
                        }
                        else{
                            if (item.Region == "ים המלח") {
                                var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainBandB1.addToHTML();
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                    if (count== page_obj.BandB) {
                        countPage=(localStorage["FilteringCount"]) *1;
                        localStorage.removeItem("FilteringCount");
                        localStorage.setItem("FilteringCount", (countPage+1));
                    }
                    if (boxCount >= page_obj.boxRemains) {
                        page_obj.boxRemains=0;
                    }
                    else{
                        if (count== page_obj.BandB) {
                            page_obj.boxRemains=page_obj.boxRemains-boxCount;
                            localStoragePageswitch();
                        }
                    }
                }
            }) 
        }
        else{
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $(".lodging").empty();
            $.ajax({
                url:"_JSON/JSON_B_and_B.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_BandB){
                    if ($(".lodging").is(':empty')) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        while ((count < json_BandB.length) && (boxCount < 24)) {
                            var item=json_BandB[count];
                            if (valueFilteringPopular.length > 0) {
                                if (item.Region == "ים המלח") {
                                    for (let i = 0; i < valueFilteringPopular.length; i++) {
                                        if (valueFilteringPopular[i] == "כשר") {
                                            if(item.Kosher == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                            if(item.WiFi == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חנייה") {
                                            if(item.Parking == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "נגישות") {
                                            if(item.Accessibility == "לא"){
                                                test =false;
                                            }
                                        }
                                    }
                                    if (test == true) {
                                        var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                        lodgingMainBandB1.addToHTML();
                                    }
                                    test = true;
                                    
                                }
                            }
                            else{
                                if (item.Region == "ים המלח") {
                                    var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainBandB1.addToHTML();
                                } 
                            }
                            count++;
                        }
                        localStorage.setItem("countStop2", (count));
                        if (count == page_obj.BandB) {
                            page_obj.boxRemains=24-boxCount;
                            countPage=(localStorage["FilteringCount"]) *1;
                            localStorage.removeItem("FilteringCount");
                            localStorage.setItem("FilteringCount", (countPage+1));
                            localStoragePageswitch();
                        }
                    }
                }
            })  
        }
}
function createJudeaAndSamaria(){
    count = countStart();
    boxCount=0;
    valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
    if (count < page_obj.hotels) {
        if (page_obj.boxRemains == 0) {
            $(".lodging").empty();
        }
        $.ajax({
            url:"_JSON/JSON_Hotels.json",
            crossDomain:false,
            dataType:"json",
            success:function(json_Hotels){   
                if ($(".lodging").is(':empty')) {
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    } 
                    while ((count < json_Hotels.length) && (boxCount < 24)) {
                        var item=json_Hotels[count];
                        if (valueFilteringPopular.length > 0) {
                            if ((item.Region == "יהודה והשומרון")) {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "בריכת שחייה") {
                                        if(item.Swimming_Pool == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                                if (test == true) {
                                    var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                    lodgingMainHotels1.addToHTML();
                                    boxCount++; 
                                }
                                test = true;
                            }
                        }
                        else{
                            if (item.Region == "יהודה והשומרון") {
                                var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                lodgingMainHotels1.addToHTML();
                                boxCount++; 
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                    if (count == page_obj.hotels) {
                        page_obj.boxRemains=24-boxCount;
                        localStoragePageswitch();
                    }
                } 
            }
        }) 
    }
    boxCount=0;
    if ((count >= page_obj.hotels) && (count < (page_obj.hotels + page_obj.hostels))) {
        if (localStorage["countStop2"] != 0) {
            localStorage.setItem("countStop1", (localStorage["countStop2"]));
        }
        valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
        if (page_obj.boxRemains == 0) {
            $(".lodging").empty();
        }
        $.ajax({
        url:"_JSON/JSON_Hostels.json",
        crossDomain:false,
        dataType:"json",
        success:function(json_Hostels){
            if (page_obj.boxRemains == 0) {
                if ($(".lodging").is(':empty')) {
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    }
                    while (((count-page_obj.hotels) < json_Hostels.length) && (boxCount < 24)) {
                        var item=json_Hostels[count-page_obj.hotels];
                        if (valueFilteringPopular.length > 0) {
                            if ((item.Region == "יהודה והשומרון")) {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                        test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                        if(item.Separated_Rooms == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                                if (test == true) {
                                    var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainHostels1.addToHTML();
                                    boxCount++; 
                                }
                                test = true;
                            }
                        }
                        else{
                            if (item.Region == "יהודה והשומרון") {
                                var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainHostels1.addToHTML();
                                boxCount++;
                            }
                        }
                        count++;
                    }
                }
                localStorage.setItem("countStop2", (count));
                }
                else{
                    while (((count-page_obj.hotels) < json_Hostels.length) && (count < (page_obj.hostels+page_obj.hotels)) && (boxCount < page_obj.boxRemains)) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        var item=json_Hostels[count-page_obj.hotels];
                        if (valueFilteringPopular.length > 0) {
                            if ((item.Region == "יהודה והשומרון")) {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                        if(item.Separated_Rooms == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                                if (test == true) {
                                    var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainHostels1.addToHTML();
                                    boxCount++; 
                                }
                                test = true;
                            }
                        }
                        else{
                            if (item.Region == "יהודה והשומרון") {
                                var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainHostels1.addToHTML();
                                boxCount++;
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                }
                if (boxCount >= page_obj.boxRemains) {
                    page_obj.boxRemains=0;
                }
                else{
                    if (count== (page_obj.hostels+page_obj.hotels)) {
                        page_obj.boxRemains=page_obj.boxRemains-boxCount;
                        localStoragePageswitch();
                    }
                }
            }    
        })
    }
    boxCount=0;
    if ((count >= (page_obj.hotels + page_obj.hostels)) && (count < (page_obj.hotels + page_obj.hostels + page_obj.BandB))) {
        if (localStorage["countStop2"] != 0) {
            localStorage.setItem("countStop1", (localStorage["countStop2"]));
        }
        valueFilteringPopular = JSON.parse(localStorage.getItem("valueFilteringPopular"));
        if (page_obj.boxRemains == 0) {
            $(".lodging").empty();
        }
        $.ajax({
            url:"_JSON/JSON_B_and_B.json",
            crossDomain:false,
            dataType:"json",
            success:function(json_BandB){  
                if (page_obj.boxRemains == 0) {
                    if ($(".lodging").is(':empty')) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        while (((count-page_obj.hotels-page_obj.hostels) < json_BandB.length) && (boxCount < 24)) {
                            var item=json_BandB[count-page_obj.hotels-page_obj.hostels];
                            if (valueFilteringPopular.length > 0) {
                                if ((item.Region == "יהודה והשומרון")) {
                                    for (let i = 0; i < valueFilteringPopular.length; i++) {
                                        if (valueFilteringPopular[i] == "כשר") {
                                            if(item.Kosher == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                            if(item.WiFi == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חנייה") {
                                            if(item.Parking == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "נגישות") {
                                            if(item.Accessibility == "לא"){
                                                test =false;
                                            }
                                        }
                                    }
                                    if (test == true) {
                                        var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                        lodgingMainBandB1.addToHTML();
                                        boxCount++; 
                                    }
                                    test = true;
                                }
                            }
                            else{
                                if (item.Region == "יהודה והשומרון") {
                                    var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainBandB1.addToHTML();
                                    boxCount++;
                                } 
                            }
                            count++;
                        }
                    }
                    localStorage.setItem("countStop2", (count));
                }
                else{
                    while (((count-page_obj.hotels-page_obj.hostels) < json_BandB.length) && (boxCount < page_obj.boxRemains)) {
                        var item=json_BandB[count-page_obj.hotels-page_obj.hostels];
                        if (valueFilteringPopular.length > 0) {
                            if ((item.Region == "יהודה והשומרון")) {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                                if (test == true) {
                                    var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainBandB1.addToHTML();
                                    boxCount++; 
                                }
                                test = true;  
                            }
                        }
                        else{
                            if (item.Region == "יהודה והשומרון") {
                                var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainBandB1.addToHTML();
                                boxCount++;  
                            }
                        }
                        if (count == page_obj.BandB) {
                            boxCount=page_obj.BandB;
                        }
                        count++;
                    }
                    page_obj.boxRemains=0;
                    localStorage.setItem("countStop2", (count));
                }    
            }   
        }) 
    }  
}
function createJudeaAndSamariaHotel(){
    count = countStart();
        if (page_obj.boxRemains>0) {
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $.ajax({
                url:"_JSON/JSON_Hotels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hotels){
                    valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    }
                    while ((count < json_Hotels.length) && (boxCount < page_obj.boxRemains)) {
                        var item=json_Hotels[count];
                        if (valueFilteringPopular.length > 0) {
                            if (item.Region == "יהודה והשומרון") {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "בריכת שחייה") {
                                        if(item.Swimming_Pool == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                            
                            if (test == true) {
                                var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                lodgingMainHotels1.addToHTML();
                                boxCount++;
                            }
                        }
                            test = true;
                        }
                        else{
                            if (item.Region == "יהודה והשומרון") {
                                var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                lodgingMainHotels1.addToHTML();
                                boxCount++;
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                    if (count== page_obj.hotels) {
                        countPage=(localStorage["FilteringCount"]) *1;
                        localStorage.removeItem("FilteringCount");
                        localStorage.setItem("FilteringCount", (countPage+1));
                    }
                    if (boxCount >= page_obj.boxRemains) {
                        page_obj.boxRemains=0;
                    }
                    else{
                        if (count== page_obj.hotels) {
                            page_obj.boxRemains=page_obj.boxRemains-boxCount;
                            localStoragePageswitch();
                        }
                    }
                }
            }) 
        }
        else{
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $(".lodging").empty();
            $.ajax({
                url:"_JSON/JSON_Hotels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hotels){
                    if ($(".lodging").is(':empty')) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        while ((count < json_Hotels.length) && (boxCount < 24)) {
                            var item=json_Hotels[count];
                            if (valueFilteringPopular.length > 0) {
                                if (item.Region == "יהודה והשומרון") {
                                    for (let i = 0; i < valueFilteringPopular.length; i++) {
                                        if (valueFilteringPopular[i] == "כשר") {
                                            if(item.Kosher == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                            if(item.WiFi == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חנייה") {
                                            if(item.Parking == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "נגישות") {
                                            if(item.Accessibility == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "בריכת שחייה") {
                                            if(item.Swimming_Pool == "לא"){
                                                test =false;
                                            }
                                        }
                                    }
                                    if (test == true) {
                                        var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                        lodgingMainHotels1.addToHTML();
                                        boxCount++; 
                                    }
                                    test = true;
                                    
                                }
                            }
                            else{
                                if (item.Region == "יהודה והשומרון") {
                                    var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                    lodgingMainHotels1.addToHTML();
                                    boxCount++; 
                                } 
                            }
                            count++;
                        }
                        localStorage.setItem("countStop2", (count));
                        if (count == page_obj.hotels) {
                            page_obj.boxRemains=24-boxCount;
                            countPage=(localStorage["FilteringCount"]) *1;
                            localStorage.removeItem("FilteringCount");
                            localStorage.setItem("FilteringCount", (countPage+1));
                            localStoragePageswitch();
                        }
                    }
                }
            })  
        }
    }  
function createJudeaAndSamariaHostel(){
    count = countStart();
        if (page_obj.boxRemains>0) {
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $.ajax({
                url:"_JSON/JSON_Hostels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hostels){
                    valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    }
                    while ((count < json_Hostels.length) && (boxCount < page_obj.boxRemains)) {
                        var item=json_Hostels[count];
                        if (valueFilteringPopular.length > 0) {
                            if ((item.Accommodation_Type != "בית ספר שדה") && (item.Region == "יהודה והשומרון")) {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                        if(item.Separated_Rooms == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                            
                            if (test == true) {
                                var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainHostels1.addToHTML();
                                boxCount++;
                            }
                        }
                            test = true;
                        }
                        else{
                            if ((item.Accommodation_Type != "בית ספר שדה") && (item.Region == "יהודה והשומרון")) {
                                var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainHostels1.addToHTML();
                                boxCount++;
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                    if (count== page_obj.hostels) {
                        countPage=(localStorage["FilteringCount"]) *1;
                        localStorage.removeItem("FilteringCount");
                        localStorage.setItem("FilteringCount", (countPage+1));
                    }
                    if (boxCount >= page_obj.boxRemains) {
                        page_obj.boxRemains=0;
                    }
                    else{
                        if (count== page_obj.hostels) {
                            page_obj.boxRemains=page_obj.boxRemains-boxCount;
                            localStoragePageswitch();
                        }
                    }
                }
            }) 
        }
        else{
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $(".lodging").empty();
            $.ajax({
                url:"_JSON/JSON_Hostels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hostels){
                    if ($(".lodging").is(':empty')) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        while ((count < json_Hostels.length) && (boxCount < 24)) {
                            var item=json_Hostels[count];
                            if (valueFilteringPopular.length > 0) {
                                if ((item.Accommodation_Type != "בית ספר שדה") && (item.Region == "יהודה והשומרון")) {
                                    for (let i = 0; i < valueFilteringPopular.length; i++) {
                                        if (valueFilteringPopular[i] == "כשר") {
                                            if(item.Kosher == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                            if(item.WiFi == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חנייה") {
                                            if(item.Parking == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "נגישות") {
                                            if(item.Accessibility == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                            if(item.Separated_Rooms == "לא"){
                                                test =false;
                                            }
                                        }
                                    }
                                    if (test == true) {
                                        var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                        lodgingMainHostels1.addToHTML();
                                        boxCount++; 
                                    }
                                    test = true;
                                    
                                }
                            }
                            else{
                                if ((item.Accommodation_Type != "בית ספר שדה") && (item.Region == "יהודה והשומרון")) {
                                    var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainHostels1.addToHTML();
                                    boxCount++;
                                    
                                }
                                
                            }
                            count++;
                        }
                        localStorage.setItem("countStop2", (count));
                        if (count == page_obj.hostels) {
                            page_obj.boxRemains=24-boxCount;
                            countPage=(localStorage["FilteringCount"]) *1;
                            localStorage.removeItem("FilteringCount");
                            localStorage.setItem("FilteringCount", (countPage+1));
                            localStoragePageswitch();
                        }
                    }
                }
            })  
        }
}
function createJudeaAndSamariaSchool(){
    count = countStart();
        if (page_obj.boxRemains>0) {
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $.ajax({
                url:"_JSON/JSON_Hostels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hostels){
                    valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    }
                    while ((count < json_Hostels.length) && (boxCount < page_obj.boxRemains)) {
                        var item=json_Hostels[count];
                        if (valueFilteringPopular.length > 0) {
                            if ((item.Accommodation_Type == "בית ספר שדה") && (item.Region == "יהודה והשומרון")) {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                        if(item.Separated_Rooms == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                                if (test == true) {
                                    var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainHostels1.addToHTML();
                                    boxCount++;
                                }
                            }
                            test = true;
                        }
                        else{
                            if ((item.Accommodation_Type == "בית ספר שדה") && (item.Region == "יהודה והשומרון")) {
                                var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainHostels1.addToHTML();
                                boxCount++;
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                    if (count== json_Hostels.length) {
                        countPage=(localStorage["FilteringCount"]) *1;
                        localStorage.removeItem("FilteringCount");
                        localStorage.setItem("FilteringCount", (countPage+1));
                    }
                    if (boxCount >= page_obj.boxRemains) {
                        page_obj.boxRemains=0;
                    }
                    else{
                        if (count== page_obj.hostels) {
                            page_obj.boxRemains=page_obj.boxRemains-boxCount;
                            localStoragePageswitch();
                        }
                    }
                }
            })  
        }
        else{
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $(".lodging").empty();
            $.ajax({
                url:"_JSON/JSON_Hostels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hostels){
                    if ($(".lodging").is(':empty')) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        while ((count < json_Hostels.length) && (boxCount < 24)) {
                            var item=json_Hostels[count];
                            if (valueFilteringPopular.length > 0) {
                                if ((item.Accommodation_Type == "בית ספר שדה") && (item.Region == "יהודה והשומרון")) {
                                    for (let i = 0; i < valueFilteringPopular.length; i++) {
                                        if (valueFilteringPopular[i] == "כשר") {
                                            if(item.Kosher == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                            if(item.WiFi == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חנייה") {
                                            if(item.Parking == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "נגישות") {
                                            if(item.Accessibility == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                            if(item.Separated_Rooms == "לא"){
                                                test =false;
                                            }
                                        }
                                    }
                                    if (test == true) {
                                        var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                        lodgingMainHostels1.addToHTML();
                                        boxCount++; 
                                    }
                                    test = true;
                                    
                                }
                            }
                            else{
                                if ((item.Accommodation_Type == "בית ספר שדה") && (item.Region == "יהודה והשומרון")) {
                                    var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainHostels1.addToHTML();
                                    boxCount++;
                                    
                                }
                               
                            }
                            count++;
                        }
                        localStorage.setItem("countStop2", (count));
                        if (count == page_obj.hostels) {
                            page_obj.boxRemains=24-boxCount;
                            countPage=(localStorage["FilteringCount"]) *1;
                            localStorage.removeItem("FilteringCount");
                            localStorage.setItem("FilteringCount", (countPage+1));
                            localStoragePageswitch();
                        }
                    }
                }
            })  
        }
}
function createJudeaAndSamariaBandB(){
    count = countStart();
        if (page_obj.boxRemains>0) {
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $.ajax({
                url:"_JSON/JSON_B_and_B.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_BandB){
                    valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    }
                    while ((count < json_BandB.length) && (boxCount < page_obj.boxRemains)) {
                        var item=json_BandB[count];
                        if (valueFilteringPopular.length > 0) {
                            if (item.Region == "יהודה והשומרון") {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                            
                            if (test == true) {
                                var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainBandB1.addToHTML();
                            }
                        }
                            test = true;
                        }
                        else{
                            if (item.Region == "יהודה והשומרון") {
                                var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainBandB1.addToHTML();
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                    if (count== page_obj.BandB) {
                        countPage=(localStorage["FilteringCount"]) *1;
                        localStorage.removeItem("FilteringCount");
                        localStorage.setItem("FilteringCount", (countPage+1));
                    }
                    if (boxCount >= page_obj.boxRemains) {
                        page_obj.boxRemains=0;
                    }
                    else{
                        if (count== page_obj.BandB) {
                            page_obj.boxRemains=page_obj.boxRemains-boxCount;
                            localStoragePageswitch();
                        }
                    }
                }
            }) 
        }
        else{
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $(".lodging").empty();
            $.ajax({
                url:"_JSON/JSON_B_and_B.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_BandB){
                    if ($(".lodging").is(':empty')) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        while ((count < json_BandB.length) && (boxCount < 24)) {
                            var item=json_BandB[count];
                            if (valueFilteringPopular.length > 0) {
                                if (item.Region == "יהודה והשומרון") {
                                    for (let i = 0; i < valueFilteringPopular.length; i++) {
                                        if (valueFilteringPopular[i] == "כשר") {
                                            if(item.Kosher == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                            if(item.WiFi == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חנייה") {
                                            if(item.Parking == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "נגישות") {
                                            if(item.Accessibility == "לא"){
                                                test =false;
                                            }
                                        }
                                    }
                                    if (test == true) {
                                        var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                        lodgingMainBandB1.addToHTML();
                                    }
                                    test = true;
                                    
                                }
                            }
                            else{
                                if (item.Region == "יהודה והשומרון") {
                                    var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainBandB1.addToHTML();
                                } 
                            }
                            count++;
                        }
                        localStorage.setItem("countStop2", (count));
                        if (count == page_obj.BandB) {
                            page_obj.boxRemains=24-boxCount;
                            countPage=(localStorage["FilteringCount"]) *1;
                            localStorage.removeItem("FilteringCount");
                            localStorage.setItem("FilteringCount", (countPage+1));
                            localStoragePageswitch();
                        }
                    }
                }
            })  
        }
}
function createNorth(){
    count = countStart();console.log("count: "+count);
    
    boxCount=0;
    valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
    if (count < page_obj.hotels) {
        if (page_obj.boxRemains == 0) {
            $(".lodging").empty();
        }
        $.ajax({
            url:"_JSON/JSON_Hotels.json",
            crossDomain:false,
            dataType:"json",
            success:function(json_Hotels){   
                if ($(".lodging").is(':empty')) {
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    } 
                    while ((count < json_Hotels.length) && (boxCount < 24)) {
                        var item=json_Hotels[count];
                        if (valueFilteringPopular.length > 0) {
                            if ((item.Region == "צפון")) {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "בריכת שחייה") {
                                        if(item.Swimming_Pool == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                                if (test == true) {
                                    var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                    lodgingMainHotels1.addToHTML();
                                    boxCount++; 
                                }
                                test = true;
                            }
                        }
                        else{
                            if (item.Region == "צפון") {
                                var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                lodgingMainHotels1.addToHTML();
                                boxCount++; 
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                    if (count == page_obj.hotels) {
                        page_obj.boxRemains=24-boxCount;
                        localStoragePageswitch();
                    }
                } 
            }
        }) 
    }
    boxCount=0;
    if ((count >= page_obj.hotels) && (count < (page_obj.hotels + page_obj.hostels))) {
        if (localStorage["countStop2"] != 0) {
            localStorage.setItem("countStop1", (localStorage["countStop2"]));
        }
        valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
        if (page_obj.boxRemains == 0) {
            $(".lodging").empty();
        }
        $.ajax({
        url:"_JSON/JSON_Hostels.json",
        crossDomain:false,
        dataType:"json",
        success:function(json_Hostels){
            if (page_obj.boxRemains == 0) {
                if ($(".lodging").is(':empty')) {
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    }
                    while (((count-page_obj.hotels) < json_Hostels.length) && (boxCount < 24)) {
                        var item=json_Hostels[count-page_obj.hotels];
                        if (valueFilteringPopular.length > 0) {
                            if ((item.Region == "צפון")) {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                        test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                        if(item.Separated_Rooms == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                                if (test == true) {
                                    var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainHostels1.addToHTML();
                                    boxCount++; 
                                }
                                test = true;
                            }
                        }
                        else{
                            if (item.Region == "צפון") {
                                var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainHostels1.addToHTML();
                                boxCount++;
                            }
                        }
                        count++;
                    }
                }
                localStorage.setItem("countStop2", (count));
                }
                else{
                    while (((count-page_obj.hotels) < json_Hostels.length) && (count < (page_obj.hostels+page_obj.hotels)) && (boxCount < page_obj.boxRemains)) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        var item=json_Hostels[count-page_obj.hotels];
                        if (valueFilteringPopular.length > 0) {
                            if ((item.Region == "צפון")) {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                        if(item.Separated_Rooms == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                                if (test == true) {
                                    var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainHostels1.addToHTML();
                                    boxCount++; 
                                }
                                test = true;
                            }
                        }
                        else{
                            if (item.Region == "צפון") {
                                var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainHostels1.addToHTML();
                                boxCount++;
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                }
                if (boxCount >= page_obj.boxRemains) {
                    page_obj.boxRemains=0;
                }
                else{
                    if (count== (page_obj.hostels+page_obj.hotels)) {
                        page_obj.boxRemains=page_obj.boxRemains-boxCount;
                        localStoragePageswitch();
                    }
                }
            }    
        })
    }
    boxCount=0;
    if ((count >= (page_obj.hotels + page_obj.hostels)) && (count < (page_obj.hotels + page_obj.hostels + page_obj.BandB))) {
        if (localStorage["countStop2"] != 0) {
            localStorage.setItem("countStop1", (localStorage["countStop2"]));
        }
        valueFilteringPopular = JSON.parse(localStorage.getItem("valueFilteringPopular"));
        if (page_obj.boxRemains == 0) {
            $(".lodging").empty();
        }
        $.ajax({
            url:"_JSON/JSON_B_and_B.json",
            crossDomain:false,
            dataType:"json",
            success:function(json_BandB){  
                if (page_obj.boxRemains == 0) {
                    if ($(".lodging").is(':empty')) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        while (((count-page_obj.hotels-page_obj.hostels) < json_BandB.length) && (boxCount < 24)) {
                            var item=json_BandB[count-page_obj.hotels-page_obj.hostels];
                            if (valueFilteringPopular.length > 0) {
                                if ((item.Region == "צפון")) {
                                    for (let i = 0; i < valueFilteringPopular.length; i++) {
                                        if (valueFilteringPopular[i] == "כשר") {
                                            if(item.Kosher == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                            if(item.WiFi == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חנייה") {
                                            if(item.Parking == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "נגישות") {
                                            if(item.Accessibility == "לא"){
                                                test =false;
                                            }
                                        }
                                    }
                                    if (test == true) {
                                        var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                        lodgingMainBandB1.addToHTML();
                                        boxCount++; 
                                    }
                                    test = true;
                                }
                            }
                            else{
                                if (item.Region == "צפון") {
                                    var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainBandB1.addToHTML();
                                    boxCount++;
                                } 
                            }
                            count++;
                        }
                    }
                    localStorage.setItem("countStop2", (count));
                }
                else{
                    while (((count-page_obj.hotels-page_obj.hostels) < json_BandB.length) && (boxCount < page_obj.boxRemains)) {
                        var item=json_BandB[count-page_obj.hotels-page_obj.hostels];
                        if (valueFilteringPopular.length > 0) {
                            if ((item.Region == "צפון")) {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                                if (test == true) {
                                    var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainBandB1.addToHTML();
                                    boxCount++; 
                                }
                                test = true;  
                            }
                        }
                        else{
                            if (item.Region == "צפון") {
                                var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainBandB1.addToHTML();
                                boxCount++;  
                            }
                        }
                        if (count == page_obj.BandB) {
                            boxCount=page_obj.BandB;
                        }
                        count++;
                    }
                    page_obj.boxRemains=0;
                    localStorage.setItem("countStop2", (count));
                }    
            }   
        }) 
    }  
}
function createNorthHotel(){
    count = countStart();
        if (page_obj.boxRemains>0) {
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $.ajax({
                url:"_JSON/JSON_Hotels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hotels){
                    valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    }
                    while ((count < json_Hotels.length) && (boxCount < page_obj.boxRemains)) {
                        var item=json_Hotels[count];
                        if (valueFilteringPopular.length > 0) {
                            if (item.Region == "צפון") {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "בריכת שחייה") {
                                        if(item.Swimming_Pool == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                            
                            if (test == true) {
                                var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                lodgingMainHotels1.addToHTML();
                                boxCount++;
                            }
                        }
                            test = true;
                        }
                        else{
                            if (item.Region == "צפון") {
                                var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                lodgingMainHotels1.addToHTML();
                                boxCount++;
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                    if (count== page_obj.hotels) {
                        countPage=(localStorage["FilteringCount"]) *1;
                        localStorage.removeItem("FilteringCount");
                        localStorage.setItem("FilteringCount", (countPage+1));
                    }
                    if (boxCount >= page_obj.boxRemains) {
                        page_obj.boxRemains=0;
                    }
                    else{
                        if (count== page_obj.hotels) {
                            page_obj.boxRemains=page_obj.boxRemains-boxCount;
                            localStoragePageswitch();
                        }
                    }
                }
            }) 
        }
        else{
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $(".lodging").empty();
            $.ajax({
                url:"_JSON/JSON_Hotels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hotels){
                    if ($(".lodging").is(':empty')) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        while ((count < json_Hotels.length) && (boxCount < 24)) {
                            var item=json_Hotels[count];
                            if (valueFilteringPopular.length > 0) {
                                if (item.Region == "צפון") {
                                    for (let i = 0; i < valueFilteringPopular.length; i++) {
                                        if (valueFilteringPopular[i] == "כשר") {
                                            if(item.Kosher == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                            if(item.WiFi == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חנייה") {
                                            if(item.Parking == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "נגישות") {
                                            if(item.Accessibility == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "בריכת שחייה") {
                                            if(item.Swimming_Pool == "לא"){
                                                test =false;
                                            }
                                        }
                                    }
                                    if (test == true) {
                                        var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                        lodgingMainHotels1.addToHTML();
                                        boxCount++; 
                                    }
                                    test = true;
                                    
                                }
                            }
                            else{
                                if (item.Region == "צפון") {
                                    var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                    lodgingMainHotels1.addToHTML();
                                    boxCount++; 
                                } 
                            }
                            count++;
                        }
                        localStorage.setItem("countStop2", (count));
                        if (count == page_obj.hotels) {
                            page_obj.boxRemains=24-boxCount;
                            countPage=(localStorage["FilteringCount"]) *1;
                            localStorage.removeItem("FilteringCount");
                            localStorage.setItem("FilteringCount", (countPage+1));
                            localStoragePageswitch();
                        }
                    }
                }
            })  
        }
    }  
function createNorthHostel(){
    count = countStart();
        if (page_obj.boxRemains>0) {
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $.ajax({
                url:"_JSON/JSON_Hostels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hostels){
                    valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    }
                    while ((count < json_Hostels.length) && (boxCount < page_obj.boxRemains)) {
                        var item=json_Hostels[count];
                        if (valueFilteringPopular.length > 0) {
                            if ((item.Accommodation_Type != "בית ספר שדה") && (item.Region == "צפון")) {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                        if(item.Separated_Rooms == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                            
                            if (test == true) {
                                var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainHostels1.addToHTML();
                                boxCount++;
                            }
                        }
                            test = true;
                        }
                        else{
                            if ((item.Accommodation_Type != "בית ספר שדה") && (item.Region == "צפון")) {
                                var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainHostels1.addToHTML();
                                boxCount++;
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                    if (count== page_obj.hostels) {
                        countPage=(localStorage["FilteringCount"]) *1;
                        localStorage.removeItem("FilteringCount");
                        localStorage.setItem("FilteringCount", (countPage+1));
                    }
                    if (boxCount >= page_obj.boxRemains) {
                        page_obj.boxRemains=0;
                    }
                    else{
                        if (count== page_obj.hostels) {
                            page_obj.boxRemains=page_obj.boxRemains-boxCount;
                            localStoragePageswitch();
                        }
                    }
                }
            }) 
        }
        else{
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $(".lodging").empty();
            $.ajax({
                url:"_JSON/JSON_Hostels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hostels){
                    if ($(".lodging").is(':empty')) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        while ((count < json_Hostels.length) && (boxCount < 24)) {
                            var item=json_Hostels[count];
                            if (valueFilteringPopular.length > 0) {
                                if ((item.Accommodation_Type != "בית ספר שדה") && (item.Region == "צפון")) {
                                    for (let i = 0; i < valueFilteringPopular.length; i++) {
                                        if (valueFilteringPopular[i] == "כשר") {
                                            if(item.Kosher == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                            if(item.WiFi == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חנייה") {
                                            if(item.Parking == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "נגישות") {
                                            if(item.Accessibility == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                            if(item.Separated_Rooms == "לא"){
                                                test =false;
                                            }
                                        }
                                    }
                                    if (test == true) {
                                        var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                        lodgingMainHostels1.addToHTML();
                                        boxCount++; 
                                    }
                                    test = true;
                                    
                                }
                            }
                            else{
                                if ((item.Accommodation_Type != "בית ספר שדה") && (item.Region == "צפון")) {
                                    var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainHostels1.addToHTML();
                                    boxCount++;
                                    
                                }
                                
                            }
                            count++;
                        }
                        localStorage.setItem("countStop2", (count));
                        if (count == page_obj.hostels) {
                            page_obj.boxRemains=24-boxCount;
                            countPage=(localStorage["FilteringCount"]) *1;
                            localStorage.removeItem("FilteringCount");
                            localStorage.setItem("FilteringCount", (countPage+1));
                            localStoragePageswitch();
                        }
                    }
                }
            })  
        }
}
function createNorthSchool(){
    count = countStart();
        if (page_obj.boxRemains>0) {
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $.ajax({
                url:"_JSON/JSON_Hostels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hostels){
                    valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    }
                    while ((count < json_Hostels.length) && (boxCount < page_obj.boxRemains)) {
                        var item=json_Hostels[count];
                        if (valueFilteringPopular.length > 0) {
                            if ((item.Accommodation_Type == "בית ספר שדה") && (item.Region == "צפון")) {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                        if(item.Separated_Rooms == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                                if (test == true) {
                                    var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainHostels1.addToHTML();
                                    boxCount++;
                                }
                            }
                            test = true;
                        }
                        else{
                            if ((item.Accommodation_Type == "בית ספר שדה") && (item.Region == "צפון")) {
                                var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainHostels1.addToHTML();
                                boxCount++;
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                    if (count== json_Hostels.length) {
                        countPage=(localStorage["FilteringCount"]) *1;
                        localStorage.removeItem("FilteringCount");
                        localStorage.setItem("FilteringCount", (countPage+1));
                    }
                    if (boxCount >= page_obj.boxRemains) {
                        page_obj.boxRemains=0;
                    }
                    else{
                        if (count== page_obj.hostels) {
                            page_obj.boxRemains=page_obj.boxRemains-boxCount;
                            localStoragePageswitch();
                        }
                    }
                }
            })  
        }
        else{
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $(".lodging").empty();
            $.ajax({
                url:"_JSON/JSON_Hostels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hostels){
                    if ($(".lodging").is(':empty')) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        while ((count < json_Hostels.length) && (boxCount < 24)) {
                            var item=json_Hostels[count];
                            if (valueFilteringPopular.length > 0) {
                                if ((item.Accommodation_Type == "בית ספר שדה") && (item.Region == "צפון")) {
                                    for (let i = 0; i < valueFilteringPopular.length; i++) {
                                        if (valueFilteringPopular[i] == "כשר") {
                                            if(item.Kosher == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                            if(item.WiFi == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חנייה") {
                                            if(item.Parking == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "נגישות") {
                                            if(item.Accessibility == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                            if(item.Separated_Rooms == "לא"){
                                                test =false;
                                            }
                                        }
                                    }
                                    if (test == true) {
                                        var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                        lodgingMainHostels1.addToHTML();
                                        boxCount++; 
                                    }
                                    test = true;
                                    
                                }
                            }
                            else{
                                if ((item.Accommodation_Type == "בית ספר שדה") && (item.Region == "צפון")) {
                                    var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainHostels1.addToHTML();
                                    boxCount++;
                                    
                                }
                               
                            }
                            count++;
                        }
                        localStorage.setItem("countStop2", (count));
                        if (count == page_obj.hostels) {
                            page_obj.boxRemains=24-boxCount;
                            countPage=(localStorage["FilteringCount"]) *1;
                            localStorage.removeItem("FilteringCount");
                            localStorage.setItem("FilteringCount", (countPage+1));
                            localStoragePageswitch();
                        }
                    }
                }
            })  
        }
}
function createNorthBandB(){
    count = countStart();
        if (page_obj.boxRemains>0) {
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $.ajax({
                url:"_JSON/JSON_B_and_B.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_BandB){
                    valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    }
                    while ((count < json_BandB.length) && (boxCount < page_obj.boxRemains)) {
                        var item=json_BandB[count];
                        if (valueFilteringPopular.length > 0) {
                            if (item.Region == "צפון") {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                            
                            if (test == true) {
                                var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainBandB1.addToHTML();
                            }
                        }
                            test = true;
                        }
                        else{
                            if (item.Region == "צפון") {
                                var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainBandB1.addToHTML();
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                    if (count== page_obj.BandB) {
                        countPage=(localStorage["FilteringCount"]) *1;
                        localStorage.removeItem("FilteringCount");
                        localStorage.setItem("FilteringCount", (countPage+1));
                    }
                    if (boxCount >= page_obj.boxRemains) {
                        page_obj.boxRemains=0;
                    }
                    else{
                        if (count== page_obj.BandB) {
                            page_obj.boxRemains=page_obj.boxRemains-boxCount;
                            localStoragePageswitch();
                        }
                    }
                }
            }) 
        }
        else{
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $(".lodging").empty();
            $.ajax({
                url:"_JSON/JSON_B_and_B.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_BandB){
                    if ($(".lodging").is(':empty')) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        while ((count < json_BandB.length) && (boxCount < 24)) {
                            var item=json_BandB[count];
                            if (valueFilteringPopular.length > 0) {
                                if (item.Region == "צפון") {
                                    for (let i = 0; i < valueFilteringPopular.length; i++) {
                                        if (valueFilteringPopular[i] == "כשר") {
                                            if(item.Kosher == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                            if(item.WiFi == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חנייה") {
                                            if(item.Parking == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "נגישות") {
                                            if(item.Accessibility == "לא"){
                                                test =false;
                                            }
                                        }
                                    }
                                    if (test == true) {
                                        var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                        lodgingMainBandB1.addToHTML();
                                    }
                                    test = true;
                                    
                                }
                            }
                            else{
                                if (item.Region == "צפון") {
                                    var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainBandB1.addToHTML();
                                } 
                            }
                            count++;
                        }
                        localStorage.setItem("countStop2", (count));
                        if (count == page_obj.BandB) {
                            page_obj.boxRemains=24-boxCount;
                            countPage=(localStorage["FilteringCount"]) *1;
                            localStorage.removeItem("FilteringCount");
                            localStorage.setItem("FilteringCount", (countPage+1));
                            localStoragePageswitch();
                        }
                    }
                }
            })  
        }
}
function createEilat(){
    count = countStart();
    boxCount=0;
    valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
    if (count < page_obj.hotels) {
        if (page_obj.boxRemains == 0) {
            $(".lodging").empty();
        }
        $.ajax({
            url:"_JSON/JSON_Hotels.json",
            crossDomain:false,
            dataType:"json",
            success:function(json_Hotels){   
                if ($(".lodging").is(':empty')) {
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    } 
                    while ((count < json_Hotels.length) && (boxCount < 24)) {
                        var item=json_Hotels[count];
                        if (valueFilteringPopular.length > 0) {
                            if ((item.Region == "אילת")) {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "בריכת שחייה") {
                                        if(item.Swimming_Pool == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                                if (test == true) {
                                    var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                    lodgingMainHotels1.addToHTML();
                                    boxCount++; 
                                }
                                test = true;
                            }
                        }
                        else{
                            if (item.Region == "אילת") {
                                var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                lodgingMainHotels1.addToHTML();
                                boxCount++; 
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                    if (count == page_obj.hotels) {
                        page_obj.boxRemains=24-boxCount;
                        localStoragePageswitch();
                    }
                } 
            }
        }) 
    }
    boxCount=0;
    if ((count >= page_obj.hotels) && (count < (page_obj.hotels + page_obj.hostels))) {
        if (localStorage["countStop2"] != 0) {
            localStorage.setItem("countStop1", (localStorage["countStop2"]));
        }
        valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
        if (page_obj.boxRemains == 0) {
            $(".lodging").empty();
        }
        $.ajax({
        url:"_JSON/JSON_Hostels.json",
        crossDomain:false,
        dataType:"json",
        success:function(json_Hostels){
            if (page_obj.boxRemains == 0) {
                if ($(".lodging").is(':empty')) {
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    }
                    while (((count-page_obj.hotels) < json_Hostels.length) && (boxCount < 24)) {
                        var item=json_Hostels[count-page_obj.hotels];
                        if (valueFilteringPopular.length > 0) {
                            if ((item.Region == "אילת")) {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                        test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                        if(item.Separated_Rooms == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                                if (test == true) {
                                    var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainHostels1.addToHTML();
                                    boxCount++; 
                                }
                                test = true;
                            }
                        }
                        else{
                            if (item.Region == "אילת") {
                                var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainHostels1.addToHTML();
                                boxCount++;
                            }
                        }
                        count++;
                    }
                }
                localStorage.setItem("countStop2", (count));
                }
                else{
                    while (((count-page_obj.hotels) < json_Hostels.length) && (count < (page_obj.hostels+page_obj.hotels)) && (boxCount < page_obj.boxRemains)) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        var item=json_Hostels[count-page_obj.hotels];
                        if (valueFilteringPopular.length > 0) {
                            if ((item.Region == "אילת")) {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                        if(item.Separated_Rooms == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                                if (test == true) {
                                    var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainHostels1.addToHTML();
                                    boxCount++; 
                                }
                                test = true;
                            }
                        }
                        else{
                            if (item.Region == "אילת") {
                                var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainHostels1.addToHTML();
                                boxCount++;
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                }
                if (boxCount >= page_obj.boxRemains) {
                    page_obj.boxRemains=0;
                }
                else{
                    if (count== (page_obj.hostels+page_obj.hotels)) {
                        page_obj.boxRemains=page_obj.boxRemains-boxCount;
                        localStoragePageswitch();
                    }
                }
            }    
        })
    }
    boxCount=0;
    if ((count >= (page_obj.hotels + page_obj.hostels)) && (count < (page_obj.hotels + page_obj.hostels + page_obj.BandB))) {
        if (localStorage["countStop2"] != 0) {
            localStorage.setItem("countStop1", (localStorage["countStop2"]));
        }
        valueFilteringPopular = JSON.parse(localStorage.getItem("valueFilteringPopular"));
        if (page_obj.boxRemains == 0) {
            $(".lodging").empty();
        }
        $.ajax({
            url:"_JSON/JSON_B_and_B.json",
            crossDomain:false,
            dataType:"json",
            success:function(json_BandB){  
                if (page_obj.boxRemains == 0) {
                    if ($(".lodging").is(':empty')) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        while (((count-page_obj.hotels-page_obj.hostels) < json_BandB.length) && (boxCount < 24)) {
                            var item=json_BandB[count-page_obj.hotels-page_obj.hostels];
                            if (valueFilteringPopular.length > 0) {
                                if ((item.Region == "אילת")) {
                                    for (let i = 0; i < valueFilteringPopular.length; i++) {
                                        if (valueFilteringPopular[i] == "כשר") {
                                            if(item.Kosher == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                            if(item.WiFi == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חנייה") {
                                            if(item.Parking == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "נגישות") {
                                            if(item.Accessibility == "לא"){
                                                test =false;
                                            }
                                        }
                                    }
                                    if (test == true) {
                                        var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                        lodgingMainBandB1.addToHTML();
                                        boxCount++; 
                                    }
                                    test = true;
                                }
                            }
                            else{
                                if (item.Region == "אילת") {
                                    var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainBandB1.addToHTML();
                                    boxCount++;
                                } 
                            }
                            count++;
                        }
                    }
                    localStorage.setItem("countStop2", (count));
                }
                else{
                    while (((count-page_obj.hotels-page_obj.hostels) < json_BandB.length) && (boxCount < page_obj.boxRemains)) {
                        var item=json_BandB[count-page_obj.hotels-page_obj.hostels];
                        if (valueFilteringPopular.length > 0) {
                            if ((item.Region == "אילת")) {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                                if (test == true) {
                                    var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainBandB1.addToHTML();
                                    boxCount++; 
                                }
                                test = true;  
                            }
                        }
                        else{
                            if (item.Region == "אילת") {
                                var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainBandB1.addToHTML();
                                boxCount++;  
                            }
                        }
                        if (count == page_obj.BandB) {
                            boxCount=page_obj.BandB;
                        }
                        count++;
                    }
                    page_obj.boxRemains=0;
                    localStorage.setItem("countStop2", (count));
                }    
            }   
        }) 
    }  
}
function createEilatHotel(){
    count = countStart();
        if (page_obj.boxRemains>0) {
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $.ajax({
                url:"_JSON/JSON_Hotels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hotels){
                    valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    }
                    while ((count < json_Hotels.length) && (boxCount < page_obj.boxRemains)) {
                        var item=json_Hotels[count];
                        if (valueFilteringPopular.length > 0) {
                            if (item.Region == "אילת") {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "בריכת שחייה") {
                                        if(item.Swimming_Pool == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                            
                            if (test == true) {
                                var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                lodgingMainHotels1.addToHTML();
                                boxCount++;
                            }
                        }
                            test = true;
                        }
                        else{
                            if (item.Region == "אילת") {
                                var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                lodgingMainHotels1.addToHTML();
                                boxCount++;
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                    if (count== page_obj.hotels) {
                        countPage=(localStorage["FilteringCount"]) *1;
                        localStorage.removeItem("FilteringCount");
                        localStorage.setItem("FilteringCount", (countPage+1));
                    }
                    if (boxCount >= page_obj.boxRemains) {
                        page_obj.boxRemains=0;
                    }
                    else{
                        if (count== page_obj.hotels) {
                            page_obj.boxRemains=page_obj.boxRemains-boxCount;
                            localStoragePageswitch();
                        }
                    }
                }
            }) 
        }
        else{
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $(".lodging").empty();
            $.ajax({
                url:"_JSON/JSON_Hotels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hotels){
                    if ($(".lodging").is(':empty')) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        while ((count < json_Hotels.length) && (boxCount < 24)) {
                            var item=json_Hotels[count];
                            if (valueFilteringPopular.length > 0) {
                                if (item.Region == "אילת") {
                                    for (let i = 0; i < valueFilteringPopular.length; i++) {
                                        if (valueFilteringPopular[i] == "כשר") {
                                            if(item.Kosher == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                            if(item.WiFi == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חנייה") {
                                            if(item.Parking == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "נגישות") {
                                            if(item.Accessibility == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "בריכת שחייה") {
                                            if(item.Swimming_Pool == "לא"){
                                                test =false;
                                            }
                                        }
                                    }
                                    if (test == true) {
                                        var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                        lodgingMainHotels1.addToHTML();
                                        boxCount++; 
                                    }
                                    test = true;
                                    
                                }
                            }
                            else{
                                if (item.Region == "אילת") {
                                    var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                    lodgingMainHotels1.addToHTML();
                                    boxCount++; 
                                } 
                            }
                            count++;
                        }
                        localStorage.setItem("countStop2", (count));
                        if (count == page_obj.hotels) {
                            page_obj.boxRemains=24-boxCount;
                            countPage=(localStorage["FilteringCount"]) *1;
                            localStorage.removeItem("FilteringCount");
                            localStorage.setItem("FilteringCount", (countPage+1));
                            localStoragePageswitch();
                        }
                    }
                }
            })  
        }
    }  
function createEilatHostel(){
    count = countStart();
        if (page_obj.boxRemains>0) {
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $.ajax({
                url:"_JSON/JSON_Hostels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hostels){
                    valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    }
                    while ((count < json_Hostels.length) && (boxCount < page_obj.boxRemains)) {
                        var item=json_Hostels[count];
                        if (valueFilteringPopular.length > 0) {
                            if ((item.Accommodation_Type != "בית ספר שדה") && (item.Region == "אילת")) {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                        if(item.Separated_Rooms == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                            
                            if (test == true) {
                                var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainHostels1.addToHTML();
                                boxCount++;
                            }
                        }
                            test = true;
                        }
                        else{
                            if ((item.Accommodation_Type != "בית ספר שדה") && (item.Region == "אילת")) {
                                var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainHostels1.addToHTML();
                                boxCount++;
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                    if (count== page_obj.hostels) {
                        countPage=(localStorage["FilteringCount"]) *1;
                        localStorage.removeItem("FilteringCount");
                        localStorage.setItem("FilteringCount", (countPage+1));
                    }
                    if (boxCount >= page_obj.boxRemains) {
                        page_obj.boxRemains=0;
                    }
                    else{
                        if (count== page_obj.hostels) {
                            page_obj.boxRemains=page_obj.boxRemains-boxCount;
                            localStoragePageswitch();
                        }
                    }
                }
            }) 
        }
        else{
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $(".lodging").empty();
            $.ajax({
                url:"_JSON/JSON_Hostels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hostels){
                    if ($(".lodging").is(':empty')) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        while ((count < json_Hostels.length) && (boxCount < 24)) {
                            var item=json_Hostels[count];
                            if (valueFilteringPopular.length > 0) {
                                if ((item.Accommodation_Type != "בית ספר שדה") && (item.Region == "אילת")) {
                                    for (let i = 0; i < valueFilteringPopular.length; i++) {
                                        if (valueFilteringPopular[i] == "כשר") {
                                            if(item.Kosher == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                            if(item.WiFi == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חנייה") {
                                            if(item.Parking == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "נגישות") {
                                            if(item.Accessibility == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                            if(item.Separated_Rooms == "לא"){
                                                test =false;
                                            }
                                        }
                                    }
                                    if (test == true) {
                                        var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                        lodgingMainHostels1.addToHTML();
                                        boxCount++; 
                                    }
                                    test = true;
                                    
                                }
                            }
                            else{
                                if ((item.Accommodation_Type != "בית ספר שדה") && (item.Region == "אילת")) {
                                    var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainHostels1.addToHTML();
                                    boxCount++;
                                    
                                }
                                
                            }
                            count++;
                        }
                        localStorage.setItem("countStop2", (count));
                        if (count == page_obj.hostels) {
                            page_obj.boxRemains=24-boxCount;
                            countPage=(localStorage["FilteringCount"]) *1;
                            localStorage.removeItem("FilteringCount");
                            localStorage.setItem("FilteringCount", (countPage+1));
                            localStoragePageswitch();
                        }
                    }
                }
            })  
        }
}
function createEilatSchool(){
    count = countStart();
        if (page_obj.boxRemains>0) {
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $.ajax({
                url:"_JSON/JSON_Hostels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hostels){
                    valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    }
                    while ((count < json_Hostels.length) && (boxCount < page_obj.boxRemains)) {
                        var item=json_Hostels[count];
                        if (valueFilteringPopular.length > 0) {
                            if ((item.Accommodation_Type == "בית ספר שדה") && (item.Region == "אילת")) {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                        if(item.Separated_Rooms == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                                if (test == true) {
                                    var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainHostels1.addToHTML();
                                    boxCount++;
                                }
                            }
                            test = true;
                        }
                        else{
                            if ((item.Accommodation_Type == "בית ספר שדה") && (item.Region == "אילת")) {
                                var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainHostels1.addToHTML();
                                boxCount++;
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                    if (count== json_Hostels.length) {
                        countPage=(localStorage["FilteringCount"]) *1;
                        localStorage.removeItem("FilteringCount");
                        localStorage.setItem("FilteringCount", (countPage+1));
                    }
                    if (boxCount >= page_obj.boxRemains) {
                        page_obj.boxRemains=0;
                    }
                    else{
                        if (count== page_obj.hostels) {
                            page_obj.boxRemains=page_obj.boxRemains-boxCount;
                            localStoragePageswitch();
                        }
                    }
                }
            })  
        }
        else{
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $(".lodging").empty();
            $.ajax({
                url:"_JSON/JSON_Hostels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hostels){
                    if ($(".lodging").is(':empty')) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        while ((count < json_Hostels.length) && (boxCount < 24)) {
                            var item=json_Hostels[count];
                            if (valueFilteringPopular.length > 0) {
                                if ((item.Accommodation_Type == "בית ספר שדה") && (item.Region == "אילת")) {
                                    for (let i = 0; i < valueFilteringPopular.length; i++) {
                                        if (valueFilteringPopular[i] == "כשר") {
                                            if(item.Kosher == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                            if(item.WiFi == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חנייה") {
                                            if(item.Parking == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "נגישות") {
                                            if(item.Accessibility == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                            if(item.Separated_Rooms == "לא"){
                                                test =false;
                                            }
                                        }
                                    }
                                    if (test == true) {
                                        var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                        lodgingMainHostels1.addToHTML();
                                        boxCount++; 
                                    }
                                    test = true;
                                    
                                }
                            }
                            else{
                                if ((item.Accommodation_Type == "בית ספר שדה") && (item.Region == "אילת")) {
                                    var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainHostels1.addToHTML();
                                    boxCount++;
                                    
                                }
                               
                            }
                            count++;
                        }
                        localStorage.setItem("countStop2", (count));
                        if (count == page_obj.hostels) {
                            page_obj.boxRemains=24-boxCount;
                            countPage=(localStorage["FilteringCount"]) *1;
                            localStorage.removeItem("FilteringCount");
                            localStorage.setItem("FilteringCount", (countPage+1));
                            localStoragePageswitch();
                        }
                    }
                }
            })  
        }
}
function createEilatBandB(){
    count = countStart();
        if (page_obj.boxRemains>0) {
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $.ajax({
                url:"_JSON/JSON_B_and_B.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_BandB){
                    valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    }
                    while ((count < json_BandB.length) && (boxCount < page_obj.boxRemains)) {
                        var item=json_BandB[count];
                        if (valueFilteringPopular.length > 0) {
                            if (item.Region == "אילת") {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                            
                            if (test == true) {
                                var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainBandB1.addToHTML();
                            }
                        }
                            test = true;
                        }
                        else{
                            if (item.Region == "אילת") {
                                var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainBandB1.addToHTML();
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                    if (count== page_obj.BandB) {
                        countPage=(localStorage["FilteringCount"]) *1;
                        localStorage.removeItem("FilteringCount");
                        localStorage.setItem("FilteringCount", (countPage+1));
                    }
                    if (boxCount >= page_obj.boxRemains) {
                        page_obj.boxRemains=0;
                    }
                    else{
                        if (count== page_obj.BandB) {
                            page_obj.boxRemains=page_obj.boxRemains-boxCount;
                            localStoragePageswitch();
                        }
                    }
                }
            }) 
        }
        else{
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $(".lodging").empty();
            $.ajax({
                url:"_JSON/JSON_B_and_B.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_BandB){
                    if ($(".lodging").is(':empty')) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        while ((count < json_BandB.length) && (boxCount < 24)) {
                            var item=json_BandB[count];
                            if (valueFilteringPopular.length > 0) {
                                if (item.Region == "אילת") {
                                    for (let i = 0; i < valueFilteringPopular.length; i++) {
                                        if (valueFilteringPopular[i] == "כשר") {
                                            if(item.Kosher == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                            if(item.WiFi == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חנייה") {
                                            if(item.Parking == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "נגישות") {
                                            if(item.Accessibility == "לא"){
                                                test =false;
                                            }
                                        }
                                    }
                                    if (test == true) {
                                        var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                        lodgingMainBandB1.addToHTML();
                                    }
                                    test = true;
                                    
                                }
                            }
                            else{
                                if (item.Region == "אילת") {
                                    var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainBandB1.addToHTML();
                                } 
                            }
                            count++;
                        }
                        localStorage.setItem("countStop2", (count));
                        if (count == page_obj.BandB) {
                            page_obj.boxRemains=24-boxCount;
                            countPage=(localStorage["FilteringCount"]) *1;
                            localStorage.removeItem("FilteringCount");
                            localStorage.setItem("FilteringCount", (countPage+1));
                            localStoragePageswitch();
                        }
                    }
                }
            })  
        }
}
function createJerusalemAndTheSurroundingArea(){
    count = countStart();
    boxCount=0;
    valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
    if (count < page_obj.hotels) {
        if (page_obj.boxRemains == 0) {
            $(".lodging").empty();
        }
        $.ajax({
            url:"_JSON/JSON_Hotels.json",
            crossDomain:false,
            dataType:"json",
            success:function(json_Hotels){   
                if ($(".lodging").is(':empty')) {
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    } 
                    while ((count < json_Hotels.length) && (boxCount < 24)) {
                        var item=json_Hotels[count];
                        if (valueFilteringPopular.length > 0) {
                            if ((item.Region == "ירושלים והסביבה")) {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "בריכת שחייה") {
                                        if(item.Swimming_Pool == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                                if (test == true) {
                                    var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                    lodgingMainHotels1.addToHTML();
                                    boxCount++; 
                                }
                                test = true;
                            }
                        }
                        else{
                            if (item.Region == "ירושלים והסביבה") {
                                var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                lodgingMainHotels1.addToHTML();
                                boxCount++; 
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                    if (count == page_obj.hotels) {
                        page_obj.boxRemains=24-boxCount;
                        localStoragePageswitch();
                    }
                } 
            }
        }) 
    }
    boxCount=0;
    if ((count >= page_obj.hotels) && (count < (page_obj.hotels + page_obj.hostels))) {
        if (localStorage["countStop2"] != 0) {
            localStorage.setItem("countStop1", (localStorage["countStop2"]));
        }
        valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
        if (page_obj.boxRemains == 0) {
            $(".lodging").empty();
        }
        $.ajax({
        url:"_JSON/JSON_Hostels.json",
        crossDomain:false,
        dataType:"json",
        success:function(json_Hostels){
            if (page_obj.boxRemains == 0) {
                if ($(".lodging").is(':empty')) {
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    }
                    while (((count-page_obj.hotels) < json_Hostels.length) && (boxCount < 24)) {
                        var item=json_Hostels[count-page_obj.hotels];
                        if (valueFilteringPopular.length > 0) {
                            if ((item.Region == "ירושלים והסביבה")) {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                        test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                        if(item.Separated_Rooms == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                                if (test == true) {
                                    var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainHostels1.addToHTML();
                                    boxCount++; 
                                }
                                test = true;
                            }
                        }
                        else{
                            if (item.Region == "ירושלים והסביבה") {
                                var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainHostels1.addToHTML();
                                boxCount++;
                            }
                        }
                        count++;
                    }
                }
                localStorage.setItem("countStop2", (count));
                }
                else{
                    while (((count-page_obj.hotels) < json_Hostels.length) && (count < (page_obj.hostels+page_obj.hotels)) && (boxCount < page_obj.boxRemains)) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        var item=json_Hostels[count-page_obj.hotels];
                        if (valueFilteringPopular.length > 0) {
                            if ((item.Region == "ירושלים והסביבה")) {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                        if(item.Separated_Rooms == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                                if (test == true) {
                                    var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainHostels1.addToHTML();
                                    boxCount++; 
                                }
                                test = true;
                            }
                        }
                        else{
                            if (item.Region == "ירושלים והסביבה") {
                                var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainHostels1.addToHTML();
                                boxCount++;
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                }
                if (boxCount >= page_obj.boxRemains) {
                    page_obj.boxRemains=0;
                }
                else{
                    if (count== (page_obj.hostels+page_obj.hotels)) {
                        page_obj.boxRemains=page_obj.boxRemains-boxCount;
                        localStoragePageswitch();
                    }
                }
            }    
        })
    }
    boxCount=0;
    if ((count >= (page_obj.hotels + page_obj.hostels)) && (count < (page_obj.hotels + page_obj.hostels + page_obj.BandB))) {
        if (localStorage["countStop2"] != 0) {
            localStorage.setItem("countStop1", (localStorage["countStop2"]));
        }
        valueFilteringPopular = JSON.parse(localStorage.getItem("valueFilteringPopular"));
        if (page_obj.boxRemains == 0) {
            $(".lodging").empty();
        }
        $.ajax({
            url:"_JSON/JSON_B_and_B.json",
            crossDomain:false,
            dataType:"json",
            success:function(json_BandB){  
                if (page_obj.boxRemains == 0) {
                    if ($(".lodging").is(':empty')) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        while (((count-page_obj.hotels-page_obj.hostels) < json_BandB.length) && (boxCount < 24)) {
                            var item=json_BandB[count-page_obj.hotels-page_obj.hostels];
                            if (valueFilteringPopular.length > 0) {
                                if ((item.Region == "ירושלים והסביבה")) {
                                    for (let i = 0; i < valueFilteringPopular.length; i++) {
                                        if (valueFilteringPopular[i] == "כשר") {
                                            if(item.Kosher == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                            if(item.WiFi == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חנייה") {
                                            if(item.Parking == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "נגישות") {
                                            if(item.Accessibility == "לא"){
                                                test =false;
                                            }
                                        }
                                    }
                                    if (test == true) {
                                        var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                        lodgingMainBandB1.addToHTML();
                                        boxCount++; 
                                    }
                                    test = true;
                                }
                            }
                            else{
                                if (item.Region == "ירושלים והסביבה") {
                                    var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainBandB1.addToHTML();
                                    boxCount++;
                                } 
                            }
                            count++;
                        }
                    }
                    localStorage.setItem("countStop2", (count));
                }
                else{
                    while (((count-page_obj.hotels-page_obj.hostels) < json_BandB.length) && (boxCount < page_obj.boxRemains)) {
                        var item=json_BandB[count-page_obj.hotels-page_obj.hostels];
                        if (valueFilteringPopular.length > 0) {
                            if ((item.Region == "ירושלים והסביבה")) {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                                if (test == true) {
                                    var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainBandB1.addToHTML();
                                    boxCount++; 
                                }
                                test = true;  
                            }
                        }
                        else{
                            if (item.Region == "ירושלים והסביבה") {
                                var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainBandB1.addToHTML();
                                boxCount++;  
                            }
                        }
                        if (count == page_obj.BandB) {
                            boxCount=page_obj.BandB;
                        }
                        count++;
                    }
                    page_obj.boxRemains=0;
                    localStorage.setItem("countStop2", (count));
                }    
            }   
        }) 
    }  
}
function createJerusalemAndTheSurroundingAreaHotel(){
    count = countStart();
        if (page_obj.boxRemains>0) {
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $.ajax({
                url:"_JSON/JSON_Hotels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hotels){
                    valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    }
                    while ((count < json_Hotels.length) && (boxCount < page_obj.boxRemains)) {
                        var item=json_Hotels[count];
                        if (valueFilteringPopular.length > 0) {
                            if (item.Region == "ירושלים והסביבה") {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "בריכת שחייה") {
                                        if(item.Swimming_Pool == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                            
                            if (test == true) {
                                var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                lodgingMainHotels1.addToHTML();
                                boxCount++;
                            }
                        }
                            test = true;
                        }
                        else{
                            if (item.Region == "ירושלים והסביבה") {
                                var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                lodgingMainHotels1.addToHTML();
                                boxCount++;
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                    if (count== page_obj.hotels) {
                        countPage=(localStorage["FilteringCount"]) *1;
                        localStorage.removeItem("FilteringCount");
                        localStorage.setItem("FilteringCount", (countPage+1));
                    }
                    if (boxCount >= page_obj.boxRemains) {
                        page_obj.boxRemains=0;
                    }
                    else{
                        if (count== page_obj.hotels) {
                            page_obj.boxRemains=page_obj.boxRemains-boxCount;
                            localStoragePageswitch();
                        }
                    }
                }
            }) 
        }
        else{
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $(".lodging").empty();
            $.ajax({
                url:"_JSON/JSON_Hotels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hotels){
                    if ($(".lodging").is(':empty')) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        while ((count < json_Hotels.length) && (boxCount < 24)) {
                            var item=json_Hotels[count];
                            if (valueFilteringPopular.length > 0) {
                                if (item.Region == "ירושלים והסביבה") {
                                    for (let i = 0; i < valueFilteringPopular.length; i++) {
                                        if (valueFilteringPopular[i] == "כשר") {
                                            if(item.Kosher == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                            if(item.WiFi == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חנייה") {
                                            if(item.Parking == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "נגישות") {
                                            if(item.Accessibility == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "בריכת שחייה") {
                                            if(item.Swimming_Pool == "לא"){
                                                test =false;
                                            }
                                        }
                                    }
                                    if (test == true) {
                                        var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                        lodgingMainHotels1.addToHTML();
                                        boxCount++; 
                                    }
                                    test = true;
                                    
                                }
                            }
                            else{
                                if (item.Region == "ירושלים והסביבה") {
                                    var lodgingMainHotels1=new lodgingHotels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Hotel_Classification,item.Kosher,item.Near_To,item.Number_of_Rooms,item.Parking,item.Rated,item.Swimming_Pool,item.Region,item.URL,item.WiFi,item.X,item.Y);  
                                    lodgingMainHotels1.addToHTML();
                                    boxCount++; 
                                } 
                            }
                            count++;
                        }
                        localStorage.setItem("countStop2", (count));
                        if (count == page_obj.hotels) {
                            page_obj.boxRemains=24-boxCount;
                            countPage=(localStorage["FilteringCount"]) *1;
                            localStorage.removeItem("FilteringCount");
                            localStorage.setItem("FilteringCount", (countPage+1));
                            localStoragePageswitch();
                        }
                    }
                }
            })  
        }
    }  
function createJerusalemAndTheSurroundingAreaHostel(){
    count = countStart();
        if (page_obj.boxRemains>0) {
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $.ajax({
                url:"_JSON/JSON_Hostels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hostels){
                    valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    }
                    while ((count < json_Hostels.length) && (boxCount < page_obj.boxRemains)) {
                        var item=json_Hostels[count];
                        if (valueFilteringPopular.length > 0) {
                            if ((item.Accommodation_Type != "בית ספר שדה") && (item.Region == "ירושלים והסביבה")) {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                        if(item.Separated_Rooms == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                            
                            if (test == true) {
                                var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainHostels1.addToHTML();
                                boxCount++;
                            }
                        }
                            test = true;
                        }
                        else{
                            if ((item.Accommodation_Type != "בית ספר שדה") && (item.Region == "ירושלים והסביבה")) {
                                var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainHostels1.addToHTML();
                                boxCount++;
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                    if (count== page_obj.hostels) {
                        countPage=(localStorage["FilteringCount"]) *1;
                        localStorage.removeItem("FilteringCount");
                        localStorage.setItem("FilteringCount", (countPage+1));
                    }
                    if (boxCount >= page_obj.boxRemains) {
                        page_obj.boxRemains=0;
                    }
                    else{
                        if (count== page_obj.hostels) {
                            page_obj.boxRemains=page_obj.boxRemains-boxCount;
                            localStoragePageswitch();
                        }
                    }
                }
            }) 
        }
        else{
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $(".lodging").empty();
            $.ajax({
                url:"_JSON/JSON_Hostels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hostels){
                    if ($(".lodging").is(':empty')) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        while ((count < json_Hostels.length) && (boxCount < 24)) {
                            var item=json_Hostels[count];
                            if (valueFilteringPopular.length > 0) {
                                if ((item.Accommodation_Type != "בית ספר שדה") && (item.Region == "ירושלים והסביבה")) {
                                    for (let i = 0; i < valueFilteringPopular.length; i++) {
                                        if (valueFilteringPopular[i] == "כשר") {
                                            if(item.Kosher == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                            if(item.WiFi == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חנייה") {
                                            if(item.Parking == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "נגישות") {
                                            if(item.Accessibility == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                            if(item.Separated_Rooms == "לא"){
                                                test =false;
                                            }
                                        }
                                    }
                                    if (test == true) {
                                        var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                        lodgingMainHostels1.addToHTML();
                                        boxCount++; 
                                    }
                                    test = true;
                                    
                                }
                            }
                            else{
                                if ((item.Accommodation_Type != "בית ספר שדה") && (item.Region == "ירושלים והסביבה")) {
                                    var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainHostels1.addToHTML();
                                    boxCount++;
                                    
                                }
                                
                            }
                            count++;
                        }
                        localStorage.setItem("countStop2", (count));
                        if (count == page_obj.hostels) {
                            page_obj.boxRemains=24-boxCount;
                            countPage=(localStorage["FilteringCount"]) *1;
                            localStorage.removeItem("FilteringCount");
                            localStorage.setItem("FilteringCount", (countPage+1));
                            localStoragePageswitch();
                        }
                    }
                }
            })  
        }
}
function createJerusalemAndTheSurroundingAreaSchool(){
    count = countStart();
        if (page_obj.boxRemains>0) {
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $.ajax({
                url:"_JSON/JSON_Hostels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hostels){
                    valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    }
                    while ((count < json_Hostels.length) && (boxCount < page_obj.boxRemains)) {
                        var item=json_Hostels[count];
                        if (valueFilteringPopular.length > 0) {
                            if ((item.Accommodation_Type == "בית ספר שדה") && (item.Region == "ירושלים והסביבה")) {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                        if(item.Separated_Rooms == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                                if (test == true) {
                                    var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainHostels1.addToHTML();
                                    boxCount++;
                                }
                            }
                            test = true;
                        }
                        else{
                            if ((item.Accommodation_Type == "בית ספר שדה") && (item.Region == "ירושלים והסביבה")) {
                                var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainHostels1.addToHTML();
                                boxCount++;
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                    if (count== json_Hostels.length) {
                        countPage=(localStorage["FilteringCount"]) *1;
                        localStorage.removeItem("FilteringCount");
                        localStorage.setItem("FilteringCount", (countPage+1));
                    }
                    if (boxCount >= page_obj.boxRemains) {
                        page_obj.boxRemains=0;
                    }
                    else{
                        if (count== page_obj.hostels) {
                            page_obj.boxRemains=page_obj.boxRemains-boxCount;
                            localStoragePageswitch();
                        }
                    }
                }
            })  
        }
        else{
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $(".lodging").empty();
            $.ajax({
                url:"_JSON/JSON_Hostels.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_Hostels){
                    if ($(".lodging").is(':empty')) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        while ((count < json_Hostels.length) && (boxCount < 24)) {
                            var item=json_Hostels[count];
                            if (valueFilteringPopular.length > 0) {
                                if ((item.Accommodation_Type == "בית ספר שדה") && (item.Region == "ירושלים והסביבה")) {
                                    for (let i = 0; i < valueFilteringPopular.length; i++) {
                                        if (valueFilteringPopular[i] == "כשר") {
                                            if(item.Kosher == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                            if(item.WiFi == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חנייה") {
                                            if(item.Parking == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "נגישות") {
                                            if(item.Accessibility == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חדרים נפרדים") {
                                            if(item.Separated_Rooms == "לא"){
                                                test =false;
                                            }
                                        }
                                    }
                                    if (test == true) {
                                        var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                        lodgingMainHostels1.addToHTML();
                                        boxCount++; 
                                    }
                                    test = true;
                                    
                                }
                            }
                            else{
                                if ((item.Accommodation_Type == "בית ספר שדה") && (item.Region == "ירושלים והסביבה")) {
                                    var lodgingMainHostels1=new lodgingHostels(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Beds,item.Number_of_Rooms,item.Parking,item.Region,item.Separated_Rooms,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainHostels1.addToHTML();
                                    boxCount++;
                                    
                                }
                               
                            }
                            count++;
                        }
                        localStorage.setItem("countStop2", (count));
                        if (count == page_obj.hostels) {
                            page_obj.boxRemains=24-boxCount;
                            countPage=(localStorage["FilteringCount"]) *1;
                            localStorage.removeItem("FilteringCount");
                            localStorage.setItem("FilteringCount", (countPage+1));
                            localStoragePageswitch();
                        }
                    }
                }
            })  
        }
}
function createJerusalemAndTheSurroundingAreaBandB(){
    count = countStart();
        if (page_obj.boxRemains>0) {
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $.ajax({
                url:"_JSON/JSON_B_and_B.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_BandB){
                    valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
                    if (localStorage["countStop2"] != 0) {
                        localStorage.setItem("countStop1", (localStorage["countStop2"]));
                    }
                    while ((count < json_BandB.length) && (boxCount < page_obj.boxRemains)) {
                        var item=json_BandB[count];
                        if (valueFilteringPopular.length > 0) {
                            if (item.Region == "ירושלים והסביבה") {
                                for (let i = 0; i < valueFilteringPopular.length; i++) {
                                    if (valueFilteringPopular[i] == "כשר") {
                                        if(item.Kosher == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                        if(item.WiFi == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "חנייה") {
                                        if(item.Parking == "לא"){
                                            test =false;
                                        }
                                    }
                                    if (valueFilteringPopular[i] == "נגישות") {
                                        if(item.Accessibility == "לא"){
                                            test =false;
                                        }
                                    }
                                }
                            
                            if (test == true) {
                                var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainBandB1.addToHTML();
                            }
                        }
                            test = true;
                        }
                        else{
                            if (item.Region == "ירושלים והסביבה") {
                                var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                lodgingMainBandB1.addToHTML();
                            }
                        }
                        count++;
                    }
                    localStorage.setItem("countStop2", (count));
                    if (count== page_obj.BandB) {
                        countPage=(localStorage["FilteringCount"]) *1;
                        localStorage.removeItem("FilteringCount");
                        localStorage.setItem("FilteringCount", (countPage+1));
                    }
                    if (boxCount >= page_obj.boxRemains) {
                        page_obj.boxRemains=0;
                    }
                    else{
                        if (count== page_obj.BandB) {
                            page_obj.boxRemains=page_obj.boxRemains-boxCount;
                            localStoragePageswitch();
                        }
                    }
                }
            }) 
        }
        else{
            boxCount=0;
            valueFilteringPopular= JSON.parse(localStorage.getItem("valueFilteringPopular"));
            $(".lodging").empty();
            $.ajax({
                url:"_JSON/JSON_B_and_B.json",
                crossDomain:false,
                dataType:"json",
                success:function(json_BandB){
                    if ($(".lodging").is(':empty')) {
                        if (localStorage["countStop2"] != 0) {
                            localStorage.setItem("countStop1", (localStorage["countStop2"]));
                        }
                        while ((count < json_BandB.length) && (boxCount < 24)) {
                            var item=json_BandB[count];
                            if (valueFilteringPopular.length > 0) {
                                if (item.Region == "ירושלים והסביבה") {
                                    for (let i = 0; i < valueFilteringPopular.length; i++) {
                                        if (valueFilteringPopular[i] == "כשר") {
                                            if(item.Kosher == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "אינטרנט אלחוטי") {
                                            if(item.WiFi == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "חנייה") {
                                            if(item.Parking == "לא"){
                                                test =false;
                                            }
                                        }
                                        if (valueFilteringPopular[i] == "נגישות") {
                                            if(item.Accessibility == "לא"){
                                                test =false;
                                            }
                                        }
                                    }
                                    if (test == true) {
                                        var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                        lodgingMainBandB1.addToHTML();
                                    }
                                    test = true;
                                    
                                }
                            }
                            else{
                                if (item.Region == "ירושלים והסביבה") {
                                    var lodgingMainBandB1=new lodgingBandB(id_lodging,item.Name,item.Pic_Url,item.Accessibility,item.Accommodation_Type,item.Address,item.City,item.Kosher,item.Near_To,item.Number_of_Units,item.Parking,item.Rate,item.Region,item.URL,item.WiFi,item.X,item.Y);     
                                    lodgingMainBandB1.addToHTML();
                                } 
                            }
                            count++;
                        }
                        localStorage.setItem("countStop2", (count));
                        if (count == page_obj.BandB) {
                            page_obj.boxRemains=24-boxCount;
                            countPage=(localStorage["FilteringCount"]) *1;
                            localStorage.removeItem("FilteringCount");
                            localStorage.setItem("FilteringCount", (countPage+1));
                            localStoragePageswitch();
                        }
                    }
                }
            })  
        }
}