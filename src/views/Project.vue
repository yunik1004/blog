<template>
  <div>
    <Gallery :db='db' routeName='ProjectItem'></Gallery>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Gallery from '~components/gallery/Gallery.vue'
import DB from '~data/db/project'

@Component({
  components: {
    Gallery
  }
})
export default class Project extends Vue {
  // data
  db: Array<any> = DB
}
</script>
