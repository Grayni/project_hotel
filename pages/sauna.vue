<template lang="pug">
  model(:titleText="'Сауна.Цены'", #default="")
    s1-about-sauna
    s2-offers
    s3-price
    s4-gallery(:folder="folder")
</template>

<script>
import Model from '@/components/slots/Model'

import S1AboutSauna from '@/components/sections/services/sauna/S1AboutSauna'
import S2Offers from '@/components/sections/services/sauna/S2Offers'
import S3Price from '@/components/sections/services/sauna/S3Price'
import Gallery from '@/components/elements/Gallery'

export default {
  name: 'sauna',
  head: {
    title: 'Сауна',
    meta: [
      { hid: 'description', name: 'description', content: 'Два вида саун с комнатами отдыха. В подарок предоставляем чайный сервиз с медом и вареньем. На сайте представлены цены и фотогалерея.' }
    ]
  },
  components: {
    Model,
    S1AboutSauna,
    S2Offers,
    S3Price,
    S4Gallery: Gallery
  },
  data () {
    return {
      folder: 'sauna'
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
