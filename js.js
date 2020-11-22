
$("#hamburger").click(function() {
 $(this).hide();
 $(".cross").show();
 $("nav").css("display","block");
});
$(".cross").click(function() {
  $(this).hide();
  $("#hamburger").show();
  $("nav").css("display","none");
 });
 