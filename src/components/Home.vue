<template>
  <div>
    <section>
      <v-parallax
        class="parallax"
        :src="require('@/assets/orange.jpg')"
        height="700"
      >
        <v-layout
          column
          align-center
          justify-center
          class="white--text"
        >
          <div class="home-title">Rejoignez-nous maintenant et soutener votre association</div>
          <div>
            <v-btn
              depressed
              large
              color="primary"
              to="/login"
            >Commencer</v-btn>
          </div>
        </v-layout>
      </v-parallax>
    </section>

    <section id="home">
      <v-layout
        column
        wrap
        class="my-5"
        align-center
      >
        <v-flex
          xs12
          sm4
          class="my-3"
        >
          <div class="text-xs-center">
            <h2 class="headline">« On ne peut pas, sous prétexte qu’il est impossible de tout faire en un jour, ne rien faire du tout »</h2>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout
              row
              wrap
            >
              <v-flex
                xs12
                md4
              >
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon
                      x-large
                      class="primary--text"
                    >fas fa-money-bill-alt </v-icon>
                  </v-card-text>
                  <v-card-title
                    primary-title
                    class="layout justify-center"
                  >
                    <div class="headline text-xs-center">Paiment</div>
                  </v-card-title>
                  <v-card-text class="justify">
                    Souscrivez un abonnement avec paiment sécurisé de la somme de votre choix et permettez a votre association de votre choix de pouvoir obtenir la première place
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex
                xs12
                md4
              >
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon
                      x-large
                      class="primary--text"
                    >fas fa-handshake </v-icon>
                  </v-card-text>
                  <v-card-title
                    primary-title
                    class="layout justify-center"
                  >
                    <div class="headline">Engagement</div>
                  </v-card-title>
                  <v-card-text class="justify">
                    Collaborer a votre manière avec les association, découvrer de nouvelles organisation a travers leur page et construiser un pont vers l'engagement humanitaire
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex
                xs12
                md4
              >
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon
                      x-large
                      class="primary--text"
                    >fas fa-award </v-icon>
                  </v-card-text>
                  <v-card-title
                    primary-title
                    class="layout justify-center"
                  >
                    <div class="headline text-xs-center">Classement</div>
                  </v-card-title>
                  <v-card-text class="justify">
                    Chaque association participant obtiendra une partie de la cagnotte en fonction de leur place a chaque fin de mois
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <section class="test">
      <v-parallax
        :src="require('@/assets/orange.jpg')"
        height="380"
      >
        <v-layout
          column
          align-center
          justify-center
        >

          <v-flex
            xs10
            sm2
          >
            <v-btn
              flat
              large
              class="button_values white--text"
            >{{"Cagnotte : " + count + " € "}}</v-btn>
          </v-flex>

          <div>
            <v-btn
              depressed
              large
              color="
              secondary"
              to="/explorer"
            >Explorer</v-btn>
          </div>

        </v-layout>
      </v-parallax>
    </section>
    <section id="contact">
      <v-container grid-list-xl>
        <v-layout
          row
          wrap
          justify-center
          class="my-5"
        >
          <v-flex
            xs12
            sm4
            offset-sm1
          >
            <v-card class="elevation-0 transparent">
              <v-card-title
                primary-title
                class="layout justify-center"
              >
                <div class="headline">Contact </div>
              </v-card-title>
              <v-card-text>
                <h3>Sun7 Patronus</h3>
              </v-card-text>
              <v-list class="transparent">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="primary--text">phone</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>06.45.73.91.48</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="primary--text">place</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Nantes, FR</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="primary--text">email</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>contact@patronus.fr</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>

              <v-card-title
                primary-title
                class="layout justify-center"
              >
                <div class="headline">Document </div>
              </v-card-title>
              <v-list class="transparent">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="primary--text">attachment</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>
                      <a
                        href=""
                        download
                      > Protection des données</a>
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="primary--text">attachment</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <a
                      href="cgv"
                      download
                    > Informations supplémentaires</a>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
          <v-flex
            xs12
            sm4
            offset-sm1
          >
            <v-card class="elevation-0 transparent">
              <v-card-title
                primary-title
                class="layout justify-center"
              >
                <div class="headline">Contactez-nous</div>
              </v-card-title>
              <v-form
                method="POST"
                ref="form"
                lazy-validation
                action="https://formspree.io/coulonnier.nicolas.44@gmail.com"
              >
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  outline
                  label="Nom"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="firstname"
                  label="Prénom"
                  outline
                  required
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="Email"
                  outline
                  required
                ></v-text-field>
                <v-text-field
                  v-model="name"
                  label="Société"
                  outline
                  required
                ></v-text-field>
                <v-textarea
                  v-model="textarea"
                  :rules="textRules"
                  outline
                  name="input-7-4"
                  label="Votre message"
                  value=""
                ></v-textarea>
                <v-btn
                  color="primary"
                  type="submit"
                  @click="submit "
                >
                  Envoyer
                </v-btn>

              </v-form>
            </v-card>
            <v-btn
              class="button"
              color="primary"
              dark
              small
              fixed
              bottom
              right
              fab
            >
              <v-icon>fas fa-arrow-up</v-icon>
            </v-btn>
          </v-flex>

        </v-layout>
      </v-container>

    </section>
  </div>
</template>

<script>

export default {
  data () {
    return {
      name: '',
      nameRules: [
        (v) => !!v || 'Name is required'
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      firstname: '',
      societe: '',
      textarea: '',
      textRules: [
        (v) => !!v || 'Message is required'
      ],
      count: 0
    }
  },
  methods: {
    submit () {
      // eslint-disable-next-line
      nativeForm.submit()
    }
  },
  created () {
    fetch(process.env.PATRONUS_API + '/users/totalsubs')
      .then(response => {
        return response.json()
      }).then(count => {
        this.count = count.values
      })
  }
}
</script>


<style scoped>
.button_values {
  font-size: 1.5em;
  text-shadow: 4px 4px 12px rgb(12, 12, 12);
  background: rgba(0, 0, 0, 0.13)
}
.justify {
  text-align: justify;
}
.parallax {
  padding: 0;
}
@media only screen and (max-width: 1500px) {
  .parallax img {
    max-height: 130%; /* or a little bit higher */
  }
}
.logo {
  margin-top: 60px;
  margin-left: 20px;
  width: 250px;
}
.home-title {
  font-size: 35px !important;
  font-weight: 300;
    text-shadow: 4px 4px 8px rgb(12, 12, 12);
}
.subheading {
  color: white;
  text-shadow: 4px 4px 8px rgba(150, 150, 150, 1);
}
.icon {
  margin-left: 10px;
}
.image {
  height: 25px;
}
.divButton {
  margin: 5px;
}
.colorblue {
  color: rgb(196, 196, 196);
}
.button {
  width: 40px !important;
  height: 40px !important;
}
.v-btn {
  width: 200px;
}
.v-toolbar {
  background: none !important;
  box-shadow: 0 0px 0px -1px rgba(0, 0, 0, 0.2), 0 0px 0px 0 rgba(0, 0, 0, 0.14),
    0 0px 0px 0 rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: 0 !important;
}
@-webkit-keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@-moz-keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@media only screen and (max-width: 430px) {
  .v-btn {
    font-size: 10px;
    width: 150px;
  }
}
</style>