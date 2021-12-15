export const accordionMixin = {
    data() {
        return {
            isCollapsed: false
        }
    },
    methods: {
        accordionCollapse() {
            this.isCollapsed = !this.isCollapsed
        }
    }
}