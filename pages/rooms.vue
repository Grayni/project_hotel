<template lang="pug">
  model(:titleText="'Гостиничные номера.Цены'", #default="")
    s1-about-room
    s2-offers
    s3-rooms-price(@listImgPrice="listImgPrice($event)")
</template>

<script>
import Model from '@/components/slots/Model'

import S1AboutRoom from '@/components/sections/services/rooms/S1AboutRooms'
import S2Offers from '@/components/sections/services/rooms/S2Offers'
import S3RoomsPrice from '@/components/sections/services/rooms/S3RoomsPrice'

export default {
  name: 'rooms',
  head: {
    title: 'Гостиничные номера',
    meta: [
      { hid: 'description', name: 'description', content: 'Приятные гостиничные номера со всеми необходимыми удобствами! На странице предствалены цены и фотогалерея на каждый номер.' }
    ]
  },
  components: {
    Model, S1AboutRoom, S2Offers, S3RoomsPrice
  },
  methods: {
    listImgPrice (event) {
      this.$emit('listImgPrice', event)
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
