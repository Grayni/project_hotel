<template lang="pug">
  div
    swiper.plugin-slider(:options="swiperOption" ref="mySwiper")
      swiper-slide.block( v-for="img in images" :key="'slide-'+img" :data="'slide-'+img")
        .wrap-slide
          img(:src="'/static/slider/slide-'+img+'.jpg'", alt="alt" @click="sendImg(img)")

      .swiper-pagination(slot="pagination")
      .swiper-button-prev(slot="button-prev" @click="swiper.slidePrev()")
      .swiper-button-next(slot="button-next" @click="swiper.slideNext()")
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Slider',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      images: [1, 2, 3, 4, 5, 6],
      swiperOption: {
        loopedSlides: 6,
        touchEventsTarget: 'wrapper',
        autoplay: {
          delay: 4000,
          disableOnInteraction: false
        },
        speed: 800,
        keyboard: { enabled: true },
        navigation: {
          nextE1: '.swiper-button-next',
          prevE1: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination'
        },
        zoom: {
          maxRatio: 15
        },
        spaceBetween: 16,
        effect: 'coverflow',
        coverflowEffect: {
          rotate: 30,
          slideShadows: false
        },
        slidesPerView: 3,
        simulateTouch: true
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

<style lang="sass" scoped>
.plugin-slider
  padding: 4vh 0 14vh 0
  margin-bottom: 10vh
  max-width: 1500px

.block
  .wrap-slide
    display: flex
    width: 100%
    max-height: 400px
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

</style>
