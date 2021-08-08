import axios from 'axios'

const state = {
  users: []
}

const getters = {
  usersList: state => state.users
}

const actions = {
  async addUsers ({ commit }, user) {
    const response = await axios.post('http://localhost:3000/users', user)
    commit('addNewUser', response.data)
  },

  async fetchUsers ({ commit }) {
    const response = await axios.get('http://localhost:3000/users')
    commit('setUsers', response.data)
  },

  async deleteUsers ({ commit }, id) {
    const response = await axios.delete(`http://localhost:3000/users/${id}`)
    commit('removeUser', response.data)
  }
}

const mutations = {
  setUsers: (state, users) => (
    state.users = users
  ),
  addNewUser: (state, users) => state.users.unshift(users),
  removeUser: (state, id) => (
    // eslint-disable-next-line no-sequences
    state.users.filter(user => user.id !== id),
    state.users.splice(user => user.id, 1)
  )
}

export default {
  state,
  getters,
  actions,
  mutations
}
