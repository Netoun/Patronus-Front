<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout
        row
        wrap
      >
        <v-flex
          xs12
          md6
          lg6
          v-for="item in items"
          :key="item.project_id"
          class="card_association"
        >
          <v-card>
            <v-img
              class="white--text"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-container
                fill-height
                fluid
              >
                <v-layout fill-height>
                  <v-flex
                    xs12
                    align-end
                    flexbox
                  >
                    <v-btn color="secondary">{{item.name}}</v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-title>
              <div>
                <span class="grey--text">Description :</span><br>
                <span>{{item.description}}</span><br>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn
                flat
                color="primary"
              >More</v-btn>
              <v-btn
                @click="vote"
                color="primary"
              >Vote</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      items: [

      ]
    }
  },
  methods: {
    vote () {
      this.$confetti.start()
      setTimeout(() => {
        this.$confetti.stop()
      }, 2000)
    }
  },
  created () {
    fetch('http://localhost:8000/projects')
      .then(response => {
        return response.json()
      }).then(projects => {
        console.log(projects)
        this.items = projects
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card_association {
padding: 20px;
}
</style>
