import Vue from 'vue'
import Vuex from 'vuex'
import shop from '@/api/shop.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  mutations: {
    setProducts(state, products){
      state.products = products
    },
    pushItemToCart(state, productId) {
      state.cart.push({
        id: productId,
        quantity: 1
      })
    },
    incrementItemQuantity(state, cartItem){
      cartItem.quantity++
    },
    decrementItemQuantity(state, cartItem){
      cartItem.quantity--
    }
  },
  actions: {
    fetchProducts({commit}){
      return new Promise((resolve) => {
        shop.getProducts(products => {
          commit('setProducts', products)
          resolve()
        })
      })
    },
    addProductToCart(context, product) {
      if(product.quantity > 0){
        const cartItem = context.state.cart.find(item => item.id === product.id)
        if(!cartItem) {
          context.commit('pushItemToCart', product.id)
        } else {
          context.commit('incrementItemQuantity', cartItem)
        }
        context.commit('decrementItemQuantity', product)
      }
    },
    removeProductFromCart(context, product) {
      const cart = context.state.cart
      const cartItem = cart.find(item => item.id === product.id)
      const productsItem = context.state.products.find(item => item.id === product.id)
      
      if(cartItem) {
        context.commit('incrementItemQuantity', productsItem)
        context.commit('decrementItemQuantity', cartItem)
      }

      if (cartItem.quantity <= 0) {
        let index = cart.findIndex(function(item){
          return item.id === product.id;
        })
        cart.splice(index, 1);
      }
    }
  },
  getters: {
    availableProducts(state){
      return state.products.filter(product => product.quantity > 0)
    },
    cartProducts(state){
      return state.cart.map(cartItem => {
        const product = state.products.find(product => product.id === cartItem.id)
          return {
            title: product.title,
            price: product.price,
            id: product.id,
            quantity: cartItem.quantity
        } 
      })
    },
    cartTotal(state, getters){
      return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0)
    }
  },

})
