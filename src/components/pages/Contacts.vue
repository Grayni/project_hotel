<template lang="pug">
  <model class="wrapper_blur" :class="{'is-call': downcomponent}" :titleText="'Наши контакты'" #default>
    div.cont
      s1-contacts-offers
      s2-map-info
  </model>
</template>

<script>
import Model from '../slots/model'

import S1ContactsOffers from '../sections/contacts/s1-contacts-offers'
import S2MapInfo from '../sections/contacts/s2-map-info'

export default {
  name: 'Contacts',
  metaInfo: {
    title: 'Контакты'
  },
  props: ['downcomponent'],
  components: {
    S1ContactsOffers,
    S2MapInfo,
    Model
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
