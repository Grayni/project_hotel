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
            :src='"~/assets/images/"+folder+"thumbnails/"+room.id+".jpg"',
            @click="showLightbox(room.id, room.images[0], room.images)"
          )

        template(#name-room="")
          div {{ room['name-room'] }}

        template(#bed-size="")
          div {{ room['bed-size'] }}

        template(#icon="{ icon }")
          img(
            :src='"~/assets/images/services/rooms/icons-rooms/"+icon[0]+".png"',
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
import rooms from '@/assets/json/rooms.json'

import ShowBlock from '@/components/mixins/ShowBlock'
import { eventEmitter } from '@/plugins/eventEmitter'

export default {
  name: 's3-rooms-price',
  mixins: [ShowBlock],
  components: {
    Card
  },
  data () {
    return {
      gallery: {
        folder: ''
      },
      rooms,
      folder: 'services/rooms/gallery/',
      element: '.rooms-price'
    }
  },
  methods: {
    showLightbox (way, data, images) {
      this.gallery.folder = this.folder + way + '/'
      eventEmitter.$emit('openLightbox',
        Object.assign({}, this.gallery, { data, images })
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
  @media (max-width: 820px)
    .rooms-price
      width 100vw
</style>
