<template>
  <v-app dark>
    <v-app-bar app>
      <v-toolbar-title>Rick and Morty</v-toolbar-title>
      <v-spacer/>
      <v-btn icon @click.stop="drawer = !drawer">
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-app-bar>
    <v-container fill-height class="main-container">
      <Nuxt/>
    </v-container>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      right
    >
      <CartContainer />
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      drawer: false
    }
  }
}
</script>

<style scoped lang="scss">
.main-container {
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: url('/background.jpg') no-repeat center center fixed !important;
    background-size: cover;
    filter: blur(8px);
  }
}
</style>
