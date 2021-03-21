<template>
  <div class="chair" :style="{ background: chairdata.bgCol }">
      <div class="col" :style="{ background: chairdata.col }">
          <h3>{{ chairdata.title }}</h3>
          <router-link :to="{name: 'chair', params: {id:chairdata.id}}">
            <div class="pic-wrapper">
                <img :src="chairdata.imgPath" alt="photo" class="pic">  
            </div>
            
          </router-link>
          <p> {{ chairdata.text }} </p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'chairBlock',
    props: ['chairdata']
}
</script>

<style lang="sass" scoped>
.chair
    padding-top: 7vh
.col
    display: flex
    flex-direction: column
    align-items: center
p 
    padding: 0 15%
h3 
    color: #ffffff
    font-family: $title-font
    margin: 0
    font-size: 8vh
    text-shadow: 0 0 1px #e3dacd
a 
    margin: 7vh
</style>