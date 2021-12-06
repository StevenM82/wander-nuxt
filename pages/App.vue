<template>
<!-- set the header, nav and footer in this template for the entire website -->
  <div class="grid-container">
    <main class="main">
      <img class="header-img" src="@/assets/lopez-island.jpg"
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
        <!-- <router-link> acts like an <a> with the correct href -->
        <li><router-link to="/">The Beginning</router-link></li>
        <li><router-link to="/images">Images</router-link></li>
        <li><router-link to="/boot-grid">Boot-grid</router-link></li>
        <li><router-link to="/accordian">Accordian</router-link></li>
        <li>
            <span data-toggle="tooltip" title="Not working yet">
                <a class="nav-link disabled" href="#">More and more</a>
            </span>
        </li>
      </ul>
    </nav>
    </main>
    <router-view/>
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
  import HeaderComponent from '@/components/HeaderComponent.vue'

  export default {
    name: 'app',
    components: {
      HeaderComponent,
    }
  }
</script>

<style lang="scss">
// import all of the scss partials globally into the website
@import './css/normalize';
@import './css/settings.variables';
@import './css/settings.responsive';
@import './css/grid.font.mixins';
@import './css/components.content';
</style>