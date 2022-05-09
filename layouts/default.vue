<template>
  <!-- set the header, nav and footer in this template for the entire website -->
  <div class="grid-container">
    <header class="header">
      <header-component
        class="header-img"
        :src="require('static/images/lopez-island.webp')"
        alt="A view looking out toward the water from a tree filled and rocky island"
      />
      <div class="flex-heading">
        <h1>Wanderlust a la Carte</h1>
        <h2>Not lost, but finding</h2>
      </div>

      <nav class="nav">
        <ul class="nav-list">
          <!-- <nuxt-link> acts like an <a> with the correct href -->
          <li><nuxt-link to="/">The Beginning</nuxt-link></li>
          <li><nuxt-link to="/images">Images</nuxt-link></li>
          <li><nuxt-link to="/VanProgress">So far, so good</nuxt-link></li>
          <li><nuxt-link to="/weather">Weather</nuxt-link></li>
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
        <li><nuxt-link to="/">The Beginning</nuxt-link></li>
        <li><nuxt-link to="/VanProgress">So far, so good</nuxt-link></li>
        <li><a href="#">Mistakes and Advice</a></li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'default-layout',

  data() {
    return {};
  },
};
</script>
