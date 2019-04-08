<template lang="pug">
  div
    .wrap-progress.wrapper_blur(:class="{ 'is-call': blurStatus }")
      h2 Гостиница Уржум
      .progress-container
        .progress-bar(id="bar")
</template>

<script>
import blurStatus from '@/components/mixins/blurStatus'

import { eventEmitter } from '@/plugins/eventEmitter'

export default {
  name: 'progress-bar',
  mixins: [blurStatus],
  data () {
    return {
      tween: null,
      scene: null,
      height: 0,
      scrolled: 0,
      bar: null
    }
  },
  methods: {
    scrollBarDetect (scroll) {
      this.height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      this.scrolled = (scroll / this.height) * 100
      this.bar = document.getElementById('bar')

      if (this.bar) {
        this.bar.style.height = this.scrolled + '%'
      }
    },
    scrollBarShow () {
      this.tween = this.$gsap.TweenMax.fromTo('.wrap-progress', 0.5, { x: '-20px' }, { x: '20px' })

      this.scene = new this.$scrollmagic.Scene({
        triggerElement: this.$refs.menu,
        offset: 300
      }).setTween(this.tween)

      this.$ksvuescr.$emit('addScene', 'scrollBarShow', this.scene)
    }
  },
  created () {
    eventEmitter.$on('scrollable', e => {
      this.scrollBarDetect(e)
    })
  },
  mounted () {
    this.scrollBarShow()
  }
}
</script>

<style lang="stylus" scoped>
.wrap-progress
  position fixed
  top 0
  z-index 2000
  height 100%
  width 1px
  display flex
  align-items center
  justify-content center
  flex-direction column
  h2
    transform rotate(-90deg)
    display inline-block
    white-space nowrap
    font italic 15px Futura
    color #6f5c56

.progress-container
  height 180px
  background #fde2ce
  position relative
  bottom -70px

.progress-bar
  height 0
  background #6f5c56
  width 1px

</style>
