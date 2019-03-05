<template lang="pug">
  <model class="wrapper_blur" :class="{'is-call': downcomponent}" :titleText="'Наши контакты'" #default>
    div.cont
      s1-contacts-offers
      s2-map-info
  </model>
</template>

<script>
import Model from '@/components/slots/Model'

import S1ContactsOffers from '@/components/sections/contacts/S1ContactsOffers'
import S2MapInfo from '@/components/sections/contacts/S2MapInfo'

export default {
  name: 'contacts',
  metaInfo: {
    title: 'Контакты'
  },
  props: ['downcomponent'],
  components: {
    S1ContactsOffers, S2MapInfo, Model
  }
}
</script>

<style lang="stylus" scoped>
  .contacts
    padding-top 100px
    min-height 100vh
  .wrap
    display flex
    justify-content space-between
  .block
    background red
    height 200px
    width 200px

</style>
