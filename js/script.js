const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");

const jump = () => {
  mario.classList.add("jump");

  const jump = setTimeout(() => {
    mario.classList.remove("jump");
    clearTimeout(jump);
  }, 500);
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
    clearInterval(loop);
  }
}, 10);

document.addEventListener("keydown", jump);