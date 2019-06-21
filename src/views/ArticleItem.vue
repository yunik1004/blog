<template>
  <div>
    <h1>{{name}}</h1>
    <div>
      <div v-html='HTMLcontent'></div>
    </div>
  </div>
</template>

<script lang='ts'>
import DB from '~data/db/article'
import { DataDB, findDB } from '~data/tools'

let article: DataDB

export default {
  data () {
    return {
      name: '',
      HTMLcontent: '<p>Wow</p>'
    }
  },
  created () {
    let articleN: DataDB | null = findDB(DB, Number(this.$route.params.id))
    if (articleN == null) {
      // redirect to 404 page
      this.$router.push({ name: '404' })
      return
    }

    article = articleN
    this.name = article.name as string

    let that = this

    article.data().then(function (data) {
      that.HTMLcontent = data.default as unknown as string
    })
  }
}
</script>
