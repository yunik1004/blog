<template>
  <div>
    <h1>{{name}}</h1>
    <div v-html='HTMLcontent'></div>
  </div>
</template>

<script lang='ts'>
import Prism from '~utils/prismjs'
import DB from '~data/db/article'
import { DataDB, findDB } from '~utils/data'

export default {
  data () {
    return {
      name: '',
      HTMLcontent: ''
    }
  },
  created () {
    let articleN: DataDB | null = findDB(DB, Number(this.$route.params.id))
    if (articleN == null) {
      // redirect to 404 page
      this.$router.push({ name: '404' })
      return
    }

    let article: DataDB = articleN
    this.name = article.name as string

    let that = this

    article.data().then(function (data) {
      that.HTMLcontent = data.default as unknown as string
    }).finally(function () {
      Prism.highlightAll()
    })
  }
}
</script>
