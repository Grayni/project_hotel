<template>
  <filter id="dropshadow" height="130%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="9"/> <!-- stdDeviation is how much to blur -->
    <feOffset dx="0" dy="-2" result="offsetblur"/> <!-- how much to offset -->
    <feComponentTransfer>
      <feFuncA type="linear" slope="0.2"/> <!-- slope is the opacity of the shadow -->
    </feComponentTransfer>
    <feMerge>
      <feMergeNode/> <!-- this contains the offset blurred image -->
      <feMergeNode in="SourceGraphic"/> <!-- this contains the element that the filter is applied to -->
    </feMerge>
  </filter>
</template>

<script>
export default {

  name: 'drop-shadow',
  data () {
    return {

    }
  }
}
</script>

<style>
/* for elements e.g.: path, polygon */
/*
*  -webkit-filter: url(#dropshadow)
*  -moz-filter: url("#blur")
*  filter: url(#dropshadow)
*/
</style>
