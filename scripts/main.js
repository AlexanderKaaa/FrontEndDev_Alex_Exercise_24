$(document).ready(function () {

 $( "#btnSubmit" ).click(function() {
  $(".form-group").fadeOut(function() {$("#thankyou").fadeIn();}); 
    $("#btnSubmit").fadeOut(); 
});
 
 });
 