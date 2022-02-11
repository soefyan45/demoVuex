const state = () => (
  {
    Barang          : [],
  }
)
const mutations = {
  SET_BARANG(state,payload){
    state.Barang.push(payload)
  },
}
const actions = {
  async gebarang({commit,state},payload){
    return new Promise((resolve, reject) => {
      this.$axios.get(`kategori`).then((response) => {
        commit('SET_KATEGORI', response.data.data)
        //console.log(response.data.data);
        resolve()
      })
    })
  },
  async setbarang({commit},payload){
    return new Promise((resolve, reject) => {
      // console.log(payload)
      // state.Barang.push(payload)
      commit('SET_BARANG', payload)
      resolve()
      // SET_BARANG(payload)
    })
  },
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
