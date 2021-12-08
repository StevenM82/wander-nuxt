<template>
    <ul class="section-images">
        <!-- setting the :src="image.url" is required to bind source, aka src=, to the url of the image 
        using img-fluid automatically sets the image dimensions to fill a single grid square when using CSS Grid -->
        <li
            v-for="image in images" 
            :key="image.name"
            :name="image.name"
            >
            <image-component 
                v-bind="image" 
                class="img-fluid"
                :src="image.url"
            />
        </li>
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
                    {name: 'camping', url: require('@/assets/camping-wings-veggies.jpg'), alt: 'chicken wings and skewered veggies over a bbq grate'},
                    {name: 'market', url: require('@/assets/the-market.jpg')},
                    {name: 'forest', url: require('@/assets/tropical-forest.jpg')},
                    {name: 'glacial', url: require('@/assets/glacial-lake.jpg')},
                    {name: 'festival', url: require('@/assets/festival-2019.jpg')},
                    {name: 'muertos', url: require('@/assets/los-muertos.jpg')},
                    {name: 'interior', url: require('@/assets/original-interior.jpg')},
                    {name: 'interior2', url: require('@/assets/original-interior-2.jpg')},
                    {name: 'floor', url: require('@/assets/floor-removed.jpg')},
                    {name: 'sliding-door', url: require('@/assets/sliding-door-prep.jpg')},
                ],
            }
        }
    }
</script>
