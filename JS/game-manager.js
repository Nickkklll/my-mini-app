const messages = [
  "Ще трошки і ми дізнаємось хто ти!",
  "Справжній козак",
  "Якщо чеснто, я в тобі не сумнівався",
  "Але я всерівно знаю правду!",
  "А можна швидше?",
  "Ну ти точно г*й!",
  "Мабуть не виспався. З кожним буває.",
];
let lastMessageIndex = -1;
let winRate = 0;
class GameManager {
  #boardElement;
  #scoreElement;
  #deck = new Deck();
  #firstCard = null;
  #secondCard = null;
  #attemptNumber = 0;
  rateScore = 0;

  constructor(board, score) {
    if (typeof board === "string") {
      this.#boardElement = document.querySelector(board);
    } else {
      this.#boardElement = board;
    }
    if (typeof score === "string") {
      this.#scoreElement = document.querySelector(score);
    } else {
      this.#scoreElement = score;
    }
  }
  startGame() {
    winRate = 0;
    this.attemptNumber = 0;
    this.#deck = new Deck();
    this.#boardElement.innerHTML = "";
    this.shuffleAndDeal();

    this.#deck.cards.forEach((card) => {
      card.flip();
    });

    // 2. Через 1.5 секунды перевернуть обратно
    setTimeout(() => {
      this.#deck.cards.forEach((card) => {
        card.flip();
      });
    }, 500);
  }
  shuffleAndDeal() {
    this.#deck.shuffle();
    this.#deck.cards.forEach((card) => {
      this.#boardElement.append(card.element);
    });
  }

  selectCard(card) {
    if (card == this.#firstCard) return;
    card.flip();
    if (this.#firstCard && this.#secondCard) {
      this.#firstCard.flip();
      this.#secondCard.flip();

      this.#firstCard = this.#secondCard = null;
    }
    if (this.#firstCard == null) {
      this.#firstCard = card;
    } else if (this.#secondCard == null) {
      this.attemptNumber++;
      this.#secondCard = card;

      if (this.#firstCard.imagePath === card.imagePath) {
        this.#deck.removeCard(this.#firstCard);
        this.#deck.removeCard(this.#secondCard);

        this.#firstCard = this.#secondCard = null;
        winRate++;
        if (winRate === 14) {
          setTimeout(() => {
            alert(`Мужчина!МУЖЧИНСЬКИЙ! Ану дай за пісюняру потрогаю!`);
          }, 800);
        }
      }
    }
  }
  get attemptNumber() {
    return this.#attemptNumber;
  }
  set attemptNumber(value) {
    this.#attemptNumber = value;
    this.#scoreElement.innerHTML = value;
    const alertAttempts = [20, 25, 34, 40, 50];
    if (alertAttempts.includes(value)) {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * messages.length);
      } while (randomIndex === lastMessageIndex && messages.length > 1);
      lastMessageIndex = randomIndex;
      alert(messages[randomIndex]);
    }
  }
}
