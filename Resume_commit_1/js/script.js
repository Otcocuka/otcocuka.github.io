

// anchor links


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}



// Появление кнопки скролла
$( document ).ready(function() {

  // $('a[href^="#"]').click(function () {                 
  //   elementClick = $(this).attr("href");
  //   destination = $(elementClick).offset().top;
  //   $('html').animate( { scrollTop: destination }, 1100 );
  // return false;
  // });

  $(window).scroll(function () {       
		if ($(this).scrollTop() > $(window).height() * 0.2) {
			$('.btnScroll').css("display", "flex");  
		} else {
			$('.btnScroll').css("display", "none");
		};

  $('.btnScroll').click(function() {         
		$("html, body").animate({ scrollTop: 0 }, 100);
		return false;
	});
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
});
});