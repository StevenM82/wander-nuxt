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
    link: [
      {
        //A canonical tag (aka "rel canonical") is a way of telling search engines that a specific URL represents the master copy of a page. 
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://hopeful-hugle-a96024.netlify.app/weather'
      }
    ],
  },

  data() {
    return {
    }
  },
}
</script>