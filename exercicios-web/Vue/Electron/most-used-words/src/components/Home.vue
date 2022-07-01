<template>
    <v-content fluid>
        <v-form>
            <v-file-input
                label="Selecione as Legendas"
                prepend-icon="mdi-message-text"     
                append-inner-icon="mdi-send"          
                outlined
                multiple
                chips
                v-model="files"
                @change="processSubtitles"/>
        </v-form>
        <div class="pills">
            <PillVue v-for="word in groupedWords" :key="word.name" :name="word.name" :amount="word.amount"></PillVue>
        </div>
    </v-content>
</template>

<script>
import { ipcRenderer } from 'electron';
import PillVue from './Pill.vue'

export default {
    name: 'HomeVue',
    components: {
        PillVue
    },
    data: function () {
        return {
            files: [],
            groupedWords: [
                { name: 'you', amount: 900 },
                { name: 'he', amount: 853 },
                { name: 'i', amount: 1234 },
            ]
        }
    },
    methods: {
        processSubtitles(){
            console.log(this.files);

            ipcRenderer.send('blabla', 'ping')
            ipcRenderer.on('blabla', (event, resp) => {
                console.log(resp);
            })
        }
    }
}
</script>

<style>
.pills {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>