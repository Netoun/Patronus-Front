<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="title_toolbar primary--text">
        <router-link to="/">Patr<span>o</span>nus</router-link>
      </v-toolbar-title>
      <v-btn
        color="grey"
        flat
        to="/explorer"
      >Explorer</v-btn>

      <v-btn
        color="grey"
        flat
      >Classement</v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>

      <v-toolbar-items
        v-if="!account.status.loggedIn"
        class=" hidden-sm-and-down "
      >
        <v-btn
          to="login"
          flat
        >
          <v-card-text>Login</v-card-text>
        </v-btn>
      </v-toolbar-items>

      <v-menu
        v-if="account.status.loggedIn"
        v-model="menu"
        :close-on-content-click="false"
        :nudge-width="200"
        nudge-left="200"
        attach="buttonAvatar"
      >
        <v-btn
          icon=""
          slot="activator"
          flat
          class="buttonAvatar"
        >
          <v-avatar>
            <img
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              alt="John"
            >
          </v-avatar>
        </v-btn>

        <v-card class="card_popover">
          <v-list>
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                >
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>{{account.user.full_name}}</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-btn
                  :class="fav ? 'red--text' : ''"
                  icon
                  @click="fav = !fav"
                >
                  <v-icon>favorite</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              flat
              @click="menu = false"
            >Option</v-btn>
            <v-btn
              color="primary"
              flat
              to="login"
              @click="menu = false"
            >Logout</v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
      </div>
    </v-toolbar>
    <v-content>
      <router-view />
    </v-content>
    <v-footer
      fixed="fixed"
      app
    >
      <v-btn
        class="countdown"
        flat
        color="grey"
        @click="snackbar = true"
      >
        Timer
      </v-btn>

      <v-snackbar v-model="snackbar">
        <Countdown end="November 30, 2018"></Countdown>
        <v-btn
          dark
          flat
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </v-snackbar>

    </v-footer>
  </v-app>
</template>

<script>
import Countdown from 'vuejs-countdown'
import { mapState, mapActions } from 'vuex'
export default {
  components: { Countdown },
  data () {
    return {
      snackbar: false,
      fav: true,
      menu: false,
      message: false,
      hints: true
    }
  },
  created () {
    console.log(process.env.PATRONUS_API)
    console.log(this.account.status.loggedIn)
    this.getProfile()
  },
  computed: {
    ...mapState({
      account: state => state.account
    })
  },
  methods: {
    ...mapActions('account', ['getProfile'])
  },
  name: 'App'
}
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css?family=Amatic+SC:700');

.title_toolbar {
  position: absolute;
  left: 50%;
  top: -21px;
-webkit-transform: translateX(-50%);
transform: translateX(-50%);
  font-family: 'Amatic SC', cursive;
  color: var(--v-primary-base);
  font-size: 3.5em;
}
.title_toolbar span {
  margin-top: 10px !important;
  font-size: 1.3em;
}

.title_toolbar a {
 text-decoration:none; 
}

.countdown {
  margin: 0 auto;
}

.card_popover {
  /* margin-left: 100px; */
}

</style>

<style>
.vuejs-countdown .digit
{
  font-size: 14px !important;
  margin: 0 auto;
}

.vuejs-countdown li::after
{
  font-size: 14px !important;
  margin: 0 auto;
}
</style>


