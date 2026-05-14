const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let yesSize = 1;

// MOVE NO BUTTON
function moveNoButton(){

  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = window.innerWidth - btnWidth - 20;
  const maxY = window.innerHeight - btnHeight - 20;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  // Increase YES button size
  yesSize += 0.15;

  yesBtn.style.transform = `scale(${yesSize})`;
}

// FOR DESKTOP
noBtn.addEventListener("mouseover", moveNoButton);

// FOR MOBILE
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveNoButton();
});

// YES BUTTON
yesBtn.addEventListener("click", () => {

  document.querySelector(".card").innerHTML = `

    <h1 style="
      color:white;
      animation:pop 0.5s ease;
    ">
      💖 Thank you for being my happy crush 💖
    </h1>

    <p style="
      color:white;
      margin-top:20px;
      font-size:clamp(18px,4vw,26px);
      animation:pop 0.8s ease;
    ">
      You just made my whole day ✨
    </p>

  `;

});