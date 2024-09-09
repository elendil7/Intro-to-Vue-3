const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50, onSale: true },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0, onSale: false },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    computed:{
        title(){
            let str = `${this.brand} ${this.product} (${this.color})`
            return this.onSale
              ? str + " are on sale"
              : str
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        },
        onSale(){
            return this.variants[this.selectedVariant].onSale
        },
        color(){
            return this.variants[this.selectedVariant].color
        }
    }
})
