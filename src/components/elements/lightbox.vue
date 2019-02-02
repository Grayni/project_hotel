<template lang="pug">
  .lightbox(:class="{'status-slide': isActiveSlide, 'smooth-show': smoothShow}")
    .inbox
      .cross(@click="statusLightbox(false)", tabindex="0")
      img.show-slide(:src="'/static/slider/slide-'+slidereturn+'.jpg'", alt="alt")
</template>

<script>
export default {
  name: 'Lightbox',
  props: ['slidereturn'],
  data () {
    return {
      isActiveSlide: false,
      smoothShow: false
    }
  },
  watch: {
    slidereturn () {
      if (!this.slidereturn) {
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

<style lang="sass" scoped>
.lightbox
  width: 100vw
  height: 100vh
  background: rgba(0,0,0,0.95)
  position: fixed
  top: 0
  left: 0
  z-index: 12000
  display: none
  align-items: center
  justify-content: center
  &.status-slide
    display: flex
    opacity: 0
    transition: opacity .5s ease
    &.smooth-show
      opacity: 1
      transition: opacity .5s ease
  .show-slide
    border: 2px solid #fff
    max-width: 900px
    max-height: 90vh
    object-fit: contain
  .cross
    outline: none
    width: 40px
    position: absolute
    right: 9px
    top: 9px
    &:hover
      cursor: pointer
      &:before
        color: #fff
    &:before
      content: '✕'
      display: inline-block
      font-size: 40px
      color: #000
  .inbox
    outline: none
    position: relative
</style>
