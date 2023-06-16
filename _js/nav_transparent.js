$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (window.innerWidth >609) {
    if (height > 200) {
        // $('header').fadeTo("slow",0.5);
        $('nav').css("background","rgba(255, 255, 255, 1)");
        // $('nav').css("background","white");
        // $('.navMain').css("color","greeen");
        $('.class_area').css("font-weight","normal");
        $('nav').css("font-weight","normal");
        $('nav').css("height","60px");
        $('#id_input').hide();
        $('#id_bt_search').click(function(){
            $('#id_input').fadeToggle();
        })   
    
    } 
    else {
        $('nav').css("background","rgba(255, 255, 255, 0)");
        $('#id_input').show();
        $('nav').css("height","0");
        $('nav').css("font-weight","bold");
        $('.class_area').css("font-weight","bold");
    }  
}  
});
$(document).ready(function(){
    // $('.class_area').on({
	// 	focus:function(){
	// 		$('.down').css("transform","rotate(225deg)");},
	// 	blur:function(){
	// 		$('.down').css("transform","rotate(45deg)");
	// 	}
    // });
    $('#id_area').hover(function(){
        $('#id_down').css("transform","rotate(225deg)");
    },function(){
        $('#id_down').css("transform","rotate(45deg)");
    });
    $('.dropdown-content').hover(function(){
        $('#id_down').css("transform","rotate(225deg)");
    },function(){
        $('#id_down').css("transform","rotate(45deg)");
    });


});
function openFavorites() {
    document.getElementById("id_sidenav").style.width = "250px";
    document.getElementById("id_body").style.marginLeft = "250px";
    // document.body.style.backgroundColor = "rgba(255, 255, 255, 0)";
  }
  
  function closeFavorites() {
    document.getElementById("id_sidenav").style.width = "0";
    document.getElementById("id_body").style.marginLeft= "0";
    // document.body.style.backgroundColor = "white";
  }
function webPhoneNav(){
    var x = document.getElementById("id_navMain");
  if (x.className === "navMain") {
    x.className += " responsive";
  } else {
    x.className = "navMain";
  }
}
