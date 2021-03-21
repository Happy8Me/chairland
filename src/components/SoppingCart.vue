<template>
  <div>
      <h1>Shopping Cart</h1>
      <ul>
          <li v-for="product in products" :key="product.id">
              {{product.title}} - price: {{product.price}} - quantity: {{product.quantity}}
              <button @click="removeItemFromCart(product)">Remove from cart</button>
          </li>
      </ul>
      <p>Total: {{total}}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: 
        mapGetters({
            products: 'cartProducts',
            total: 'cartTotal'
        }),
    methods:{
        removeItemFromCart(item){
            this.$store.dispatch('removeProductFromCart', item)
        }
    },
}
</script>

<style lang="sass" scoped>
    h1 
        text-align: center
    ul 
        list-style: none
        li 
            text-align: center
            margin: 10px
    button 
        cursor: pointer
        border: 0
        color: white
        background: #d3d3d3
        margin: 20px auto 0
    p 
        font-weight: bold
        font-size: 2em
        text-align: center
</style>