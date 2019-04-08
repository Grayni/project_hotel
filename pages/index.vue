<template lang="pug">
  .home
    s1-home(@scrollValue="getScroll($event)")
    s2-quality(:class="{ 'is-call': blurStatus }", @sendSlide="getSlide($event)")
    s3-advantage(:class="{ 'is-call': blurStatus }")
    S4-conclusion(:class="{ 'is-call': blurStatus }")
    footer-wrap(trigger=".offer__unit-part:nth-child(4)")
</template>

<script>
import S1Home from '@/components/sections/home/S1Home'
import S2Quality from '@/components/sections/home/S2Quality'
import S3Advantage from '@/components/sections/home/S3Advantage'
import S4Conclusion from '@/components/sections/home/S4Conclusion'
import FooterWrap from '@/components/elements/FooterWrap'

import blurStatus from '@/components/mixins/blurStatus'

export default {
  name: 'home',
  head: {
    title: 'Главная',
    meta: [
      { hid: 'description', name: 'description', content: 'Гостиничный комплекс Уржум с номерами, кафе и саунами. Мы всегда радушно относимся к нашим посетителям и уделяем особое внимание к качеству обслуживания.' },
      { name: 'yandex-verification', content: '6307c77dcfb71591' }
    ]
  },
  mixins: [blurStatus],
  components: {
    S1Home, S2Quality, S3Advantage, S4Conclusion, FooterWrap
  },
  data () {
    return {
      numberSlide: 0,
      timeLine: null
    }
  },
  methods: {
    getScroll (u) {
      this.$emit('scrollValue', u)
    },
    getSlide (u) {
      this.numberSlide = u
    }
  },
  mounted () {
    this.timeLine = new this.$gsap.TimelineMax()
    this.timeLine.fromTo(['section', 'svg', 'img', 'p'], 1.2, { autoAlpha: 0 }, { autoAlpha: 1 })
    this.timeLine.to('.home', 0.8, { opacity: 1 })
  }
}
</script>

<style lang="stylus" scoped>
  .home
    background #f1eee9
    overflow hidden
    opacity 0
    &.is-call
      animation none
</style>
