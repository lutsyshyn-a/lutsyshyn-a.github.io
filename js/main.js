$(function(){
  $('.slider').slick({
    arrows:false,
    fade:true,
    autoplay: true,
  autoplaySpeed: 3000,
    dots:true,
});


$('.burger-btn').on('click', function(){
  $('.menu').addClass('active');
})


  $('.close-btn').on('click', function(){
    $('.menu').removeClass('active');
  })
});
