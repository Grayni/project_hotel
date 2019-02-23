<template lang="pug">
  div
    footer
      .foot
        a.link-site(href="https://urzhum.com") urzhum.com
        p.autor © Grayni {{ new Date().getFullYear() }} г.
</template>

<script>
import ScrollMagic from 'scrollmagic'
import 'ScrollMagicGSAP'
import {TweenMax, Back} from 'gsap'

export default {
  name: 'footer-wrap',
  props: ['trigger'],
  data () {
    return {
    }
  },
  methods: {

  },
  mounted () {
    const controller = new ScrollMagic.Controller()

    new ScrollMagic.Scene({
      triggerElement: this.trigger,
      offset: '-460vh'
    }).setTween(
      TweenMax
        .fromTo('.foot', 1.4, {autoAlpha: 0, bottom: '-120px'}, {autoAlpha: 1, bottom: 0, ease: Back.easeOut.config(1.7)})
    ).addTo(controller)
  }
}
</script>

<style lang="stylus">
  footer
    background-color #f1eee9
    padding 4vw
    width 100vw
    min-height 50px

  .foot
    width: 100%
    display flex
    justify-content space-between
    align-items center
    position relative

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
</style>
