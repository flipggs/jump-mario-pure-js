const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");

const jump = () => {
  mario.classList.add("jump");

  let timeout = 500;

  if (window.innerWidth <= 480) timeout = 800;

  const jump = setTimeout(() => {
    mario.classList.remove("jump");
    clearTimeout(jump);
  }, timeout);
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const cloudsPosition = clouds.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 100) {
    pipe.style.left = `${pipePosition}px`;
    pipe.style.animation = "none";

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;
    mario.src = "./images/game-over.png";
    mario.style.width = "80px";
    mario.style.marginLeft = "50px";

    clouds.style.animation = "none";
    clouds.style.left = `${cloudsPosition}.px`;

    if (window.confirm("Desseja jogar novamente")) {
      window.location.reload();
    }
    clearInterval(loop);
  }
}, 10);

document.addEventListener("keydown", jump);
document.addEventListener("touchstart", jump);
