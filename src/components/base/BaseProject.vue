<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class BaseProject extends Vue {}
</script>
