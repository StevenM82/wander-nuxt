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
      title: {
        meta:[
          {
            hid: 'description',
            name: 'description',
            content: 'Weather description'
          }
        ],
      }
    },

  data() {
    return {
    }
  },
}
</script>