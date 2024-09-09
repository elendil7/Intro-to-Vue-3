const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        addToCart(id){
            this.cart.push(id)
        },
        removeFromCart(id){
            for(let i = 0; i < this.cart.length; i++){
                if(this.cart[i] === id){
                    return this.cart.splice(i,1)
                }
            }
        }
    }
})
