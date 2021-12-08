export const toggleMixin = {
    data() {
        return {
            isShowing: false
        }
    },
    methods: {
        // this toggles the state to the opposite of what it presently is, 
        // it is a shorthand if/else statement
        toggleBorder() {   
            this.isShowing = !this.isShowing
        }
    }
}
