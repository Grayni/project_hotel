<template lang="pug">
  model(:titleText="'Кафе-Ресторан.Цены'", #default="")
    transition(name="fade" mode="out-in")
    s1-about-caffee
    s2-offers
    s3-price
    s4-gallery(:folder="folder")
</template>

<script>
import Model from '@/components/slots/Model'

import S1AboutCaffee from '@/components/sections/services/caffee-restorant/S1AboutCaffee'
import S2Offers from '@/components/sections/services/caffee-restorant/S2Offers'
import Gallery from '@/components/elements/Gallery'
import S3Price from '@/components/sections/services/caffee-restorant/S3Price'

export default {
  name: 'caffee-restorant',
  head: {
    title: 'Кафе-ресторан',
    meta: [
      { hid: 'description', name: 'description', content: 'Комфортное кафе с приятной обстановкой. Принимаем заявки для проведения праздников и корпоративов. На сайте представлены: меню, цены и фотогалерея.' }
    ]
  },
  components: {
    Model,
    S1AboutCaffee,
    S2Offers,
    S3Price,
    S4Gallery: Gallery
  },
  data () {
    return {
      folder: 'caffee'
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
