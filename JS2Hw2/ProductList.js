'use strict';

class ProductList {
	constructor(container = '.products') {
		this.container = container;
		this.goods = this._fetchProducts();
		this.allProducts = [];
		this.render();
	}

	_fetchProducts() {
		return [
			{id: 1, title: 'Notebook', price: 45000, src: 'img/notebook.jpg'},
			{id: 2, title: 'Mouse', price: 3000, src: 'https://elephone.pro/uploads/products/ele-mouse/images/mouse-01-pro02.png'},
			{id: 3, title: 'Keyboard', price: 2500, src: 'https://images.idgesg.net/images/article/2020/01/ergo-k860-front-100827026-large.jpg'},
			{id: 4, title: 'Gamepad', price: 1500, src: 'http://pngimg.com/uploads/xbox/xbox_PNG17527.png'},
		];
	}

	render() {
		const block = document.querySelector(this.container);

		for (let product of this.goods) {
			const productObject = new window.ProductItem(product);
			this.allProducts.push(productObject);
			block.insertAdjacentHTML('beforeend', productObject.render());
		}
	}
}

window.ProductList = ProductList;
