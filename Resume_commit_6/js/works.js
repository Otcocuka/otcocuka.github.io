let xPos = 0;

gsap.timeline()
    .set('.ring', { rotationY:180, cursor:'grab' }) //set initial rotationY so the parallax jump happens off screen
    .set('.img',  { // apply transform rotations to each image
      rotateY: (i)=> i*-36,
      transformOrigin: '50% 50% 500px',
      z: -500,
      backgroundImage:(i)=>'url(https://picsum.photos/id/'+(i+32)+'/600/400/)',
      backgroundPosition:(i)=>getBgPos(i),
      backfaceVisibility:'hidden'
    })    
    .from('.img', {
      duration:1.5,
      y:200,
      opacity:0,
      stagger:0.1,
      ease:'expo'
    })
    .add(()=>{
      $('.img').on('mouseenter', (e)=>{
        let current = e.currentTarget;
        gsap.to('.img', {opacity:(i,t)=>(t==current)? 1:0.5, ease:'power3'})
      })
      $('.img').on('mouseleave', (e)=>{
        gsap.to('.img', {opacity:1, ease:'power2.inOut'})
      })
    }, '-=0.5')

$(window).on('mousedown touchstart', dragStart);
$(window).on('mouseup touchend', dragEnd);
      

function dragStart(e){ 
  if (e.touches) e.clientX = e.touches[0].clientX;
  xPos = Math.round(e.clientX);
  gsap.set('.ring', {cursor:'grabbing'})
  $(window).on('mousemove touchmove', drag);
}


function drag(e){
  if (e.touches) e.clientX = e.touches[0].clientX;    

  gsap.to('.ring', {
    rotationY: '-=' +( (Math.round(e.clientX)-xPos)%360 ),
    onUpdate:()=>{ gsap.set('.img', { backgroundPosition:(i)=>getBgPos(i) }) }
  });
  
  xPos = Math.round(e.clientX);
}


function dragEnd(e){
  $(window).off('mousemove touchmove', drag);
  gsap.set('.ring', {cursor:'grab'});
}


function getBgPos(i){ //returns the background-position string to create parallax movement in each image
  return ( 100-gsap.utils.wrap(0,360,gsap.getProperty('.ring', 'rotationY')-180-i*36)/360*500 )+'px 0px';
}


//modal

// $(document).ready(function(){

//   $('.background, .reveal, .img').on('click', function(){
//     $('.overlay, .frame, .close, img').fadeIn('slow');
//   });

//   $('.close').on('click', function(){
//     $('.overlay, .frame, .close').fadeOut('slow');
//   });

// });


// нумерация элементов и фреймов
// $('.img').each(function(i,elem) {
// 	if ($(this).hasClass("stop")) {
// 		alert("Остановлено на " + i + "-м пункте списка.");
// 		return false;
// 	} else {
// 		// alert(i + ': ' + $(elem).text());
//     $(elem).addClass(i + 'open');
// 	}
// });


// $('.frame').each(function(i,elem) {
//     $(elem).addClass(i + 'frame')
// 	});
//присвоение элементу фрейма
// $(document).ready(function(){

//   $(i+'.img').on('click', function(){
//     $(${i}+'.frame').fadeIn('slow');
//   });

//   $('.close').on('click', function(){
//     $('.overlay, .frame, .close').fadeOut('slow');
//   });

// });


$(document).ready(function(){

  

  $('.1open').on('click', function(){
    $('.overlay, .1frame').fadeIn('slow');
    $('.close').delay(1000).fadeIn('slow');
  });

  $('.2open').on('click', function(){
    $('.overlay2, .2frame').fadeIn('slow');
    $('.close').delay(1000).fadeIn('slow');
  });

  $('.4open').on('click', function(){
    $('.overlay4, .4frame').fadeIn('slow');
    $('.close').delay(1000).fadeIn('slow');
  });

  $('.5open').on('click', function(){
    $('.overlay5, .5frame').fadeIn('slow');
    $('.close').delay(1000).fadeIn('slow');
  });

  $('.6open').on('click', function(){
    $('.overlay6, .6frame').fadeIn('slow');
    $('.close').delay(1000).fadeIn('slow');
  });

  
  $('.7open').on('click', function(){
    $('.overlay7, .7frame').fadeIn('slow');
    $('.close').delay(1000).fadeIn('slow');
  });

  $('.10open').on('click', function(){
    $('.overlay10, .10frame').fadeIn('slow');
    $('.close').delay(1000).fadeIn('slow');
  });

  $('.sorry').on('click', function(){
    $('.overlaysorry, .sorryframe').fadeIn('slow');
    $('.close').delay(1000).fadeIn('slow');
  });

  var i = 0;

  $('.close').on('click', function(){
    i++;
    if (i<=2) {
      $('.overlay, .frame, .close').fadeOut('slow');
      console.log(i);
    } else {
      $('.overlay, .frame, .close').fadeOut('slow');
      $('.stage').fadeOut('slow');
      $('.please, .please_phrase1').delay(2000).slideDown(600);
      $('.please_phrase1').delay(6000).slideUp(600);
      $('.please_phrase2').delay(9200).slideDown(600).delay(5000).slideUp(600);
      $('.please_phrase3, .contacts').delay(15400).slideDown(600);
    }
  });
});