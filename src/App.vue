<template>
  <v-app class='Site'>
    <Toolbar></Toolbar>

    <Content class='Site-content'></Content>
    
    <Footer></Footer>
  </v-app>
</template>

<script lang='ts'>
import '~utils/prismjs'
import Toolbar from '~components/core/Toolbar.vue'
import Content from '~components/core/Content.vue'
import Footer from '~components/core/Footer.vue'

export default {
  name: 'App',
  components: {
    Toolbar,
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
