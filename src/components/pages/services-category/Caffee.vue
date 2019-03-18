<template lang="pug">
  model(:titleText="'Кафе-Ресторан.Цены'", #default="")
    s1-about-caffee
    s2-offers
</template>

<script>
import Model from '@/components/slots/Model'

import S1AboutCaffee from '@/components/sections/services/caffee-restorant/S1AboutCaffee'
import S2Offers from '@/components/sections/services/caffee-restorant/S2Offers'

export default {
  name: 'caffee',
  metaInfo: {
    title: 'Кафе-ресторан'
  },
  components: {
    Model,
    S1AboutCaffee,
    S2Offers
  }
}
</script>

<style lang="stylus" scoped>
</style>
