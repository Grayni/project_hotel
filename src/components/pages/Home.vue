<template lang="pug">
  div
    div(is="s1Home", @scrollValue="getScroll($event)", :downcomponent="downcomponent")
    div(is="s2Quality", :downcomponent="downcomponent" @sendSlide='getSlide($event)')
    div(is="s3Landscape")
    div(is="Lightbox", :slidereturn="numberSlide" @sendCross="getSlide($event)")
</template>

<script>
import s1Home from '../sections/s1-home.vue'
import s2Quality from '../sections/s2-quality.vue'
import s3Landscape from '../sections/s3-landscape.vue'
import Lightbox from '../elements/lightbox.vue'

export default {
  name: 'Home',
  metaInfo: {
    title: 'Главная'
  },
  props: ['downcomponent'],
  components: {
    s1Home,
    s2Quality,
    s3Landscape,
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
</style>
