export const userService = {
  login,
  logout,
  register,
  getByToken,
  sendVote
}

function login (email, password) {
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

  return fetch('http://localhost:8000/login', requestOptions).then(handleResponse)
    .then(user => {
      console.log(user.token.sub())
      localStorage.setItem('user', JSON.stringify(user.token))
      return user
    })
}

function logout () {
  localStorage.removeItem('user')
}

function register (user) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }
  return fetch('http://localhost:8000/user', requestOptions).then(handleResponse)
}

function sendVote (vote) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(vote)
  }
  return fetch('http://localhost:8000/voter', requestOptions).then(handleResponse)
}

function getByToken (token) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'authentication': token,
      'Access-Control-Allow-Origin': '*'
    }
  }

  return fetch('http://localhost:8000/user/profile', requestOptions).then(handleResponse)
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

      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }

    return data
  })
}
