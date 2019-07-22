<template>
  <nav>
    <v-container class='py-2'>
      <v-layout wrap>
        <v-flex class='Menu'>
          <p>
            <router-link class='Menu-Item' :to='{ name: "Article" }'>Articles</router-link>
            <router-link class='Menu-Item' :to='{ name: "Project" }'>Projects</router-link>
          </p>
        </v-flex>
      </v-layout>
    </v-container>
  </nav>
</template>

<script lang='ts'>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class Navigation extends Vue {}
</script>

<style lang='stylus' scoped>
a {
  &:hover {
    color: green
  }
}

.Menu {
  border-bottom: 1px solid
}

.Menu-Item {
  margin-right: 12px
}
</style>
