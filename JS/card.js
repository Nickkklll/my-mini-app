/**Опиcывают отдельную карту, которая может отображатьсярубашкой вверх или изображением вверх */

class Card {
  #image;
  #element;
  #isFlipped = false;

  constructor(image) {
    this.#image = image;

    this.#element = document.createElement("div");
    this.#element.classList.add("card");
    this.#element.style.backgroundImage = `url('${this.coverPath}')`;
    this.#element.connectedCard = this;
  }
  get imagePath() {
    return `images/${this.#image}`;
  }
  get coverPath() {
    return `Cover.jpg`;
  }

  get element() {
    return this.#element;
  }

  flip() {
    if (this.#isFlipped) {
      this.#element.classList.remove("flipped");
      setTimeout(() => {
        this.#element.style.backgroundImage = `url('${this.coverPath}')`;
      }, 150);
    } else {
      this.#element.classList.add("flipped");
      setTimeout(() => {
        this.#element.style.backgroundImage = `url('${this.imagePath}')`;
      }, 150);
    }
    this.#isFlipped = !this.#isFlipped;
  }
  disconectFromDOM() {
    this.#element.connectedCard = null;
  }
}
