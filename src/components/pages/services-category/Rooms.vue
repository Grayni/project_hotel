<template lang="pug">
  <model class="wrapper_blur" :class="{'is-call': downcomponent}" :titleText="'Гостиничные номера.Цены'" #default>
    s1-about-room
    s2-offers
    .price-wrap
      s3-rooms-price(@menublur="blurOutButton($event)")
  </model>
</template>

<script>
import Model from '../../slots/model'
import S1AboutRoom from '../../sections/services/rooms/s1-about-rooms'
import S2Offers from '../../sections/services/rooms/s2-offers'
import S3RoomsPrice from '../../sections/services/rooms/s3-rooms-price'
export default {
  name: 'Rooms',
  metaInfo: {
    title: 'Гостиничные номера'
  },
  props: ['downcomponent'],
  components: {
    Model,
    S1AboutRoom,
    S2Offers,
    S3RoomsPrice
  },
  data () {
    return {
      blurFromHTML: false
    }
  },
  methods: {
    blurOutButton (v) {
      // get out children (button-call)
      this.blurFromHTML = v
      // send up to the parent and change value for contact form. good..
      this.$emit('menublur', this.blurFromHTML)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .price-wrap
    margin 10vh 0
    display flex
    width 100vw
    justify-content center
</style>
