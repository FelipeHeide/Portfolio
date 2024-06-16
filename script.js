document.addEventListener('DOMContentLoaded', function () {
  const elements = ['etiqueta1', 'etiqueta4', 'etiqueta6'];
  let isMouseMoveActive = true;

  function handleMouseMove(e) {
    if (!isMouseMoveActive){
      return;
    } else{

    const mouseX = ((e.clientX / window.innerWidth) - 0.5) * 5;
    const mouseY = ((e.clientY / window.innerHeight) - 0.5) * -5;

    elements.forEach(id => {
      const element = document.getElementById(id);
      if (element && !element.classList.contains('hovered')) {
        element.style.transform = `perspective(600px) rotateY(${mouseX}deg) rotateX(${mouseY}deg) scale(0.8)`;

      } else {
        element.style.transform = 'scale(1)';
      }
    });}
  }

  document.body.addEventListener('mousemove', handleMouseMove);

  elements.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener('mouseover', function () {
        this.classList.add('hovered');
      });

      element.addEventListener('mouseleave', function () {
        this.classList.remove('hovered');
      });
    }
  });

  function stopMouseMove() {
    isMouseMoveActive = false;
   
  }

  function startMouseMove() {
    isMouseMoveActive = true;
  }
  function hide() {
    const elementToHide = document.getElementById('menu');
    elementToHide.style.display = window.innerWidth < 700 ? 'none' : 'block';

    if (window.innerWidth < 700) {
      
      stopMouseMove();
    } else {
      startMouseMove();
    }
  }

  window.onload = function () {
    scrollToBottom();
    hide();
  };

  function scrollToBottom() {
    window.scroll({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });

    setTimeout(scrollToTop, 1000);
  }

  function scrollToTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  window.addEventListener('load', scrollToBottom);
  window.addEventListener('load', hide);
  window.addEventListener('resize', hide);
});

document.getElementById("copiar").addEventListener("click", function(){
  navigator.clipboard.writeText("felipe.heide.work@gmail.com");
  console.log('Contenido copiado al portapapeles');
  document.getElementById("copiar").innerHTML ='<svg height="25px" class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"/></svg>';
  setTimeout(function() {
    document.getElementById("copiar").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"></path><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"></path></svg>';
  }, 5000);
 
})

function abrirImagenNuevaPagina(imagenSrc) {
  window.open(imagenSrc, '_blank');
}

