class Goods {
  constructor(name, amount, image, count, out) {
    this.name = name;
    this.amount = amount;
    this.image = image;
    this.count = count;
    this.out = out;
  }
  draw() {
    document.querySelector(this.out).innerHTML += `<span class="material-icons">
    ${this.image}
    </span> name:${this.name}, amount:${this.amount}`;
  }
}
