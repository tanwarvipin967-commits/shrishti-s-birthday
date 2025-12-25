document.addEventListener("DOMContentLoaded", () => {

  /* ================= ELEMENTS ================= */

  const startBtn = document.getElementById("startBtn");
  const startScreen = document.getElementById("startScreen");

  const song = document.getElementById("song");
  const cracker = document.getElementById("cracker");

  const photo = document.querySelector(".photo");

  /* ================= START BUTTON ================= */

  startBtn.onclick = () => {
    // remove start screen
    startScreen.remove();
    startSparkles();

    cracker.currentTime = 0;
    cracker.play();

    setTimeout(() => {
      song.volume = 0.6;
      song.play();
    }, 2500);

    setTimeout(() => {
      photo.style.opacity = 1;
    }, 3000);

    startFlowerRain();
    startHearts();

    setTimeout(() => {
      if (typeof startTypingText === "function") {
        startTypingText(showFinalScreen);
      }
    }, 3500);
  };

function showFinalScreen() {
  const final = document.createElement("div");
  final.id = "final";
  final.innerHTML = `
    <div class="gift">🎁</div><br>
    💖 Happy Birthday 💖<br>Chipkli Tu hmesha kush rhe 🎉
  `;
  document.body.appendChild(final);
}

  function startFlowerRain() {
    setInterval(() => {
      const flower = document.createElement("div");
      flower.className = "flower";
      flower.innerHTML = "🌸";
      flower.style.left = Math.random() * 100 + "vw";
      flower.style.animationDuration = (4 + Math.random() * 4) + "s";
      document.body.appendChild(flower);

      setTimeout(() => flower.remove(), 8000);
    }, 300);
  }

  /* ================= FLOATING HEARTS ================= */

  function startHearts() {
    setInterval(() => {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.innerHTML = "💖";
      heart.style.left = Math.random() * 100 + "vw";
      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 6000);
    }, 600);
  }

});
function startSparkles() {
  setInterval(() => {
    const sp = document.createElement("div");
    sp.className = "sparkle";
    sp.innerHTML = "✨";
    sp.style.left = Math.random() * 100 + "vw";
    sp.style.bottom = "0";
    document.body.appendChild(sp);

    setTimeout(() => sp.remove(), 3000);
  }, 400);
}

