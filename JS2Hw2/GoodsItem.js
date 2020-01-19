//Создаем класс для товара. //Creating the class for the product
class GoodsItem {
    constructor (title, price, src) {
        this.title = title;
        this.price = price;
        this.src = src;
    }
    //метод возвращает html-разметку отрисовка корзины. //Method for return the HTML tag. Paint the basket
    render () {
        return `
            <div class="goods-list__product-box">
                <span class="goods-list__product-box__name">${this.title}</span>
                <div class="goods-list__product-box__price">${this.price}</div>
                ${
                    this.src ?
                    `<img class="goods-list__product-box__img" src=${this.src} height="100px" alt=""></img>` :
                    ''
                }
                <input type="submit" value="X" class="goods-list-item__product-box__delete" onclick="deleteProductStringBasket()">
            </div>
        `;
    }
}

window.GoodsItem = GoodsItem;
