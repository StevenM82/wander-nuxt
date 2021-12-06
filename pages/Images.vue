<template>
    <ul class="section-images">
        <!-- setting the :src="image.url" is required to bind source, aka src=, to the url of the image  -->
        <!-- using img-fluid automatically sets the image dimensions to fill a single grid square when using CSS Grid -->
        <image-component 
            v-for="image in images" 
            :key="image.name"
            >
        </image-component>
        
        <!-- this is for testing to make sure that I have a base line to go back to -->
        <!-- <li 
            v-for="image in images" 
            :key="image.name"
            ><img :class="'img-fluid img-border'" :src="image.url" />
        </li> -->
    </ul>
</template>

<script>
    import ImageComponent from '@/components/ImageComponent.vue'

    export default {
        name: 'Images',
        components: {
            ImageComponent,
        },
        data() {
            // you have to place the image url inside require() to get it to show from the array 
            // otherwise it will just show the url and not load the image
            return {
                images: [
                    {name: 'camping', url: require('assets/images/camping-wings-veggies.jpg')}, 
                    {name: 'market', url: require('assets/images/the-market.jpg')},
                    {name: 'forest', url: require('assets/images/tropical-forest.jpg')},
                    {name: 'glacial', url: require('assets/images/glacial-lake.jpg')},
                    {name: 'festival', url: require('assets/images/festival-2019.jpg')},
                    {name: 'muertos', url: require('assets/images/los-muertos.jpg')},
                    {name: 'interior', url: require('assets/images/original-interior.jpg')},
                    {name: 'interior2', url: require('assets/images/original-interior-2.jpg')},
                    {name: 'floor', url: require('assets/images/floor-removed.jpg')},
                    {name: 'sliding-door', url: require('assets/images/sliding-door-prep.jpg')},
                ],
            }
        }
    }
</script>