<template lang="pug">
  <model class="wrapper_blur" :titleText="'О базе отдыха Уржум'" :class="{'is-call': downcomponent}" #default>
    div.cont
      s1-text-about
      s2-complex
      s3-about-end
  </model>
</template>

<script>
import S1TextAbout from '../sections/about/s1-text-about.vue'
import S2Complex from '../sections/about/s2-complex.vue'
import S3AboutEnd from '../sections/about/s3-about-end.vue'
import Model from '../slots/model'

export default {
  name: 'About',
  metaInfo: {
    title: 'О нас'
  },
  props: ['downcomponent'],
  components: {
    S1TextAbout,
    S2Complex,
    S3AboutEnd,
    Model
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="stylus">
</style>
