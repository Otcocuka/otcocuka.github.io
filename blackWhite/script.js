

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

let triangle = document.querySelectorAll('.triangle');
console.log(`${window.innerWidth}px solid transparent`);
console.log(window.innerWidth);
triangle.style.borderLeft.width= `window.innerWidth`;

