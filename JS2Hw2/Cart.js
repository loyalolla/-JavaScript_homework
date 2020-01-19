//Создаем класс корзина Cart
class Cart {
    constructor() {
        this.goods = [];
        this.render();
    }
    //метод добавления товара в корзину
    addCartItem(cartItem) {
        this.goods.push(cartItem);
        this.render();
    }

    //Метод для вывода итоговой суммы корзины
    totalCartPrice() {
        let totalPrice = document.getElementById('goods-list__total');
        let sum = 0;
        this.goods.forEach(good => {
            sum += good.price
        });
        totalPrice.innerText = `Итого  ${sum} рублей`;
    }

    render() {
        let listHtml = '';
        let goodsList = document.getElementsByClassName('cart')[0];

        this.goods.forEach(good => {
            const goodItem = new window.GoodsItem(good.title, good.price, good.src);
            listHtml += goodItem.render();
        });
        goodsList.innerHTML = listHtml;
    }
}

window.Cart = Cart;
