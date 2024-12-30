// script.js
const emojiContainer = document.getElementById("emoji-container");
const emojis = ["😍", "🥰", "❤️"]; // Adicione os emojis que desejar

function createEmoji() {
  const emoji = document.createElement("div");
  emoji.classList.add("emoji");
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.animationDuration = Math.random() * 5 + 3 + "s"; // Velocidade aleatória
  emoji.style.fontSize = Math.random() * 2 + 1 + "rem"; // Tamanho aleatório
  emojiContainer.appendChild(emoji);

  // Remover o emoji quando sair da tela
  setTimeout(() => {
    emoji.remove();
  }, 8000);
}

// Criar emojis continuamente
setInterval(createEmoji, 500);

