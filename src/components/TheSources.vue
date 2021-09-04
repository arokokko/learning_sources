<template>
    <base-card>
        <the-button @click="setSelectedTab('add-source')" :mode="addBtnMode">Add new source</the-button>
        <the-button @click="setSelectedTab('source-wrapper')" :mode="sourceBtnMode">The sources</the-button>
    </base-card>
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
</template>

<script>
    import AddSource from './AddSource.vue';
    import SourceWrapper from './SourceWrapper.vue';
    export default {
        components: {
            AddSource,
            SourceWrapper
        }, 
        data() {
            return {
                selectedTab: 'source-wrapper'
            }
        },
        methods: {
            setSelectedTab(tab) {
                this.selectedTab = tab;
            }
        }, 
        computed: {
            addBtnMode() {
                return this.selectedTab === 'add-source' ? 'flat' : null;
            },
            sourceBtnMode() {
                return this.selectedTab === 'source-wrapper' ? 'flat' : null;
            }
        }
    }
</script>



<style >

</style>