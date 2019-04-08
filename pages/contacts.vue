<template lang="pug">
  model(class="wrapper_blur", :titleText="'Наши контакты'", #default="")
    div.cont
      s1-contacts-offers
      s2-map-info
</template>

<script>
import Model from '@/components/slots/Model'

import S1ContactsOffers from '@/components/sections/contacts/S1ContactsOffers'
import S2MapInfo from '@/components/sections/contacts/S2MapInfo'

export default {
  name: 'contacts',
  head: {
    title: 'Контакты',
    meta: [
      { hid: 'description', name: 'description', content: 'Чтобы с нами связаться закажите обратный звонок. Гостиничный комплекс находится на Отрясовской горе рядом с рекой Уржумка.' }
    ]
  },
  components: {
    Model, S1ContactsOffers, S2MapInfo
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
