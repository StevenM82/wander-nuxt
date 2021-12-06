<template>
    <div>
        <h1>
            <slot name="h1">This is the child default h1</slot>
        </h1>
        <h2>
            <slot name="h2">This is the child default h2</slot>
        </h2>
    </div>
</template>


<script>
export default {
    name: 'HeaderComponent'
}
</script>

<style>
</style>