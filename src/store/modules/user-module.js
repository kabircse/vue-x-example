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
  }
}

const mutations = {
  setUsers: (state, users) => (
    state.users = users
  )
}

export default {
  state,
  getters,
  actions,
  mutations
}
