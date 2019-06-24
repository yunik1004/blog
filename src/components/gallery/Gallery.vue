<template>
  <v-container grid-list-xl>
    <v-layout wrap>
      <PhotoCard v-for='(item, i) in db' :value='item' :routeName='routeName' :key='i'></PhotoCard>
    </v-layout>
  </v-container>
</template>

<script lang='ts'>
import PhotoCard from '~components/gallery/PhotoCard.vue'

export default {
  props: ['db', 'routeName'],
  components: {
    PhotoCard
  }
}
</script>
