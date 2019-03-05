<template lang="pug">
  <model class="wrapper_blur" :titleText="'О базе отдыха Уржум'" :class="{'is-call': downcomponent}" #default>
    div.cont
      s1-text-about
      s2-complex
      s3-about-end
  </model>
</template>

<script>
import Model from '@/components/slots/Model'

import S1TextAbout from '@/components/sections/about/S1TextAbout'
import S2Complex from '@/components/sections/about/S2Complex'
import S3AboutEnd from '@/components/sections/about/S3AboutEnd'

export default {
  name: 'about',
  metaInfo: {
    title: 'О нас'
  },
  props: ['downcomponent'],
  components: {
    S1TextAbout, S2Complex, S3AboutEnd, Model
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="stylus">
</style>
