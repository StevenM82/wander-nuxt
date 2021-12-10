<template>
    <!-- the ternary statement applies the border when 'isShowing' returns true.
    the state is changed using 'toggleBorder()' -->
    <img @click="toggleBorder()" :class="isShowing ? 'img-border' : 'no-border'"> 
</template>

<script>
import { toggleMixin } from '@/mixins/ToggleMixin.js'

export default {
    name: 'ImageComponent',
    mixins: [toggleMixin],
    data() {
        return {
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
                    required: true,
                }
            }
        }
    }
}
</script>

<style lang="scss">
//styling 'no-border' keeps the image from resizing when the black border is applied/removed
    .img-border {
        border: 2px solid black;
    }
    .no-border {
        border: 2px solid #fff;
    }
</style>