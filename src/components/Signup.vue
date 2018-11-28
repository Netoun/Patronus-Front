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
        You are registered
      </v-alert>
      <v-container>
        <v-form
          ref="form"
          v-model="valid"
          class="form"
        >
          <v-card-title>Signin</v-card-title>
          <v-text-field
            v-model="full_name"
            :rules="nameRules"
            label="Fullname"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="mailRules"
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
            to="login"
          >
            Already account
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
    submitted: false,
    valid: false,
    countusers: 0,
    full_name: '',
    email: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters'
    ],
    mailRules: [
      v => !!v || 'Mail is required',
      v => /.+@.+\.+./.test(v) || 'E-mail must be valid'
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Password is required'
    ]

  }),
  created () {
    fetch('http://localhost:8000/users/count')
      .then(response => {
        return response.text()
      }).then(count => {
        this.countusers = count
      })
  },
  computed: {
    ...mapState('account', ['status'])
  },
  methods: {
    ...mapActions('account', ['register']),
    handleSubmit (e) {
      const user = {
        full_name: this.full_name,
        email: this.email,
        password: this.password,
        role: 1
      }
      this.register(user)
    },
    clear () {
      this.$refs.form.reset()
    }

  },
  name: 'Signup'
}
</script>

<style scoped>
.flex {
  margin-top: 3%;
}
.form {
  padding: 0px;
}
.form .v-card__title {
  font-size: 20px;
  font-weight: bold;
}
.form button {
  margin: 20px;
}

.noForm {
  float: right;
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