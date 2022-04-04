<template>
  <div>
    <CharacterItem v-for="(character, index) in cartItems" :key="index" :character="character" :is-in-cart="true" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CartContainer',
  computed: {
    ...mapState({
      cartItems: state => state.cart.items
    })
  }
}
</script>
