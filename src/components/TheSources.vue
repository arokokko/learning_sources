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
        provide() {
            return {
                sources: this.storedSources,
                addSource: this.addNewSource
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
            addNewSource(title, description, link) {
                const id = title.split(' ').join('-').toLowerCase();
                this.storedSources.push({
                    id, title, description, link
                });
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