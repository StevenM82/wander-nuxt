<template>
<!-- set the header, nav and footer in this template for the entire website -->
  <div class="grid-container">
    <main class="main">
      <img class="header-img" src="assets/images/lopez-island.jpg"
        alt="A view looking out toward the water from a tree filled and rocky island">
      <div class="flex-heading">

        <!-- named slot for the header goes here -->
        <header-component>

          <template #h1>
          </template>
          <template #h2>
          </template>
          
        </header-component>
      </div>

      <nav class="nav">
        <ul class="nav-list">
          <!-- <nuxt-link> is used for internal navigation on the webpage. <a> still gets used for external links -->
          <li><nuxt-link to="/">The Beginning</nuxt-link></li>
          <li><nuxt-link to="/images">Images</nuxt-link></li>
          <li><nuxt-link to="/boot-grid">Boot-grid</nuxt-link></li>
          <li><nuxt-link to="/accordian">Accordian</nuxt-link></li>
          <li>
              <span data-toggle="tooltip" title="Not working yet">
                  <a class="nav-link disabled" href="#">More and more</a>
              </span>
          </li>
        </ul>
      </nav>
    </main>
    <!-- <nuxt-view/> -->
    <footer class="footer">
      <ul class="footer-nav">
        <li><nuxt-link to="/">The Beginning</nuxt-link></li>
        <!-- the next two links have no corresponding page right now so I left them as <a> -->
        <li><a href="#">So far, so good</a></li>
        <li><a href="#">Mistakes and Advice</a></li>
      </ul>
    </footer>
  </div>
</template>

<script>
  // import HeaderComponent from 'components/HeaderComponent.vue'

  export default {
    name: 'index',
    components: {
      // HeaderComponent,
    }
  }
</script>

<style lang="scss">
// import all of the scss partials globally into the website
@import 'assets/normalize'; 
@import 'assets/settings.variables';
@import 'assets/settings.responsive';
@import 'assets/grid.font.mixins';
@import 'assets/components.content';
</style>