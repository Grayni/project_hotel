<template lang="pug">
  div.contain-slider
    swiper.plugin-slider(:options="swiperOption", ref="mySwiper")
      swiper-slide.block(
        v-for="img of gallery.images",
        :key="'slide-'+img",
        :data-img="img"
      )
        .wrap-slide
          img(
            rel="preload",
            :src="'/static/slider/'+img+'.jpg'",
            :alt="'Слайд-'+img",
            @click="clickOnSlide()",
          )

    .swiper-button-prev(slot="button-prev" @click="swiper.slidePrev()")
    .swiper-button-next(slot="button-next" @click="swiper.slideNext()")
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { eventEmitter } from '@/main'

import DropShadow from '@/components/apps/DropShadow'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'slider',
  components: {
    swiper,
    swiperSlide,
    DropShadow
  },
  data () {
    return {
      gallery: {
        state: true,
        images: ['baptistry', 'bed', 'caffee-table', 'sofa', 'stairs-down', 'stairs-up'],
        folder: 'slider/',
        data: ''
      },
      swiperOption: {
        initialSlide: 1,
        speed: 700,
        loop: true,
        slidesPerView: 3,
        spaceBetween: 4,
        autoplay: {
          delay: 4000,
          waitForTransition: false,
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
    clickOnSlide (e) {
      eventEmitter.$emit('openLightbox', e)
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    let vm = this
    this.swiper.on('click', () => {
      if (this.swiper.clickedSlide) {
        this.gallery.data = this.swiper.clickedSlide.getAttribute('data-img')
        vm.clickOnSlide(this.gallery)
      }
    })
    this.swiper.autoplay.start()
  }
}
</script>

<style lang="sass">
.plugin-slider
  width: 80vw
  max-width: 1500px
  margin: 60px 0 0 0
  overflow-y: visible!important
  overflow-x: hidden!important
  min-height: 400px
  display: inline-block
.block
  .wrap-slide
    display: flex
    width: 100%
    max-height: 300px
    overflow: hidden
    border: 1px solid #fedfc0
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

.swiper-wrapper
  min-height: 420px

.swiper-button
  &-prev, &-next
    top: calc(50% + 3.4vw)

  &-next
    transition: background-color .4s ease
    background-size: 20px 20px
    z-index: 30
    right: -14px
    left: auto
    &:before
      content: ''
      outline: none
      display: flexr
      width: 40px
      height: 40px
      border-radius: 100%
      background: rgb(111, 92, 86)
      background-position: 7px 7px
      background-size: 26px 25px
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23fedfc0'%2F%3E%3C%2Fsvg%3E")
      background-repeat: no-repeat
      animation: zoom-navigation 1s infinite linear alternate
      position: absolute
      top: 50%
      left: 50%
      margin-top: -20px
      margin-left: -20px
      z-index: -1
    &:after
      content: ''
      outline: none
      display: block
      width: 60px
      height: 60px
      border-radius: 100%
      border: 1px solid rgb(111, 92, 86)
      animation: zoom-navigation 1s infinite linear alternate
      position: absolute
      top: 50%
      margin-top: -31px
      left: 50%
      margin-left: -31px

    &:hover
      &:before
        // transition: background-color .4s ease
        background-color: rgba(111, 92, 86,.7)
      &:after
        border-color: rgba(111, 92, 86,.7)
  &-prev
    @extend .swiper-button-next
    left: -14px
    &:before
      @extend .swiper-button-next:before
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23fedfc0'%2F%3E%3C%2Fsvg%3E")

    &:hover
      @extend .swiper-button-next:hover

.swiper-pagination-bullet
  background-color: #FF6C26

.swiper-button-prev, .swiper-button-next
  background-image: none !important

@keyframes zoom-navigation
  0%
    transform: scale(1)
  100%
    transform: scale(1.1)
</style>
