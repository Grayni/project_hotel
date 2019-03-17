<template lang="pug">
  .price-wrap
    .rooms-price
      card(
        v-for="(room, index) in rooms",
        :key="'room-'+index",
        :id="room.id",
        :price="room.price",
        :icons="room.icons"
      )

        template(#img-start="")
          img.img(
            :src="'/static/'+gallery.folder+room.images[0]+'.jpg'",
            @click="showLightbox(room.images[0], room.images)"
          )

        template(#name-room="")
          div {{ room['name-room'] }}

        template(#bed-size="")
          div {{ room['bed-size'] }}

        template(#icon="{ icon }")
          img(
            :src="'/static/icons-rooms/'+icon[0]+'.png'",
            :alt="icon[1]", :title="icon[1]",
            width="25",
            height="25"
          )

        template(#picking="")
          div {{ room.picking }}

        template(#price="{ tariff }")
          span {{ tariff }} ₽/сут

        template(#booking="props")
          button(name="booking") Забронировать
</template>

<script>
import Card from '@/components/slots/Card'
import rooms from '@/json/rooms.json'

import { eventEmitter } from '@/main'

export default {
  name: 's3-rooms-price',
  components: {
    Card
  },
  data () {
    return {
      gallery: {
        folder: 'test-img/'
      },
      rooms: rooms
    }
  },
  methods: {
    showLightbox (data, images) {
      eventEmitter.$emit('openLightbox',
        Object.assign(this.gallery, { data, images })
      )
    }
  }
}
</script>

<style lang='stylus'>
  .price-wrap
    margin 10vh 0
    display flex
    width 100vw
    justify-content center
  .rooms-price
    display flex
    justify-content center
    flex-wrap wrap
    width 90vw

</style>
