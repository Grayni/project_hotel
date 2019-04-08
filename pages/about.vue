<template lang="pug">
  model(
    :titleText="'О базе отдыха Уржум'",
    #default=""
  )
    div.cont
      s1-text-about
      s2-complex
      s3-about-end
</template>

<script>
import Model from '@/components/slots/Model'
import S1TextAbout from '@/components/sections/about/S1TextAbout'
import S2Complex from '@/components/sections/about/S2Complex'
import S3AboutEnd from '@/components/sections/about/S3AboutEnd'

export default {
  name: 'about',
  head: {
    title: 'О нас',
    meta: [
      { hid: 'description', name: 'description', content: 'Гостиничный комплекс расположен на Отрясовской горе рядом с рекой Уржумкой и Поклонным крестом. Удивительные пейзажи не оставят Вас равнодушными!' }
    ]
  },
  components: {
    S1TextAbout,
    S2Complex,
    S3AboutEnd,
    Model
  }
}
</script>

<style lang="stylus">
</style>
