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
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { isEqual } from 'lodash'
import DB from '~data/db/article'
import ArticleCategory from '~data/category/article'
import { DataDB } from '~utils/data'
import {findCategory } from '~utils/category'

@Component
export default class ListArticle extends Vue {
  @Prop() readonly categoryID!: number

  // data
  db: Array<DataDB> = []

  // methods
  onClick (itemId: Number): void {
    this.$router.push({
      name: 'ArticleItem',
      params: {
        id: itemId.toString()
      }
    })
  }

  // Lifecycle hooks
  created () {
    if (this.categoryID < 0) {
      this.db = DB
      return
    }

    const res: Array<String> = findCategory(ArticleCategory, this.categoryID)
    const passed: Array<DataDB> = DB.filter(elem => {
      if (elem.category.length < res.length) {
        return false
      }
      if (isEqual(res, elem.category.slice(0, res.length))) {
        return true
      }
      
      return false
    })
    this.db = passed
  }
}
</script>
