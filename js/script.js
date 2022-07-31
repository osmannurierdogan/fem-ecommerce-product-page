const app = Vue.createApp({
	data() {
		return {
			orderQuantity: 0,
			newPrice: 0,
			oldPrice: 250,
			supplier: "Sneaker Company",
			title: "Fall Limited Edition Sneakers",
			detail:
				"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
			discountRate: 50,
			mainImageUrl: "",
			images: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
			basketSize: [],
		};
	},
	mounted() {
		this.mainImageUrl = "./images/image-product-1.jpg";
		this.newPrice = this.oldPrice - this.oldPrice * (this.discountRate / 100);
		this.orderQuantity = this.basketSize.length;
	},
	/* computed: {
		setMainImage(id) {
			this.mainImageUrl = `./images/image-product-${id}.jpg`;
		},
	}, */
	methods: {
		addToCart(basketSize) {
			this.basketSize = basketSize;
			console.log('this.basketSize :>> ', this.basketSize);
			console.log('basketSize :>> ', basketSize);
		},
		setMainImage(id) {
			this.mainImageUrl = `./images/image-product-${id}.jpg`;
			//console.log("clooooooooooooo :>>", id);
		},
		createThumbnailImageUrl(id) {
			return `./images/image-product-${id}-thumbnail.jpg`;
		},
		increaseOrderQuantity() {
			this.orderQuantity++;
		},
		decreaseOrderQuantity() {
			if (this.orderQuantity <= 0) {
				this.orderQuantity = 0;
			} else {
				this.orderQuantity--;
			}
		},
		/* getCartSize() {
			return this.cartSize.length;
		}, */
		showCart() {
			if (this.isTrue) {
				this.isTrue = false;
			} else {
				this.isTrue = true;
			}
		},
	},
}).mount("#product");
