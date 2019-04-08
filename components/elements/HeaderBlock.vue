<template lang="pug">
  .header-block.wrapper_blur
    slot
</template>

<script>
export default {
  name: 'header-block'
}
</script>

<style lang="stylus" scoped>
  .header-block
    position fixed
    z-index 10000
    height 69px
</style>
