<template>
    <section class="left-sidebar">
        <article>
            <img class="img-fluid" :src="require('static/images/The-beginning.jpg')" 
                alt="a large white van parked in front of a house">
            <p class="sidebar-p">How things all began! Isn't she lovely?</p>
            <a class="sidebar-a" href="#">Read more >></a>
        </article>
        <article>
            <img class="img-fluid" :src="require('static/images/windowless-sliding-door.jpg')"
                alt="A van sliding door with a large section cut out for a window">
            <p class="sidebar-p">You can see right through the door...</p>
            <a class="sidebar-a" href="#">Read more >></a>
        </article>
        <article>
            <img class="img-fluid" :src="require('static/images/floored.jpg')"
                alt="a guy standing next to a cargo van stock wooden floor">
            <p class="sidebar-p">After seeing it, I'm floored</p>
            <a class="sidebar-a" href="#">Read more >></a>
        </article>
    </section>
</template>

<script>
export default {
    name: 'SidebarComponent'
}
</script>