<template lang="pug">
  .model.wrapper_blur(:class="{'is-call': blurStatus }")
    .model_in(:class="{'show-smooth': showSmooth}")
      title-page(:title-text="titleText")
      slot.cont content
      footer-wrap.footer
</template>

<script>
import TitlePage from '@/components/elements/TitlePage'
import FooterWrap from '@/components/elements/FooterWrap'

import blurStatus from '@/components/mixins/blurStatus'

export default {
  name: 'model',
  props: ['title-text'],
  mixins: [blurStatus],
  components: {
    TitlePage, FooterWrap
  },
  data () {
    return {
      showSmooth: false
    }
  },
  mounted () {
    this.showSmooth = true
  }
}
</script>

<style lang="stylus" scoped>
  .model
    min-height 100vh
    padding-top 100px
    background #f1eee9
    overflow-x hidden
    &_in
      opacity 0
      transition opacity 0.5s ease
      &.show-smooth
        opacity 1
        transition opacity 0.5s ease
  .footer
    position relative
</style>
