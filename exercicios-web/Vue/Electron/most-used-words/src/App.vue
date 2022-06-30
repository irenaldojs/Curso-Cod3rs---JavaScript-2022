<template>
  <v-app>
    <div>
      <v-app-bar app color="primary" dark>
        <v-toolbar-title>Most User Words</v-toolbar-title>
      </v-app-bar>
    </div>
    <div>
      <v-main>
        <HomeVue></HomeVue>
      </v-main>
    </div>
  </v-app>
</template>

<script>
import HomeVue from './components/Home.vue'

export default {
  name: 'App',

  components: {
    HomeVue
  },

  data: () => ({
    //
  }),
}
</script>

<style>
</style>