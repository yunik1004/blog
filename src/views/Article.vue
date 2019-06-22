<template>
  <div>
    <h2>Articles</h2>
    <v-list>
      <template v-for='item in db'>
        <v-list-tile :key='item.id' @click='onClick(item.id)'>
          <v-list-tile-content>
            <v-list-tile-title v-text='item.name'></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </div>
</template>

<script lang='ts'>
import DB from '~data/db/article'

export default {
  data () {
    return {
      db: DB
    }
  },
  methods: {
    onClick: function (itemId: Number) {
      this.$router.push({
        name: 'ArticleItem',
        params: {
          id: itemId.toString()
        }
      })
    }
  }
}
</script>
