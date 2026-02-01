const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const proposal = document.getElementById("proposal");
const celebration = document.getElementById("celebration");

yesBtn.addEventListener("click", () => {
  // Confetti burst
confetti({
  particleCount: 100,
  spread: 60,
  origin: { y: 0.7 }
});

setTimeout(() => {
  confetti({
    particleCount: 120,
    spread: 100,
    origin: { y: 0.4 }
  });
}, 300);

  // Show celebration
  proposal.classList.add("hidden");
  celebration.classList.remove("hidden");
});

noBtn.addEventListener("click", () => {
  noBtn.textContent = "Nice try 😏";
  noBtn.classList.add("clicked");
});

