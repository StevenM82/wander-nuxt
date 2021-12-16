<template>
<!-- set the header, nav and footer in this template for the entire website -->
  <div class="grid-container">
    <header class="header">
      <header-component 
        class="header-img" 
        :src="require('static/images/lopez-island.jpg')"
        alt="A view looking out toward the water from a tree filled and rocky island">
      </header-component>
      <div class="flex-heading">
          <h1>Wanderlust a la Carte</h1>
          <h2>Not lost, but finding</h2>
      </div>

      <nav class="nav">
        <ul class="nav-list">
          <!-- <nuxt-link> acts like an <a> with the correct href -->
          <li><nuxt-link to="/">The Beginning</nuxt-link></li>
          <li><nuxt-link to="/images">Images</nuxt-link></li>
          <li><nuxt-link to="/boot-grid">Boot-grid</nuxt-link></li>
          <li><nuxt-link to="/accordion">Accordion</nuxt-link></li>
          <li>
              <span data-toggle="tooltip" title="Not working yet">
                  <a class="nav-link disabled" href="#">More and more</a>
              </span>
          </li>
        </ul>
      </nav>
    </header>
    <nuxt />

    <footer class="footer">
      <ul class="footer-nav">
        <li><a href="#">The Beginning</a></li>
        <li><a href="#">So far, so good</a></li>
        <li><a href="#">Mistakes and Advice</a></li>
      </ul>
    </footer>
  </div>
</template>

<script>
  import HeaderComponent from '~/components/HeaderComponent.vue'

  export default {
    name: 'default',
    components: {
      HeaderComponent,
    },
  
    data() {
      return {
      }
    }
  }
</script>

<style lang="scss">
// import all of the scss partials globally into the website
@import 'assets/scss/normalize';
@import 'assets/scss/settings.variables';
@import 'assets/scss/settings.responsive';
@import 'assets/scss/grid.font.mixins';
@import 'assets/scss/components.content';
</style>

