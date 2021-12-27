<template>
  <section class="section-weather">

      <weather-component />
      
  </section>  
</template>

<script>
export default {
  name: 'Weather',
  layout: 'default',
  head: {
    title: 'Current weather search',
    meta:[
      {
        hid: 'Current weather search page',
        name: 'Weather',
        content: 'The current weather for (almost) any city you plan on taking your van'
      }
    ],
  },

  data() {
    return {
    }
  },
}
</script>