<template>
  <v-app class='Site white'>
    <Header></Header>

    <Navigation></Navigation>

    <Content class='Site-content'></Content>
    
    <Footer></Footer>
  </v-app>
</template>

<script lang='ts'>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Header from '~components/core/Header.vue'
import Navigation from '~components/core/Navigation.vue'
import Content from '~components/core/Content.vue'
import Footer from '~components/core/Footer.vue'

@Component({
  components: {
    Header,
    Navigation,
    Content,
    Footer
  }
})
export default class App extends Vue {}
</script>

<style lang='stylus'>
@import '~assets/css/app.styl'

.Site {
  display: flex
  min-height: 100vh
  flex-direction: column
}

.Site-content {
  flex: 1
}
</style>
