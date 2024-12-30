const container = document.querySelector('.carousel-container');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

// Atualiza a posição do carrossel
function updateCarousel() {
  const width = container.offsetWidth;
  container.style.transform = `translateX(-${currentIndex * width}px)`;
}

// Move para a próxima imagem automaticamente
function nextSlide() {
  currentIndex = (currentIndex < container.children.length - 1) ? currentIndex + 1 : 0;
  updateCarousel();
}

// Move para a imagem anterior
function prevSlide() {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : container.children.length - 1;
  updateCarousel();
}

// Botões de navegação
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Intervalo para troca automática (3 segundos)
setInterval(nextSlide, 3000);

// Atualizar ao redimensionar a janela
window.addEventListener('resize', updateCarousel);
