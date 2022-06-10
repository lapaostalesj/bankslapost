
$(document).ready(function(){




  $(".blue").click(function(){


    const vell_get = $("#la_value").val();

    const vell___get = $("#get_value").val();

    if(vell___get == "") {
      return false;
    }
    if(vell_get == "") {
      return false;
    }

    window.location.href = "error.html";

});



  $(".main__two").click(function(){
$(".main__two").addClass("d-none");
$(".main__one").addClass("d-block").removeClass("d-none");
});

$(".main__one").click(function(){
$(".main__two").removeClass("d-none").addClass("d-block");
$(".main__one").addClass("d-none");
});

$('.button').on('click', function (e){
var p = $("#get_value").val();
if (p.length>6) {
return;
}
$( ".vel_get>input" ).val($( ".vel_get>input" ).val() + $(e.target).text());

});
});