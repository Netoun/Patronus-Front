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
  user: {},
  vote: {}
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
        key => {
          commit('loginSuccess', key)
          userService.getByToken(key.token).then(ok => {
            commit('profile', ok)
            userService.getVote(key.token).then(vote => {
              commit('voter', vote)
              router.push('/explorer')
            }, err => {
              router.push('/explorer')
            })
          })
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
    userService.getByToken(tokenUser).then(user => {
      commit('profile', user)
    })
    userService.getVote(tokenUser).then(vote => {
      console.log(vote)
      commit('voter', vote)
    })
  },
  voter ({
    dispatch,
    commit
  }, {
    userId,
    projectId
  }) {
    userService.sendVote(userId, projectId).then(vote => {
      setTimeout(() => {
        router.go('/explorer')
      }, 2000)
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
  loginSuccess (state, tokenUser) {
    state.status = {
      loggedIn: true
    }
    state.tokenUser = tokenUser
  },
  loginFailure (state) {
    state.status = {
      user: {},
      vote: {}
    }
    state.tokenUser = null
  },
  logout (state) {
    console.log('ahahaha')
    state.status = {
      user: {},
      vote: {}
    }
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
  },
  voter (state, vote) {
    state.vote = vote
  }
}

const account = {
  namespaced: true,
  state,
  actions,
  mutations
}

export default account
