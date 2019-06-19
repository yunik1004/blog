<template>
  <v-footer dark height='auto'>
    <v-container mx-auto>
      <v-layout wrap>
        <v-flex text-xs-center>
          &copy; {{ `${currentYear}` }} - <strong>Yunik Media Lab</strong>
        </v-flex>
      </v-layout>
    </v-container>
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
