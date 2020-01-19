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
			{id: 1, title: 'Notebook', price: 45000},
			{id: 2, title: 'Mouse', price: 3000},
			{id: 3, title: 'Keyboard', price: 2500},
			{id: 4, title: 'Gamepad', price: 1500},
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
