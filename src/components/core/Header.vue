<template>
  <header>
    <v-container>
      <v-flex>
        <h1>
          <router-link :to='{ name: "Home" }'>Yunik Media Lab</router-link>
        </h1>
      </v-flex>
    </v-container>
  </header>
</template>

<script lang='ts'>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class Header extends Vue {}
</script>
