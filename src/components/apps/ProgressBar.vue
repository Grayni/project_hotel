<template lang="pug">
  div
    .wrap-progress.wrapper_blur(:class="{'is-call': blurStatus}")
      h2 Гостиница Уржум
      .progress-container
        .progress-bar(id="bar")
</template>

<script>
import blurStatus from '@/components/mixins/blurStatus'

import ScrollMagic from 'scrollmagic'
import 'ScrollMagicGSAP'

import {TimelineMax} from 'gsap'

export default {
  name: 'progress-bar',
  mixins: [blurStatus],
  data () {
    return {
      bt: null
    }
  },
  methods: {
    scrollBarDetect () {
      let winScroll = document.body.scrollTop || document.documentElement.scrollTop
      let height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      let scrolled = (winScroll / height) * 100
      document.getElementById('bar').style.height = scrolled + '%'
    },
    scrollBarShow () {
      // eslint-disable-next-line
      this.bt = new TimelineMax()

      const controller = new ScrollMagic.Controller()
      const tween = this.bt.fromTo('.wrap-progress', 0.5, {x: '-20px'}, {x: '20px'})

      const scene = new ScrollMagic.Scene({
        triggerElement: this.$refs.menu
      }).setTween(tween)
        .addTo(controller)

      scene.offset(300)
    }
  },
  beforeMount () {
    window.onscroll = () => this.scrollBarDetect()
  },
  mounted () {
    this.scrollBarShow()
  }
}
</script>

<style lang="sass" scoped>
.wrap-progress
  position: fixed
  top: 0
  z-index: 2000
  width: 2px
  height: 100%
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  h2
    transform: rotate(-90deg)
    display: inline-block
    white-space: nowrap
    font: italic 15px "Futura", Arial, sans-serif
    color: #6f5c56

.progress-container
  width: 1px
  height: 180px
  background: #fde2ce
  position: relative
  bottom: -70px

.progress-bar
  height: 0
  background: #6f5c56
  width: 100%

</style>
