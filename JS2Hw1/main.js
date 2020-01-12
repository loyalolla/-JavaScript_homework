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
			const productObject = new ProductItem(product);
			this.allProducts.push(productObject);
			block.insertAdjacentHTML('beforeend', productObject.render());
		}
	}
}

class ProductItem {
	constructor(product, img = 'img/notebook.jpg') {
		this.title = product.title;
		this.price = product.price;
		this.id = product.id;
		this.img = img;
	}

	render() {
		return `
			<div class="product-item" data-id="${this.id}">
					<img src="${this.img}" alt="Some img">
					<div class="desc">
							<h3>${this.title}</h3>
							<p>${this.price} \u20bd</p>
							<button class="buy-btn">Купить</button>
					</div>
			</div>
		`;
	}
}

const list = new ProductList();

