<template>
  <v-container grid-list-xl>
    <v-layout wrap>
      <PhotoCard v-for='(item, i) in db' :value='item' :hrefbase='hrefbase' :key='i'></PhotoCard>
    </v-layout>
  </v-container>
</template>

<script lang='ts'>
import PhotoCard from '~components/gallery/PhotoCard.vue'

export default {
  props: ['db', 'hrefbase'],
  components: {
    PhotoCard
  }
}
</script>
