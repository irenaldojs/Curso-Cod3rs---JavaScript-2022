<template>
    <v-content fluid>
        <div class="pills">
            <PillVue v-for="word in groupedWords" :key="word.name" :name="word.name" :amount="word.amount"></PillVue>
        </div>
    </v-content>
</template>

<script>
import PillVue from './Pill.vue'

export default {
    name: 'HomeVue',
    components: {
        PillVue
    },
    data: function () {
        return {
            groupedWords: [
                { name: 'you', amount: 900 },
                { name: 'he', amount: 853 },
                { name: 'i', amount: 1234 },
                { name: 'you', amount: 900 },
                { name: 'he', amount: 853 },
                { name: 'i', amount: 1234 },
                { name: 'you', amount: 900 },
                { name: 'he', amount: 853 },
                { name: 'i', amount: 1234 },
                { name: 'you', amount: 900 },
                { name: 'he', amount: 853 },
                { name: 'i', amount: 1234 },
                { name: 'you', amount: 900 },
                { name: 'he', amount: 853 },
                { name: 'i', amount: 1234 },
                { name: 'you', amount: 900 },
                { name: 'he', amount: 853 },
                { name: 'i', amount: 1234 },
                { name: 'you', amount: 900 },
                { name: 'he', amount: 853 },
                { name: 'i', amount: 1234 },
                { name: 'you', amount: 900 },
                { name: 'he', amount: 853 },
                { name: 'i', amount: 1234 },
            ]
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