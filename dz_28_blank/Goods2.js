class Goods2 extends Goods {
  constructor(name, amount, image, count, out, sale) {
    super(name, amount, image, count, out);
    this.sale = sale;
  }
  draw() {
    document.querySelector(
      this.out
    ).innerHTML += `<span class="material-icons">${this.image}</span> name: ${this.name}, amount:${this.amount}, sale:${this.sale}`;
  }
}
