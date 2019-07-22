<template>
  <aside>
    <div>
      <h3 class='categoryTitle'>Category</h3>
      <div>
        <router-link :to='{ name: "Article" }'>☆ All articles ★</router-link>
        <v-treeview
          :items='category'
          item-key='id'
          :open-all='true'>
          <template slot='label' slot-scope='{ item }'>
            <router-link :to='{ name: "Article", query: { id: item.id } }'>{{ item.name }}</router-link>
          </template>
        </v-treeview>
      </div>
    </div>
  </aside>
</template>

<script lang='ts'>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import catDB from '~data/category/article'
import { Category } from '~utils/category'

@Component
export default class CategoryTree extends Vue {
  // data
  category: Array<Category> = catDB
}
</script>

<style lang='stylus' scoped>
a {
  &:hover {
    color: green
  }
  font-size: 14px !important
}

.categoryTitle {
  padding-bottom: 7px  
}

</style>
