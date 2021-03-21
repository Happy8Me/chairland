<template>
    <transition name="slide-block" >
        <div v-if="show">
            <p> Thomas Edison financed the invention of the electric chair in 1889, primarily as a tactic to try and scare people into using DC current, rather than AC current (which was invented by his rival Nikola Tesla). Once the chair had been completed, he saw it as a marketing opportunity, and contacted government offices, billing the chair as a more humane alternative to hanging, which was the primary means of ending the lives of death row criminals.</p>
        </div>
  </transition>
</template>

<script>
export default {
    props: ['show']
}
</script>

<style lang="sass" scoped>
div 
    text-align: justify
    font-size: 3vh
    background-color: $white
    transition: 1s ease
    height: 50vh
    p 
        margin: 0
        padding: 0 10vw 
        font-size: 0.75em
.slide-block-enter-to, .slide-block-leave 
   max-height: 50vh

.slide-block-enter, .slide-block-leave-to 
   max-height: 0
  
</style>