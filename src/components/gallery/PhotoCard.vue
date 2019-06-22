<template>
  <v-flex xs12 class='xl2 lg3 md4 sm6 xs12'>
    <div ref='vcard'>
      <v-card tile flat color='grey lighten-1' dark :href='hreflink' :height='height'>
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
    </div>
  </v-flex>
</template>

<script lang='ts'>
export default {
  props: ['value', 'hrefbase'],
  data () {
    return {
      height: 200,
      imgsrc: ''
    }
  },
  computed: {
    hreflink: function () {
      return this.hrefbase + '/' + this.value.id.toString()
    }
  },
  created () {
    let that = this
    this.value.thumbnail().then(function (data: any) {
      that.imgsrc = data.default as unknown as string
    })
  },
  mounted () {
    this.winChangeHandlerFunc()
    window.addEventListener('resize', this.winChangeHandler)
  },
  destroyed () {
    window.removeEventListener('resize', this.winChangeHandler)
  },
  methods: {
    winChangeHandler (e: UIEvent) {
      this.winChangeHandlerFunc()
    },
    winChangeHandlerFunc () {
      const vcardElement = this.$refs.vcard as HTMLElement
      this.height = vcardElement.clientWidth * 0.7
    }
  }
}
</script>

<style lang='stylus' scoped>
.v-image__image {
  transition: .3s linear;
}
</style>
