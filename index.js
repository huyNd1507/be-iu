document.getElementById("heart-btn").addEventListener("click", function () {
  const button = this;
  button.style.display = "none";

  // Tạo viên đạn bắn lên
  const bullet = document.createElement("div");
  bullet.classList.add("bullet");
  document.body.appendChild(bullet);

  setTimeout(() => {
    bullet.remove();

    // Hiệu ứng nổ
    const explosion = document.createElement("div");
    explosion.classList.add("explosion");
    explosion.style.left = "50%";
    explosion.style.top = "10px";
    document.body.appendChild(explosion);

    setTimeout(() => {
      explosion.remove();
      startHeartFall();

      document.getElementById("background-music").play();
      setTimeout(() => {
        document.getElementById("content").classList.add("show");
        document.querySelector(".heart-frame").classList.add("show");
        typeWriterEffect();
      }, 2000);
    }, 500);
  }, 3000);
});

function startHeartFall() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * window.innerWidth + "px"; // Ngẫu nhiên theo chiều ngang
    heart.style.fontSize = Math.random() * (30 - 15) + 15 + "px"; // Kích thước ngẫu nhiên
    heart.style.animationDuration = Math.random() * (5 - 3) + 3 + "s"; // Tốc độ rơi khác nhau
    document.body.appendChild(heart);
    setTimeout(() => {
      heart.remove();
    }, 5000); // Xóa sau khi rơi xong
  }, 200);
}

// Tạo hiệu ứng nổ
function createExplosion() {
  const explosion = document.createElement("div");
  explosion.classList.add("explosion");
  explosion.innerHTML = "💥";
  explosion.style.position = "absolute";
  explosion.style.top = "20px";
  explosion.style.left = "50%";
  explosion.style.fontSize = "50px";
  explosion.style.transform = "translateX(-50%)";
  document.body.appendChild(explosion);

  setTimeout(() => {
    explosion.remove(); // Xóa hiệu ứng nổ sau 0.5s
    startHeartFall(); // Bắt đầu mưa trái tim sau vụ nổ
  }, 500);
}

function typeWriterEffect() {
  const text =
    "Hôm nay là 8/3\nAnh chúc bé yêu của anh thật vui vẻ hạng phúc, cười nhiều hơn nhé! \nChúc cho em gặt hái được nhiều thành công và máy mắn trong cuộc sống\n Hãy luôn mìm cười và hành phúc nhé vì anh sẽ luôn bên cạnh và ủng hộ em! \n Anh yêu bé yêu nhiều! \n -- Bồ Tèo --";
  let i = 0;
  function type() {
    document.getElementById("animated-text").textContent += text[i];
    i++;
    if (i < text.length) setTimeout(type, 250);
  }
  type();
}
