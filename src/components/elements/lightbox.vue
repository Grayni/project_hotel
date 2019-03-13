<template lang="pug">
  .lightbox
    .inbox
      .cross(@click="statusLightbox(false)", tabindex="0")
      slot.show-slide(name="from-slider", :slide-num="slideNum")
      .arrow
        .wrap.left-wrap
          .side.left(@click="changeSlideDown")
        .wrap.right-wrap
          .side.right(@click="changeSlideUp")
</template>

<script>
export default {
  name: 'lightbox',
  props: ['slidereturn'],
  data () {
    return {
      isActiveSlide: false,
      smoothShow: false,
      slideNum: 0,
      tariffName: ''
    }
  },
  watch: {
    slidereturn () {
      this.slideNum = this.slidereturn[0]
      if (!this.slidereturn[0]) {
        setTimeout(() => {
          this.isActiveSlide = false
        }, 500)
      } else {
        this.isActiveSlide = true
      }
    },
    isActiveSlide () {
      this.appearanceLinght()
    }
  },
  methods: {
    statusLightbox (e) {
      this.smoothShow = false
      setTimeout(() => {
        this.isActiveSlide = e
        this.$emit('sendCross', 0)
      }, 500)
    },
    appearanceLinght () {
      if (this.slidereturn) {
        setTimeout(() => {
          this.smoothShow = true
        }, 200)
      }
    },
    changeSlideUp () {
      (this.slideNum < this.slidereturn[1]) ? this.slideNum++ : this.slideNum = 0
    },
    changeSlideDown () {
      (this.slideNum > 0) ? this.slideNum-- : this.slideNum = this.slidereturn[1]
    }
  },
  mounted () {
    document.body.addEventListener('keyup', e => {
      if (this.isActiveSlide) {
        if (e.keyCode === 27) {
          this.statusLightbox(false)
        }
      }
    })
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
  display none
  align-items center
  justify-content center
  display flex
  opacity 1
  .show-slide
    border 2px solid #fff
    max-width 900px
    max-height 90vh
    object-fit contain
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
</style>
