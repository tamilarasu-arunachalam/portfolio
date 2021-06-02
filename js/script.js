// preloader
$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(1000).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(1000).css({'overflow':'visible'});
})
//auto typing 
var typed = new Typed('#typed',{
  strings:["Tamilarasu","a Web Developer"],
  backSpeed: 40,
  typeSpeed: 30,
  loop: true,
  shuffle: false
});
//active nav item
$(".nav-item").on("click", function(e){
  // Remove class active form all li.nav-tiem
  $("li.nav-item").removeClass("active");
  // Add Class to current Element. 
  $(this).addClass("active");
});
// close left slide menu after clicking nav-item
$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});
