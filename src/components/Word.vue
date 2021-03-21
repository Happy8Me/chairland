<template>
  <div class="content">
      <p> {{word}} </p>
      <p> {{word}} </p>

  </div>
</template>

<script>
export default {
    name: 'word',
    props: ['word']
}
</script>

<style lang='sass' scoped>
    p 
        position: absolute
        font-size: 15vw
        font-weight: bold
        margin: 0        
    .content
        width: 100%
        height: 20vw
        display: flex
        justify-content: center
        box-sizing: border-box
        margin: 0
        padding: 0
        font-family: "Amatic SC", cursive
        position: relative
        & p:nth-child(1)
            color: lighten($lightpink, 10%)
            -webkit-text-stroke: 2px #ffffff
        & p:nth-child(2)
            color: $lightpink
            animation: wave 4s ease-in-out infinite
            
    @keyframes wave
        0%, 100%
            clip-path: polygon(0 47%, 14% 37%, 36% 37%, 66% 57%, 85% 55%, 99% 46%, 99% 99%, 1% 98%)
        50% 
            clip-path: polygon(0 47%, 17% 56%, 41% 56%, 61% 45%, 82% 40%, 99% 46%, 99% 99%, 1% 98%)

</style>