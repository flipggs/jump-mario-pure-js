const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
const initialMessage = document.querySelector(".initial-message");
const gameBoard = document.querySelector(".game-board");

const jump = () => {
  mario.classList.add("jump");

  let timeout = 500;

  if (window.innerWidth <= 480) timeout = 800;

  setTimeout(() => {
    mario.classList.remove("jump");
  }, timeout);
};

function startLoop() {
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

      const showMessage = setTimeout(() => {
        if (window.confirm("Desseja jogar novamente")) {
          setInitialState();
        }

        clearTimeout(showMessage);
      }, 500);

      clearInterval(loop);
    }
  }, 10);
}

function setInitialState() {
  pipe.style.animation = "pipe-animation 1.5s infinite linear";
  pipe.style.left = "";

  mario.classList.remove("jump");
  mario.style.animation = "";
  mario.style.bottom = "0";
  mario.src = "./images/mario.gif";
  mario.style.width = "150px";
  mario.style.marginLeft = "0";

  clouds.style.animation = "clouds-animation 15s linear infinite";
  startLoop();

  document.addEventListener("keydown", jump);
  document.addEventListener("touchstart", jump);
}

document.addEventListener("keydown", jump);
document.addEventListener("touchstart", jump);

function startGame() {
  initialMessage.style.display = "none";
  gameBoard.style.display = "block";
}

startLoop();
