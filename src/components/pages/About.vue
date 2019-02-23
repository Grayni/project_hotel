<template lang="pug">
  .about-hotel
    div(is="s1-about-text")
    div(is="s2-complex")
    div(is="s3-about-end")
    .foot-wrap(is="foot-wrap", :trigger="'.foot-wrap'")
</template>

<script>
import S1AboutText from '../sections/about/s1-text-about.vue'
import S2Complex from '../sections/about/s2-complex.vue'
import S3AboutEnd from '../sections/about/s3-about-end.vue'
import FootWrap from '../elements/footer-wrap.vue'
export default {
  name: 'About',
  components: {
    S1AboutText,
    S2Complex,
    S3AboutEnd,
    FootWrap
  },
  metaInfo: {
    title: 'О нас'
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="stylus">
  .about-hotel
    background #f1eee9
    min-height 100vh
    padding-top 100px
  .foot-wrap
    position absolute
    bottom 0
    footer
      background: -moz-linear-gradient(top,  rgba(241,238,233,0) 0%, rgba(241,238,233,1) 82%, rgba(241,238,233,1) 100%)
      background: -webkit-linear-gradient(top,  rgba(241,238,233,0) 0%,rgba(241,238,233,1) 82%,rgba(241,238,233,1) 100%)
      background: linear-gradient(to bottom,  rgba(241,238,233,0) 0%,rgba(241,238,233,1) 82%,rgba(241,238,233,1) 100%)

</style>
