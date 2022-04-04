import Vue from 'vue'


export const state = () => ({
  items: []
})
export const mutations = {
  addToCart (state, character) {
    // eslint-disable-next-line no-undef
    const cartItemFind = _.findKey(state.items, ['id', character.id])
    if (!cartItemFind) {
      Vue.set(character, 'qty', 1)
      state.items.push(character)
    } else {
      state.items[cartItemFind].qty++
    }
  }
}
