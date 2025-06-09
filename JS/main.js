let board = document.querySelector("#board");
let score = document.querySelector("#atemptNumOutput");
let startGameButton = document.querySelector("#startGame");
 alert(`Завдання: перегортати картки та знаходити пари.
  Якщо ти пройшов цей тест, мої ВІТАННЯ ти справжній гей!
  Тицьни "ОК"`);
let gm = new GameManager(board, score);
gm.startGame();

board.addEventListener("click", function (e) {
  let clickedCard = e.target.connectedCard;
  if (clickedCard) {
    gm.selectCard(clickedCard);
  }
});
startGameButton.addEventListener("click", function () {
  startGameButton.disabled = true;
  gm.startGame();
  setTimeout(() => {
    startGameButton.disabled = false; // разблокируем через 2 секунды
  }, 1500);
});




