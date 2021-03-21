<template>
  <div class="home">

    <div class="block1">
      <h1>Welcome to </h1>
      <p>Here you will find factcs from history of chairs and beautiful photos of this amazing piece of furniture </p>
      <Word :word=" 'Chairland' "/>    
    </div>
    
    <div class="block">
      <Tag :tagText=" 'Why Chairs' " :bgColor=" '#e3dacd' "/>
      <PhotoBlock :isPhotoCaption="true" :photoCaption="photoText"/>
    </div>

    <div class="block">
      <div class="additionalBlock" @click="showAdditionalBlock = !showAdditionalBlock">
        <Tag :tagText=" 'Chairs\' Secrets' " :bgColor=" '#ffffff' "/>
        <div class="secret">what to know the biggest secter of a chair?</div>
      </div>

      <AdditionalBlock :show="showAdditionalBlock" />
    </div>

    <div class="block">
      <Tag :tagText=" 'Chairs in Stock' " :bgColor=" '#f3eee8' "/>

      <div v-for="chair in chairs" :key="chair.title" >
        <ChairBlock :chairdata="chair"/>
      </div>
    </div>

  </div>
</template>

<script>
import PhotoBlock from '../components/PhotoBlock.vue'
import Tag from '../components/Tag.vue'
import ChairBlock from '../components/ChairBlock.vue'
import AdditionalBlock from '../components/AdditionalBlock.vue'
import Word from '../components/Word.vue'

export default { 
  name: 'Home',
  components: {
    PhotoBlock,
    Tag,
    ChairBlock, 
    AdditionalBlock,
    Word
  },
  computed: {
    chairs () {
      return this.$store.getters.availableProducts
    }
  },
  created() {
    this.$store.dispatch('fetchProducts')
  },
  data() {
    return {
      showAdditionalBlock: false,
      photoText: 'In a very real sense, we live in the Age of the Chair.  It’s the most common, ubiquitous form of furniture in modern society.  You find them literally everywhere. At home.  At work.  In stores and shopping malls. When you start paying attention to just how common they are, it’s unlikely that you can go an entire day without laying eyes on at least one.  More probably, you’ll see dozens, if not scores of them in all shapes and sizes.'
    }
  }
}
</script>

<style lang="sass" scoped>
.home
  background-color: $lightBeige
  padding-top: 50px
h1 
  font-size: 12vw
  color: $lightpink
  font-family: $title-font
  margin: 5vh
.block 
  position: relative
.block1 
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  position: relative
  padding-bottom: 10vh
  p 
    width: 65vw  
    font-size: 4vh
.secret 
  text-align: center
  padding: 10vh 0
  background-color: $white
.additionalBlock
  cursor: pointer
</style>
