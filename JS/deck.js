class Deck {
  #cardsImages = [
    "Gipnose.jpg",
    "L`Alien.jpg",
    "Lion.jpg",
    "LoveBear.jpg",
    "SpongeBob.jpg",
    "Stich.jpg",
    "TumTumTumSahur.jpg",
    "Woomen.jpg",
    "crazyFrog.jpg",
    "darkMan.jpg",
    "kitty.jpg",
    "panda.png",
    "rose.jpg",
    // 'pikachu.jpg',
    "animeWomen.jpg",
  ];
  constructor() {
    this.cards = [];
    this.#cardsImages.forEach((image) => {
      this.cards.push(new Card(image));
      this.cards.push(new Card(image));
    });
  }
  shuffle() {
    this.cards.sort(() => Math.random() - 0.5);
  }
  removeCard(card) {
    let index = this.cards.findIndex(
      (item) => item.imagePath == card.imagePath
    );
    if (index !== -1) {
      this.cards.splice(index, 1);
      card.disconectFromDOM();
    }
  }
}
