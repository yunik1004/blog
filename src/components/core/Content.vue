<template>
  <v-content>
    <v-container>
      <router-view :key='$route.fullPath'></router-view>
    </v-container>
  </v-content>
</template>

<script lang='ts'>
export default {}
</script>
