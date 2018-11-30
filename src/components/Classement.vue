<template>
  <v-container class="container_classement">
    <div class="text-xs-center">
      <v-icon
        class="icon_trophy"
        x-large
        color="yellow darken-1"
      >fas fa-trophy </v-icon>
      <v-btn
        to="/classement"
        round
        large
        color="secondary"
      >Classement</v-btn>
      <v-icon
        class="icon_trophy"
        x-large
        color="yellow darken-1"
      >fas fa-trophy </v-icon>
    </div>
    <v-list
      two-line
      class="template_classement"
    >
      <template v-for="item in even(items)">
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
.container_classement {
  width: 50%;
}

.template_classement {
  margin-top: 10px;
}

.icon_trophy {
}

@media only screen and (max-width: 800px) {
  .container_classement {
    width: 75%;
  }
}

@media only screen and (max-width: 600px) {
  .container_classement {
    width: 90%;
  }
}
</style>
