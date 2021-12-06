<template>
    <div>
        <li>
            <img class="img-fluid" @click="toggleBorder()" 
                :class="isActive ? 'img-border' : 'no-border'"  
                :src="image.url"> 
                {{ image.url }} 
        </li>
    </div>
</template>

<script>
export default {
    name: 'ImageComponent',

    props: {
        name: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
        alt: {
            type: String,
            required: false,
        }
    },

    //creating the toggle mixin here
    // data () {
    //     return {
    //         isActive: false
    //     }
    // },
    // methods: {
    //     toggleBorder() {
    //         this.isActive = !isActive
    //     }
    // },
}
</script>

<style lang="scss">
    .img-border {
        border: 2px solid black;
    }
    .no-border {
        border: 2px solid #fff;
    }
</style>