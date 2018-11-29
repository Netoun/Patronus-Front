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
          <div class="home-title">Rejoignez nous maintenant et soutenez les !</div>
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
                    <div class="headline text-xs-center">La formation continue</div>
                  </v-card-title>
                  <v-card-text class="justify">
                    Acquérir les compétences nécessaires à l'épanouissement professionnel. Améliorer significativement les résultats. Optimiser l’organisation et la production des hommes et du matériel
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
                    <div class="headline">L'assistance</div>
                  </v-card-title>
                  <v-card-text class="justify">
                    Apporter une prestation dans les cadres suivants : Absence pour maladie, congés ou accident. Surcroît de travail ponctuel ou saisonnier.
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
                    <div class="headline text-xs-center"> Le suivi de rayon</div>
                  </v-card-title>
                  <v-card-text class="justify">
                    Suivre le rayon afin d’assurer le respect des procédures et conforter durablement les résultats obtenus.
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
            xs12
            sm2
          >
            <v-btn
              flat
              small
              class="button_values white--text"
            >{{count + " € "}}</v-btn>
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

    <section id="propos">
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
            <h2 class="headline">"Si nous faisions tout ce dont nous sommes capables, nous nous surprendrions vraiment"</h2>
            <span class="grey--text">
              Thomas Edison
            </span>
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
                    >fas fa-users</v-icon>
                  </v-card-text>
                  <v-card-title
                    primary-title
                    class="layout justify-center"
                  >
                    <div class="headline">Un réseau national</div>
                  </v-card-title>
                  <v-card-text class="justify">
                    Formafrais est un réseau de formateurs indépendants exerçant depuis 10 ans en métropole et dans les DOM TOM. Nous vous proposons une grande réactivité et des formations à la carte avec la proximité attendue par vos équipes. Un suivi téléphonique entre chaque formation vous sera proposé
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
                    >fas fa-user-tie</v-icon>
                  </v-card-text>
                  <v-card-title
                    primary-title
                    class="layout justify-center"
                  >
                    <div class="headline">Un professionnel attitré</div>
                  </v-card-title>
                  <v-card-text class="justify">
                    Vos consultants Formafrais sont des indépendants qualifiés ayant déjà une expérience de plus de quinze ans en grande distribution. Ils sont tous experts et reconnus dans leur métier
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
                    >fas fa-ruler</v-icon>
                  </v-card-text>
                  <v-card-title
                    primary-title
                    class="layout justify-center"
                  >
                    <div class="headline">Une formation sur mesure</div>
                  </v-card-title>
                  <v-card-text class="justify">
                    Chaque formation proposée par Formafrais est unique. Elle est créée en fonction de votre demande et évoluera en fonction des besoins de votre équipe, vos consultants travaillent avec passion pour et avec vos collaborateurs afin de les guider aussi loin que possible
                  </v-card-text>
                </v-card>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
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
                <h3>Dominique Bertrand</h3>
              </v-card-text>
              <v-list class="transparent">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="primary--text">phone</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>06.83.93.65.97</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="primary--text">place</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Guérande, FR</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="primary--text">email</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>formafrais@gmail.com</v-list-tile-title>
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
                        v-bind:href="reglement"
                        download
                      > Réglement intérieur</a>
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="primary--text">attachment</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <a
                      v-bind:href="cgv"
                      download
                    > Conditions générales de vente</a>
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
              v-scroll-to="'#toolbar'"
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
      count: 0
    }
  },
  methods: {

  },
  created () {
    fetch(process.env.PATRONUS_API + '/users/totalsubs')
      .then(response => {
        return response.json()
      }).then(count => {
        this.count = count.values
      })
    this.logout()
  }
}
</script>


<style scoped>
.button_values {
  font-size: 1.2em;
  height: 30px;
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