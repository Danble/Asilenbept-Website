
const image = document.getElementById('image');
var last_known_scroll_position = 0;
var ticking = false;

function doSomething(scroll_pos) {
  // Hacer algo con la posición del scroll
  console.log(scroll_pos);
  /* Aquí puedo meter tantas instrucciones quiera a determinados 
   intervalos de pixeles para que se sienta más natural; en caso
    de que no pueda optimizar más el scrolling*/
  if (Number(scroll_pos) > 15) {
      /* image.style.animationName = 'image-scrolling';
      image.style.webkitAnimationDuration = '1s';
      image.style.webkitAnimationFillMode = 'forwards' */
      
      image.style.top = '-200px';
  } else if(Number(scroll_pos) < 15) {
    image.style.top = '0px';
  }
}

window.addEventListener('scroll', (e) => {
    last_known_scroll_position = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(function() {
        doSomething(last_known_scroll_position);
        ticking = false;
        });
    }
    ticking = true;
    console.log(e);
})

// sidebar code
let button = document.querySelector('button');
let sidebar = document.getElementById('sidebar');

button.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
});