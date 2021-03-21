<template>
  <div class="product-list"> 
      <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif">
      <ul v-else class="items-container">
        <li v-for="product in products" :key="product.id" class="item">
          <h5> name: {{product.title}} </h5>
          <p> price: {{product.price}} </p>
          <p> quantity: {{product.quantity}} </p>
          <button @click="addItemToCart(product)">Add to cart</button>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false
    }
  },
  computed: {
    products () {
      return this.$store.getters.availableProducts
    }
  },
  methods:{
    addItemToCart(item){
      this.$store.dispatch('addProductToCart', item)
    }
  },
  created() {
    this.loading = true
    this.$store.dispatch('fetchProducts')
      .then(() => this.loading = false)
  }
}
</script>

<style lang="sass" scoped>
  img
    width: 12vh
    height: 12vh
    position: fixed
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
  .items-container
    display: flex
    flex-wrap: wrap
    justify-content: center
    list-style: none
    padding: 0
  .item
    text-align: center
    border: 1px solid grey
    margin: 10px
    padding: 20px
  button 
    cursor: pointer
    display: block
    border: 0
    color: white
    background: #d3d3d3
    margin: 20px auto 0
</style>