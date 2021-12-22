<template>
  <section class="section-weather">

      <weather-component />
      
  </section>  
</template>

<script>
export default {
    name: 'Weather',
    layout: 'default',

  data() {
    return {
    }
  },
}
</script>

<style lang="scss">
  .card:hover {
    transition: .5s all ease-in-out;
    box-shadow: 0 0 10px black;
  }
</style>