export const userService = {
  login,
  logout,
  register,
  getByToken,
  sendVote,
  getVote,
  updateVote
}

function login(email, password) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  }

  return fetch(process.env.PATRONUS_API + '/login', requestOptions).then(handleResponse)
    .then(user => {
      localStorage.setItem('user', JSON.stringify(user.token))
      return user
    })
}

function logout() {
  localStorage.removeItem('user')
}

function register(user) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }
  return fetch(process.env.PATRONUS_API + '/user', requestOptions).then(handleResponse)
}

function sendVote(user_id, project_id) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user_id,
      project_id
    })
  }
  return fetch(process.env.PATRONUS_API + '/voter', requestOptions).then(handleResponse)
}

function updateVote(user_id, project_id, stateVote) {
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      support_id: stateVote.support_id,
      user_id,
      project_id,
      created_at: '2014-11-28T12:45:59.324310806Z'
    })
  }

  return fetch(process.env.PATRONUS_API + '/voter', requestOptions).then(handleResponse)
}

function getVote(token) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'authentication': token,
      'Access-Control-Allow-Origin': '*'
    }
  }
  return fetch(process.env.PATRONUS_API + '/support', requestOptions).then(handleResponse)
}

function getByToken(token) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'authentication': token,
      'Access-Control-Allow-Origin': '*'
    }
  }

  return fetch(process.env.PATRONUS_API + '/user/profile', requestOptions).then(handleResponse)
}

// function update (user) {
//   const requestOptions = {
//       method: 'PUT',
//       headers: { ...authHeader(), 'Content-Type': 'application/json' },
//       body: JSON.stringify(user)
//     }

//   return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse)
// }

// // prefixed function name with underscore because delete is a reserved word in javascript
// function _delete (id) {
//   const requestOptions = {
//       method: 'DELETE',
//       headers: authHeader()
//     }

//   return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse)
// }

const handleResponse = (response) => {
  return response.text().then(text => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout()
        location.reload(true)
      }

      const error = response.statusText
      return Promise.reject(error)
    }

    return data
  })
}
