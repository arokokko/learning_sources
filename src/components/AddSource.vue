<template>
    <base-dialog v-if="isInputInvalid"
                title="Input is invalid"
                @close-dialog="confirmError"
    >
        <template #default>
            <p>At least one input value is invalid</p>
            <p>Please, check the inputs </p>
        </template>
        <template #actions>
            <!-- <the-button @click="confirmError">Okay</the-button> -->
        </template>
    </base-dialog>
    <base-card>
        <form  @submit.prevent="emitNewSource()">
            <div class="form-control">
                <label for="title">Title</label>
                <input type="text" id="title" name="title" v-model="title"/>
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea id="description" name="description" rows="3" v-model="descr"></textarea>
            </div>
            <div class="form-control">
                <label for="link">Link</label>
                <input type="url" id="link" name="link" v-model="link"/>
            </div>
            <the-button type="submit">Add source</the-button>
        </form>
    </base-card>
</template>

<script>
    export default {
        emits: ['emit-source'],
        data() {
            return {
                isInputInvalid: false,
                title: '',
                descr: '',
                link: ''
            }
        },
        methods: {
            emitNewSource() {
                if(this.title === '' || this.descr === '' || this.link === '') {
                    this.isInputInvalid = true;
                    return;
                }
                const id = this.title.split(' ').join('-').toLowerCase();
                this.$emit('emit-source', {
                    id: id,
                    title: this.title,
                    description: this.descr,
                    link: this.link
                });
                this.title = '';
                this.descr = '';
                this.link = ''
            },
            confirmError() {
                this.isInputInvalid = false;
            }
        }
    };
</script>

<style scoped>
    label {
        font-weight: bold;
        display: block;
        margin-bottom: 0.5rem;
    }

    input,
    textarea {
        display: block;
        width: 100%;
        font: inherit;
        padding: 0.15rem;
        border: 1px solid #ccc;
    }

    input:focus,
    textarea:focus {
        outline: none;
        border-color: #3a0061;
        background-color: #f7ebff;
    }

    .form-control {
        margin: 1rem 0;
    }
</style>
