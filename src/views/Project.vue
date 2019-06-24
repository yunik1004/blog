<template>
  <div>
    <Gallery :db='db' routeName='ProjectItem'></Gallery>
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
  components: {
    Gallery
  }
}
</script>
