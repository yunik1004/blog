<template>
  <section>
    <article>
      <h1 class='name'>{{name}}</h1>
      <p class='date'>{{date}}</p>

      <v-divider class='py-1'></v-divider>

      <div v-html='HTMLcontent'></div>
    </article>
  </section>
</template>

<script lang='ts'>
import Prism from '~utils/prismjs'
import DB from '~data/db/article'
import { DataDB, findDB } from '~utils/data'

export default {
  data () {
    return {
      name: '',
      date: '',
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
    this.date = article.date as string

    let that = this

    article.data().then(function (data) {
      that.HTMLcontent = data.default as unknown as string
    }).finally(function () {
      Prism.highlightAll()
    })
  }
}
</script>

<style lang='stylus' scoped>
.name {
  font-size: 20px
}

.date {
  text-align: right
  color: #9e9e9e
  font-size: 12px
}
</style>
