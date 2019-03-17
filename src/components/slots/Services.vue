<template lang="pug">
  .wrap-background
    slot.background(name="img-background")
    .text-background
      slot(name="text-background")
</template>

<script>
import ScrollMagic from 'scrollmagic'
import 'ScrollMagicGSAP'

export default {
  name: 's1-about-room',
  mounted () {
    const controller = new ScrollMagic.Controller()

    // parallax section
    new ScrollMagic.Scene({
      triggerElement: '.wrap-background',
      triggerHook: 1,
      duration: '200%'
    }).setTween('.wrap-background > img', {y: '-40%'})
      .addTo(controller)
  }
}
</script>

<style lang="stylus" scoped>
  .wrap-background
    height 80vh
    max-height 500px
    position relative
    margin-top 5vh
    width 100vw
    overflow hidden
  .background
    max-width 100vw
    top 10vh
    position relative
  .text-background
    position absolute
    z-index 1
    top 0
    height auto
    width 46%
    min-width 500px
    padding 20px
    right 5vw
    top 10vh
    margin auto
    border-radius 3px
    background-color rgba(255, 255, 255, .5)
    font 18px Academic
    text-transform uppercase
    line-height 30px
    letter-spacing: 6px;
    text-transform: uppercase;
    color: #3e3937;
</style>
