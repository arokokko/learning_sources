<template>
    <ul>
        <source-item v-for="(source) in sources" :key="source.id" :item="source" ></source-item>
    </ul>
</template>

<script>
    import SourceItem from './SourceItem.vue';
    export default {
        inject: ['sources'],
        components: {
            SourceItem
        },
        
        
    }
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        margin: auto;
        max-width: 40rem;
    }

</style>