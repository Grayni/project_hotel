<template lang="pug">
  .header-block.wrapper_blur(:class="{'white-opacity': whiteOpacity}")
    slot
</template>

<script>
export default {
  name: 'header-block',
  props: ['position'],
  data () {
    return {
      whiteOpacity: 0
    }
  }
}
</script>

<style lang="stylus" scoped>
  .header-block
    position fixed
    z-index 10000
    height 69px
    &.white-opacity
      background-color rgba(255,255,255,0.4)
</style>
