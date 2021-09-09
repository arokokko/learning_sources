<template>
    <base-card>
        <the-button @click="setSelectedTab('add-source')" :mode="addBtnMode">Add new source</the-button>
        <the-button @click="setSelectedTab('source-wrapper')" :mode="sourceBtnMode">The sources</the-button>
    </base-card>
    <keep-alive>
        <component :is="selectedTab" @emit-source="changeStoredSource" ></component>
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
        provide() {
            return {
                sources: this.storedSources,
                deleteItem: this.removeSource
            }
        },
        data() {
            return {
                selectedTab: 'source-wrapper',
                storedSources: [
                    {
                        id: 'official-guide',
                        title: 'Official guide',
                        description: 'Official Vue.js documentation',
                        link: 'https://vuejs.org'
                    },
                    {
                        id: 'google',
                        title: 'Google',
                        description: 'Learn to google...',
                        link: 'https://google.com'
                    }
                ]
            }
        },
        methods: {
            setSelectedTab(tab) {
                this.selectedTab = tab;
            },
            changeStoredSource(source) {
                this.storedSources.push(source);
                this.selectedTab = 'source-wrapper';
            },
            removeSource(id) {
                let index = this.storedSources.findIndex(item => item.id === id);
                this.storedSources.splice(index, 1);
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