const app = Vue.createApp({
	data() {
		return {
			orderQuantity: 0,
			newPrice: 125,
			oldPrice: 250,
			supplier: "Sneaker Company",
			title: "Fall Limited Edition Sneakers",
			detail:
				"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
			discountRate: 50,
			cartSize: [],
		};
	},
	methods: {
		increaseOrderQuantity() {
			this.orderQuantity++;
		},
		decreaseOrderQuantity() {
			if(this.orderQuantity <= 0){
        this.orderQuantity = 0;
      } else {
        this.orderQuantity--;
      }
		},
		getCartSize() {
      return this.cartSize.length;
    },
	},
}).mount("#product");
