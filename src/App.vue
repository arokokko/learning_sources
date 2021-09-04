<template>
    <the-header :title="mainTitle"></the-header>
    <source-wrapper :sources="storedSources">
    </source-wrapper>
    
</template>

<script>
import SourceWrapper from './components/SourceWrapper.vue';
import TheHeader from './components/layout/TheHeader.vue';
export default {
    components: {
        SourceWrapper,
        TheHeader
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