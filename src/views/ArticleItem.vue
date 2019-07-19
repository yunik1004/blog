<template>
  <section>
    <ItemArticle :db='db'></ItemArticle>
  </section>
</template>

<script lang='ts'>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import DB from '~data/db/article'
import { DataDB } from '~utils/data'
import ItemArticle from '~components/template/ItemArticle.vue'

@Component({
  components: {
    ItemArticle
  }
})
export default class ArticleItem extends Vue {
  // data
  db: Array<DataDB> = DB
}
</script>
