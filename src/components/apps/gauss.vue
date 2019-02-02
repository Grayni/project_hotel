<template>
  <!-- filter blur -->
  <filter id="blur">
    <feGaussianBlur stdDeviation="5" />
    <feColorMatrix type="saturate" values="1.2" />
  </filter>
</template>

<script>
export default {

  name: 'gauss',
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
  /* for elements e.g: path, polygon */

  /*  -webkit-filter: url("#blur");
   *  -moz-filter: url("#blur");
   *  filter: url("#blur");
   */
</style>
