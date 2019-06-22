<template>
  <article>
    <h1 class='name'>{{name}}</h1>
    <p class='date'>{{date}}</p>

    <v-divider class='py-1'></v-divider>

    <div v-html='HTMLcontent'></div>
  </article>
</template>

<script lang='ts'>
import Prism from '~utils/prismjs'
import { DataDB, findDB } from '~utils/data'

export default {
  props: ['db'],
  data () {
    return {
      name: '',
      date: '',
      HTMLcontent: ''
    }
  },
  created () {
    let itemN: DataDB | null = findDB(this.db, Number(this.$route.params.id))
    if (itemN == null) {
      // redirect to 404 page
      this.$router.push({ name: '404' })
      return
    }

    let item: DataDB = itemN
    this.name = item.name as string
    this.date = item.date as string

    let that = this

    item.data().then(function (data) {
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
