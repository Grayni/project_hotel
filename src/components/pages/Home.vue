<template lang="pug">
  .home
    div(is="S1Home", @scrollValue="getScroll($event)", :downcomponent="downcomponent")
    div(is="S2Quality", :downcomponent="downcomponent" @sendSlide='getSlide($event)')
    div(is="S3Landscape")
    div(is="S4Conclusion")
    div(is="FooterWrap", :trigger="'.offer__unit-part:nth-child(4)'")
    div(is="Lightbox", :slidereturn="numberSlide" @sendCross="getSlide($event)")
</template>

<script>
import S1Home from '../sections/home/s1-home.vue'
import S2Quality from '../sections/home/s2-quality.vue'
import S3Landscape from '../sections/home/s3-landscape.vue'
import S4Conclusion from '../sections/home/s4-conclusion.vue'
import FooterWrap from '../elements/footer-wrap.vue'
import Lightbox from '../elements/lightbox.vue'

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
    Lightbox
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
