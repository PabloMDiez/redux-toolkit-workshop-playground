const usersMap = [
  {
    username: 'test',
    password: 'test',
    name: 'Frank N. Furter',
  },
]

const removePassword = user => {
  const { password, ...userData } = user
  return userData
}

class API {
  static login = ({ username, password }) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = usersMap.find(
          user => user.username === username && user.password === password,
        )
        if (!user) {
          return reject()
        }
        resolve(removePassword(user))
      }, 1000)
    })
}

export default API
