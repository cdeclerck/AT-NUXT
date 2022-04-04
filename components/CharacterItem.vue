<template>
  <v-card class="mx-auto">
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title class="text-h5" v-text="character.name" />

        <v-card-subtitle v-text="character.status" />
        <v-card-actions>
          <v-btn
            v-if="!isInCart"
            :disabled="character.status !== 'Alive'"
            fab
            color="primary"
            @click="addToCart(character)"
          >
            <v-icon>mdi-cart</v-icon>
          </v-btn>
          <div v-else>
            <div> {{ character.qty }}</div>
          </div>
        </v-card-actions>
      </div>

      <v-avatar class="ma-3" size="125" tile>
        <v-img :src="character.image" />
      </v-avatar>
    </div>

  </v-card>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'CharacterItem',
  props: {
    character: {
      type: Object,
      required: true
    },
    isInCart: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    ...mapMutations({
      addToCart: 'cart/addToCart'
    })
  }
}
</script>
