<template lang="pug">
  .home
    s1-home(@scrollValue="getScroll($event)", :downcomponent="downcomponent")
    s2-quality(:downcomponent="downcomponent", @sendSlide='getSlide($event)')
    s3-landscape(:downcomponent="downcomponent")
    S4-conclusion(:downcomponent="downcomponent")
    footer-wrap(:trigger="'.offer__unit-part:nth-child(4)'", :downcomponent="downcomponent")
    light-box(:slidereturn="numberSlide", @sendCross="getSlide($event)", :downcomponent="downcomponent")
</template>

<script>
import S1Home from '../sections/home/s1-home.vue'
import S2Quality from '../sections/home/s2-quality.vue'
import S3Landscape from '../sections/home/s3-landscape.vue'
import S4Conclusion from '../sections/home/s4-conclusion.vue'
import FooterWrap from '../elements/footer-wrap.vue'
import LightBox from '../elements/lightbox.vue'

export default {
  name: 'Home',
  metaInfo: {
    title: 'Главная'
  },
  props: ['downcomponent'],
  components: {
    S1Home,
    S2Quality,
    S3Landscape,
    S4Conclusion,
    FooterWrap,
    LightBox
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
