export const accordianMixin = {
    data() {
        return {
            isCollapsed: false
        }
    },
    methods: {
        accordianCollapse() {
            this.isCollapsed = !this.isCollapsed
        }
    }
}