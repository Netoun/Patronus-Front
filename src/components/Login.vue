<template>
  <v-flex
    xs12
    sm4
    offset-sm4
    class="flex"
  >
    <v-card class="forms">
      <v-alert
        :value="alert"
        type="success"
      >
        You are logged
      </v-alert>
      <v-container>
        <v-form
          ref="loginform"
          v-model="valid"
          class="form"
        >
          <v-card-title>Login</v-card-title>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            type="password"
            label="Password"
            required
          ></v-text-field>
          <v-btn
            :disabled="!valid"
            @click="handleSubmit"
          >
            submit
          </v-btn>
          <v-btn
            class="noForm"
            flat
            to="signin"
          >
            No account
          </v-btn>
        </v-form>
      </v-container>
    </v-card>
    <v-container class="text-xs-center white--text">
      <v-chip color="white">
        <v-avatar class="grey lighten-2">{{countusers}}</v-avatar>
        Register
      </v-chip>
    </v-container>
  </v-flex>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data: () => ({
    alert: false,
    valid: false,
    submitted: false,
    countusers: 0,
    email: '',
    emailRules: [
      v => !!v || 'email is required',
      v => /.+@.+\.+./.test(v) || 'E-mail must be valid'
    ],
    password: '',
    passwordRules: [
      v => !!v || 'password is required'
    ]
  }),
  created () {
    fetch(process.env.PATRONUS_API + '/users/count')
      .then(response => {
        return response.text()
      }).then(count => {
        this.countusers = count
      })

    this.logout()
  },
  computed: {
    ...mapState('account', ['status', 'usersCount'])
  },
  methods: {
    ...mapActions('account', ['login', 'logout']),
    handleSubmit (e) {
      this.submitted = true
      const { email, password } = this
      if (email && password) {
        this.login({ email, password })
      }
    }
  },
  name: 'App'
}
</script>

<style scoped>
.flex {
  margin-top: 10%;
}
.form {
  padding: 0px;
}
.noForm {
  float: right;
  margin-top: 20px;
}
.form .v-card__title {
  font-size: 20px;
  font-weight: bold;
}
.form button {
  margin-top: 20px;
}

.v-text-field {
  padding-top: 6px;
}

@media only screen and (max-width: 600px) {
  .flex {
    padding: 10px;
  }
}
</style>

