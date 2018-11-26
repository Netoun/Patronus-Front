<template>
  <v-app>
    <v-toolbar app>
      <v-btn flat>Explorer</v-btn>
      <v-toolbar-title class="title_toolbar primary--text">Patr<span>o</span>nus</v-toolbar-title>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-avatar>
        <img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="John"
        >
      </v-avatar>
    </v-toolbar>
    <v-content>
      <router-view />
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false

    }
  },
  name: 'App'
}
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css?family=Amatic+SC:700');

.title_toolbar {
  font-family: 'Amatic SC', cursive;
  color: var(--v-primary-base);
  font-size: 2.5em;
  margin: -40px auto;
}
.title_toolbar span {
  font-size: 1.3em;
}

</style>

