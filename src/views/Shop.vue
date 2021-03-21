<template>
<div class="shop">
  <Word :word=" 'Shop' "/>   
  <ProductsList/>
  <ShoppingCart/>
</div>
</template>

<script>
import ProductsList from '../components/ProductsList'
import ShoppingCart from '../components/SoppingCart.vue'
import Word from '../components/Word.vue'
export default {
  name: 'Shop',
  components: {
    ProductsList,
    ShoppingCart,
    Word
  },
}
</script>
<style lang="sass" scoped>
.shop
  margin: 50px 0

</style>

