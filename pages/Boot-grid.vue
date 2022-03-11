<template>
  <div class="container">
    <!-- the outer two columns adjust automatically, regardless of screen size. 
    the image is made responsive via img-fluid -->
    <div class="row mt-1">
      <p class="col">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        rerum ipsam praesentium dolor aliquid? Dolorem quas, vitae at odit
        eaque, eius excepturi voluptate ex est pariatur iure, odio saepe minima.
      </p>
      <img
        class="col-sm-3 col-md-5 col-lg-2 img-thumbnail img-fluid p-0"
        :src="require('static/images/The-beginning.jpg')"
      />
      <p class="col">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nulla
        tenetur dolore, ea incidunt aliquid reprehenderit natus officiis, illo
        quasi tempore ad dolorum eius repellendus obcaecati ullam odio
        voluptatibus. Impedit!
      </p>
    </div>

    <!-- make the three columns equal on screens over 768px wide -->
    <div class="row mt-2 mb-2">
      <p class="col-sm-3 col-md-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
        possimus tempore cupiditate fugit quasi quis maxime quod cumque
        corrupti, ipsum dolorem? Dolorum, minima! Cum animi, veniam reiciendis
        delectus repellendus sapiente.
      </p>
      <img
        class="col-sm-6 col-md-4 img-thumbnail img-fluid p-0"
        :src="require('static/images/floored.jpg')"
      />
      <p class="col-sm-3 col-md-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsam,
        aperiam sit facere facilis laudantium harum est ab consequatur! Tenetur,
        minus. Soluta quam praesentium iste distinctio eum maxime quas est?
      </p>
    </div>

    <!-- this row does not show up on screens smaller than 768px  -->
    <div class="row">
      <p class="col-md-6 offset-md-3 text-center d-none d-md-block">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        voluptas doloremque neque, iusto, unde omnis, a quasi ratione numquam
        eveniet asperiores quae architecto nostrum in velit dolores aperiam
        accusantium quis?
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Boot-grid',
  layout: 'default',

  head: {
    title: 'Boot-grid of the beginning',
    meta: [
      {
        hid: 'Learning about boot-grid',
        name: 'Boot-grid',
        content:
          'A page of practice using the built-in functions of bootstrap-vue',
      },
    ],
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://hopeful-hugle-a96024.netlify.app/boot-grid',
      },
    ],
  },
};
</script>

<style lang="scss" scoped>
.container {
  grid-area: 2 / 1 / 10 / span 12;
}
</style>
