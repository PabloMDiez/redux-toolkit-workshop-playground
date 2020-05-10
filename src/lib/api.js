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

export const apiLogin = ({ username, password }) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const user = usersMap.find(user => user.username === username && user.password === password)
    if (!user) {
      return reject()
    }
    resolve(removePassword(user))
  })
})
