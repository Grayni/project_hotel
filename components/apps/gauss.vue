<template lang="pug">
  filter#blur
    feGaussianBlur(stdDeviation="5")
    feColorMatrix(type="saturate", values="1.2")
</template>

<script>
export default {
  name: 'gauss'
}
</script>

<style lang="stylus" scoped>
  filter
     -webkit-filter url("#blur")
     -moz-filter url("#blur")
     filter url("#blur")
</style>
