<template lang="pug">
  .wrap-background
    slot.background(name="img-background")
    slot.text-left(name="text-left")
    .text-background
      slot(name="text-background")
</template>

<script>
import ScrollMagic from 'scrollmagic'
import 'ScrollMagicGSAP'

import { eventEmitter } from '@/main'

export default {
  name: 's1-about-room',
  data () {
    return {
      widthWindow: window.innerWidth,
      timeline: null,
      controller: null,
      tween: null
    }
  },
  created () {
    eventEmitter.$on('resize', e => {
      this.widthWindow = e
      if (this.widthWindow > 1150) {
        // parallax section
        if (this.controller == null) {
          this.controller = new ScrollMagic.Controller()
        }
        if (this.timeline == null) {
          this.timeline = new ScrollMagic.Scene({
            triggerElement: '.wrap-background',
            triggerHook: 1,
            duration: '200%'
          }).setTween('.wrap-background > img', {y: '-40%'})
            .addTo(this.controller)
        }
      } else {
        this.controller = null
        this.timeline = null
      }
    })
  },
  mounted () {
    if (this.widthWindow > 1150) {
      this.controller = new ScrollMagic.Controller()
      // parallax section
      this.timeline = new ScrollMagic.Scene({
        triggerElement: '.wrap-background',
        triggerHook: 1,
        duration: '200%'
      }).setTween('.wrap-background > img', {y: '-40%'})
        .addTo(this.controller)
    }
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
  .text-background, .text-left
    position absolute
    z-index 1
    height auto
    width 44vw
    min-width 500px
    padding 20px
    right 5vw
    top 10vw
    margin auto
    border-radius 3px
    background-color rgba(255, 255, 255, .5)
    font 18px Academic
    text-transform uppercase
    line-height 30px
    letter-spacing: 6px
    text-transform: uppercase
    color: #3e3937

  .text-left
    left 5vw
    right auto

  @media (max-width: 1280px)
    .text-background, .text-left
      top 5vh
      p
        font-size 14px
    .wrap-background
      max-height none

  @media (max-width: 1150px)
    .wrap-background
      height auto
    .background
      top 0
    .text-background, .text-left
      position static
      padding 10px
      box-sizing border-box
      width 100%
      min-width auto
      top 0
      left 0
      right 0
      p
        line-height 22px
        font-size 12px

</style>
