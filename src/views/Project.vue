<template>
  <div>
    <Gallery :db='db' :hrefbase='hrefbase'></Gallery>
  </div>
</template>

<script lang='ts'>
import Gallery from '~components/gallery/Gallery.vue'
import DB from '~data/db/project'

export default {
  data () {
    return {
      db: DB
    }
  },
  computed: {
    hrefbase: function () {
      return window.location.href.split('?')[0]
    }
  },
  components: {
    Gallery
  }
}
</script>
