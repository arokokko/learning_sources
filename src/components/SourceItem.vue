<template>
    <li>
        <base-card>
            <header>
                <h3>{{ item.title }}</h3>
                <the-button :mode="'flat'" :type="'button'" @click="deleteItem(item.id)">Delete</the-button>
            </header>
            <p>{{ item.description }}</p>
            <nav>
                <a :href="item.link">Go to source</a>
            </nav>
        </base-card>
        
    </li>
</template>

<script>
    
    export default {
        inject: ['deleteItem'],
        props: {
        
            item: Object

        },
    }
</script>

<style scoped>
    li {
    margin: auto;
    max-width: 40rem;
    }

    header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    }

    h3 {
    font-size: 1.25rem;
    margin: 0.5rem 0;
    }

    p {
    margin: 0.5rem 0;
    }

    a {
    text-decoration: none;
    color: #ce5c00;
    }

    a:hover,
    a:active {
    color: #c89300;
    }

</style>