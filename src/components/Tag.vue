<template>
  <div class="tag" :style="{ background: bgColor }">
      {{ tagText }}
  </div>
</template>

<script>
export default {
    name: 'Tag',
    props: ['tagText', 'bgColor']
}
</script>

<style lang="sass" scoped>
.tag
    padding: 5px 15px
    border-radius: 15px
    top: -15px
    left: 50%
    position: absolute
    transform: translateX(-50%)
    text-shadow: 1px 1px 4px #4a4948
    color: $white
    font-size: 1em
    line-height: 30px
</style>