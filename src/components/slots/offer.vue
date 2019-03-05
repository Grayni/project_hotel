<template lang="pug">
  .offer
    slot.img(name="img")
    slot.title(name="title-offer")
    slot.description(name="description")
</template>

<script>
export default {
  name: 'offer'
}
</script>

<style lang="stylus" scoped>
  .offer
    width 23vw
    max-width 400px
    height 200px
    margin 20px 0

  .img
    margin-bottom 10px
  .title
    font bold 20px Futura
    width 100%
    height 40px
    display flex
    align-items center
    justify-content center
  .description
    font 16px Futura
    padding 4px 0
    display inline-block
    color #6f5c56

</style>
