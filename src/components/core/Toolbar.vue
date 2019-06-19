<template>
  <v-toolbar flat>
    <v-toolbar-title>
      <router-link :to='{ name: "Home" }'>Yunik's Blog</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class='hidden-sm-and-down'>
      <v-btn flat :to='{ name: "Article" }'>Articles</v-btn>
      <v-btn flat :to='{ name: "Project" }'>Projects</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script lang='ts'>
export default {}
</script>
