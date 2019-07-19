<template>
  <div>
    <Gallery :db='db' routeName='ProjectItem'></Gallery>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import DB from '~data/db/project'
import { DataDB } from '~utils/data'
import Gallery from '~components/gallery/Gallery.vue'

@Component({
  components: {
    Gallery
  }
})
export default class Project extends Vue {
  // data
  db: Array<DataDB> = DB
}
</script>
