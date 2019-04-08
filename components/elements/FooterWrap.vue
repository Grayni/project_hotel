<template lang="pug">
  div
    footer(:class="{'foot-opacity': activePage, 'is-call': blurStatus}")
      .foot
        a.link-site(href="https://urzhum.com") urzhum.com
        p.autor © Grayni {{ new Date().getFullYear() }} г.
</template>

<script>
import blurStatus from '@/components/mixins/blurStatus'

export default {
  name: 'footer-wrap',
  props: ['trigger'],
  mixins: [blurStatus],
  data () {
    return {
      scene: null,
      timeLine1: null,
      tween: null
    }
  },
  computed: {
    activePage: function () {
      return (this.$route.fullPath === '/about')
    }
  },
  methods: {
    showFooter () {
      // const controller = new ScrollMagic.Controller()

      this.timeLine1 = new this.$gsap.TimelineMax()
      // eslint-disable-next-line
      this.tween = this.timeLine1.fromTo('.foot', 1.4, { autoAlpha: 0, bottom: '-120px' }, { autoAlpha: 1, bottom: 0, ease: Back.easeOut.config(1.7) })

      this.scene = new this.$scrollmagic.Scene({
        triggerElement: this.trigger,
        offset: '-460vh'
      }).setTween(this.tween)

      this.$ksvuescr.$emit('addScene', 'showFooter', this.scene)
    }
  },
  mounted () {
    this.showFooter()
  }
}
</script>

<style lang="stylus">
  footer
    background-color #f1eee9
    padding 4vw
    width 100vw
    min-height 50px
    position relative
    bottom 0

  .foot
    width: 100%
    display flex
    justify-content space-between
    align-items center
    align-items center
    position relative
    bottom 0

  .link-site, .autor
    font 16px Futura
    text-decoration none
    color #6f5c56
    position relative
  .link-site
    transition color 0.5s ease
    &:hover
      color #927971
      transition color 0.5s ease

  .foot-opacity
    position absolute
    background: -moz-linear-gradient(top,  rgba(241,238,233,0) 0%, rgba(241,238,233,1) 82%, rgba(241,238,233,1) 100%)
    background: -webkit-linear-gradient(top,  rgba(241,238,233,0) 0%,rgba(241,238,233,1) 82%,rgba(241,238,233,1) 100%)
    background: linear-gradient(to bottom,  rgba(241,238,233,0) 0%,rgba(241,238,233,1) 82%,rgba(241,238,233,1) 100%)
</style>
