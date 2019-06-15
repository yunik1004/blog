<template>
  <v-footer>
    <v-layout>
      <v-flex text-xs-center>
        &copy; {{ `${currentYear}` }} - <strong>Yunik Media Lab</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script lang='ts'>
export default {
  computed: {
    currentYear () {
      return new Date().getUTCFullYear()
    }
  }
}
</script>
