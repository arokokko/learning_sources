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
    
    data() {
        return {
            mainTitle: 'RememberMe',
            
        }
    },
    methods: {
        
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