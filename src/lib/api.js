const usersMap = [
  {
    username: 'test',
    password: 'test',
    name: 'Pablin'
  }
]

const removePassword = user => {
  const { password, ...userData } = user
  return userData
}

class API {
  constructor(apiBaseUrl) {
    this.apiBaseUrl = apiBaseUrl
  }

  login = ({ username, password }) => new Promise((resolve, reject) => {
    console.log(`API (base: ${this.apiBaseUrl}): login`)
    setTimeout(() => {
      const user = usersMap.find(user => user.username === username && user.password === password)
      if (!user) {
        return reject()
      }
      resolve(removePassword(user))
    }, 1000)
  })
}

export default API
