const human = document.getElementById("player1");
const computer = document.getElementById("player2");
const winss = document.getElementById("win");
const Equals = document.getElementById("equal");
const startBtn = document.querySelector(".star");
const buttons = document.querySelectorAll(".sh1");
const computerBtn = document.querySelector(".btn4");
const computerImg = computerBtn.querySelector("img");


const choices = ["stone", "paper", "scissors"];
let playerChoice = "";


const imageMap = {
  stone: "https://preview.free3d.com/img/2011/04/2140133790817715874/9bc5j6rw.jpg",
  paper: "https://static.vecteezy.com/system/resources/thumbnails/027/243/672/small_2x/bent-empty-paper-sheet-empty-paper-mockup-a4-format-paper-with-shadows-3d-illustration-png.png",
  scissors: "https://cdn3d.iconscout.com/3d/premium/thumb/scissors-3d-icon-download-in-png-blend-fbx-gltf-file-formats--scissor-cut-cutting-school-supplies-pack-tools-equipment-icons-6084562.png"
};


buttons.forEach(button => {
  button.addEventListener("click", () => {
    playerChoice = button.getAttribute("allchoices");
    startBtn.classList.remove("hide");
    winss.classList.add("wind");
    Equals.classList.add("sign1");
    winss.textContent = "";
    computerBtn.style.display = "none";
  });
});


startBtn.addEventListener("click", () => {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  
  human.textContent = "Player 1: " + capitalize(playerChoice);
  computer.textContent = "Player 2: " + capitalize(computerChoice);


  computerImg.src = imageMap[computerChoice];
  computerBtn.style.display = "block";

 
  Equals.classList.remove("sign1");
  winss.classList.remove("wind");
  winss.textContent = getWinner(playerChoice, computerChoice);


  startBtn.classList.add("hide");
});


function getWinner(player, computer) {
  if (player === computer) return "It's a Tie!";
  if (
    (player === "stone" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "stone")
  ) {
    return "Winner: Player 1";
  } else {
    return "Winner: Player 2";
  }
}


function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
