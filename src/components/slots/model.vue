<template lang="pug">
  .model
    title-page(:title-text="titleText")
    slot.cont content
    footer-wrap.footer
</template>

<script>
import TitlePage from '../elements/title-page'
import FooterWrap from '../elements/footer-wrap'

export default {
  name: 'model',
  props: ['title-text'],
  components: {
    TitlePage,
    FooterWrap
  }
}
</script>

<style lang="stylus" scoped>
  .footer
    position relative
  .model
    min-height 100vh
    padding-top 100px
    background #f1eee9
</style>
