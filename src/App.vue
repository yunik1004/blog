<template>
  <v-app class='Site white'>
    <Header></Header>

    <Navigation></Navigation>

    <Content class='Site-content'></Content>
    
    <Footer></Footer>
  </v-app>
</template>

<script lang='ts'>
import Header from '~components/core/Header.vue'
import Navigation from '~components/core/Navigation.vue'
import Content from '~components/core/Content.vue'
import Footer from '~components/core/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Navigation,
    Content,
    Footer
  }
}
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
