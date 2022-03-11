<template>
  <div class="main-body">
    <section class="section">
      <article class="article">
        <img
          class="img-fluid"
          :src="require('static/images/glacial-lake.jpg')"
          alt="a calm glacial lake"
        />
        <p class="lead">
          We are a couple of travelers that have taken the time and put in the
          work to allow us see the world. On our first adventure we traveled by
          plane, by bus and by bus (different sort) over the course of a year
          and a half. Our next adventure brings home a little closer to us while
          we get farther from it.
        </p>
      </article>
      <article class="article" v-for="article in articles" :key="article.id">
        <p>
          {{ article.text }}
        </p>
        <p>
          If we have learned one thing from our adventures, it's this. Make time
          for adventures when and wherever you can. Things <i>WILL</i> go
          sideways. You have to be ready for it, but don't let planning stop you
          from doing.
        </p>
        <p>
          They say that there is more to see in the world than could ever be
          experienced in a lifetime.
        </p>
      </article>
    </section>
    <sidebar-component />
  </div>
</template>

<script>
export default {
  name: 'Home-page',
  layout: 'default',
  head: {
    title: 'Home',
    meta: [
      {
        hid: 'Home',
        name: 'Home',
        content:
          'Where our project began with links to more articles about our van build experience on larger screens',
      },
    ],
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://hopeful-hugle-a96024.netlify.app/',
      },
    ],
  },
  data() {
    return {
      articles: [
        {
          id: '1',
          text: 'A more thorough explanation of things will continue here. Always more to be written along the way',
        },
        {
          id: '2',
          text: 'More information given if people make it this far down the page.',
        },
        {
          id: '3',
          text: 'Here we are at the beginning. Things never go as you would hope, but along the way you find things you never could have hoped for.',
        },
      ],
    };
  },
};
</script>
