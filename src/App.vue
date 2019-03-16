<template>
  <div id="app">
    <v-container>
      <v-layout column>
        <v-flex>
          <Sign/>
        </v-flex>
        <v-flex>
          <Menu/>
        </v-flex>
        <v-flex>
          <router-view/>
        </v-flex>
        <v-flex>
          <Footer/>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script lang="ts">
import Sign from './components/Sign.vue'
import Menu from './components/Menu.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Sign,
    Menu,
    Footer
  }
}
</script>
