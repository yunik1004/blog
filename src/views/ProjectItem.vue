<template>
  <section>
    <ItemArticle :db='db'></ItemArticle>
  </section>
</template>

<script lang='ts'>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import DB from '~data/db/project'
import ItemArticle from '~components/template/ItemArticle.vue'

@Component({
  components: {
    ItemArticle
  }
})
export default class ProjectItem extends Vue {
  // data
  db: Array<any> = DB
}
</script>
