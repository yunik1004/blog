<template>
  <v-layout row wrap>
    <v-flex xs12 sm9 md9 lg10 order-xs2 order-sm1>
      <router-view></router-view>
    </v-flex>
    <v-flex xs12 sm3 md3 lg2 order-xs1 order-sm2>
      <CategoryTree></CategoryTree>
    </v-flex>
  </v-layout>
</template>

<script lang='ts'>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import CategoryTree from '~components/category/CategoryTree.vue'

@Component({
  components: {
    CategoryTree
  }
})
export default class BaseArticle extends Vue {}
</script>
