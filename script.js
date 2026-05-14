const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

let yesSize = 1;

// MOVE NO BUTTON
noBtn.addEventListener("mouseover", () => {

  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "fixed";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  // MAKE YES BUTTON BIGGER
  yesSize += 0.2;

  yesBtn.style.transform = `scale(${yesSize})`;

});

// YES BUTTON
yesBtn.addEventListener("click", () => {

  document.querySelector(".card").innerHTML = `

    <h1 style="animation:pop 0.5s ease;">
      💖 Thank you for being my happy crush 💖
    </h1>

    <p style="
      color:white;
      margin-top:20px;
      font-size:22px;
      animation:pop 0.8s ease;
    ">
      You just made my day ✨
    </p>

  `;

});