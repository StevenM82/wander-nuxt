<template>
<div class="main-body">
  <section class="section">
    <article class="article">
      <img class="img-fluid" :src="require('static/images/glacial-lake.jpg')" alt="a calm glacial lake">
      <p class="lead">We are a couple of travelers that have taken the time and put in the work to allow us see the world.
        On our first adventure we traveled by plane, by bus and by bus (different sort) over the course of a year and a
        half. Our next adventure brings home a little closer to us while we get farther from it.
      </p>
    </article>
    <article class="article"
      v-for="article in articles"
      :key="article.id"
      >
      <p>
        {{article.text}}
      </p>
    </article>
  </section>
  <sidebar-component />
  </div>
</template>

<script>
import IndexComponent from '@/components/IndexComponent.vue'
import SidebarComponent from '@/components/SidebarComponent.vue'

export default {
  name: 'Home',
  layout: 'default',
  components: {
    IndexComponent,
    SidebarComponent
  },
  head: {
    // title: 'Home',
    meta:[
      {
        hid: 'description',
        name: 'Home',
        content: 'Index description'
      }
    ],
  },
  data() {
    return {
      articles: [
        {id: '1', text: 'A more thorough explanation of things will continue here. Always more to be written along the way'},
        {id: '2', text: 'More information given if people make it this far down the page.'},
        {id: '3', text: 'Here we are at the beginning. Things never go as you would hope, but along the way you find things you never could have hoped for.'},

      ]
    }
  }
}
</script>
