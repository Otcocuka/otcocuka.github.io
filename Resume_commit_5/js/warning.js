// $(document).ready(function(){
//     $('.achtung__continue').delay(5000).slideDown(600);
// });

const button1 = document.querySelector('.press');
const button2 = document.querySelector('.achtung__continue');
// console.log(button1, button2);

button1.addEventListener("click", function(){
    button2.style.display = "block";

});