<template>
  <section>
    <ItemArticle :db='db'></ItemArticle>
  </section>
</template>

<script lang='ts'>
import DB from '~data/db/project'
import ItemArticle from '~components/template/ItemArticle.vue'

export default {
  data () {
    return {
      db: DB
    }
  },
  components: {
    ItemArticle
  }
}
</script>
