import PlayGame from "./game.js";

const initiateGame = (ctx) => {
  const game = new PlayGame(ctx);
  game.initializeWelcomeScreen();
  document.addEventListener("keydown", (event) => {
    event.preventDefault();
    game.handleKeydown(event);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const myCanvas = document.querySelector(".Pacman-canvas");
  const ctx = myCanvas.getContext("2d");
  initiateGame(ctx);
});
