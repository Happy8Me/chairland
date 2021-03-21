<template>
 <div class="chair" :style="{ background: chair.bgCol }">
      <div class="col" :style="{ background: chair.col }">
          <h3>{{ chair.title }}</h3>

          <div class="pic-wrapper">
              <img :src="chair.imgPath" alt="photo" class="pic">  
          </div>

          <div class="mainText">{{ chair.mainText }}</div>

      </div>
  </div>
</template>

<script>
export default {
  name: "ChairPage",
  data() {
    return {
      productId: this.$route.params.id
    }
  },
  computed:{
    chair(){
      return this.$store.state.products.find(
        product => product.id == this.productId
      )
    }
  }
}
</script>

<style lang="sass" scoped>

.chair
  padding-top: 7vh
.col
  display: flex
  flex-direction: column
  align-items: center
h3 
  color: #ffffff
  font-family: $title-font
  margin: 10vh 0 7vh
  font-size: 8vh
  text-shadow: 0 0 1px #e3dacd
.mainText
  width: 80%
  padding: 10vh
  color: $white
  font-size: 1em
  text-align: justify
  line-height: 1.5em
.pic-wrapper 
  height: 55vw
  width: 55vw

</style>
