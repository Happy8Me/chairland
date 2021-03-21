<template>
  <div class="app">
    <Menu />
    <transition name="slide" mode="out-in">
      <router-view/>
    </transition>
    <AppFooter/>
  </div>
</template> 

<script>
import Menu from '@/components/Menu.vue'
import AppFooter from '@/components/AppFooter.vue'

export default { 
  name: 'App',
  components: {
    Menu,
    AppFooter
  }
}
</script>
 <style lang="sass"> 
  body
    margin: 0
    color: $main-text-color
    font-family: $main-font
  .app
    min-height: 95vh
    overflow: hidden
    position: relative
    padding-bottom: 50px
  .slide-enter-active, .slide-leave-active 
    transition: opacity .3s

  .slide-enter, .slide-leave-to
    opacity: 0

 </style>

