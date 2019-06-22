<template>
  <div>
    <v-list>
      <template v-for='(item, index) in db'>
        <v-list-tile :key='item.id' @click='onClick(item.id)'>
          <v-list-tile-content>
            <v-list-tile-title v-text='item.name'></v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-list-tile-action-text v-text='item.date'></v-list-tile-action-text>
          </v-list-tile-action>
        </v-list-tile>

        <v-divider v-if='index + 1 < db.length' :key='index'></v-divider>
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
