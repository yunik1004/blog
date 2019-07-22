<template>
  <ListArticle :categoryID='id'></ListArticle>
</template>

<script lang='ts'>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import ListArticle from '~components/list/ListArticle.vue'

@Component({
  components: {
    ListArticle
  }
})
export default class Article extends Vue {
  // data
  id: number = -1

  // Lifecycle hooks
  created () {
    const catID = this.$route.query.id
    if (typeof catID == 'number') {
      this.id = catID
    }
  }
}
</script>
