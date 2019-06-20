<template>
  <div>
    <h1>Hello world</h1>
  </div>
</template>

<script lang='ts'>
import DB from '~data/db/article'
import { DataDB, findDB } from '~data/tools'

let article: DataDB | null

export default {
  created () {
    article = findDB(DB, Number(this.$route.params.id))
    if (article == null) {
      // redirect to 404 page
    }
    console.log(article)
  }
}
</script>
