export default {
  async setUsername({commit}, user) {
    commit('SET_USERNAME', user);
  },
  async isTypeUser({}, username,password) {

    console.log('store',username ,password);
    return username === 'test'
  }
}
