<template>
  <v-flex xs12 class='xl2 lg3 md4 sm6 xs12'>
    <div ref='vcard'>
      <router-link :to='{ name: routeName, params: { id: value.id } }'>
        <v-card tile flat color='grey lighten-1' dark :height='height'>
          <v-img :src='imgsrc' height='100%' gradient='rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)'>
            <v-layout fill-height wrap text-xs-right ma-0>
              <v-flex xs12>
                <h3 class="title font-weight-bold mb-2">
                  {{ value.name }}
                </h3>
              </v-flex>
            </v-layout>
          </v-img>
        </v-card>
      </router-link>
    </div>
  </v-flex>
</template>

<script lang='ts'>
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { DataDB } from '~utils/data'

@Component
export default class PhotoCard extends Vue {
  // props
  @Prop() readonly value!: DataDB
  @Prop() readonly routeName!: string

  // data
  height: number = 0
  imgsrc: string = ''

  // methods
  winChangeHandler (e: UIEvent): void {
    this.winChangeHandlerFunc()
  }

  winChangeHandlerFunc (): void {
    const vcardElement = this.$refs.vcard as HTMLElement
    this.height = vcardElement.clientWidth * 0.7
  }

  // Lifecycle hooks
  created () {
    let that = this
    if (this.value.thumbnail != null) {
      this.value.thumbnail().then(function (data: any) {
        that.imgsrc = data.default as unknown as string
      })
    }
  }

  mounted () {
    this.winChangeHandlerFunc()
    window.addEventListener('resize', this.winChangeHandler)
  }

  destroyed () {
    window.removeEventListener('resize', this.winChangeHandler)
  }
}
</script>

<style lang='stylus' scoped>
.v-image__image {
  transition: .3s linear;
}
</style>
