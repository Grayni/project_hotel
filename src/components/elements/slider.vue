<template lang="pug">
  div.contain-slider
    swiper.plugin-slider(:options="swiperOption" ref="mySwiper")
      swiper-slide.block( v-for="img in images" :key="'slide-'+img" :data="'slide-'+img")
        .wrap-slide
          img(:src="'/static/slider/slide-'+img+'.jpg'", alt="alt", @click="sendImg(img)")
      .swiper-pagination(slot="pagination")
      .swiper-button-prev(slot="button-prev" @click="swiper.slidePrev()")
      .swiper-button-next(slot="button-next" @click="swiper.slideNext()")
</template>

<script>
import 'swiper/dist/css/swiper.css'
import Shadow from '../apps/drop-shadow.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Slider',
  components: {
    swiper,
    swiperSlide,
    Shadow
  },
  data () {
    return {
      images: [1, 2, 3, 4, 5, 6],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 4,
        waitForTransition: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: true
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  methods: {
    sendImg (e) {
      this.$emit('sendSlide', e)
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    this.swiper.autoplay.start()
  }
}
</script>

<style lang="sass">
.plugin-slider
  padding: 4vh 0 14vh 0
  margin-bottom: 10vh
  width: 80vw
  max-width: 1500px

.block
  .wrap-slide
    display: flex
    width: 100%
    max-height: 300px
    background: #ff8040
    overflow: hidden
    img
      max-width: 40vw
      width: 100%
      height: auto
      object-fit: cover
    &:hover
      cursor: pointer

  .bigLightbox
    width: 100%
    height: 100%
    background: red
    position: absolute
    opacity: 0.5
    border: 1px solid black

.contain-slider
  position: relative
svg
  display: block
  &.spirit
    pointer-events: none
    bottom: 14vh
    z-index: 1000
    left: 0
    right: 0
    position: absolute
    path
      fill: red
    &.top
      z-index: 1000
      bottom: auto
      top: 6vh
      path
        fill: #fff
.swiper-button
  &-prev, &-next
    top: calc(50% - 20px - 3vh)

.swiper-button
  &-next
    background-color: rgba(255,255,255,.3)
    transition: background-color .4s ease
    width: 60px
    height: 60px
    border-radius: 50px
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23FF6C26'%2F%3E%3C%2Fsvg%3E")
    &:hover
      background-color: rgba(255,255,255,.8)
      transition: background-color .4s ease
  &-prev
    @extend .swiper-button-next
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23FF6C26'%2F%3E%3C%2Fsvg%3E")
    &:hover
      @extend .swiper-button-next:hover

.swiper-pagination-bullet
  background-color: #FF6C26

</style>
