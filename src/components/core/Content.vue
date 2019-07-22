<template>
  <v-content>
    <v-container grid-list-md>
      <v-layout wrap>
        <v-flex>
          <router-view :key='$route.fullPath'></router-view>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script lang='ts'>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class Content extends Vue {}
</script>
