function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "💖";

  const size = Math.random() * 20 + 20;
  heart.style.fontSize = size + "px";

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.top = "100%"; // começo embaixo da tela

  const duration = Math.random() * 3 + 3;
  heart.style.animationDuration = duration + "s";

  document.getElementById("heartsContainer").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}
