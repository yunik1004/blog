<template>
  <nav>
    <v-container class='py-2'>
      <v-flex class='Menu'>
        <p>
          <router-link class='Menu-Item' :to='{ name: "Article" }'>Articles</router-link>
          <router-link class='Menu-Item' :to='{ name: "Project" }'>Projects</router-link>
        </p>
      </v-flex>
    </v-container>
  </nav>
</template>

<script lang='ts'>
export default {}
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
