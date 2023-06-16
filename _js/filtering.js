 $(document).ready(function(){
    var countPage;
    $("input[type=checkbox]").on('input',function(){
        $("#id_addFilteringBox").text("");
        $("#id_attractionsFiltering").text("");
        $("#id_addFilteringPopular").text("");
        $("#id_lodging").text("");
        var valueFilteringPopular=[];
        var valueFilteringArea=[];
        var valueFilteringLodging=[];
        localStorage.setItem("page", 1);
        localStorage.setItem("countStop1", 0);
        localStorage.setItem("countStop2", 0);
        localStorage.setItem("FilteringCount", 1);
        var i=1;console.log(localStorage["Filtering-"+ i] != undefined);
        
        while (localStorage["Filtering-"+ i] != undefined) {
            localStorage.removeItem("Filtering-"+ i);
            i++;
        }
        $("input[type=checkbox]:checked").each(function(){
            countPage = 0;
            var val = this.value;
            if ((val == "כשר") || (val == "בריכת שחייה") || (val == "אינטרנט אלחוטי") || (val == "נגישות") || (val == "חנייה")|| (val == "חדרים נפרדים")){
                valueFilteringPopular.push(val);
            }
            if ((val == "צפון") || (val == "דרום") || (val == "תל אביב והמרכז") || (val == "ירושלים והסביבה") || (val == "אילת") || (val == "יהודה והשומרון")  || (val == "ים המלח")){
                valueFilteringArea.push(val);
            }
            if ((val == "צימר") || (val == "מלון") || (val == "אכסניה") || (val == "בית ספר שדה")){
                valueFilteringLodging.push(val);
            }
        })
        localStorage.setItem("valueFilteringPopular", JSON.stringify(valueFilteringPopular));
        // for (var g = -1; g < valueFilteringLodging.length+1; g++) {
        //     if ((valueFilteringLodging[g+1] == "צימר")){          
        //         $("#id_addFilteringBox").append("<h3 class='star'>דירוג צימרים</h3>");
        //         $("#id_addFilteringBox").append(" <input name='vote' type='checkbox' value='A'>");
        //         $("#id_addFilteringBox").append("<label for='vote'>A</label><br>");
        //         $("#id_addFilteringBox").append(" <input name='vote' type='checkbox' value='B'>");
        //         $("#id_addFilteringBox").append("<label for='vote'>B</label><br>");
        //         $("#id_addFilteringBox").append(" <input name='vote' type='checkbox' value='C'>");
        //         $("#id_addFilteringBox").append("<label for='vote'>C</label><br>");
        //         $("#id_addFilteringBox").append(" <input name='vote' type='checkbox' value='ללא דירוג'>");
        //         $("#id_addFilteringBox").append("<label for='vote'>ללא דירוג</label><br>");
        //     }
        // }
        for (var g = -1; g < valueFilteringLodging.length+1; g++) {
            if ((valueFilteringLodging[g+1] == "צימר") && (valueFilteringArea.length == 0)){          
                countPage++;
                localStorage.setItem("Filtering-"+ countPage, "createBandB");
                localStoragePage(0);
            }
        }
        for (var g = -1; g < valueFilteringLodging.length+1; g++) {
            if ((valueFilteringLodging[g+1] == "מלון")) {
                // $("#id_addFilteringBox").append("<h3 class='star'>דירוג כוכבים - מלונות</h3>");
                // $("#id_addFilteringBox").append(" <input name='vote' type='checkbox' value='ללא דירוג'>");
                // $("#id_addFilteringBox").append("<label for='vote'>ללא דירוג</label><br>");
                // $("#id_addFilteringBox").append(" <input name='vote' type='checkbox' value='HotelsClassification'>");
                // $("#id_addFilteringBox").append("<label for='vote'><span style='font-size:200%;color:yellow;'>&starf;</span><span style='font-size:200%;color:yellow;'>&starf;</span></label><br>");
                // $("#id_addFilteringBox").append(" <input name='vote' type='checkbox' value='HotelsClassification'>");
                // $("#id_addFilteringBox").append("<label for='vote'><span style='font-size:200%;color:yellow;'>&starf;</span><span style='font-size:200%;color:yellow;'>&starf;</span><span style='font-size:200%;color:yellow;'>&starf;</span></label><br>");
                // $("#id_addFilteringBox").append(" <input name='vote' type='checkbox' value='HotelsClassification'>");
                // $("#id_addFilteringBox").append("<label for='vote'><span style='font-size:200%;color:yellow;'>&starf;</span><span style='font-size:200%;color:yellow;'>&starf;</span><span style='font-size:200%;color:yellow;'>&starf;</span><span style='font-size:200%;color:yellow;'>&starf;</span></label><br>");
                // $("#id_addFilteringBox").append(" <input name='vote' type='checkbox' value='HotelsClassification'>");
                // $("#id_addFilteringBox").append("<label for='vote'><span style='font-size:200%;color:yellow;'>&starf;</span><span style='font-size:200%;color:yellow;'>&starf;</span><span style='font-size:200%;color:yellow;'>&starf;</span><span style='font-size:200%;color:yellow;'>&starf;</span><span style='font-size:200%;color:yellow;'>&starf;</span></label><br>");
                $("#id_addFilteringPopular").append(" <input name='vote' type='checkbox' value='בריכת שחייה'>");
                $("#id_addFilteringPopular").append("<label for='vote'>בריכת שחייה - במלונות</label><br>"); 
            }
        }
        for (var g = -1; g < valueFilteringLodging.length+1; g++) {
            if ((valueFilteringLodging[g+1] == "מלון") && (valueFilteringArea.length == 0)) {
                countPage++;
                localStorage.setItem("Filtering-"+ countPage, "createHotels");
                localStoragePage(0);
            }
        }
        for (var g = -1; g < valueFilteringLodging.length+1; g++) {
            if ((valueFilteringLodging[g+1] == "אכסניה") && (valueFilteringArea.length == 0)) {console.log("אכסניה");
                countPage++;
                localStorage.setItem("Filtering-"+ countPage, "createHostels");
                localStoragePage(0);
            }
        }
        for (var g = -1; g < valueFilteringLodging.length+1; g++) {
            if (((valueFilteringLodging[g+1] == "בית ספר שדה") || (valueFilteringLodging[g+1] == "אכסניה"))) {
                $("#id_addFilteringPopular").append(" <input name='vote' type='checkbox' value='חדרים נפרדים'>");
                $("#id_addFilteringPopular").append("<label for='vote'>חדרים נפרדים - בית ספר לשדה</label><br>");
            }
        }
        for (var g = -1; g < valueFilteringLodging.length+1; g++) {
            if ((valueFilteringLodging[g+1] == "בית ספר שדה") && (valueFilteringArea.length == 0)) {console.log("בית ספר שדה");
                countPage++;
                localStorage.setItem("Filtering-"+ countPage, "createSchool");
                localStoragePage(0);
            }
        }
        for (var g = -1; g < valueFilteringArea.length+1; g++) {
            if ((valueFilteringArea[g+1] == "תל אביב והמרכז") && (valueFilteringLodging.length == 0)){
                countPage++;
                localStorage.setItem("Filtering-"+ countPage, "createTetelAvivAndCentral");
                localStoragePage(0);
            }
        }
        for (var g = 0; g < valueFilteringArea.length; g++) {
            if ((valueFilteringArea[g] == "תל אביב והמרכז")){
                for (var i = -1; i < valueFilteringLodging.length+1; i++) {
                    if ((valueFilteringLodging[i+1] == "מלון")) {
                        countPage++;
                        localStorage.setItem("Filtering-"+ countPage, "createTetelAvivAndCentralHotel");
                        localStoragePage(0);
                    }  
                }
                for (var i = -1; i < valueFilteringLodging.length+1; i++) {
                    if ((valueFilteringLodging[i+1] == "אכסניה") ) {
                        countPage++;
                        localStorage.setItem("Filtering-"+ countPage, "createTetelAvivAndCentralHostel");
                        localStoragePage(0);
                    }
                }
                for (var i = -1; i < valueFilteringLodging.length+1; i++) {
                    if ((valueFilteringLodging[i+1] == "בית ספר שדה")) {
                        countPage++;
                        localStorage.setItem("Filtering-"+ countPage, "createTetelAvivAndCentralScholl");
                        localStoragePage(0);
                    }
                }
                for (var i = -1; i < valueFilteringLodging.length+1; i++) {
                    if ((valueFilteringLodging[i+1] == "צימר")) {
                        countPage++;
                        localStorage.setItem("Filtering-"+ countPage, "createTetelAvivAndCentralBandB");
                        localStoragePage(0);
                    }
                }
            }
        }
            for (var g = -1; g < valueFilteringArea.length+1; g++) {
                if (((valueFilteringArea[g+1] == "דרום") && (valueFilteringLodging.length == 0)) || ((valueFilteringArea.length == 0) && (valueFilteringLodging.length == 0))){
                    console.log(" דרום");
                    countPage++;
                    localStorage.setItem("Filtering-"+ countPage, "createSouth");
                    localStoragePage(0);
                }
            }
            for (var g = 0; g < valueFilteringArea.length; g++) {
                if ((valueFilteringArea[g] == "דרום")){
                    for (var i = -1; i < valueFilteringLodging.length+1; i++) {
                        if ((valueFilteringLodging[i+1] == "מלון")) {
                            countPage++;
                            localStorage.setItem("Filtering-"+ countPage, "createSouthHotel");
                            localStoragePage(0);
                        }  
                    }
                    for (var i = -1; i < valueFilteringLodging.length+1; i++) {
                        if ((valueFilteringLodging[i+1] == "אכסניה") ) {
                            countPage++;
                            localStorage.setItem("Filtering-"+ countPage, "createSouthHostel");
                            localStoragePage(0);
                        }
                    }
                    for (var i = -1; i < valueFilteringLodging.length+1; i++) {
                        if ((valueFilteringLodging[i+1] == "בית ספר שדה")) {
                            countPage++;
                            localStorage.setItem("Filtering-"+ countPage, "createSouthSchool");
                            localStoragePage(0);
                        }
                    }
                    for (var i = -1; i < valueFilteringLodging.length+1; i++) {
                        if ((valueFilteringLodging[i+1] == "צימר")) {
                            countPage++;
                            localStorage.setItem("Filtering-"+ countPage, "createSouthBandB");
                            localStoragePage(0);
                        }
                    }
                }
            }
            for (var g = -1; g < valueFilteringArea.length+1; g++) {
                if (((valueFilteringArea[g+1] == "ים המלח") && (valueFilteringLodging.length == 0)) || ((valueFilteringArea.length == 0) && (valueFilteringLodging.length == 0))){
                    countPage++;
                    localStorage.setItem("Filtering-"+ countPage, "createTheDeadSea");
                    localStoragePage(0);
                }
            }
            for (var g = 0; g < valueFilteringArea.length; g++) {
                if ((valueFilteringArea[g] == "ים המלח")){
                    for (var i = -1; i < valueFilteringLodging.length+1; i++) {
                        if ((valueFilteringLodging[i+1] == "מלון")) {
                            countPage++;
                            localStorage.setItem("Filtering-"+ countPage, "createTheDeadSeaHotel");
                            localStoragePage(0);
                        }  
                    }
                    for (var i = -1; i < valueFilteringLodging.length+1; i++) {
                        if ((valueFilteringLodging[i+1] == "אכסניה") ) {
                            countPage++;
                            localStorage.setItem("Filtering-"+ countPage, "createTheDeadSeaHostel");
                            localStoragePage(0);
                        }
                    }
                    for (var i = -1; i < valueFilteringLodging.length+1; i++) {
                        if ((valueFilteringLodging[i+1] == "בית ספר שדה")) {
                            countPage++;
                            localStorage.setItem("Filtering-"+ countPage, "createTheDeadSeaSchool");
                            localStoragePage(0);
                        }
                    }
                    for (var i = -1; i < valueFilteringLodging.length+1; i++) {
                        if ((valueFilteringLodging[i+1] == "צימר")) {
                            countPage++;
                            localStorage.setItem("Filtering-"+ countPage, "createTheDeadSeaBandB");
                            localStoragePage(0);
                        }
                    }
                }
            }
            for (var g = -1; g < valueFilteringArea.length+1; g++) {
                if (((valueFilteringArea[g+1] == "יהודה והשומרון") && (valueFilteringLodging.length == 0)) || ((valueFilteringArea.length == 0) && (valueFilteringLodging.length == 0))){
                    countPage++;
                    localStorage.setItem("Filtering-"+ countPage, "createJudeaAndSamaria");
                    localStoragePage(0);
                }
            }
            for (var g = 0; g < valueFilteringArea.length; g++) {
                if ((valueFilteringArea[g] == "יהודה והשומרון")){
                    for (var i = -1; i < valueFilteringLodging.length+1; i++) {
                        if ((valueFilteringLodging[i+1] == "מלון")) {
                            countPage++;
                            localStorage.setItem("Filtering-"+ countPage, "createJudeaAndSamariaHotel");
                            localStoragePage(0);
                        }  
                    }
                    for (var i = -1; i < valueFilteringLodging.length+1; i++) {
                        if ((valueFilteringLodging[i+1] == "אכסניה") ) {
                            countPage++;
                            localStorage.setItem("Filtering-"+ countPage, "createJudeaAndSamariaHostel");
                            localStoragePage(0);
                        }
                    }
                    for (var i = -1; i < valueFilteringLodging.length+1; i++) {
                        if ((valueFilteringLodging[i+1] == "בית ספר שדה")) {
                            countPage++;
                            localStorage.setItem("Filtering-"+ countPage, "createJudeaAndSamariaSchool");
                            localStoragePage(0);
                        }
                    }
                    for (var i = -1; i < valueFilteringLodging.length+1; i++) {
                        if ((valueFilteringLodging[i+1] == "צימר")) {
                            countPage++;
                            localStorage.setItem("Filtering-"+ countPage, "createJudeaAndSamariaBandB");
                            localStoragePage(0);
                        }
                    }
                }
            }
            for (var g = -1; g < valueFilteringArea.length+1; g++) {
                if (((valueFilteringArea[g+1] == "צפון") && (valueFilteringLodging.length == 0)) || ((valueFilteringArea.length == 0) && (valueFilteringLodging.length == 0))){
                    countPage++;
                    localStorage.setItem("Filtering-"+ countPage, "createNorth");
                    localStoragePage(0);
                }
            }
            for (var g = 0; g < valueFilteringArea.length; g++) {
                if ((valueFilteringArea[g] == "צפון")){
                    for (var i = -1; i < valueFilteringLodging.length+1; i++) {
                        if ((valueFilteringLodging[i+1] == "מלון")) {
                            countPage++;
                            localStorage.setItem("Filtering-"+ countPage, "createNorthHotel");
                            localStoragePage(0);
                        }  
                    }
                    for (var i = -1; i < valueFilteringLodging.length+1; i++) {
                        if ((valueFilteringLodging[i+1] == "אכסניה") ) {
                            countPage++;
                            localStorage.setItem("Filtering-"+ countPage, "createNorthHostel");
                            localStoragePage(0);
                        }
                    }
                    for (var i = -1; i < valueFilteringLodging.length+1; i++) {
                        if ((valueFilteringLodging[i+1] == "בית ספר שדה")) {
                            countPage++;
                            localStorage.setItem("Filtering-"+ countPage, "createNorthSchool");
                            localStoragePage(0);
                        }
                    }
                    for (var i = -1; i < valueFilteringLodging.length+1; i++) {
                        if ((valueFilteringLodging[i+1] == "צימר")) {
                            countPage++;
                            localStorage.setItem("Filtering-"+ countPage, "createNorthBandB");
                            localStoragePage(0);
                        }
                    }
                }
            }
            for (var g = -1; g < valueFilteringArea.length+1; g++) {
                if (((valueFilteringArea[g+1] == "אילת") && (valueFilteringLodging.length == 0)) || ((valueFilteringArea.length == 0) && (valueFilteringLodging.length == 0))){
                    countPage++;
                    localStorage.setItem("Filtering-"+ countPage, "createEilat");
                    localStoragePage(0);
                }
            }
            for (var g = 0; g < valueFilteringArea.length; g++) {
                if ((valueFilteringArea[g] == "אילת")){
                    for (var i = -1; i < valueFilteringLodging.length+1; i++) {
                        if ((valueFilteringLodging[i+1] == "מלון")) {
                            countPage++;
                            localStorage.setItem("Filtering-"+ countPage, "createEilatHotel");
                            localStoragePage(0);
                        }  
                    }
                    for (var i = -1; i < valueFilteringLodging.length+1; i++) {
                        if ((valueFilteringLodging[i+1] == "אכסניה") ) {
                            countPage++;
                            localStorage.setItem("Filtering-"+ countPage, "createEilatHostel");
                            localStoragePage(0);
                        }
                    }
                    for (var i = -1; i < valueFilteringLodging.length+1; i++) {
                        if ((valueFilteringLodging[i+1] == "בית ספר שדה")) {
                            countPage++;
                            localStorage.setItem("Filtering-"+ countPage, "createEilatSchool");
                            localStoragePage(0);
                        }
                    }
                    for (var i = -1; i < valueFilteringLodging.length+1; i++) {
                        if ((valueFilteringLodging[i+1] == "צימר")) {
                            countPage++;
                            localStorage.setItem("Filtering-"+ countPage, "createEilatBandB");
                            localStoragePage(0);
                        }
                    }
                }
            }
            for (var g = -1; g < valueFilteringArea.length+1; g++) {
                if (((valueFilteringArea[g+1] == "ירושלים והסביבה")&& (valueFilteringLodging.length == 0)) || ((valueFilteringArea.length == 0) && (valueFilteringLodging.length == 0))){
                    countPage++;
                    localStorage.setItem("Filtering-"+ countPage, "createJerusalemAndTheSurroundingArea");
                    localStoragePage(0);
                }
            }
            for (var g = 0; g < valueFilteringArea.length; g++) {
                if ((valueFilteringArea[g] == "ירושלים והסביבה")){
                    for (var i = -1; i < valueFilteringLodging.length+1; i++) {
                        if ((valueFilteringLodging[i+1] == "מלון")) {
                            countPage++;
                            localStorage.setItem("Filtering-"+ countPage, "createJerusalemAndTheSurroundingAreaHotel");
                            localStoragePage(0);
                        }  
                    }
                    for (var i = -1; i < valueFilteringLodging.length+1; i++) {
                        if ((valueFilteringLodging[i+1] == "אכסניה") ) {
                            countPage++;
                            localStorage.setItem("Filtering-"+ countPage, "createJerusalemAndTheSurroundingAreaHostel");
                            localStoragePage(0);
                        }
                    }
                    for (var i = -1; i < valueFilteringLodging.length+1; i++) {
                        if ((valueFilteringLodging[i+1] == "בית ספר שדה")) {
                            countPage++;
                            localStorage.setItem("Filtering-"+ countPage, "createJerusalemAndTheSurroundingAreaSchool");
                            localStoragePage(0);
                        }
                    }
                    for (var i = -1; i < valueFilteringLodging.length+1; i++) {
                        if ((valueFilteringLodging[i+1] == "צימר")) {
                            countPage++;
                            localStorage.setItem("Filtering-"+ countPage, "createJerusalemAndTheSurroundingAreaBandB");
                            localStoragePage(0);
                        }
                    }
                }
            }
        //     if ((valueFilteringArea.length != 0)) {
        //     $.ajax({
        //         url:"_JSON/JSON_Attractions.json",
        //         crossDomain:false,
        //         dataType:"json",
        //         success:function(json_attractions){
        //             $("#id_attractionsFiltering").append("<h3>ציוני דרך</h3>");
        //             var countTelAviv = 0;
        //             var countJerusalem = 0;
        //             var countSouth = 0;
        //             var countEilat = 0;
        //             var countNorth = 0;
        //             var countSea = 0;
        //             var countJudeaSamaria = 0;
        //             for (var j = 0; j < json_attractions.length; j++) {
        //                 var item=json_attractions[j];
        //                 for (var i = 0; i < valueFilteringArea.length; i++) {
        //                     if ((valueFilteringArea[i] == "צפון") && (item.Region == "צפון") && (countNorth<6)) {
        //                         $("#id_attractionsFiltering").append(" <input name='vote' type='checkbox' value='attractions'>");
        //                         $("#id_attractionsFiltering").append("<label for='vote'>"+item.Name+"</label><br>");
        //                         countNorth++;
        //                    }
        //                    if ((valueFilteringArea[i] == "תל אביב והמרכז") && (item.Region == "תל אביב והמרכז") && (countTelAviv<6)) {
        //                     $("#id_attractionsFiltering").append(" <input name='vote' type='checkbox' value='attractions'>");
        //                     $("#id_attractionsFiltering").append("<label for='vote'>"+item.Name+"</label><br>");
        //                     countTelAviv++;
        //                     }
        //                     if ((valueFilteringArea[i] == "ירושלים והסביבה") && (item.Region == "ירושלים והסביבה") && (countJerusalem<6)) {
        //                         $("#id_attractionsFiltering").append(" <input name='vote' type='checkbox' value='attractions'>");
        //                         $("#id_attractionsFiltering").append("<label for='vote'>"+item.Name+"</label><br>");
        //                         countJerusalem++;
        //                     }
        //                     if ((valueFilteringArea[i] == "יהודה והשומרון") && (item.Region == "יהודה והשומרון") && (countJudeaSamaria<6)) {
        //                         $("#id_attractionsFiltering").append(" <input name='vote' type='checkbox' value='attractions'>");
        //                         $("#id_attractionsFiltering").append("<label for='vote'>"+item.Name+"</label><br>");
        //                         countJerusalem++;
        //                     }
        //                     if ((valueFilteringArea[i] == "ים המלח") && (item.Region == "ים המלח") && (countSea<6)) {
        //                         $("#id_attractionsFiltering").append(" <input name='vote' type='checkbox' value='attractions'>");
        //                         $("#id_attractionsFiltering").append("<label for='vote'>"+item.Name+"</label><br>");
        //                         countSea++;
        //                    }
        //                    if ((valueFilteringArea[i] == "דרום") && (item.Region == "דרום") && (countSouth<6)) {
        //                     $("#id_attractionsFiltering").append(" <input name='vote' type='checkbox' value='attractions'>");
        //                     $("#id_attractionsFiltering").append("<label for='vote'>"+item.Name+"</label><br>");
        //                     countSouth++;
        //                    }
        //                    if ((valueFilteringArea[i] == "אילת") && (item.Region == "אילת") && (countEilat<6)) {
        //                     $("#id_attractionsFiltering").append(" <input name='vote' type='checkbox' value='attractions'>");
        //                     $("#id_attractionsFiltering").append("<label for='vote'>"+item.Name+"</label><br>");
        //                     countEilat++;
        //                    }
        //                    if((countTelAviv>=6) || (countJerusalem>=6) || (countSouth>=6) || (countEilat>=6) || (countNorth>=6) || (countSea>=6) || (countJudeaSamaria>=6))
        //                    {
        //                        break;
        //                    }
                            
        //                 }   
        //             }
                        
        //         }
                 
        //     }) 
        // }
    })
 })