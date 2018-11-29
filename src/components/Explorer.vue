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
            <div v-if="account.vote.project_id == item.project_id">

              <v-icon
                large
                color="amber"
                class="icon_project"
              >start</v-icon>
            </div>

            <v-img
              class="white--text"
              height="200px"
              :src="item.image_url"
            >
              <v-container
                fill-height
                fluid
              >
                <v-layout fill-height>
                  <v-flex
                    xs10
                    align-end
                    flexbox
                  >
                    <v-btn color="secondary">{{item.name}}</v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-title>
              <div class="description_text">
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
                :disabled="account.vote.user_id"
                @click="vote(item.project_id)"
                color="primary"
              >Vote</v-btn>
              <v-dialog
                v-if="dialog == true"
                v-model="dialog"
                max-width="290"
              >
                <v-card>
                  <v-card-title primary-title>
                    You need to login
                  </v-card-title>
                  <v-card-actions>
                    <v-btn
                      color="primary"
                      to="/login"
                      @click="dialog = false"
                    >
                      Login
                    </v-btn>
                    <v-btn
                      color="primary"
                      flat
                      @click="dialog = false"
                    >
                      Close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-spacer></v-spacer>
              <v-chip
                class="text-lg-right"
                color="primary"
                align-right
                text-color="white"
              >

                <v-avatar
                  color="white"
                  class="primary--text"
                >{{item.count}}</v-avatar>
                Vote
              </v-chip>
            </v-card-actions>

          </v-card>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>

  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      dialog: false,
      items: [

      ]
    }
  },
  methods: {
    vote (projectId) {
      if (this.account.status.loggedIn) {
        this.$confetti.start()
        setTimeout(() => {
          this.$confetti.stop()
        }, 2000)
        const userId = this.account.user.uuid
        this.voter({ userId, projectId })
      } else {
        this.dialog = true
      }
    },
    ...mapActions('account', ['voter', 'getProfile'])
  },
  computed: {
    ...mapState({
      account: state => state.account
    })
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
.card_association {
padding: 20px;
}

.description_text {
  height: 70px;
}

.chip_vote{
  float: right;
}

.icon_project{
  z-index: 1;
  position: absolute;
  right: -80px;
  top: -25px;
  font-size: 60px !important;
}
</style>
