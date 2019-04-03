<template lang="pug">
  .lightbox
    .inbox
      .cross(@click="clickOnCross")
      div(@click="changeSlideUp()")
        slot.show-slide(name="from-slider")
      .arrow
        .wrap.left-wrap(@click="changeSlideDown()")
          .side.left
        .wrap.right-wrap(@click="changeSlideUp()")
          .side.right
</template>

<script>
import { eventEmitter } from '@/main'

export default {
  name: 'lightbox',
  props: ['data-lightbox'],
  methods: {
    changeSlideUp () {
      const obj = this.dataLightbox

      if (obj.images) {
        (obj.images.indexOf(obj.data) < obj.images.length - 1)
          ? this.$emit('changeSlide', obj.images[obj.images.indexOf(obj.data) + 1])
          : this.$emit('changeSlide', obj.images[0])
      }
    },
    changeSlideDown () {
      const obj = this.dataLightbox

      if (obj.images) {
        (obj.images.indexOf(obj.data) > 0)
          ? this.$emit('changeSlide', obj.images[obj.images.indexOf(obj.data) - 1])
          : this.$emit('changeSlide', obj.images[obj.images.length - 1])
      }
    },
    clickOnCross () {
      eventEmitter.$emit('closeLightbox')
    }
  }
}
</script>

<style lang="stylus" scoped>
.lightbox
  width 100vw
  height 100vh
  background rgba(0,0,0,0.95)
  position fixed
  top 0
  left 0
  z-index 12000
  align-items center
  justify-content center
  display flex
  .cross
    outline none
    width 40px
    position absolute
    right 9px
    top 9px
    &:hover
      cursor pointer
      &:before
        color #fff
    &:before
      content '✕'
      display inline-block
      font-size 40px
      color #000
  .inbox
    outline none
    position relative
  .arrow
    position absolute
    top calc(50% - 35px)
    z-index 10
    width 100%
    height 0
    display flex
    justify-content space-between
  .wrap
    width 70px
    height 70px
    overflow hidden
    position relative
    &.right-wrap
      left 20px
    &.left-wrap
      right 20px
  .side
    width 100%
    height 100%
    border 5px solid #fff
    transform rotate(45deg)
    position relative
    &:hover
      cursor pointer
      border-color #ffd9bd
      transition border-color 0.5s ease-out
    &.left
      left 70%
    &.right
      right 70%
.show-slide
  border 2px solid #fff
  max-width 900px
  max-height 90vh
  object-fit contain

@media all and (orientation:portrait)
  .show-slide
    max-width 90vw
</style>
