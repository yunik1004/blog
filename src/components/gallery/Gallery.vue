<template>
  <v-container grid-list-xl>
    <v-layout wrap>
      <PhotoCard v-for='(item, i) in db' :value='item' :routeName='routeName' :key='i'></PhotoCard>
    </v-layout>
  </v-container>
</template>

<script lang='ts'>
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { DataDB } from '~utils/data'
import PhotoCard from '~components/gallery/PhotoCard.vue'

@Component({
  components: {
    PhotoCard
  }
})
export default class Gallery extends Vue {
  @Prop() readonly db!: Array<DataDB>
  @Prop() readonly routeName!: string
}
</script>
