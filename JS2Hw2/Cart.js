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
        let sum = 0;
        this.goods.forEach(good => {
            sum += Number(good.price);
        });
       return sum;
    }

    render() {
        let listHtml = '';
        let goodsList = document.getElementsByClassName('cart')[0];

        this.goods.forEach(good => {
            const goodItem = new window.GoodsItem(good.title, good.price, good.src);
            listHtml += goodItem.render();
        });
        listHtml += `<span> Итого  ${this.totalCartPrice()} рублей </span>`;
        goodsList.innerHTML = listHtml;
    }
}

window.Cart = Cart;
