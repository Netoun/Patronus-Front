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
          v-for="n in 12"
          :key="n"
          class="ok"
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
                    <v-btn color="secondary">Netoun association</v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-title>
              <div>
                <span class="grey--text">Description :</span><br>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dicta expedita amet modi unde? Ullam perferendis pariatur repellat quia, aspernatur voluptatibus libero rerum, molestiae laborum iure nostrum sint in velit!</span><br>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn
                flat
                color="primary"
              >More</v-btn>
              <v-btn
                @click="start"
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
  methods: {
    start () {
      this.$confetti.start()
      setTimeout(() => {
        this.$confetti.stop()
      }, 1000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ok {
padding: 20px;
}
</style>
