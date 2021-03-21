<template>
  <div class="photo-block">
    <div class="pic">
      <div class="pic-wrapper">
        <img class="pic" :src="pic" />
      </div>
    </div>
    
    <p v-if="isPhotoCaption">
      {{ photoCaption }}  
    </p>
  </div>
</template>

<script>
import pic from '../assets/1.jpg'
export default {
  name: 'PhotoBlock',
  props: ['isPhotoCaption', 'photoCaption'],
  data() {
    return{
      pic
    }
  }
}
</script>

<style lang="sass" scoped>
.photo-block
  background-color: $middleBeige
  padding: 10% 5%
  display: flex
  align-items: center
  text-align: justify
.pic 
  margin-right: 5%
</style>
