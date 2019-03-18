<template lang="pug">
  model(:titleText="'Сауна.Цены'", #default="")
    s1-about-sauna
    s2-offers
</template>

<script>
import Model from '@/components/slots/Model'

import S1AboutSauna from '@/components/sections/services/sauna/S1AboutSauna'
import S2Offers from '@/components/sections/services/sauna/S2Offers'

export default {
  name: 'sauna',
  metaInfo: {
    title: 'Сауна'
  },
  components: {
    Model,
    S1AboutSauna,
    S2Offers
  }
}
</script>

<style lang="stylus" scoped>

</style>
