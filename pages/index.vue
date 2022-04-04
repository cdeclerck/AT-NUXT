<template>
  <v-row justify="center" align="center">
    <v-col cols="10">
      <v-card v-if="!characters">
        <v-form ref="form" v-model="valid" @submit.prevent="searchInApi">
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="search" label="Search" prepend-icon="mdi-magnify" required/>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="d-flex justify-center">
                <v-btn :disabled="!valid" color="primary" x-large type="submit">
                  Search
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card>
      <v-card v-else>
        <v-container>
          <v-row>
            <v-col cols="4" v-for="(character, index) in characters" :key="index">
              <CharacterItem :character="character" />
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex justify-center">
              <v-btn
                outlined
                @click="characters = null"
              >
                Back
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { gql } from 'nuxt-graphql-request';

export default {
  name: 'IndexPage',
  data: () => ({
    characters: null,
    valid: false,
    search: '',
    searchRules: [
      v => !!v || 'Search is required',
      v => v.length <= 10 || 'Search must be less than 10 characters'
    ],
  }),
  methods: {
    async searchInApi () {
      const query = gql`
        {
          characters(filter: { name: "${this.search}" }) {
            info {
              count
            }
            results {
              name,
              status,
              image,
              id
            }
          }
        }
      `
      try {
        const { characters } = await this.$graphql.default.request(query)
        this.characters = characters.results
      } catch (error) {
        console.error(JSON.stringify(error, undefined, 2))
      }
    }
  }
}
</script>
