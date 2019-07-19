<template>
  <v-content>
    <v-container>
      <v-flex>
        <router-view :key='$route.fullPath'></router-view>
      </v-flex>
    </v-container>
  </v-content>
</template>

<script lang='ts'>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class Content extends Vue {}
</script>
