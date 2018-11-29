<template>
  <v-container class="container_classement">
    <v-card-title>Classement</v-card-title>
    <v-list two-line>
      <template
        v-for="item in even(items)"
        class="template_classement"
      >
        <v-list-tile
          :key="item.name"
          avatar
          ripple
          @click="toggle(index)"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{ item.name }}</v-list-tile-title>
          </v-list-tile-content>
          {{item.count}}
          <v-list-tile-action>
            <v-icon color="yellow darken-2">
              star_border
            </v-icon>
          </v-list-tile-action>

        </v-list-tile>
        <v-divider
          v-if="index + 1 < items.length"
          :key="index"
        ></v-divider>
      </template>
    </v-list>
  </v-container>
</template>

<script>

export default {
  data () {
    return {
      items: [

      ],
      selected: [2]
    }
  },
  methods: {
    even: function (items) {
      return items.slice().sort(function (a, b) {
        return b.count - a.count
      })
    }
  },
  created () {
    fetch(process.env.PATRONUS_API + '/projects')
      .then(response => {
        return response.json()
      }).then(projects => {
        this.items = projects
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container_classement{
width: 50%;
}

.template_classement{
  padding: 100px;
}
</style>
