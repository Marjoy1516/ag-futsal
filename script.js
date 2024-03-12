function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
  }

function toggleMenuEscudo() {
  const menuEscudo = document.getElementById('menuEscudo');
  menuEscudo.classList.toggle('activeEscudo');
}

document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carrosel');
  let translateY = 0; // Inicializa a posição de translação

  function nextSlide() {
    if (translateY > -(carousel.children.length - 1) * window.innerHeight * 0.8) {
      translateY -= window.innerHeight * 0.8; // Move para o próximo card
      carousel.style.transform = `translateY(${translateY}px)`;
    }
  }

  function prevSlide() {
    if (translateY < 0) {
      translateY += window.innerHeight * 0.8; // Move para o card anterior
      carousel.style.transform = `translateY(${translateY}px)`;
    }
  }

  // // Adiciona botões de navegação
  // const prevBtn = document.createElement('button');
  // prevBtn.textContent = 'Anterior';
  // prevBtn.addEventListener('click', prevSlide);
  // document.body.appendChild(prevBtn);

  // const nextBtn = document.createElement('button');
  // nextBtn.textContent = 'Próximo';
  // nextBtn.addEventListener('click', nextSlide);
  // document.body.appendChild(nextBtn);
});