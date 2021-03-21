<template>
  <div class="footer">
    <a href="https://www.facebook.com" target="_blank"> 
      <div class="icon-wrapper"> 
        <img :src="icon" alt="Facebook" class="facebook"> 
      </div>
    </a>
    <a href="https://www.instagram.com" target="_blank"> 
      <div class="icon-wrapper"> 
        <img :src="icon" alt="Instagram" class="instagram"> 
      </div>
    </a>
    <a href="https://twitter.com" target="_blank"> 
      <div class="icon-wrapper"> 
        <img :src="icon" alt="Twitter" class="twitter"> 
      </div>
    </a>
    <a href="https://www.youtube.com" target="_blank"> 
      <div class="icon-wrapper"> 
        <img :src="icon" alt="YouTube" class="youtube"> 
      </div>
    </a>
  </div>
</template>

<script>
import icon from '../assets/icons.png'
export default {
  data(){
    return {
      icon
    } 
  }
}
</script>

<style lang="sass" scoped>
  .footer
    box-sizing: border-box
    height: 50px
    background: #d3d3d366
    display: flex
    justify-content: center
    align-items: center
    position: absolute
    bottom: 0
    width: 100%
    a:hover > .icon-wrapper
      box-shadow: 0px 0px 2px 2px #d3d3d3
    .icon-wrapper 
      width: 25px
      height: 25px
      margin: 1vh
      overflow: hidden
      border-radius: 50%
      position: relative 
      background: white
      border: 1px solid $white
      transition: .5s
      img
        width: 170%
        height: 170%
        position: absolute
  .facebook
    top: 6%
    left: 10%
  .instagram
    top: -80%
    left: 10%
  .twitter
    top: 6%
    left: -73%
  .youtube
    top: -80%
    left: -73%
</style>