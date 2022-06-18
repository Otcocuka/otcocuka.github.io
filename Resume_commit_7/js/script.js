

// anchor links


// const anchors = document.querySelectorAll('a[href*="#"]')

// for (let anchor of anchors) {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault()
    
//     const blockID = anchor.getAttribute('href').substr(1)
    
//     document.getElementById(blockID).scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     })
//   })
// }



// Появление кнопки скролла
// $( document ).ready(function() {

  // $('a[href^="#"]').click(function () {                 
  //   elementClick = $(this).attr("href");
  //   destination = $(elementClick).offset().top;
  //   $('html').animate( { scrollTop: destination }, 1100 );
  // return false;
  // });

  // $(window).scroll(function () {       
	// 	if ($(this).scrollTop() > $(window).height() * 0.2) {
	// 		$('.btnScroll').css("display", "flex");  
	// 	} else {
	// 		$('.btnScroll').css("display", "none");
	// 	};

  // $('.btnScroll').click(function() {         
	// 	$("html, body").animate({ scrollTop: 0 }, 100);
	// 	return false;
	// });
// смена бекграунда у пунктов меню при скролле
//   $('.sectionTitle').each(function() {
//     let self = $(this),
//         atribute = self.attr('id'),
//         height = self.offset().top + self.height()/2 - windowHeight/2;
//     if ($(document).scrollTop() >= height) {
//         $('.header__nav__link').removeClass('menuBg');
//         $('[href*="' + atribute + '"]').addClass('menuBg');
//     } else {
//         $('[href*="' + atribute + '"]').removeClass('menuBg');
//     }
// });

  // $("a[href='#top']").click(function() {
  //   $("html, body").animate({ scrollTop: 0 }, "slow");
  //   return false;
  // });
// });
// });
if(window.matchMedia('(min-width: 1920px)').matches){
	$( document ).ready(function() {
    let animation = 600,
        delay=5000;
  // $('#about').click(function(){
    // $('.hero').css("left", "0");
    $('.hero').animate({ left:0 }, delay).delay(13400).slideUp();
    $('.bubble').delay(delay).show(600).delay(13400).slideUp();
    // $('#about').click(function(){==
    //   $('.xyi').slideDown(400);
    // $('.hero, .bubble').css("position", "fixed");
    $('.phrase_1').delay(delay).slideDown(600).delay(6000).slideUp(600);
    $('.phrase_2').delay(12200).slideDown(600).delay(6000).slideUp(600);
    
  // });
});
$([document.documentElement, document.body]).delay(19400).animate({
  scrollTop: $('.author').offset().top
}, 200);
$('.author__point, .bubble2').delay(19600).slideDown(600).delay(12000).slideUp(600);
$('.bubble2_inner').delay(19600).slideDown(600).delay(6000).slideUp(600);
$('.bubble2_inner_2').delay(26800).slideDown(600).delay(4800).slideUp(600);
$('.author__description_text').delay(33400).slideDown(600);
$('.author__description_hint, .press').delay(37000).slideDown(600);
$('.press').click(function(){
  $("html, body").animate({
    scrollTop: $('.test').offset().top
  }, 200);
  $('.doomer, .bubble3').delay(10000).slideDown(600);
  $('.bubble3__inner_phrase1').delay(10000).slideDown(600).delay(4000).slideUp(600);
  $('.bubble3__inner_phrase2').delay(15200).slideDown(600);
  $('.bubble3__inner_link').delay(15200).slideDown(600);
});
}


// $( document ).ready(function() {
//     let animation = 600,
//         delay=5000;
//   // $('#about').click(function(){
//     // $('.hero').css("left", "0");
//     $('.hero').animate({ left:0 }, delay).delay(13400).slideUp();
//     $('.bubble').delay(delay).show(600).delay(13400).slideUp();
//     // $('#about').click(function(){==
//     //   $('.xyi').slideDown(400);
//     // $('.hero, .bubble').css("position", "fixed");
//     $('.phrase_1').delay(delay).slideDown(600).delay(6000).slideUp(600);
//     $('.phrase_2').delay(12200).slideDown(600).delay(6000).slideUp(600);
    
//   // });
// });
// $([document.documentElement, document.body]).delay(19400).animate({
//   scrollTop: $('.author').offset().top
// }, 200);
// $('.author__point, .bubble2').delay(19600).slideDown(600).delay(12000).slideUp(600);
// $('.bubble2_inner').delay(19600).slideDown(600).delay(6000).slideUp(600);
// $('.bubble2_inner_2').delay(26800).slideDown(600).delay(4800).slideUp(600);
// $('.author__description_text').delay(33400).slideDown(600);
// $('.author__description_hint, .press').delay(37000).slideDown(600);
// $('.press').click(function(){
//   $("html, body").animate({
//     scrollTop: $('.test').offset().top
//   }, 200);
//   $('.doomer, .bubble3').delay(10000).slideDown(600);
//   $('.bubble3__inner_phrase1').delay(10000).slideDown(600).delay(4000).slideUp(600);
//   $('.bubble3__inner_phrase2').delay(15200).slideDown(600);
//   $('.bubble3__inner_link').delay(15200).slideDown(600);
// });
// let ph2 = document.querySelector('.phrase_2');
// $('.phrase_1').slideDown(3000).replaceWith(ph2).slideDown(3000);


// document.body.style.overflow = 'hidden';
