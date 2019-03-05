<template lang="pug">
  <model class="wrapper_blur" :class="{'is-call': downcomponent}" :titleText="'Гостиничные номера.Цены'" #default>
    s1-about-room
    s2-offers
    s3-rooms-price(@menublur="blurOutButton($event)")
  </model>
</template>

<script>
import Model from '@/components/slots/Model'

import S1AboutRoom from '@/components/sections/services/rooms/S1AboutRooms'
import S2Offers from '@/components/sections/services/rooms/S2Offers'
import S3RoomsPrice from '@/components/sections/services/rooms/S3RoomsPrice'

import BlurOutButton from '@/components/mixins/BlurOutButton'

export default {
  name: 'rooms',
  metaInfo: {
    title: 'Гостиничные номера'
  },
  props: ['downcomponent'],
  components: {
    Model, S1AboutRoom, S2Offers, S3RoomsPrice
  },
  mixins: [BlurOutButton],
  data () {
    return {
      blurFromHTML: false
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
