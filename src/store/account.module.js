import {
  userService
} from '../service'
import router from '../router/index'

const tokenUser = JSON.parse(localStorage.getItem('user'))
const state = tokenUser ? {
  status: {
    loggedIn: true
  },
  tokenUser,
  user: null
} : {
  status: {},
  tokenUser: null
}

const actions = {
  login ({
    dispatch,
    commit
  }, {
    email,
    password
  }) {
    commit('loginRequest', {
      email
    })
    userService.login(email, password)
      .then(
        user => {
          commit('loginSuccess', user)

          router.push('/')
        },
        error => {
          console.log(error)
          commit('loginFailure', error)
          dispatch('alert/error', error, {
            root: true
          })
        }
      )
  },
  logout ({
    commit
  }) {
    userService.logout()
    commit('logout')
  },
  register ({
    dispatch,
    commit
  }, tokenUser) {
    commit('registerRequest', tokenUser)

    userService.register(tokenUser)
      .then(
        user => {
          commit('registerSuccess', user)
          router.push('/login')
          setTimeout(() => {
            // display success message after route change completes
            dispatch('alert/success', 'Registration successful', {
              root: true
            })
          })
        },
        error => {
          commit('registerFailure', error)
          dispatch('alert/error', error, {
            root: true
          })
        }
      )
  },
  getProfile ({
    commit
  }) {
    console.log(tokenUser)
    userService.getByToken(tokenUser).then(user => {
      commit('profile', user)
    })
  },
  voter ({
    commit
  }, userId, projectId) {
    userService.sendVote(userId, projectId).then(vote => {

    })
  }
}

const mutations = {
  loginRequest (state, tokenUser) {
    state.status = {
      loggingIn: true
    }
    state.tokenUser = tokenUser
  },
  loginSuccess (state, user) {
    state.status = {
      loggedIn: true
    }
    state.tokenUser = tokenUser
  },
  loginFailure (state) {
    state.status = {}
    state.tokenUser = null
  },
  logout (state) {
    state.status = {}
    state.tokenUser = null
  },
  registerRequest (state, user) {
    state.status = {
      registering: true
    }
  },
  registerSuccess (state, user) {
    state.status = {}
  },
  registerFailure (state, error) {
    state.status = {}
  },
  profile (state, user) {
    state.user = user
  }
}

const account = {
  namespaced: true,
  state,
  actions,
  mutations
}

export default account
