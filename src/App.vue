<template>
  <div id='app' class='Site'>
    <v-container class='Site-content'>
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
      </v-layout>
    </v-container>
    <Footer/>
  </div>
</template>

<script lang='ts'>
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

<style lang='stylus'>
.Site {
  display: flex
  min-height: 100vh
  flex-direction: column
}

.Site-content {
  flex: 1
}
</style>
