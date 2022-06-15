// $(document).ready(function(){
//     $('.achtung__continue').delay(5000).slideDown(600);
// });

const button1 = document.querySelector('.press');
const button2 = document.querySelector('.achtung__continue');
const TimedReveal = document.querySelector('.achtung__block.hidden');
console.log(button1, button2);

function Delay(){
    console.log(TimedReveal);
    // TimedReveal.classList.remove = ".hidden";
    TimedReveal.style.display = "block";
}

setTimeout(Delay, 3000);
// setTimeout(() => {
// alert('ясо сухуй');    
// }, 1000);

button1.addEventListener("click", function(){
    
    button2.style.display = "block";

});