<template>
  <div class="menu">
    <div class="nav-bar">
      <router-link to="/chairland"><div class="logo">Chairland</div></router-link> 
      <button class="btn" ref="menu">&#x2765;</button>
      <router-link to="/shop"><div class="shop">Shop</div></router-link> 
    </div>
   
    <transition name="fade">
        <div v-if="showMenu" class="nav-items">
        <router-link to="/chairland">Home</router-link> 
        <router-link to="/twelve-chairs">The 12 Chairs</router-link>
        <router-link to="/shop">Shop</router-link>
        </div>
    </transition>
    
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      showMenu: false,
    }
  },
    mounted(){
      window.addEventListener('click', (e)=> {
        if(e.target === this.$refs.menu){
          !this.showMenu ? this.showMenu = true : this.showMenu = false
        } else {
          this.showMenu = false
        }
      })
  }
}
</script>

<style lang="sass" scoped>
.nav-bar
    display: flex
    align-items: center
    justify-content: space-between
    position: fixed
    top: 1%
    width: 92%
    right: 4%
    z-index: 100 
.nav-items 
    display: flex
    flex-direction: column
    align-items: center
    width: 100%
    height: 90%
    top: 10%
    transition: 5s ease
    position: fixed
    justify-content: space-evenly
    z-index: 100
    a 
      font-family: $main-font2
      transition: .3s ease
      font-size: 15vh
      text-shadow: 2px 2px 4px black
      text-align: center
      &:hover 
          color: lighten($main-text-color, 60%)
.btn 
    transform: rotate(90deg)
    border: 0
    background: transparent
    color: $white
    text-shadow: 0px 0px 3px $lightpink
    transition: 0.5s ease
    font-size: 5vh
    &:hover
        transform: rotate(270deg)

.shop, .logo
  font-size: 4vh
  animation-duration: 1s
  animation-iteration-count: infinite
  &:hover
    animation-name: sway 

.logo
  color: $lightpink
  text-shadow: 0px 0px 3px $white
.shop 
  color: $white
  text-shadow: 0px 0px 3px $lightpink

@keyframes sway 
  0%   
    transform: rotate(5deg)
  50%  
    transform: rotate(-5deg)
  100%
    transform: rotate(5deg)


.fade-enter-active, .fade-leave-active 
  transition: opacity .5s

.fade-enter, .fade-leave-to 
  opacity: 0

</style>