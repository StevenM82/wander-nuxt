<template>
  <ul class="section-images">
    <!-- setting the :src="image.url" is required to bind source, aka src=, to the url of the image 
        using img-fluid automatically sets the image dimensions to fill a single grid square when using CSS Grid -->
    <li v-for="image in images" :key="image.name" :name="image.name">
      <image-component v-bind="image" class="img-fluid" :src="image.url" />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Images-page',
  layout: 'default',

  head: {
    title: 'Pictures of places visited',
    meta: [
      {
        hid: 'A collection of images',
        name: 'Images',
        content:
          'Images of places we have visited and the things that we have accomplished so far',
      },
    ],
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://hopeful-hugle-a96024.netlify.app/images',
      },
    ],
  },
  data() {
    // you have to place the image url inside 'require()' to get it to show from the array
    // otherwise it will just show the url and not load the image
    return {
      images: [
        {
          name: 'camping',
          url: require('static/images/camping-wings-veggies.jpg'),
          alt: 'chicken wings and skewered veggies over a bbq grate',
        },
        {
          name: 'market',
          url: require('static/images/the-market.jpg'),
          alt: 'Pike Place Market neon sign with a cloudy sunset in the background',
        },
        {
          name: 'forest',
          url: require('static/images/tropical-forest.jpg'),
          alt: 'small river flowing through a tropical forest',
        },
        {
          name: 'glacial',
          url: require('static/images/glacial-lake.jpg'),
          alt: 'a calm glacial lake with rocks and a hill in the background',
        },
        {
          name: 'festival',
          url: require('static/images/festival-2019.jpg'),
          alt: 'A sign for the Day of the Dead Festival in Oaxaca in 2019',
        },
        {
          name: 'muertos',
          url: require('static/images/los-muertos.jpg'),
          alt: 'a pair of paper mache skeletons holding hands on a bench',
        },
        {
          name: 'interior',
          url: require('static/images/original-interior.jpg'),
          alt: 'a view of our van`s interior before any work has been done',
        },
        {
          name: 'interior2',
          url: require('static/images/original-interior-2.jpg'),
          alt: 'a closer view of our van`s interior before any work has been done',
        },
        {
          name: 'floor',
          url: require('static/images/floor-removed.jpg'),
          alt: 'a view of our van`s interior after taking out the wooden floor',
        },
        {
          name: 'sliding-door',
          url: require('static/images/sliding-door-prep.jpg'),
          alt: 'me taping edges and draping plastic over parts of the interior before I start cutting',
        },
      ],
    };
  },
};
</script>
