"use strict";

/**
 *  Объект корзины
 */
const cart = {
  cartBlock: null,
  goods: [
    {
      id_product: 123,
      product_name: 'Ноутбук',
      price: 45600,
      quantity: 1,
    },
    {
      id_product: 456,
      product_name: 'Мышка',
      price: 1000,
      quantity: 1,
    },
    {
      id_product: 245,
      product_name: 'Клавиатура',
      price: 1500,
      quantity: 1,
    }
  ],

  /**
   * Метод инициальзации корзины
   * @param cartBlockClass - класс блока корзины
   */
  init(cartBlockClass) {
    this.cartBlock = document.querySelector(`.${cartBlockClass}`);
    this.render();
  },

  /**
   * Рендер корзины
   */
  render() {
    if (this.getCartGoodsLength() > 0) {
      this.cartBlock.textContent = '';
      this.cartBlock.textContent= this.renderCartList();
    } else {
      this.cartBlock.textContent = '';
      this.cartBlock.textContent = this.renderEmptyCart();
    }
  },

  /**
   * Получение количества товаров в корзине
   * @returns {number}
   */
  getCartGoodsLength() {
    return this.goods.length;
  },

  /**
   * Рендер пустой корзины
   */
  renderEmptyCart() {
    return 'Корзина пуста.';
  },

  /**
   * Рендер информации о корзине если она не пуста
   */
  renderCartList() {
    return `В корзине: ${this.getCartGoodsLength()} товаров на сумму ${this.getCartPrice()} рублей`;
  },

  /**
   * Получение стоимости корзины
   * @returns {number}
   */
  getCartPrice() {
    return this.goods.reduce((sum, good) => {
      return sum + good.price * good.quantity;
    }, 0);
  },
};

/**
 * Подключение корзины
 */
cart.init('cart');
