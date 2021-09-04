<template>
    <the-header :title="mainTitle"></the-header>
    <the-sources></the-sources>
    
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheSources from './components/TheSources.vue';
export default {
    components: {
        TheHeader,
        TheSources
    },
    provide() {
        return {
            sources: this.storedSources,
            addSource: this.addNewSource
        }
    },
    data() {
        return {
            mainTitle: 'RememberMe',
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
        addNewSource(title, description, link) {
            const id = title.split(' ').join('-').toLowerCase();
            this.storedSources.push({
                id, title, description, link
            });
        }
    }
}
</script>

<style >
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    * {
    box-sizing: border-box;
    }

    html {
    font-family: 'Roboto', sans-serif;
    }

    body {
    margin: 0;
    }
</style>