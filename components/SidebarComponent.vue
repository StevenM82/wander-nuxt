<template>
  <section class="left-sidebar">
    <article>
      <picture>
        <source
          class="img-fluid"
          :srcset="require('static/images/The-beginning.webp')"
          type="image/webp"
          alt="a large white van parked in front of a house"
        />
        <source
          class="img-fluid"
          :srcset="require('static/images/The-beginning.jpg')"
          type="image/jpeg"
          alt="a large white van parked in front of a house"
        />
        <img
          class="img-fluid"
          :src="require('static/images/The-beginning.jpg')"
          alt="a large white van parked in front of a house"
        />
      </picture>
      <p class="sidebar-p">How things all began! Isn't she lovely?</p>
      <a class="sidebar-a" href="#">Read more >></a>
    </article>
    <article>
      <picture>
        <source
          class="img-fluid"
          :srcset="require('static/images/windowless-sliding-door.webp')"
          type="image/webp"
          alt="A van sliding door with a large section cut out for a window"
        />
        <source
          class="img-fluid"
          :srcset="require('static/images/windowless-sliding-door.jpg')"
          type="image/jpeg"
          alt="A van sliding door with a large section cut out for a window"
        />
        <img
          class="img-fluid"
          :src="require('static/images/windowless-sliding-door.jpg')"
          alt="A van sliding door with a large section cut out for a window"
        />
      </picture>
      <p class="sidebar-p">You can see right through the door...</p>
      <a class="sidebar-a" href="#">Read more >></a>
    </article>
    <article>
      <picture>
        <source
          class="img-fluid"
          :srcset="require('static/images/floored.webp')"
          type="image/webp"
          alt="a guy standing next to a cargo van stock wooden floor"
        />
        <source
          class="img-fluid"
          :srcset="require('static/images/floored.jpg')"
          type="image/jpeg"
          alt="a guy standing next to a cargo van stock wooden floor"
        />
        <img
          class="img-fluid"
          :src="require('static/images/floored.jpg')"
          alt="a guy standing next to a cargo van stock wooden floor"
        />
      </picture>
      <p class="sidebar-p">After seeing it, I'm floored</p>
      <a class="sidebar-a" href="#">Read more >></a>
    </article>
  </section>
</template>

<script>
export default {
  name: 'SidebarComponent',
  props: {
    isVisible: {
      required: false,
      default: true,
    },
  },
};
</script>
