<template>
  <div class="main-body">
    <section class="section">
      <article class="article">
        <picture>
          <source
            :srcset="require('static/images/glacial-lake.webp')"
            type="image/webp"
            alt="a calm glacial lake"
          />
          <source
            :srcset="require('static/images/glacial-lake.jpg')"
            type="image/jpeg"
            alt="a calm glacial lake"
          />
          <img
            class="img-fluid"
            :src="require('static/images/glacial-lake.jpg')"
            alt="a calm glacial lake"
          />
        </picture>
        <p class="lead">
          We are a couple of travelers that have taken the time and put in the
          work to allow us see the world. On our first adventure we traveled by
          plane, by bus and by bus (different sort) over the course of a year
          and a half. Our next adventure brings home a little closer to us while
          we get farther from it.
        </p>
      </article>
      <article v-for="article in articles" :key="article.id" class="article">
        <p>
          {{ article.text }}
        </p>
      </article>
    </section>
    <sidebar-component />
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  layout: 'default',
  data() {
    return {
      articles: [
        {
          id: '1',
          text: 'If we have learned one thing from our adventures, it`s this. Make time for adventures when and wherever you can. Things WILL go sideways. You have to be ready for it, but don`t let planning stop you from doing.',
        },
        {
          id: '2',
          text: 'They say that there is more to see in the world than could ever be experienced in a lifetime.',
        },
        {
          id: '3',
          text: 'Here we are at the beginning. Things never go as you would hope, but along the way you find things you never could have hoped for.',
        },
      ],
    };
  },

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
};
</script>
