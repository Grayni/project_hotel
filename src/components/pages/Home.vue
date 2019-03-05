<template lang="pug">
  .home
    s1-home(@scrollValue="getScroll($event)", :downcomponent="downcomponent")
    s2-quality(:downcomponent="downcomponent", @sendSlide='getSlide($event)')
    s3-advantage(:downcomponent="downcomponent")
    S4-conclusion(:downcomponent="downcomponent")
    footer-wrap(:trigger="'.offer__unit-part:nth-child(4)'", :downcomponent="downcomponent")
    light-box(:slidereturn="numberSlide", @sendCross="getSlide($event)", :downcomponent="downcomponent")
</template>

<script>
import S1Home from '@/components/sections/home/S1Home'
import S2Quality from '@/components/sections/home/S2Quality'
import S3Advantage from '@/components/sections/home/S3Advantage'
import S4Conclusion from '@/components/sections/home/S4Conclusion'
import FooterWrap from '@/components/elements/FooterWrap'
import LightBox from '@/components/elements/Lightbox'

export default {
  name: 'home',
  metaInfo: {
    title: 'Главная'
  },
  props: ['downcomponent'],
  components: {
    S1Home, S2Quality, S3Advantage, S4Conclusion, FooterWrap, LightBox
  },
  data () {
    return {
      numberSlide: 0
    }
  },
  methods: {
    getScroll (u) {
      this.$emit('scrollValue', u)
    },
    getSlide (u) {
      this.numberSlide = u
    }
  }
}
</script>

<style lang="sass" scoped>
  .home
    background: #f1eee9
    overflow: hidden
</style>
