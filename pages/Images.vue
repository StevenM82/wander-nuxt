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

export default {
    name: 'Images',
    layout: 'default',
    
    head: {
        title: 'Pictures of places visited', 
        meta:[
            {
            hid: 'description',
            name: 'Images',
            content: 'Images description'
            }
        ],
    },
    data() {
        // you have to place the image url inside require() to get it to show from the array 
        // otherwise it will just show the url and not load the image
        return {
            images: [
                {name: 'camping', url: require('static/images/camping-wings-veggies.jpg'), alt: 'chicken wings and skewered veggies over a bbq grate'},
                {name: 'market', url: require('static/images/the-market.jpg')},
                {name: 'forest', url: require('static/images/tropical-forest.jpg')},
                {name: 'glacial', url: require('static/images/glacial-lake.jpg')},
                {name: 'festival', url: require('static/images/festival-2019.jpg')},
                {name: 'muertos', url: require('static/images/los-muertos.jpg')},
                {name: 'interior', url: require('static/images/original-interior.jpg')},
                {name: 'interior2', url: require('static/images/original-interior-2.jpg')},
                {name: 'floor', url: require('static/images/floor-removed.jpg')},
                {name: 'sliding-door', url: require('static/images/sliding-door-prep.jpg')},
            ],
        }
    }
}
</script>
