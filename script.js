const soundBtns = document.querySelectorAll(".sound-btn");
const sounds = document.querySelectorAll(".sound");

function playSound(e) {
  let sound;
  for (let snd of sounds) {
    if (snd.dataset.key === e.key) {
      sound = snd;
      break;
    }
  }

  let keyBtn;
  for (let btn of soundBtns) {
    if (btn.dataset.key === e.key) {
      keyBtn = btn;
      break;
    }
  }

  if (!sound || !keyBtn) return;

  sound.play();
  sound.currentTime = 0;
  keyBtn.classList.add("sound-active");
}

function removeBtnClass() {
  this.classList.remove("sound-active");
}

window.addEventListener("keydown", playSound);
soundBtns.forEach((btn) =>
  btn.addEventListener("transitionend", removeBtnClass)
);
