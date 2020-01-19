'use strict';

class ProductItem {
	constructor(product) {
		this.title = product.title;
		this.price = product.price;
		this.id = product.id;
		this.src = product.src;
	}

	render() {
		return `
			<div class="product-item" data-id="${this.id}">
				<img src="${this.src}" alt="Some img">
				<div class="desc">
					<h3>${this.title}</h3>
					<p>${this.price} \u20bd</p>
					<button
						class="buy-btn js-buy-btn"
						data-price="${this.price}"
						data-src="${this.src}"
						data-title="${this.title}"
						data-id="${this.id}"
					>
							Купить
					</button>
				</div>
			</div>
		`;
	}
}

window.ProductItem = ProductItem;
